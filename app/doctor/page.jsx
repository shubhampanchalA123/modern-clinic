"use client";

import Image from "next/image";
import { FaCheckCircle, FaGraduationCap, FaAward } from "react-icons/fa";
import { MdOutlineMedicalServices, MdVideoLibrary, MdSelfImprovement  } from "react-icons/md";
import { GiStethoscope } from "react-icons/gi";
import VideoReels from "@/components/VideoReels";

export default function DoctorProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16">
      <main className="max-w-7xl mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Doctor Image */}
          <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/doctor1.png"
              alt="Dr. Devendra Rathore"
              fill
              className="object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div>
            <h1 className="text-4xl font-bold">Dr. Devendra Rathore</h1>
            <p className="text-gray-600 mt-2 text-lg">
              Hair & Wellness Expert • Root-Cause Hair Fall Specialist
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              With years of experience treating complex hair fall cases using a 
              holistic and medically guided approach, Dr. Rathore focuses on 
              long-term, natural, and root-cause based recovery combining 
              Homeopathy, Nutrition, and Lifestyle Medicine.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                5000+ Patients Treated
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                10+ Years Experience
              </span>
            </div>
          </div>

        </div>

        {/* QUALIFICATIONS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Qualifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              { icon: <FaGraduationCap size={28} />, text: "BHMS - Bachelor of Homeopathic Medicine" },
              { icon: <MdOutlineMedicalServices size={28} />, text: "Certified Hair Restoration & Wellness Specialist" },
              { icon: <FaAward size={28} />, text: "Holistic Health & Lifestyle Medicine Training" }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <div className="text-indigo-600 mb-3">{item.icon}</div>
                <p className="font-medium text-gray-700">{item.text}</p>
              </div>
            ))}

          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>

          <div className="space-y-6 border-l-2 border-indigo-300 pl-6">
            {[
              { year: "2012 - 2015", text: "Worked with leading homeopathic clinics treating chronic hair fall conditions." },
              { year: "2016 - 2019", text: "Specialized in nutrition science & metabolic health for hair restoration." },
              { year: "2020 - Present", text: "Founded an advanced root-cause hair treatment program integrating Homeopathy + Nutrition + Lifestyle medicine." }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-1 w-3 h-3 bg-indigo-500 rounded-full"></div>
                <h4 className="font-semibold text-indigo-600">{item.year}</h4>
                <p className="text-gray-700 mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Holistic Treatment Approach</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GiStethoscope size={32} />,
                title: "Homeopathic Diagnosis",
                desc: "Identifying internal triggers like hormones, stress & metabolism."
              },
              {
                icon: <FaCheckCircle size={32} />,
                title: "Nutrition Optimization",
                desc: "Improving scalp nourishment & correcting deficiencies."
              },
              {
                icon: <MdSelfImprovement size={32} />,
                title: "Stress & Lifestyle Healing",
                desc: "Balancing cortisol, improving sleep & restoring hair growth cycles."
              }
            ].map((step, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all">
                <div className="text-emerald-500 mb-3">{step.icon}</div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VIDEO SECTION */}
        {/* <section className="mt-20">
          <h2 className="text-3xl font-bold mb-4">Doctor Videos</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "https://www.youtube.com/embed/i68ljuyMjbk",
              "https://www.youtube.com/embed/8k-CD4lztEM",
              "https://www.youtube.com/embed/U1-4SOKMxJs"
            ].map((url, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg bg-black">
                <iframe
                  src={url}
                  className="w-full h-56"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            ))}

          </div>
        </section> */}
        <VideoReels/>

        {/* SUCCESS STORIES */}
        <section className="mt-20 mb-20">
          <h2 className="text-3xl font-bold mb-6">Patient Success Stories</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Ritika S.",
                quote: "After years of trying products, Dr. Rathore identified my root cause. Real regrowth started in 8 weeks!"
              },
              {
                name: "Karan M.",
                quote: "His holistic approach helped me fix stress, sleep & nutrition — my hair fall reduced by 80%."
              },
              {
                name: "Simran K.",
                quote: "The 3-step program was life-changing. My scalp health improved drastically."
              }
            ].map((t, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all">
                <p className="italic text-gray-700">“{t.quote}”</p>
                <p className="mt-3 font-semibold text-indigo-600">{t.name}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
