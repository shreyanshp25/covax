import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  constructor() { }
  latitude = 26.8467;
  longitude = 80.9462;

  ngOnInit(): void {
  }

}
