import { ArrowDownIcon, ArrowUpIcon, LucideIcon } from "lucide-react";

const StatCard = ({
  icon: Icon,
  title,
  value,
  change,
  changeType,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
}) => (
  <div className="bg-white p-6 shadow-sm font-sans rounded-[12px] h-[173px] w-[265px] flex flex-col justify-between">
    <div className="flex items-center text-emerald-500 mb-1">
      <Icon className="w-4 h-4 mr-1" />
      <span className="text-[17px] font-normal">{title}</span>
    </div>
    <div className="text-xl font-bold mb-2 text-[34px]">{value}</div>
    <div className="flex justify-between items-center">
      <span className="text-black font-normal text-[17px]">
        {title === "Savings" ? "All time Savings" : `${title} Change`}
      </span>
      <div className="flex items-center">
        {changeType === "negative" ? (
          <ArrowDownIcon size={17} className="w-3 h-3 mr-1 text-red-500 " />
        ) : (
          <ArrowUpIcon size={17} className="w-3 h-3 mr-1 text-emerald-500 " />
        )}
        <span className="bg-black w-[59px] h-[26px] text-base leading-[16px] text-white px-2 py-1 rounded-full flex items-center justify-center">
          {change}
        </span>
      </div>
    </div>
  </div>
);

export default StatCard;
