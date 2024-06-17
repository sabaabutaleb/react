// import City from "./City";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
function CityList({ cities, isLoading }) {
  // CityList.propTypes = {
  //   cities: PropTypes.array,
  //   isLoading: PropTypes.bool,
  // };
  // console.log(cities);
  if (isLoading) return <Spinner />;
  if (!cities)
    return <Message message="Add your first city by clicking on country" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
export default CityList;
