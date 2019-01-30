import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GisService} from "../service/gis.service";

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

  @ViewChild('mapViewContainer') private readonly mapViewContainer: ElementRef;

  showMeasureTool:boolean = false;
  showCoordinateTool:boolean = false;

  constructor(private readonly gisService:GisService) { }

  ngOnInit() {
    this.gisService.initMap(this.mapViewContainer)
  }

}
