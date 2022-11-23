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

  cantfindID = null

  //get pension and details
  getPensionANDDETAILS(id: any) {
    this.searchService.getPension(id).subscribe((res) => {
      this.cantfindID =res.status
      this.searchService.pensioners = res.body as Pensioner[]
    
    },
    (error) => {
       this.cantfindID = error.status // displaying no aadhaar found by status code
       // get the status as error.status
    })
    
  }

  ngOnInit(): void {

  }
}
