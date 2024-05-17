import MainContent from "@/components/MainContent";
import StatWidget from "@/components/widgets/StatWidget";
import staffAnalytics from "@/data/statWidget";

const Analytics = () => {
  return (
    <MainContent>
      <h1 className="text-white text-3xl neue-regular font-bold">Dashboard</h1>
      <div
        className={`grid grid-cols-1  ${
          staffAnalytics.length === 2 ? "custom-grid-md-2" : "custom-grid-md-3"
        } gap-6 md:gap-5 mt-4`}
      >
        {staffAnalytics.map((staffAnalytics) => (
          <StatWidget {...staffAnalytics} />
        ))}
      </div>
      <div
        className="
        drop-shadow-sm flex-1 bg-[var(--transparent-white)] p-4 w-full rounded-sm"
      >
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-white text-2xl">Coming Soon</p>
        </div>
      </div>
    </MainContent>
  );
};

export default Analytics;
