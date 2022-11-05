import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-demo',
  templateUrl: './interpolation-demo.component.html',
  styleUrls: ['./interpolation-demo.component.css']
})
export class InterpolationDemoComponent implements OnInit {


name:string = "John"
Lang:string = " Javascript"

printAddress(){
  return "Live in Bangalore , India"
}

  constructor() { }

  ngOnInit(): void {
  }

}
