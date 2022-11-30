import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensioner } from 'src/app/Model/pensioner.model'




const DetailsURL = 'http://localhost:5001';
const ProcessURL = 'http://localhost:5002';


@Injectable({
  providedIn: 'root'
})
export class PensionerService {
  pensioners: Pensioner[] = []
 

  constructor(private http: HttpClient) { }

  getPensioners() {
    return this.http.get(`${DetailsURL}/PensionerList`)   //get body response
  }


  
  getPension(id: any) {    //get pension and details
   
    return this.http.get(`${ProcessURL}/${id}/Details_Pension`,{observe: 'response'}) 
  }

  updatePensioner(id: any, pensioner:  Pensioner) {
    return this.http.put(`${DetailsURL}/${id}/update`, pensioner,{observe: 'response'} );
  }

  ImportCSVData() {
    return this.http.post(`${DetailsURL}/importCSV`,{observe: 'response'})   
  }


  

}
