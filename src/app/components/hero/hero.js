import HeroTitle from "./title";

const Hero = () => {
  return (
    <div className="bg-[rgb(var(--background-main-color-light))] h-screen flex flex-col px-16">
      <div className="flex-1  ">
        <div className="py-4 flex justify-between">
          <h4>Mauro Lobo</h4>
          <h4 className="font-bold"> [contact]</h4>
        </div>
      </div>
      <div className="flex-1  flex items-center justify-center">
        <HeroTitle />
      </div>
      <div className="flex-1 flex  justify-center items-end pb-20">
        <p className="flex-1  ">
          "Ayudo a las marcas a desarrollar su identidad creando sitios web
          inmersivos y únicos."
        </p>
        <p className="flex-1"></p>
      </div>
    </div>
  );
};
export default Hero;
