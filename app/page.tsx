"use client";
import { ComparisonSection } from "@/components/component/comparison-section";
import Header from "@/components/header";
import localFont from "@next/font/local";
import Footer from "@/components/Footer";

import { Events, scroller, Element } from "react-scroll";

const biko = localFont({
  src: [
    {
      path: "../public/font/Biko_Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-biko",
});

export default function Home() {
  const scrollTo = (name: string) => {
    let goToContainer = new Promise<void>((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  };
  return (
    <>
      <Header />
      <div
        className="w-[100%] flex flex-col"
        style={{ backgroundColor: "#E2E9CA" }}
      >
        <div className="h-[100vh]    flex  justify-center items-center">
          <div className="xl:w-[50vw] xl:h-[40vh]  mt-[10vh]  h-[90vh] w-[80vw] flex justify-center max-xl:items-center flex-col xl:pl-[10%]">
            <h1
              className={`${biko.className} max-md:text-4xl  max-lg:text-5xl text-7xl text-[#214E40]  font-semibold mb-4 max-xl:w-[50vw] max-md:w-[80vw]`}
            >
              kalipto velas
            </h1>
            <div className="font-sans text-black text-3xl max-lg:text-2xl  max-md:text-xl font-semibold  mb-12 lg:w-[50vw] max-xl:w-[40vw] max-md:w-[80vw]">
              Modulo 1: Introducción
            </div>
            <div className="w-[40vw] max-md:w-[80vw] flex justify-center items-center flex-col xl:hidden">
              <img
                src="/imgs/coverImg.webp"
                alt=""
                className="aspect-video w-[50vw] max-md:w-[80vw] object-cover rounded-lg border border-[#C9C9C9]	"
              />
            </div>
            <div className="text-[#454444] lg:w-[50vw] w-[35vw] max-md:w-[80vw] max-lg:text-base text-lg text-balance max-xl:my-12 ">
              Queres hacer tus propias velas de soja en casa? convertite es una
              autentica artesana y aprende junto conmigo todas las tecnicas y
              secretos para realizar tus propias velas. Tus velas serán
              auténticas obras de arte hechas a mano con dedicación. ¡Inscríbete
              ya y deja volar tu pasión creativa!
            </div>
            <div className="w-[20vw]  flex justify-around mt-4  max-xl:w-[50vw] max-md:w-[80vw]">
              <div
                onClick={() => {
                  scrollTo("compra");
                }}
                className="text-center bg-[#214E40] rounded-lg xl:px-6 py-3 max-xl:w-[47.5%] cursor-pointer "
              >
                Comprar
              </div>
              <div
                onClick={() => {
                  scrollTo("info");
                }}
                className="text-center border-2 border-[#214E40] text-[#214E40] rounded-lg xl:px-6 py-3 max-xl:w-[47.5%] cursor-pointer whitespace-nowrap"
              >
                Mas información
              </div>
            </div>
          </div>
          <div className="w-[50vw]  flex justify-center items-center flex-col max-xl:hidden">
            <img
              src="/imgs/coverImg.webp"
              alt=""
              className="aspect-square w-[25vw] h-[25vw] object-cover rounded-lg border border-[#C9C9C9]	"
            />
          </div>
        </div>
        <Element
          name="info"
          className="h-[100vh] max-md:h-[150vh] lg:mt-[10vh] max-lg:h-[115vh] max-lg:flex-col flex justify-center items-center"
        >
          <div className="w-[50%] max-lg:w-[80%] flex flex-col justify-center items-center max-lg:mt-14">
            <img
              src="/imgs/image4.webp"
              className="aspect-video	w-[60%] max-md:w-[100%]  rounded-lg"
              alt=""
            />
            <div className="w-[60%] max-md:w-[100%] text-black text-center font-semibold text-xl mt-3 ">
              El comienzo y los materiales
            </div>
            <div className="w-[60%] max-md:w-[100%] text-[#454444] text-center mt-3">
              Descubre todos los materiales e ingredientes esenciales para crear
              velas de soja artesanales. En este curso online, conocerás a fondo
              las diferentes ceras , los tipos de pabilos, los aromas y
              pigmentos naturales 100% vegetales. Aprenderás a seleccionar y
              combinar los ingredientes como un verdadero artesano velero.
            </div>
          </div>
          <div className="w-[50%]  max-md:w-[80%] max-lg:w-[80%] flex flex-col justify-center items-center max-lg:mt-14">
            <img
              src="/imgs/image3.webp"
              className="aspect-video	w-[60%] max-md:w-[100%] rounded-lg"
              alt=""
            />
            <div className="w-[60%]  max-md:w-[100%] text-black text-center font-semibold text-xl mt-3 whitespace-nowrap">
              Conceptos básicos y el procesos
            </div>
            <div className="w-[60%] max-md:w-[100%] text-[#454444] text-center mt-3">
              Domina los conceptos básicos y técnicas fundamentales del proceso
              de elaboración. Explicaremos los puntos de fusión, las
              temperaturas óptimas, las proporciones exactas de cada ingrediente
              y las técnicas de vertido en distintos moldes y recipientes. Serás
              una experta en los conocimientos clave desde el principio.
            </div>
          </div>
        </Element>
        <div className="h-[100vh] max-md:h-[150vh] max-lg:h-[115vh] max-lg:flex-col flex justify-center items-center">
          <div className="w-[50%] max-lg:w-[80%] flex flex-col justify-center items-center max-lg:mt-14">
            <img
              src="/imgs/image5.webp"
              className="aspect-video max-md:w-[100%]	w-[60%] rounded-lg"
              alt=""
            />
            <div className="w-[60%] max-md:w-[100%] text-black text-center font-semibold text-xl mt-3">
              Calidad
            </div>
            <div className="w-[60%] max-md:w-[100%] text-[#454444] text-center mt-3">
              ¿Cómo lograr velas perfectamente sólidas sin grietas ni
              imperfecciones? En esta clase aprenderás los secretos del enfriado
              gradual y los tiempos de reposo necesarios según el tamaño.
              Controla la temperatura con nuestra guía detallada para resultados
              impecables.
            </div>
          </div>
          <div className="w-[50%] max-lg:w-[80%] flex flex-col justify-center items-center max-lg:mt-14">
            <img
              src="/imgs/image1.webp"
              className="aspect-video	w-[60%] max-md:w-[100%] rounded-lg"
              alt=""
            />
            <div className="w-[60%] max-md:w-[100%] text-black text-center font-semibold text-xl mt-3">
              Personalización
            </div>
            <div className="w-[60%] max-md:w-[100%] text-[#454444] text-center mt-3">
              Dale un toque único y personalizado a tus velas con fragancias y
              colores naturales. Mezcla aceites esenciales para crear aromas
              irresistibles y tiñe tus creaciones con vibrantes pigmentos
              vegetales. Deja volar tu creatividad para velas totalmente
              personalizadas.
            </div>
          </div>
        </div>
        <ComparisonSection />
        <Element name="compra" className="h-[100vh] flex flex-col  ">
          <div className="flex h-[95vh]  justify-center items-center">
            <div className="w-[50vw] max-md:w-[80vw] flex  justify-center items-center flex-col max-lg:hidden ">
              <img
                src="/imgs/coverImg.webp"
                alt=""
                className="aspect-square w-[25vw] h-[25vw] object-cover rounded-lg border border-[#C9C9C9]	"
              />
            </div>
            <div className="w-[50vw] max-md:w-[80vw]  md:pr-[10%]  h-[40vh] flex justify-center max-md:items-center lg:items-end flex-col ">
              <div
                className={`${biko.className}  max-md:text-4xl  max-lg:text-5xl text-7xl text-[#214E40]  font-semibold mb-4  max-md:w-[80vw]`}
              >
                kalipto velas
              </div>
              <div className="font-sans text-black text-3xl max-lg:text-2xl  max-md:text-xl font-semibold  mb-12  max-md:w-[80vw]">
                Modulo 1: Introducción
              </div>

              <div className="flex  mb-12 max-md:w-[80vw]">
                <div
                  className={` ${biko.className} text-[#7B7B76] line-through	 text-3xl mr-4`}
                >
                  10.000$
                </div>
                <div className={` ${biko.className} text-black text-5xl`}>
                  5.500$
                </div>
              </div>

              <div className="w-[50vw] max-md:w-[80vw] flex justify-center items-center flex-col lg:hidden">
                <img
                  src="/imgs/coverImg.webp"
                  alt=""
                  className="aspect-video w-[50vw] max-md:w-[80vw] object-cover rounded-lg border border-[#C9C9C9]	"
                />
              </div>
              <div className="w-[20vw] max-lg:w-[50vw] max-md:w-[80vw]  flex justify-around max-lg:mt-12">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=542995707116&text=Hola+Kalipto.%0AQuiero+realizar+el+curso+online+modulo+1.&type=phone_number&app_absent=0"
                  className="w-[100%] text-center flex justify-center items-center bg-[#25D366] rounded-lg px-6 py-3 cursor-pointer"
                >
                  <img
                    className="h-[28px] mr-3 "
                    src="/imgs/whatsapp.webp"
                    alt=""
                  />
                  <div className="text-lg">Comprar</div>
                </a>
              </div>
            </div>
          </div>

          <Footer />
        </Element>
      </div>
    </>
  );
}
