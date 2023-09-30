import { motion } from "framer-motion";

import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";
import testimonial4 from "../assets/images/testimonial4.png";

const testimonialsData = [
  {
    title: "Desarrollo de Software Empresarial",
    content:
      "Creamos soluciones de software a medida que se ajustan a los      requisitos únicos de tu empresa y mejoran tus procesos internos.",
    image: testimonial1,
  },
  {
    title: "Desarrollo de Sitios Web a Medida",
    content:
      "Crearnos sitios web personalizados y atractivos que se adaptan a tus necesidades y ayudan a promover tu marca en línea.",
    image: testimonial2,
  },
  {
    title: "Desarrollo de Aplicaciones Móviles",
    content:
      "Desarrollamos aplicaciones móviles innovadoras y altamente funcionales para impulsar tu negocio en el dinámico mercado digital actual.",
    image: testimonial3,
  },
  {
    title: "Estrategias de Transformación Digital",
    content:
      "Diseñamos estrategias integrales para impulsar tu transformación digital, permitiéndote adaptarte rápidamente a las nuevas tecnologías.",
    image: testimonial4,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Desarrolo de Software
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Servicios que ofrecemos
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="text-2xl text-customPrimary text-center py-8 font-bold">
                {testimonial.title}
              </div>
              <div className="custom-content-text-white text-center">
                {testimonial.content}
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4 justify-center">
                <img src={testimonial.image} alt="" width="220px" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
