import { Component, OnInit } from '@angular/core';
import { Tab1Service } from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  heroes: any[];

  constructor(private service: Tab1Service) {}

  ngOnInit() {
    this.service.getData().subscribe(
      heroes => {
        this.heroes = heroes.data.results;
        console.log(heroes);
      }
    );
  }
}
