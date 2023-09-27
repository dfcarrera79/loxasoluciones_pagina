import { useState } from "react";
import { motion } from "framer-motion";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Ventas",
  "Compras",
  "Bodega",
  "Cuentas por cobrar",
  "Proveedores",
  "Anexos SRI",
  "Retenciones",
  "Reportes gerenciales",
  "Soporte para facturación electrónica"
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  const handleWhatsAppClick = (plan, version) => {
    let textoPersonalizado
    if (version) {
      textoPersonalizado = encodeURIComponent(`¡Hola! Quiero solicitar información del plan: ${plan}, versión desktop`);
    } else {
      textoPersonalizado = encodeURIComponent(`¡Hola! Quiero solicitar información del plan: ${plan}, versión web`);
    }
  
    // Reemplaza el número de teléfono a continuación con el número al que deseas enviar el mensaje en WhatsApp.
    const numeroTelefono = '593981516201';
  
    // Crea el enlace de WhatsApp con el texto personalizado y el número de teléfono.
    const whatsappURL = `https://wa.me/${numeroTelefono}?text=${textoPersonalizado}`;
    console.log('[whatsappURL]: ', whatsappURL);
  
    // Abre el enlace en una nueva ventana o pestaña.
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                Encuentra el plan que se adapta a ti
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Escoge un plan
              </h2>
              <p className="mb-6 text-customGrayText">
              Selecciona el plan que se adapta a tus necesidades
              </p>
              <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                <input
                  type="checkbox"
                  className="peer appearance-none"
                  checked={!isMonthly}
                  onChange={handleChange}
                />
                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                <div className="flex absolute text-white text-sm font-bold">
                  <div className={isMonthly ? "mr-9 ml-3" : "mr-9 ml-3 text-gray-400"}>
                    Versión Web
                  </div>
                  <div className={isMonthly ? '' : 'text-gray-400'}>Versión Desktop</div>
                </div>
              </label>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">

              {isMonthly ? (
                <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                  <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Facturación Electrónica
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    $80
                    </div>
                    <div className="text-gray-500">
                      / año más IVA
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Sistema SAGE VICTORIA ERP que incluye:
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
       
                    {isMonthly && (
                      <li className="mb-4 flex">
                        <CheckArrowIcon />
                        <span>APP móvil</span>
                      </li>
                    )}
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Facturación electrónica ilimitada</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Notificación al email del cliente/proveedor</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Ventas</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Gastos</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Resportes</span>
                    </li>
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => handleWhatsAppClick('Facturación Electrónica', false)}   
                  >
                    Solicitar
                  </div>
                </div>
                </div>
              ) : null}      

              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Gestión Administrativa
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                    {!isMonthly ? "$500" : "$220"}
                    </div>
                    <div className="text-gray-500">
                      {!isMonthly ? "Un solo pago más IVA" : "/ año más IVA"}
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Sistema SAGE VICTORIA ERP que incluye:
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {isMonthly && (
                      <li className="mb-4 flex">
                        <CheckArrowIcon />
                        <span>APP móvil</span>
                      </li>
                    )}
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => handleWhatsAppClick('Gestión Administrativa', !isMonthly)}
                  >
                    Solicitar
                  </div>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    Contabilidad
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {!isMonthly ? "$800" : "$320"}
                    </div>
                    <div className="text-gray-500">
                      {!isMonthly ? "Un solo pago más IVA" : "/ año más IVA"}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    Sistema SAGE VICTORIA ERP que incluye:
                  </p>
                  <ul className="mb-14 text-white">
                    {isMonthly && (
                      <li className="mb-4 flex">
                        <CheckArrowIcon />
                        <span>APP móvil</span>
                      </li>
                    )}
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Módulo de Contabilidad</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Módulo de Rol de Pagos</span>
                    </li>
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                    {isMonthly && (
                      <li className="mb-4 flex">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                          <g id="SVGRepo_iconCarrier"> <path d="M12 4V20M18 6L6 18M20 12H4M18 18L6 6" stroke="#4F7BCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                        </svg>
                        <span>Módulo Opcional de Costos de Produccióon por $100 adicionales más IVA</span>
                      </li>
                    )}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-20"
                    onClick={() => handleWhatsAppClick('Contabilidad', !isMonthly)}
                  >
                    Solicitar
                  </div>
                </div>
              </div>
              {!isMonthly ? (<div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    Costos de Producción
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {!isMonthly ? "$1400" : "$420"}
                    </div>
                    <div className="text-gray-500">
                      {!isMonthly ? "Un solo pago más IVA" : "/ año más IVA"}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Sistema SAGE VICTORIA ERP que incluye:
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Módulo de Costos de Producción</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Módulo de Rol de Pagos</span>
                    </li>
                    <li className="mb-4 flex">
                      <CheckArrowIcon />
                      <span>Módulo de Contabilidad</span>
                    </li>
                    {pricingData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-16"
                    onClick={() => handleWhatsAppClick('Costos de Producción', !isMonthly)}
                  >
                    Solicitar
                  </div>
                </div>
              </div>) : null}    
            </div>
          </div>
        </motion.div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};
