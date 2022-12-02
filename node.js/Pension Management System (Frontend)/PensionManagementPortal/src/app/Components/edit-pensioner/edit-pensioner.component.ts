import { Component, OnInit } from '@angular/core';
import { PensionerService } from 'src/app/Services/PensionerService/pensioner.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pensioner',
  templateUrl: './edit-pensioner.component.html',
  styleUrls: ['./edit-pensioner.component.css'],
})
export class EditPensionerComponent implements OnInit {
  constructor(
    public editService: PensionerService,
    private router: ActivatedRoute
  ) {}
  FadeOutEffect = '';
  statusCode = null;
  ID = this.router.snapshot.params['id'];

  onEdit(form: NgForm) {
    this.editService.updatePensioner(this.ID, form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.statusCode = res.status;
        localStorage.setItem('id', this.ID);
      },
      error: (error) => {
        this.statusCode = error.status;
        // get the status as error.status
      },
    });
  }

  FadeOut() {
    //fade out update header
    this.FadeOutEffect = '';
    setTimeout(() => {
      this.FadeOutEffect = 'fade-out-text';
    }, 0);
  }

  ngOnInit(): void {
    //set aadhaar id
    localStorage.setItem('id', this.ID);
  }
}
