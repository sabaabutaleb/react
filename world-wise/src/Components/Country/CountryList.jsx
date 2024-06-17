import Message from "../Message/Message";
import Spinner from "../Spinner/Spinner";
import CountryItem from "../Country/CountryItem";
import styles from "../Country/CountryList.module.css";
function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities)
    return <Message message="Add your first city by clicking on country" />;
  const countries = cities.reduce((acc, currentCity) => {
    if (acc.map((el) => el.country).includes(currentCity.country)) return acc;
    else
      return [
        ...acc,
        { country: currentCity.country, emoji: currentCity.emoji },
      ];
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem city={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
