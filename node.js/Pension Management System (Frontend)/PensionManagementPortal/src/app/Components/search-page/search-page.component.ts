import { Component, OnInit } from '@angular/core';
import { PensionerService } from 'src/app/Services/PensionerService/pensioner.service';
import { Pensioner } from 'src/app/Model/pensioner.model';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {





  constructor(public searchService: PensionerService) { }


  //get pension and details
  getPensionANDDETAILS(id: any) {
    this.searchService.getPension(id).subscribe((res) => {
      console.log("res1" + res)
      this.searchService.pensioners = res as Pensioner[]
    })
  }






  ngOnInit(): void {

  }
}









  // getPensionANDBank(id: any){
  //   this.searchService.getPensionOnly(id).subscribe((res) => {
  //     console.log("res2" + res)
  //     this.searchService.pension = res as CalPension[]
  //   })
  // }
  // getPensionerByAADHAAR(id: any){ //works
  //   this.searchService.getPensionersByAadhaar(id).subscribe((res) => {
  //     this.searchService.pensioners = res as Pensioner[]
  //   })
  // }
