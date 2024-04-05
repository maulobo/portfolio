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
      <div className="flex-1 ">3</div>
    </div>
  );
};
export default Hero;
