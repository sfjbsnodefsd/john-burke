import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pensioner } from 'src/app/Model/pensioner.model';

import { PensionerService } from 'src/app/Services/PensionerService/pensioner.service';

@Component({
  selector: 'app-pension-page',
  templateUrl: './pension-page.component.html',
  styleUrls: ['./pension-page.component.css'],
})
export class PensionPageComponent implements OnInit {
  constructor(public pensionerService: PensionerService, private route: ActivatedRoute,) {}





  getPensionerList() {
    this.pensionerService.getPensioners().subscribe((res) => {
      this.pensionerService.pensioners = res as Pensioner[];
   
    });
  }

  ImportCSVData() {
    this.pensionerService.ImportCSVData().subscribe((res) => {
  
    });
  }

  ngOnInit(): void {
    if (this.pensionerService.pensioners.length == 0) { ////loads database auto if empty
      this.route.data.subscribe( (data) => { 
        console.log(data)
      });
    
    }
    this.getPensionerList();
  


  }
}
