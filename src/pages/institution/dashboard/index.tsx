import Header from "./components/header";
import StatsCards from "./components/stats-cards";
import QueueTable from "./components/table/queue-table";

const InstitutionDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <Header />
      <StatsCards />
      <QueueTable />
    </div>
  );
};

export default InstitutionDashboard;
