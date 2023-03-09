import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppdateService } from 'src/app/service/appdate.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  landmark : any;
  constructor(private data : AppdateService, private router: Router){
    this.landmark = data.landmark;
    console.log(this.landmark);
  }

  back(){
    this.router.navigateByUrl("/");
  }
}
