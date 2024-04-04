import { INFO } from "@/utils/constants";
import React from "react";
import Img from "./general/Img";

const Info = () => {
  return (
    <div className="flex flex-col justify-start lg:items-start items-center gap-2">
      {INFO.map(el => (
        <div key={el.title} className="flex justify-start items-center gap-2">
          <Img alt="info-icon" width={16} height={16} src={el.iconPath} />
          <p className="font-medium text-lg">{el.title}</p>
        </div>
      ))}
      <p className="font-medium text-lg">NAZARETH, ISRAEL ZIP CODE 1695500</p>
    </div>
  );
};

export default Info;
