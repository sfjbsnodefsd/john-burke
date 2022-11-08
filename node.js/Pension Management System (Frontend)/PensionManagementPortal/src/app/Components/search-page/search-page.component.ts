import { Component, OnInit } from '@angular/core';
import { PensionerService } from 'src/app/Services/pensioner.service';
import { Pensioner } from 'src/app/Entitiy/pensioner.model';



@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {





  constructor(public searchService: PensionerService) {}

  // getPensionerByAADHAAR(id: any){ //works
  //   this.searchService.getPensionersByAadhaar(id).subscribe((res) => {
  //     this.searchService.pensioners = res as Pensioner[]
  //   })
  // }

  //get pension and details
  getPensionANDDETAILS(id: any){
    this.searchService.getPension(id).subscribe((res) => {
      console.log("res1" + res)
      this.searchService.pensioners = res as Pensioner[] 
    })
  }


  // getPensionANDBank(id: any){
  //   this.searchService.getPensionOnly(id).subscribe((res) => {
  //     console.log("res2" + res)
  //     this.searchService.pension = res as CalPension[]
  //   })
  // }

  ngOnInit(): void {

  }
}


 
   
