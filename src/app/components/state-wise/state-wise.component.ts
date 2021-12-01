import { Component, OnInit } from '@angular/core';

import { StateService } from '../../service';
import { State } from '../../models';
@Component({
  selector: 'app-state-wise',
  templateUrl: './state-wise.component.html',
  styleUrls: ['./state-wise.component.scss']
})
export class StateWiseComponent implements OnInit {

  isDataLoading = true;
  stateWiseDetails: State[] = [];
  countryDetails: State;

  constructor(private stateservice: StateService) { }

  ngOnInit(): void {
    this.stateservice.getStateWiseCovidDetails().then((data)=>{
      if(data.isSuccessful){
        this.isDataLoading = false;
        this.stateWiseDetails = data.stateWiseData;
        this.countryDetails = data.countryData;
      }else{
        this.isDataLoading = false;
      }
    })
  }

}
