import { Component, OnInit } from '@angular/core';
import { Pensioner } from 'src/app/Model/pensioner.model';

import { PensionerService } from 'src/app/Services/PensionerService/pensioner.service';

@Component({
  selector: 'app-pension-page',
  templateUrl: './pension-page.component.html',
  styleUrls: ['./pension-page.component.css'],
})
export class PensionPageComponent implements OnInit {
 
 

  constructor(public pensionerService: PensionerService) {}

  getPensionerList(){
    this.pensionerService.getPensioners().subscribe((res) => {
      console.log(res)
      this.pensionerService.pensioners = res as Pensioner[]
    })
  }
 

  ngOnInit(): void {
      this.getPensionerList()
  }
}
