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
export class EditPensionerComponent implements OnInit {s


  constructor(public editService: PensionerService, private router:ActivatedRoute) { }

  updatedtrue= false

  onEdit(form: NgForm) {
   
    this.editService.updatePensioner(this.router.snapshot.params['id'], form.value,)
    .subscribe((res)=>{
      this.updatedtrue = true
 

    })
     


  }

  
  ngOnInit(): void {
  

  }

}
