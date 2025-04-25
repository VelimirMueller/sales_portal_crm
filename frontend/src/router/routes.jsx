import { Routes, Route } from "react-router";
import Dashboard from '../app/Dashboard.jsx';
import Calendar from "../app/Calendar.jsx";
import Leads from "../app/Leads.jsx";
import Inbox from "../app/Inbox.jsx";

function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route index element={<Dashboard />} />

      <Route path="dashboard" element={<Dashboard />} />

      <Route path="calendar">
        <Route index element={<Calendar />} />
        <Route path="calendar" element={<Calendar />} />
      </Route>

      <Route path="leads">
        <Route index element={<Leads />} />
        <Route path="leads" element={<Leads />} />
      </Route>

      <Route path="inbox">
        <Route index element={<Inbox />} />
        <Route path="inbox" element={<Inbox />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;