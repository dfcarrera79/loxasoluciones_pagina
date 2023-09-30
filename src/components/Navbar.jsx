import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { Arrow } from "../assets/logos/Arrow.jsx"

const navbarLinks = [
  { label: "Inicio", href: "#home", ariaLabel: "Home" },
  { label: "Servicios", href: "#feedback", ariaLabel: "Feedback" },
];

const dropdownItems = [
  { label: "Servidor Loxa", href: "http://www.loxasoluciones-cloud.com:9595/sage/", ariaLabel: "Opción 1" },
  { label: "Servidor Pro", href: "http://186.5.31.161:9595/sage/", ariaLabel: "Opción 2" },
  { label: "Servidor Pin", href: "http://www.loxasoluciones-cloud1.com:9595/sage/", ariaLabel: "Opción 3" },
  { label: "Servidor Cif", href: "http://181.39.106.50:9595/sage/", ariaLabel: "Opción 4" },
];

const dropdownItemsMovil = [
  { label: "Clientes WebApp - LoxaSoluciones", href: "https://www.loxasoluciones-cloud.com:3000/", ariaLabel: "Opción 1" },
  { label: "APROMED S.A.S.", href: "https://www.apromedfarmaloja-cloud.com:3002/", ariaLabel: "Opción 2" },
  { label: "LOJAMED Distribuidores Médicos", href: "https://www.lojamedloja-cloud.com:3001/", ariaLabel: "Opción 3" },
];

