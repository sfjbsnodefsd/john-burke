import { Component, OnInit } from '@angular/core';
import { PensionerService } from 'src/app/Services/PensionerService/pensioner.service';
import { Pensioner } from 'src/app/Model/pensioner.model';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pensioner',
  templateUrl: './edit-pensioner.component.html',
  styleUrls: ['./edit-pensioner.component.css'],
})
export class EditPensionerComponent implements OnInit {
  s;

  constructor(
    public editService: PensionerService,
    private router: ActivatedRoute
  ) {}
  FadeOutEffect = '';
  statusCode = null;
  ID = this.router.snapshot.params['id']

  onEdit(form: NgForm) {
    this.editService
      .updatePensioner(this.ID , form.value)
      .subscribe((res) => {
        console.log(res);
        this.statusCode = res.status
        localStorage.setItem("id",this.ID )
       
      },
      (error) => {
         this.statusCode = error.status // displaying no aadhaar found by status code
         // get the status as error.status
      });
  }

  FadeOut() { //calls fade out class which is on update section
    this.FadeOutEffect = '';
    setTimeout(() => {
      this.FadeOutEffect = 'fade-out-text';
    }, 0);
  }



  ngOnInit(): void {
    //set id from back button
    localStorage.setItem("id",this.ID ) 
  }
}
