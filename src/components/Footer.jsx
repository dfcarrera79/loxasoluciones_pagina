import { TailcastLogo } from "../assets/logos/TailcastLogo";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
                <div className="text-white mr-2 text-6xl">
                  <TailcastLogo />
                </div>
                <div className="text-white font-['Inter'] font-bold text-xl">
                  LoxaSoluciones
                </div>
              </div>
              <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
              Expertos en desarrollo de software para potenciar tu empresa. 
              ¡Descubre el éxito ahora! 
              </p>

            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-col flex-wrap justify-between">
              <div className="flex flex-row items-end justify-between pb-12">
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0 flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                  </svg>
                  <h3 className="mb-6 text-2xl font-bold text-white">Equipo</h3>
                  <h3 className="text-gray-400 hover:text-gray-300"> Marco Vinicio Abendaño Moreno </h3>
                </div>
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0 flex flex-col items-center text-center">
                  <a href="mailto:marcovinab@gmail.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                    </button>
                  </a>  
                  <h3 className="mb-6 text-2xl font-bold text-white">
                    Email
                  </h3>
                  <h3 className="text-gray-400 hover:text-gray-300"> marcovinab@gmail.com </h3>
                </div>

                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0 flex flex-col items-center text-center">
                  <a href="https://wa.me/593981516201" target="_blank" rel="noopener noreferrer">
                    <button className="btn">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                    </button>
                  </a>
                  <h3 className="mb-6 text-2xl font-bold text-white">
                    Móvil
                  </h3>
                  <h3 className="text-gray-400 hover:text-gray-300"> 0981516201 </h3>
                </div>
              </div>
              <div className="flex flex-row items-end justify-between">
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0 flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                  </svg>
                  <h3 className="mb-6 text-2xl font-bold text-white">Equipo</h3>
                  <h3 className="text-gray-400 hover:text-gray-300"> Diego Fernando Carrera Moreno</h3>
                </div>
                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0 flex flex-col items-center text-center">
                  <a href="mailto:dfcarrera@outlook.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                      </svg>
                    </button>
                  </a>  
                  <h3 className="mb-6 text-2xl font-bold text-white">
                    Email
                  </h3>
                  <h3 className="text-gray-400 hover:text-gray-300"> dfcarrera@outlook.com </h3>
                </div>

                <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0 flex flex-col items-center text-center">
                  <a href="https://wa.me/593986704083" target="_blank" rel="noopener noreferrer">
                    <button className="btn">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                      </svg>
                    </button>
                  </a>
                  <h3 className="mb-6 text-2xl font-bold text-white">
                    Móvil
                  </h3>
                  <h3 className="text-gray-400 hover:text-gray-300"> 0986704083 </h3>
                </div>
              </div>
            </div>
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            &copy; 2022. MIT license.
          </p>
        </div>
      </div>
    </footer>
  );
};
