import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminSideBar from "./AdminSideBar";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="d-flex w-100 ">
        <div>
         <AdminSideBar />   
        </div>
        <div className="w-100 ps-2 ">
          <AdminNavbar />
          {children}
          </div>
      </div>
    </div>
  );
};
export default AdminLayout;
