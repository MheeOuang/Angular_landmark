import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdateService {

  landmark = new Landmark();    //created new class namd Landmark
  landmarksByCountry : any;
  landmarksByName : any;
  isMultiple = 'show-one';
  constructor() { }
}


class Landmark{
  //created att like a data in json file
  idx : number = 0;
  name : string = '';
  country : string = '';
  detail : string = '';
  url : string = '';
}
