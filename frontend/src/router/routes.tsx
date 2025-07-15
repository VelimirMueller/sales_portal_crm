import { Routes, Route } from "react-router";
import DashboardPage from '../pages/DashboardPage';
import CalendarPage from "../pages/CalendarPage";
import LeadsPage from "../pages/LeadsPage";
import InboxPage from "../pages/InboxPage";

function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route index element={<DashboardPage />} />

      <Route path="dashboard" element={<DashboardPage />} />

      <Route path="calendar">
        <Route index element={<CalendarPage />} />
        <Route path="calendar" element={<CalendarPage />} />
      </Route>

      <Route path="leads">
        <Route index element={<LeadsPage />} />
        <Route path="leads" element={<LeadsPage />} />
      </Route>

      <Route path="inbox">
        <Route index element={<InboxPage />} />
        <Route path="inbox" element={<InboxPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;