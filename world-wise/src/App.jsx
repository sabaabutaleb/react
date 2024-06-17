import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import HomePage from "./Pages/HomePage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Components/Login/Login";
import CityList from "./Components/City/CityList";
import CountryItem from "./Components/Country/CountryItem";
import { useEffect, useState } from "react";
import CountryList from "./Components/Country/CountryList";
// import PropTypes from 'prop-types';
const URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function fetchCities() {
        setIsLoading(true);
        try {
          // if(isLoading)
          const res = await fetch(`${URL}/cities`);
          const data = await res.json();

          setCities(data);
          // console.log({ cities });
        } catch (error) {
          alert("THere is some thing went wrong");
          console.error(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCities();
    },
    [setIsLoading]
  );
  //to be completed (the map)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          {/* <Route path="AppLayout" element={<AppLayout />}></Route> */}
          <Route path="App" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
          </Route>
          <Route path="Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
