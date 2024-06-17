import Map from "../Components/Map/Map";
import NavPage from "../Components/NavPage/NavPage";
import Sidebar from "../Components/SideBar/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
