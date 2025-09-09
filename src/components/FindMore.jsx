"use client";
import React from "react";
import {
  Target,
  ShieldCheck,
  Eye,
  Mail,
  Award,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

const FindMore = () => {
  console.log("", motion);

  const items = [
    {
      title: "أهداف الشركة",
      icon: <Target className="w-8 h-8 text-primary" />,
      desc: "نسعى لتحقيق الريادة في مجالنا عبر توفير حلول مبتكرة تلبي احتياجات عملائنا.",
    },
    {
      title: "سياسة الجودة و الأمان",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      desc: "نلتزم بأعلى معايير الجودة والسلامة في كل خدماتنا ومنتجاتنا.",
    },
    {
      title: "رؤية الشركة",
      icon: <Eye className="w-8 h-8 text-primary" />,
      desc: "أن نكون الخيار الأول لعملائنا محليًا وإقليميًا في مجالنا.",
    },
    {
      title: "رسالة الشركة",
      icon: <Mail className="w-8 h-8 text-primary" />,
      desc: "تقديم خدمات استثنائية ترتكز على الابتكار، الثقة، والشفافية.",
    },
    {
      title: "إنجازات الشركة",
      icon: <Award className="w-8 h-8 text-primary" />,
      desc: "حققنا العديد من النجاحات التي عززت من مكانتنا في السوق.",
    },
    {
      title: "قيم الشركة",
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      desc: "النزاهة – الابتكار – العمل الجماعي – الالتزام – خدمة العملاء.",
    },
  ];

  return (
    <div
      id="FindMore"
      className="py-8 bg-gray-50 items-center flex flex-col  justify-center  w-full overflow-hidden  "
    >
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
      >
        <div className=" text-center ">
          <h1 className="font-tajawal text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            عن الشركة
          </h1>
          <div className="w-20 h-[2px] bg-[#ffba00] mx-auto"></div>
        </div>
        <p className="text-[#e0a800] max-w-80 mb-8 mt-6  text-xl mx-auto">
          شغوفون بالعقارات ... ملتزمون برؤيتك
        </p>

        <div className="px-6 md:px-20 lg:px-32 w-full">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl shadow-sm hover:shadow-md transition bg-white flex flex-col items-center text-center space-y-4"
              >
                {item.icon}
                <h3 className="text-primary text-lg font-bold underline font-cairo">
                  {item.title}
                </h3>
                <p className="font-tajawal text-gray-600 text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FindMore;
