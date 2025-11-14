interface EducationDataType {
    degree: string;
    duration: string;
    institute: string;
    university: string;
    score: string;
}

const educationData: EducationDataType[] = [
    {
        degree: "Master of Computer Applications (MCA)",
        duration: "2022 — 2024",
        institute: "K. K. Wagh Institute of Engineering Education & Research, Nashik",
        university: "Savitribai Phule Pune University",
        score: "8.63 / 10 CGPA",
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        duration: "2019 — 2022",
        institute: "Zulal Bhilajirao Patil College, Dhule",
        university: "North Maharashtra University",
        score: "85.71% / 9.71 CGPA",
    },
    {
        degree: "HSC - Science (XIIth)",
        duration: "2018 — 2019",
        institute: "SSVPS's Dr. P. R. Ghogrey Science College, Dhule",
        university: "Maharashtra State Board",
        score: "57.85%",
    },
    {
        degree: "SSC (Xth)",
        duration: "2016 — 2017",
        institute: "H. S. Borse Highschool, Kapadane, Dhule",
        university: "Maharashtra State Board",
        score: "84.60%",
    },
];

export default function Education(): React.ReactElement {
    return (
        <section id="education" className="min-h-screen bg-[#0a192f] text-gray-200 pt-10 px-5 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#64ffda] mb-10 pt-10">
                Education
            </h2>

            <div className="relative border-l-2 border-[#64ffda] ml-4 md:ml-10">
                {educationData.map((edu: EducationDataType, index: number) => (
                    <div key={index} className="mb-12 ml-6">
                        <span className="absolute -left-3 top-1 w-6 h-6 bg-[#64ffda] rounded-full"></span>

                        <div className="bg-[#112240] p-5 md:p-6 rounded-xl shadow-lg hover:shadow-[#64ffda]/20 transition duration-300">
                            <h3 className="text-xl md:text-2xl font-semibold">{edu.degree}</h3>
                            <p className="text-sm md:text-base text-[#64ffda] mt-1 font-medium">{edu.duration}</p>

                            <p className="text-base mt-3">{edu.institute}</p>
                            <p className="text-sm text-gray-400">{edu.university}</p>

                            <p className="mt-2 text-lg font-semibold text-gray-300">{edu.score}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}