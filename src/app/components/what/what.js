import { Inter } from "./inter";
import { WebDev, Design } from "./info";

const What = () => {
  return (
    <div className="relative min-h-screen px-16  text-white-me bg-[rgb(var(--background-main-color-dark))] z-10 ">
      <section className="flex">
        <h2 className="flex-1">WHAT I DO.</h2>
        <p className="p-12 flex-1">
          Me dedico a hacer de todo campeon, vos pedi y yo te lo hago. cualquier
          cosa lo vemo y si queres tambien vemos of.
        </p>
      </section>
      {/* 2ND SECTION */}
      <div className="flex flex-col gap-20 ">
        <section
          className="h-48  sticky top-0 mb-44 bg-[rgb(var(--background-main-color-dark))]"
          style={{ top: "calc(20vh + 0vh)" }}
        >
          <Inter data={WebDev} />
        </section>
        <section
          className="h-48 sticky top-0 mb-24 bg-[rgb(var(--background-main-color-dark))]"
          style={{ top: "calc(20vh + 12vh)" }}
        >
          <Inter data={Design} />
        </section>
        <section
          className="h-48 sticky bg-[rgb(var(--background-main-color-dark))]"
          style={{ top: "calc(20vh + 24vh)" }}
        >
          <Inter data={WebDev} />
        </section>
      </div>
      <div className=" h-44"></div>
    </div>
  );
};

export default What;
