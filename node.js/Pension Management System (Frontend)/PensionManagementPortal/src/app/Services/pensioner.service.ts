import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Pensioner} from 'src/app/Entitiy/pensioner.model'
// import { CalPension } from '../Entitiy/pension.model';



const getAllBASE_URL = 'http://localhost:5001/findAll';
const getIDBASE_URL = 'http://localhost:5001';
const getPENBASE_URL = 'http://localhost:5002'; 


@Injectable({
  providedIn: 'root'
})
export class PensionerService {
   pensioners : Pensioner[] = []
  //  pension : CalPension [] =[]

  constructor(private http: HttpClient) { }

  getPensioners() {
    return this.http.get(getAllBASE_URL)   //get body response
    }

    getPensionersByAadhaar(id: any){  //works
      return this.http.get(`${getIDBASE_URL}/${id}`)
  }

  getPension(id: any){    //get pension and details
    return this.http.get(`${getPENBASE_URL}/${id}/bothDetails`)
}

getPensionOnly(id: any){        //get only both
  return this.http.get(`${getPENBASE_URL}/${id}/both`)
}

  

  }
