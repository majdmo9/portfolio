import { INFO } from "@/utils/constants";
import React from "react";
import Img from "./general/Img";

const Info = () => {
  return (
    <div className="flex flex-col justify-start lg:items-start items-center gap-2">
      {INFO.map(el => el)}
      <p className="font-medium text-lg">NAZARETH, ISRAEL ZIP CODE 1695500</p>
    </div>
  );
};

export default Info;
