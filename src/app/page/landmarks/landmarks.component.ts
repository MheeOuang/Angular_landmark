import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdateService } from 'src/app/service/appdate.service';
import jsonData from '../../../assets/landmark.json';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.scss']
})
export class LandmarksComponent {

  landmarks = jsonData;               //keep json's data to landmarks
  landmark: any;

  countrySet = new Set<string>();     //set is like a list but it's not duplicate
  countries: any;

  country = '';
  landmarksByCountry = new Array<any>();    // created array any type name is landmarksByCountry

  landmarksByName = new Array<any>();

  position = 0;
  isMultiple = 'show-one';


  //for check to show multi or one place
  constructor(private router: Router, private data: AppdateService) {

    //Load saved states from service
    //left is att in landmarksComponent
    //right is att in appdataService
    this.landmarksByCountry = this.data.landmarksByCountry;
    this.isMultiple = this.data.isMultiple;
    this.landmark = this.data.landmark;
    this.landmarksByName = this.data.landmarksByName;


    if (this.landmark.idx == 0) {
      this.landmark = this.landmarks[0];
    }

    //console.log(jsonData);
    this.landmark = this.landmarks[0];

    //step 1: loop landmarks for add "country" that in json file to contrySet
    this.landmarks.forEach(element => {
      this.countrySet.add(element.country);  //set ust .add
      console.log(this.countrySet);
    });
    //step 2: change data in countrySet to be list and keep it in countries
    this.countries = Array.from(this.countrySet);
    console.log(this.countries); //console.log countries for check in browser

  }


  Search(id: any) {
    this.isMultiple = 'show-one';
    for (let index = 0; index < this.landmarks.length; index++) {
      if (this.landmarks[index].idx == id) {  //idx is id in json file
        this.landmark = this.landmarks[index];
        break;
      }
    }
  }

  searchByCountry() {
    this.landmarksByCountry = new Array<any>();
    //bycountry
    if (this.country == this.countries[0] || this.country == this.countries[1] || this.country == this.countries[2]) {
      this.isMultiple = 'show-byCountry';
      this.landmarks.forEach(element => {
        if (element.country == this.country) {
          this.landmarksByCountry.push(element);
        }
      });
      console.log("inIf");
    }else{ //showAll
      console.log("inelse");
      this.isMultiple = 'show-all';
    }

    this.landmark = this.landmarksByCountry[0];
  }

  selectCountry(selectedLandmark: any) {
    //save state to service
    this.data.landmark = selectedLandmark;
    this.data.landmarksByCountry = this.landmarksByCountry;
    this.data.landmarksByName = this.landmarksByName;
    this.data.isMultiple = this.isMultiple;
    this.router.navigateByUrl('/show');
  }

  searchByName(nameInput: any) {
    this.isMultiple = 'show-byName';
    this.landmarksByName = new Array<any>();
    this.landmarks.forEach(element => {
      this.position = element.name.search(nameInput);
      if (this.position != -1) {
        //console.log(this.position);
        this.landmarksByName.push(element);
      }
    });
    this.landmark = this.landmarksByName[0];
  }


}
