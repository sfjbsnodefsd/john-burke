import { Component, OnInit } from '@angular/core';
import { PensionerService } from 'src/app/Services/PensionerService/pensioner.service';
import { Pensioner } from 'src/app/Model/pensioner.model';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {

  constructor(public searchService: PensionerService) { }
  idResult = localStorage.getItem('id');
  cantfindID = null;
 
  //get pension and details
  getPensionANDDETAILS(id: any) {
    this.searchService.getPension(id).subscribe({
      next:(res) => {
        this.cantfindID = res.status;
        this.searchService.pensioners = res.body as Pensioner[];
      },
      error:(error) => {
        this.cantfindID = error.status; // displaying no aadhaar found by status code
        // get the status as error.status
      }
  });
  }

  ngOnInit(): void {
    //get updated content on back button from edit
    if (this.idResult != null) {
      this.getPensionANDDETAILS(this.idResult);
    }
    localStorage.removeItem("id")
  }
}
