export const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex justify-center items-center md:scale-150 ">
      <div className="animate-spin rounded-full h-12 w-12 md:h-32 md:w-32 border-t-2 border-b-2 border-teal-500"></div>
      <p className="text-base md:text-lg text-gray-400 ml-4">Cargando tareas...</p>
    </div>
  );
};
