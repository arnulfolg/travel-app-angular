import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.scss'],
  host: {'class': 'main'}
})
export class MyPlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
