import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import { PensionerService } from 'src/app/Services/PensionerService/pensioner.service';

@Injectable()
export class PensionerDataLoader implements Resolve<any>{

  constructor(
     
    private pensionerService :PensionerService ,

  ){

  }


  ///////////will load database first before rendering a page
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    return this.pensionerService.ImportCSVData();

  }
}