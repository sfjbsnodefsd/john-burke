import { Component, OnInit } from '@angular/core';
import { Pensioner } from 'src/app/Entitiy/pensioner.model';

import { PensionerService } from 'src/app/Services/pensioner.service';

@Component({
  selector: 'app-pension-page',
  templateUrl: './pension-page.component.html',
  styleUrls: ['./pension-page.component.css'],
})
export class PensionPageComponent implements OnInit {
 
 

  constructor(public pensionerService: PensionerService) {}

  refreshPensionerList(){
    this.pensionerService.getPensioners().subscribe((res) => {
      this.pensionerService.pensioners = res as Pensioner[]
    })

  }
 

  ngOnInit(): void {
      //this.pensionerService.getPensioners();
      this.refreshPensionerList()
    //   (( pensioner: Pensioner[] = []) => {
    //     this.pensioner = this.pensioner;
    //   });

  }
}
