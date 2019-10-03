import React, { Component } from "react";
import {Link} from  'react-router-dom';
import countries from "./countries";

class Details extends Component {

  findCountry = (id) => {
    return countries.find(theCountry => {
        return theCountry.cca3 === id || theCountry.flag === id ;
      });
  }  
  
  getBorders = (borders) => {
    return borders.map((eachBorder, i)=>{
        let country = this.findCountry(eachBorder);
        console.log(country)
        return(
            <li key={eachBorder}>
                <Link to={`/country-detail/${eachBorder}`}>
                    {country.flag} {country.name.common}
                </Link>
            </li>
            )
    })
  }

  render() {
    let id = this.props.match.params.bighairygorilla;

    let nation = this.findCountry(id)



    return (
      <div className="col-7">
        <h1>{nation.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: "30%" }}>Capital</td>
              <td>{nation.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {nation.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                    {this.getBorders(nation.borders)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Details;
