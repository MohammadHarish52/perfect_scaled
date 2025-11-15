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
  <div className="bg-white p-4 sm:p-5 md:p-6 shadow-sm font-sans rounded-xl sm:rounded-2xl h-auto min-h-[150px] sm:min-h-[160px] md:min-h-[173px] w-full max-w-[265px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-md">
    <div className="flex items-center text-emerald-500 mb-2">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
      <span className="text-sm sm:text-base md:text-[17px] font-medium">
        {title}
      </span>
    </div>
    <div className="text-2xl sm:text-3xl md:text-[34px] font-bold mb-2 leading-tight">
      {value}
    </div>
    <div className="flex justify-between items-center gap-2">
      <span className="text-black font-normal text-xs sm:text-sm md:text-[15px] leading-tight">
        {title === "Savings" ? "All time Savings" : `${title} Change`}
      </span>
      <div className="flex items-center flex-shrink-0">
        {changeType === "negative" ? (
          <ArrowDownIcon className="w-3 h-3 mr-1 text-red-500" />
        ) : (
          <ArrowUpIcon className="w-3 h-3 mr-1 text-emerald-500" />
        )}
        <span className="bg-black min-w-[50px] sm:min-w-[59px] h-[24px] sm:h-[26px] text-xs sm:text-sm text-white px-2 py-1 rounded-full flex items-center justify-center">
          {change}
        </span>
      </div>
    </div>
  </div>
);

export default StatCard;
