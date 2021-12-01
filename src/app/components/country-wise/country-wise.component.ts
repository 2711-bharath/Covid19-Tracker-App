import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../service';
import { Country } from '../../models';
@Component({
  selector: 'app-country-wise',
  templateUrl: './country-wise.component.html',
  styleUrls: ['./country-wise.component.scss']
})
export class CountryWiseComponent implements OnInit {

  globalData:Country;
  countryWiseData:Country[] = [];
  isDataLoaded: boolean = false;
  countryNameUrl: object;

  constructor(private countryService : CountryService) { }
  
  ngOnInit(): void {
    this.countryService.getCountryWiseCovidDetails().subscribe(data => {
      if(data.isSuccessful){
        this.globalData = data.worldWideData;
        this.countryWiseData = data.countryWiseData;
        this.isDataLoaded = true;
        this.countryNameUrl = this.countryService.countryUrl;
      }
    });
  }

}
