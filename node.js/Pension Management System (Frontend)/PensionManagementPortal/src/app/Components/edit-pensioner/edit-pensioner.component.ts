import { Component, OnInit } from '@angular/core';
import { PensionerService } from 'src/app/Services/PensionerService/pensioner.service';
import { Pensioner } from 'src/app/Model/pensioner.model';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-pensioner',
  templateUrl: './edit-pensioner.component.html',
  styleUrls: ['./edit-pensioner.component.css']
})
export class EditPensionerComponent implements OnInit {

    editPensioner = new  FormGroup ({
      
     
      DOB : new FormControl(""),
      PAN : new FormControl(""),
      Salary : new FormControl(""),
      Allowances : new FormControl(""),
      PensionType : new FormControl(""),
      Bank : new FormControl(""),
      BankNo : new FormControl(""),
      BankType: new FormControl("")

    })





  constructor(public editService: PensionerService, private router:ActivatedRoute) { }


  getPensionANDDETAILS(id: any) {
   
      this.editService.getPension(id).subscribe((res) => {
        
      this.editService.pensioners = res.body as Pensioner[]
    
    })
  }
  onEdit(form: NgForm) {
   
    this.editService.updatePensioner(this.router.snapshot.params['id'], form.value).subscribe((res)=>{
      console.log(res)
    })
     


  }

  
  ngOnInit(): void {
   // this.getPensionANDDETAILS(this.router.snapshot.params['id'])

  }

}
