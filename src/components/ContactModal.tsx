import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { CloseOutlined } from "@ant-design/icons";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"" | "sending">("");

  const SERVICE_ID = "service_feoncjl";
  const TEMPLATE_ID = "template_w1hd0l7";
  const PUBLIC_KEY = "cgJ22qoO8Wb0fJC33";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Honeypot spam protection: check hidden field
    const formData = new FormData(formRef.current);
    if (formData.get("phone_number")) return; // honeypot filled → likely bot

    setStatus("sending");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

      toast.success("Message sent successfully! 🎉", {
        duration: 3000,
        style: { background: "#0a192f", color: "#64ffda" },
      });

      formRef.current.reset();
      setTimeout(onClose, 1600);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Try again later.", {
        duration: 3000,
        style: { background: "#0a192f", color: "#FF5555" },
      });
    } finally {
      setStatus("");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-gray-950 bg-opacity-60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            exit={{ opacity: 0 }}
            onClick={()=> onClose()}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            <div className="w-full max-w-md bg-[#112240] rounded-xl p-6 border border-[#64ffda]/20 shadow-xl relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-[#64ffda] text-xl transition-colors"
              >
                <CloseOutlined />
              </button>

              <h2 className="text-xl font-semibold text-[#64ffda] mb-4 text-center">Contact Me</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="bg-[#0a192f] text-gray-200 placeholder-gray-400 p-3 rounded-md border border-[#64ffda]/20 focus:outline-none"
                  required
                />

                <input
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  className="bg-[#0a192f] text-gray-200 placeholder-gray-400 p-3 rounded-md border border-[#64ffda]/20 focus:outline-none"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  className="bg-[#0a192f] text-gray-200 placeholder-gray-400 p-3 rounded-md border border-[#64ffda]/20 focus:outline-none"
                  required
                />

                {/* Honeypot field: invisible to users */}
                <input
                  type="text"
                  name="phone_number"
                  className="hidden"
                  autoComplete="off"
                  tabIndex={-1}
                />

                <div className="w-full flex justify-center gap-4">
                  <button
                    type="reset"
                    disabled={status === "sending"}
                    className={`flex-1 mt-2 py-2 rounded-md font-medium transition ${
                      status === "sending"
                        ? "bg-gray-500 text-gray-800 cursor-not-allowed"
                        : "bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90"
                    }`}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`flex-1 mt-2 py-2 rounded-md font-medium transition ${
                      status === "sending"
                        ? "bg-gray-500 text-gray-800 cursor-not-allowed"
                        : "bg-[#64ffda] text-[#0a192f] hover:bg-[#64ffda]/90"
                    }`}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
