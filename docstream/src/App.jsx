import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import FindCompany from "./pages/CompanyDetails";
import "./App.css";
import RequestVehicle from "./pages/RequestVehicle";
import WithinRequest from "./pages/WithInRequest";
import OutOfTown from "./pages/OutOfTown";
import InventoryForm from "./pages/InventoryForm";
import Request from "./pages/Request";
import StaffManagement from "./pages/StaffManagement";
import AddStaff from "./components/AddStaff";
import StaffEdit from "./components/StaffEdit";
import ActivityLog from "./pages/ActivityLog";
import SupervisorDashboard from "./pages/Supervisor";
import SupervisorRequestDetails from "./pages/supervisorRequestDetails";
import AddFacility from "./pages/AddFacility";
import EditDriverVehicleInfo from "./pages/EditDriverVehicleInfo";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<AddStaff />} />

              {/* Other routes */}
              <Route path="/find-company" element={<FindCompany />} />
              <Route path="/request-vehicle" element={<RequestVehicle />} />
              <Route path="/request-vehicle/within" element={<WithinRequest />} />
              <Route path="/request-vehicle/out-of-town" element={<OutOfTown />} />
              <Route path="/inventory-form" element={<InventoryForm />} />
              <Route path="/request-items" element={<Request />} />
              <Route path="/staff-management" element={<StaffManagement />} />
              <Route path="/staff-management/add" element={<AddStaff />} />
              <Route path="/staff-management/edit/:id" element={<StaffEdit />} />
              <Route path="/activity-log" element={<ActivityLog />} />
              <Route path="/supervisor" element={<SupervisorDashboard />} />
              <Route path="/supervisor/request/:id" element={<SupervisorRequestDetails />} />
              <Route path="/add-facility" element={<AddFacility />} />
              <Route path="/edit-driver-vehicle-info" element={<EditDriverVehicleInfo />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
