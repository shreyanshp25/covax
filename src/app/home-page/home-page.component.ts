import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MapViewComponent } from '../map-view/map-view.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(MapViewComponent)
  }
  ngOnInit(): void {
  }

}
