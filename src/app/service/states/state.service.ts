import { Injectable } from '@angular/core';

import { State } from '../../models';
@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }
  
  async getStateWiseCovidDetails(): Promise<{ isSuccessful: boolean, stateWiseData: State[], countryData: State}>{
    var stateWiseDetails:State[] = [];
        let res = await fetch("https://api.covid19india.org/data.json");
        let Response = await res.json();
        Response = Response.statewise;
        if(Response){
          var countryDetails: State = new State(Response[0]);
          for(let i=1;i<38;i++){
            let state:State = new State(Response[i]);
            stateWiseDetails.push(state);
          }
          return {countryData: countryDetails, stateWiseData: stateWiseDetails, isSuccessful: true}
        } else {
          return {countryData: null, stateWiseData: [], isSuccessful: false}
        }
  }
}
