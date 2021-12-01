import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Country } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countryUrl:object = {}

  constructor(private http: HttpClient) { }

  getCountryWiseCovidDetails(): Observable<{ isSuccessful: boolean, countryWiseData: Country[], worldWideData: Country}>{
    var countryWiseDetails:Country[] = [];
    this.http.get("https://restcountries.eu/rest/v2/all").subscribe(Response => {
      for(let i=0; i< 250; i++){
        this.countryUrl[Response[i].name] = Response[i].alpha2Code.toLowerCase();
      }
      this.countryUrl["Falkland Islands"] = "fk"
      this.countryUrl["Iran"] = "ir";
      this.countryUrl["USA"] = "us";
      this.countryUrl["Russia"] = "ru";
      this.countryUrl["UK"] = "gb";
      this.countryUrl["Czechia"] = "cz";
      this.countryUrl["UAE"] = "ae";
      this.countryUrl["Palestine"] = "ps";
      this.countryUrl["Moldova"] = "md";
      this.countryUrl["Venezuela"] = "ve";
      this.countryUrl["North Macedonia"] = "mk";
      this.countryUrl["S. Korea"] = "kr";
      this.countryUrl["DRC"] = "cd";
      this.countryUrl["Syria"] = "sy";
      this.countryUrl["Eswatini"] = "sz";
      this.countryUrl["Channel Islands"] = "vi";
      this.countryUrl["Turks and Caicos"] = "tc";
      this.countryUrl["Sint Maarten"] = "sx";
      this.countryUrl["St. Vincent Grenadines"] = "vc";
      this.countryUrl["Laos"] = "la";
      this.countryUrl["Caribbean Netherlands"] = "ni";
      this.countryUrl["St. Barth"] = "bl";
      this.countryUrl["Faeroe Islands"] = "fo";
      this.countryUrl["Vietnam"] = "vn";
      this.countryUrl["Bolivia"] = "bo";
      this.countryUrl["Ivory Coast"] = "ci";	
      this.countryUrl["CAR"] = "cf";
      this.countryUrl["Saint Martin"] = "mf";
      this.countryUrl["Tanzania"] = "tz";
      this.countryUrl["British Virgin Islands"] = "io";
      this.countryUrl["Vatican City"] = "va";
      this.countryUrl["Saint Pierre Miquelon"] = "pm";
      this.countryUrl["MS Zaandam"] = "zm";
      this.countryUrl["Saint Helena"] = "sh";
      this.countryUrl["Micronesia"] = "fm";
      this.countryUrl["Brunei"] = "bn";
    })
    return new Observable((sub) => {
      this.http.get("https://coronavirus-19-api.herokuapp.com/countries")
      .subscribe(Response => {
        if(Response){
          var worldWideDetails: Country = new Country(Response[0]);
          for(let i=1;i<223;i++){
            let country:Country = new Country(Response[i]);
            countryWiseDetails.push(country);
            sub.next({worldWideData: worldWideDetails, countryWiseData: countryWiseDetails, isSuccessful: true})
          }
        } else {
          sub.next({worldWideData: null, countryWiseData: [], isSuccessful: false})
        }
      })
    })
  }
}
