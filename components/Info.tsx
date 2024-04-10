import { INFO } from "@/utils/constants";

const Info = () => {
  return (
    <div className="flex flex-col justify-start lg:items-start items-center gap-2">
      {INFO.map(el => el)}
      <p className="font-medium text-lg">NAZARETH, ISRAEL ZIP CODE 1613101</p>
    </div>
  );
};

export default Info;
