"use client";

export function Inter({ data }) {
  return (
    <>
      <div className=" flex-1">
        <h3>{data.h3}</h3>
      </div>
      <div className="flex-1 what-p-subtitle flex-row flex">
        <div className="flex-1 p-12">
          <p>{data.p}</p>
        </div>
        <div className="flex-1 p-12">
          <h4>{data.h41}</h4>
          <h4>{data.h42}</h4>
          <h4>{data.h43}</h4>
        </div>
      </div>
    </>
  );
}
