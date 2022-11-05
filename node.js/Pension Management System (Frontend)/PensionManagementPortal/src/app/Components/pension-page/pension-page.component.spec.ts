import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionPageComponent } from './pension-page.component';

describe('PensionPageComponent', () => {
  let component: PensionPageComponent;
  let fixture: ComponentFixture<PensionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
