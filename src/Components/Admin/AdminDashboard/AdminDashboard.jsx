import { logoutUser } from "../../../Redux/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Create from "../Create/Create";
import { TabView, TabPanel } from 'primereact/tabview';
import styles from "./AdminDashboard.module.css"
import DeleteShoe from "../../Admin/Delete/Delete";
import  UpdateShoe  from "../UpdateShoe/UpdateShoe";
import UsersControl from "../UsersControl/UsersControl";
import Orders from "../Orders/Orders"
import SalesData from "../BussinesData/SalesData";
import BrandsData from "../BussinesData/BrandsData";
import MonthlySales from "../BussinesData/MonthlySales";
import SportsData from "../BussinesData/SportsData"
import AdminChat from "../Chat/AdminChat";
import Footer from "../../Footer/Footer";
import OrdersMc from "../Orders/Orders";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
    navigate("/home");
  };

  return (
    <div className={styles.dashboardContainer}>

       
      <div>
      <TabView className={styles.tabView}>
      <TabPanel header="Carga nuevas zapatillas">
            <div className={styles.tabContent}>
              <Create />
            </div>
          </TabPanel>
        <TabPanel header="Elimina productos">
          <div className={styles.tabContent}>
            <DeleteShoe></DeleteShoe>
          </div>
        </TabPanel>
        <TabPanel header="Editá productos">
          <div className={styles.tabContent}>
            <UpdateShoe></UpdateShoe>
          </div>
        </TabPanel>
        <TabPanel header="Usuarios">
          <div className={styles.tabContent}>
            <UsersControl></UsersControl>
          </div>
        </TabPanel>
        <TabPanel header="Ordenes">
          <div className={styles.tabContent}>
              <OrdersMc></OrdersMc>
          </div>
        </TabPanel>
        <TabPanel header="Diagramas de ventas">
          <div className={styles.tabContent}>
            <SalesData></SalesData>
            <BrandsData></BrandsData>
            <MonthlySales></MonthlySales>
            <SportsData></SportsData>
          </div>
        </TabPanel>
        <TabPanel header="Chat">
            <div className={styles.tabContent}>
              <AdminChat />
            </div>
          </TabPanel>
      </TabView>
    
      </div>
   
      <button className={styles.logoutButton} onClick={logOut}>LOG OUT</button>
    
      <div>
      <Footer></Footer>
    </div>
    </div>
  );
}