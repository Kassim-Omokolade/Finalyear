import AdminLayout from "../../components/Admin components/AdminLayout";
import { Outlet, Link } from "react-router-dom";
import refresh from "./../../assets/images/tabler_refresh.svg"
import "./../../styles/Admin Styles/adminProperties.css"
import { GoHome } from "react-icons/go";
import { properties } from "../../mockData/properties";
import location from "./../../assets/images/Location.svg"
import { GiBathtub } from "react-icons/gi";
import { BiSolidCarGarage } from "react-icons/bi";
import { LuNetwork } from "react-icons/lu";
import { MdFamilyRestroom } from "react-icons/md";
import { IoSquareOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";


const AdminProperties = () => {



  const houses = properties.slice(0,10);

  return <div>
    <AdminLayout>
        <main>
          <section>
            <div className="dashBoardPropertiesAboveNav">
              <div>
                <h2>
                Properties
                </h2>
              </div>
              <div>
                 <button  className="dashBoardHome"> <GoHome /> Home / Properties </button>
              </div>
            </div>
            <div className="dashBoardPropertiesBelowNav">
              <div>
               <select name="" id="" className="dashBoardLand">
               <option value="">Lands</option>
               <option value="">Houses</option>
                </select> 
              </div>
              <div className="dashBoardRefreshFlex">
              <div>
                <Link to = '/admin/add'>
                
                <button className="dashBoardAddNew"> + Add New</button>
                </Link>
              </div>
              </div>
            </div>
          </section>
          <section>
          <div className="dashBoardGrid" > 
            {
              houses.map((h) => {
                
                return (
                    <div key={h._id} >
                    <img src={h.image} alt={h.title}  className="dashBoardImage"/>
                    <div className="dashParaBody">
                    <p className="paraPost">Posted on {h.createdAt}</p>
                    <p className="paraTags"><p> <LuNetwork /> {h.tags[0]}</p> <p> <MdFamilyRestroom /> {h.tags[1]}</p></p>
                    <h2>Residential Land</h2>
                    <p><img src={location} alt="location" /> 3, {h.location} 100252</p>
                    <h3>${h.price}</h3>
                    <p className="paraFeatures"><p><LiaBedSolid /> {h.features.bedroom} Bedroom</p> <p><GiBathtub /> {h.features.bathroom} Bathroom</p> </p> <p className="paraFeatures"> <p><BiSolidCarGarage /> {h.features.garage} Garage</p> <p> <IoSquareOutline />  {h.features.squareFeet} Square Feet</p> </p>
                    </div>
                    <Link to = {`/admin/properties/${h._id}`}>
                  <button className="dashBoardButton">View Button</button>
                    </Link>
                  
                  </div>
                )
                
              })
            }
           
          </div>

          {/* <div className="dashBoardNum"> <button> <img src={prev} alt="previous" className="prevButton"/> </button> <button> 1 </button> <button> 2 </button> <button> 3 </button> <button> 4 </button> <button> 5 </button></div> */}

          <p className="backToTop"><a href="#">Back To Top</a></p>
          </section>
        </main>
        
    </AdminLayout>

  </div>;
};

export default AdminProperties;
