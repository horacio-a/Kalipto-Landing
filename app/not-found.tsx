import Header from "@/components/header";

function NotFoundPage() {
  return (
    <>
      <Header />
      <div
        className="w-[100%] flex flex-col"
        style={{ backgroundColor: "#E2E9CA" }}
      >
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <h1 className="text-[#214E40] text-3xl max-lg:text-2xl font-bold text-center p-2">
            No hay nada en esta pagina
          </h1>
          <h2 className="text-[#214E40] text-xl max-lg:text-xl m-4 font-semibold text-center p-2">
            Tendrias que volver al inicio
          </h2>
          <a
            className="bg-[#214E40] text-xl px-8 py-4 rounded-lg m-4 font-semibold text-center"
            href="/"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
