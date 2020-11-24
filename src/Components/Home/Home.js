import React,{useContext} from "react";
import Cards from "../Cards//Cards";
import Filters from "../Filters/Filters";
import { UsersContext } from "../../Context/userContext";
import FilteringSwitch from "../Switch/FilteringSwitch";
import Footer from "../Footer/Footer";


function Home(props) {
    const { myImg, all, setFilter, setAll, filters, imgs } = useContext(
        UsersContext
      );
  return (
    <div>
      <FilteringSwitch />
      <Filters
        onClickAll={setAll}
        all={all}
        onClick={setFilter}
        filters={filters}
      />
      {all ? <Cards imgs={imgs} /> : <Cards imgs={myImg} />}
      <Footer />
    </div>
  );
}

export default Home;
