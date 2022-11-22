import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPensionerComponent } from './edit-pensioner.component';

describe('EditPensionerComponent', () => {
  let component: EditPensionerComponent;
  let fixture: ComponentFixture<EditPensionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPensionerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
