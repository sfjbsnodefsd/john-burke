import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pensioner} from 'src/app/Entitiy/pensioner.model'
import { Subject } from 'rxjs';


const BASE_URL = 'http://localhost:5001/findAll';
@Injectable({
  providedIn: 'root'
})
export class PensionerService {
   pensioners : Pensioner[] = []

  constructor(private http: HttpClient) { }

  getPensioners() {
    return this.http.get(BASE_URL)   //get body response
    // .subscribe((pensionerData) => {
    //   this.pensioners = pensionerData.pensioner
    //   this.pensionersUpdated.next([...this.pensioners])
    }
  }






