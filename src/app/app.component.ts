import { Component, OnInit } from '@angular/core';
import {
  data,
  teamData,
  servicesData,
  industriesData,
  technologiesData,
} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'appventurez';
  data: any;
  teamData: any;
  serviceData: any;
  industryData: any;
  technologyData: any;

  p: number = 1;
  ngOnInit(): void {
    this.data = data;
    this.teamData = teamData;
    this.serviceData = servicesData;
    this.industryData = industriesData;
    this.technologyData = technologiesData;
  }
}