const dropdownItemsTransportes = [
  { label: "SageVictoria Socios", href: "https://www.loxasoluciones-cloud.com:3008/", ariaLabel: "Opción 1" },
  { label: "Reportes Terminal de Guayaquil", href: "http://www.loxasoluciones-cloud1.com:8080/static/fundacion/index.html", ariaLabel: "Opción 2" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenERP, setIsOpenERP] = useState(false);
  const [isOpenMovil, setIsOpenMovil] = useState(false);
  const [isOpenTransportes, setIsOpenTransportes] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-column justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl" >
                <TailcastLogo />
              </div>
              <div className="text-white font-['Inter'] font-bold text-xl">
                LoxaSoluciones
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pl-12 pb-2 align-baseline">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a className="navbar-link" href={href} aria-label={ariaLabel} key={label}>
                {label}
              </a>
            ))}
            
            <div className="relative inline-block text-left group">
              <button
                type="button"
                className="navbar-link focus:outline-none"
                onMouseEnter={() => setIsOpenERP(true)}
                onMouseLeave={() => setIsOpenERP(false)}
                style={{ display: "inline-flex" }}
              >
                SAGEVictoria ERP
              </button>
              <AnimatePresence>
                {isOpenERP && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onMouseEnter={() => setIsOpenERP(true)}
                    onMouseLeave={() => setIsOpenERP(false)}
                  >
                    <div className="py-2">
                      {dropdownItems.map(({ label, href, ariaLabel }) => (
                        <a
                          target="_blank"
                          key={href}
                          href={href}
                          onClick={() => setIsOpenERP(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-semibold"
                          aria-label={ariaLabel}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative inline-block text-left group">
              <button
                type="button"
                className="navbar-link focus:outline-none"
                onMouseEnter={() => setIsOpenMovil(true)}
                onMouseLeave={() => setIsOpenMovil(false)}
              >
                SAGEVictoria Móvil 
              </button>
              <AnimatePresence>
                {isOpenMovil && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onMouseEnter={() => setIsOpenMovil(true)}
                    onMouseLeave={() => setIsOpenMovil(false)}
                  >
                    <div className="py-2">
                      {dropdownItemsMovil.map(({ label, href, ariaLabel }) => (
                        <a
                          target="_blank"
                          key={href}
                          href={href}
                          onClick={() => setIsOpenMovil(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-semibold"
                          aria-label={ariaLabel}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative inline-block text-left group">
              <button
                type="button"
                className="navbar-link focus:outline-none"
                onMouseEnter={() => setIsOpenTransportes(true)}
                onMouseLeave={() => setIsOpenTransportes(false)}
              >
                SAGEVictoria Transportes 
              </button>
              <AnimatePresence>
                {isOpenTransportes && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onMouseEnter={() => setIsOpenTransportes(true)}
                    onMouseLeave={() => setIsOpenTransportes(false)}
                  >
                    <div className="py-2">
                      {dropdownItemsTransportes.map(({ label, href, ariaLabel }) => (
                        <a
                          target="_blank"
                          key={href}
                          href={href}
                          onClick={() => setIsOpenTransportes(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 font-semibold"
                          aria-label={ariaLabel}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a target="_blank" className="navbar-link text-center" href="https://www.loxasoluciones-cloud.com:8081/" aria-label="comprobantes">
            Comprobantes Electrónicos
              </a>
      
          </div>

        </motion.div>
              
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}              
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
       {/* Mobile navbar */}
       <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10"
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  target="_blank"
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}


              <button
                type="button"
                className="navbar-link focus:outline-none"
                onClick={() => setIsOpenERP(!isOpenERP)}
                style={{ display: "inline-flex" }}
              >
                <span className="mr-2.5">SAGEVictoria ERP</span> <span className={`pt-1 ${!isOpenERP ? '' : 'rotate-[270deg]'}`}><Arrow/></span>      
              </button>
              {isOpenERP && (
                <div style={{ marginLeft: '20px' }}>
                  {dropdownItems.map(({ label, href, ariaLabel }) => (
                    <a
                      target="_blank"
                      key={href}
                      href={href}
                      onClick={() => setIsOpenERP(false)}
                      className="block px-4 py-2 text-md text-slate-50 hover:bg-gray-100 hover:text-gray-900"
                      aria-label={ariaLabel}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}  


              <button
                type="button"
                className="navbar-link focus:outline-none"
                onClick={() => setIsOpenMovil(!isOpenMovil)}
                style={{ display: "inline-flex" }}
              >
                <span className="mr-2.5">SAGEVictoria Móvil</span> <span className={`pt-1 ${!isOpenMovil ? '' : 'rotate-[270deg]'}`}><Arrow/></span>  
              </button>
              {isOpenMovil && (
                <div style={{ marginLeft: '20px' }}>
                  {dropdownItemsMovil.map(({ label, href, ariaLabel }) => (
                    <a
                      target="_blank"
                      key={href}
                      href={href}
                      onClick={() => setIsOpenMovil(false)}
                      className="block px-4 py-2 text-md text-slate-50 hover:bg-gray-100 hover:text-gray-900"
                      aria-label={ariaLabel}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}

              <button
                type="button"
                className="navbar-link focus:outline-none"
                onClick={() => setIsOpenTransportes(!isOpenTransportes)}
                style={{ display: "inline-flex" }}
              >
                <span className="mr-2.5">SAGEVictoria Transportes</span> <span className={`pt-1 ${!isOpenTransportes ? '' : 'rotate-[270deg]'}`}><Arrow/></span>
              </button>
              {isOpenTransportes && (
                <div style={{ marginLeft: '20px' }}>
                  {dropdownItemsTransportes.map(({ label, href, ariaLabel }) => (
                    <a
                      target="_blank"
                      key={href}
                      href={href}
                      onClick={() => setIsOpenTransportes(false)}
                      className="block px-4 py-2 text-md text-slate-50 hover:bg-gray-100 hover:text-gray-900"
                      aria-label={ariaLabel}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}    

<a
                  target="_blank"
                  className="navbar-link"
                  href="https://www.loxasoluciones-cloud.com:8081/"
                  onClick={() => setIsOpen(false)}
                  aria-label="comprobantes"
                >
                  Comprobantes Electrónicos
                </a>

            </div>


              
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

