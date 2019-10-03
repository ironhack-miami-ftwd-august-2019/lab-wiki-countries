import React, {Component, Fragment} from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "./countries";
import { Link } from "react-router-dom"
import Details from "./Details.js"
import { Switch, Route } from 'react-router-dom';


class App extends Component {

  showCountries = () => {
    let allCountries = countries.map((eachCountry, i) => {
      return (
      <li key={i} className="list-group-item list-group-item-action">
        <Link to={`/country-detail/${eachCountry.flag}`}>{eachCountry.name.common} {eachCountry.flag}</Link>
      </li>
      )
    })
    return allCountries;
  }

  render() {
    return (

      <Fragment>

      {/* List and Details */}
      <div className="row">
        <div className="col-5">
          List
          {this.showCountries()}
        </div>

        {/* Our Switch and Route */}
        <Switch>
          <Route exact path='/country-detail/:bighairygorilla' component={Details}/>
        </Switch>

      </div>




      </Fragment>
    );
  }
}


export default App;
