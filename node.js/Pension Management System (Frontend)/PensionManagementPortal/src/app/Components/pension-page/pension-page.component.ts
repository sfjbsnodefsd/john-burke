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

  getPensionerList() {
    this.pensionerService.getPensioners().subscribe((res) => {
      this.pensionerService.pensioners = res as Pensioner[];
    });
  }

  ImportCSVData() {
    this.pensionerService.ImportCSVData().subscribe((res) => {});
  }

  ngOnInit(): void {
    if (this.pensionerService.pensioners.length == 0) {
      this.ImportCSVData();
    }
    this.getPensionerList();
    

  }
}
