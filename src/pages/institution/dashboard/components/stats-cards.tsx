import CurrentTokenCard from "./card/current-token-card";
import TotalTokensCard from "./card/total-token-card";
import WaitTimeCard from "./card/wait-time-card";

const StatsCards = () => (
  <div className="grid md:grid-cols-3 gap-6">
    <TotalTokensCard />
    <CurrentTokenCard />
    <WaitTimeCard />
  </div>
);

export default StatsCards;
