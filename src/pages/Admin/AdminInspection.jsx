import AdminLayout from "../../components/Admin components/AdminLayout";
import { inspections } from "../../mockData/inspectionHistory";
import "../../styles/Admin Styles/AdminInspection.css";
import home from "../../assets/images/home.png";
import Vector from "../../assets/images/Vector.png";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from '../../components/Loading'
import { useGlobalContext } from "../../Hooks/useGlobalContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminInspection = () => {
  const {Base_Url} = useGlobalContext()
  const [isLoading, setIsLoading] = useState(true);
  const [inspections, setInspections] = useState([]);
  const token = localStorage.getItem('token');

  const getInspections = async () => {
    try {
      const {data} = await axios(`${Base_Url}/inspection`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(data);
      setInspections(data.inspections)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.err)
    }
  }

  useEffect(() => {
    getInspections();
  })
  return (
    <div>
      <ToastContainer />
      <AdminLayout>
        <div className="topsec">
          <div className="d-flex gap-4 justify-content-start  justify-content-md-between align-items-center pe-2 inpectionHome my-2">
            <h4>Inspection History</h4>
            <div className="d-flex align-items-center gap-1">
              <GoHome />
              <Link>Home</Link> / <Link>Inspection History</Link>
            </div>
          </div>
          <h5>Scheduled Inspections</h5>
        </div>
        <hr />
        <div>
          <p className="dots fw-bold">
            <span>
              <img src={Vector} alt="" className="me-2" />
            </span>
            History
          </p>
        </div>

        <div className="table-responsive-md">
          <table className="table">
            <thead>
              <tr
                className=" table-custom-blue"
                
              >
                <th scope="col">#</th>
                <th scope="col">Customer</th>
                <th scope="col">Emails</th>
                <th scope="col">Location</th>
                <th scope="col">Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading && inspections.length < 1 && (
                <h1 className="text-center fw-light mt-3 fs-4 fw-bold text-secondary">
                  No Inspection Booked Yet
                </h1>
              )}
              {isLoading ? (
                <Loading />
              ) : (
                inspections.map((i, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row"> {index + 1} </th>
                      <td className="data1">
                        {" "}
                        <p className="fw-bold mb-0">
                          {" "}
                          {i.firstName} {i.lastName}{" "}
                        </p>{" "}
                        <p className="my-0 fw-light ">{i.phoneNumber} </p>{" "}
                      </td>
                      <td className="fw-bold"> {i.email} </td>
                      <td className="fw-bold"> {i.location} </td>
                      <td>
                        {" "}
                        <p className="fw-bold mb-0">
                          {new Date(i.inspectionDate).toDateString()}
                        </p>
                        <p className="my-0 fw-light ">{i.inspectionTime}</p>{" "}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminInspection;
