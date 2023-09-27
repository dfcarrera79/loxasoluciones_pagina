import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "¿Tienen tutoriales en video para aprender a usar SAGE VICTORIA ERP?",
    answer: `Puedes encontrar tutoriales detallados en nuestro canal de YouTube. Visita <a href='https://www.youtube.com/@MarcoVinicioAbendanoMoreno/featured' target='_blank' className="text-blue-500 hover:text-blue-700">LoxaSoluciones Agencia Interactiva</a> para acceder a una amplia variedad de videos que te guiarán en el uso efectivo de SAGE VICTORIA ERP.`,
  },
  {
    question: "¿Cómo configurar el archivo de firma electrónica en el sistema SAGE?",
    answer:
    `Visita el siguiente enlace <a href='https://www.youtube.com/watch?v=TRhGpBojhHc' target='_blank' className="text-blue-500 hover:text-blue-700">Firma Electrónica</a> para configurar el archivo de firma electrónia en el sistema SAGE VICTORIA ERP y poder empezar a facturar.`,
  },
  {
    question: "¿Cómo crear un producto en el sitema SAGE?",
    answer:
    `Visita el siguiente enlace <a href='https://www.youtube.com/watch?v=GEkXZw_1mxI' target='_blank' className="text-blue-500 hover:text-blue-700">Crear Producto o Servicio</a>.`,
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">
            ¿Tienes preguntas?
          </p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Preguntas frecuentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1" key={index}>
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  // Crear una función para renderizar el contenido HTML de manera segura
  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        {/* Utiliza dangerouslySetInnerHTML para renderizar el contenido HTML */}
        <div
          dangerouslySetInnerHTML={renderHTML(content)}
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        />
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="rgb(76, 119, 197)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};

