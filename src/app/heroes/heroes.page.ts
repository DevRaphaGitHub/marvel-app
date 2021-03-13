import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'heroes',
  templateUrl: 'heroes.page.html',
  styleUrls: ['heroes.page.scss']
})
export class HeroesPage implements OnInit {

  heroes: any[];

  bio: boolean = false;

  constructor(private service: HeroesService) {}

  ngOnInit() {
    this.service.getData().subscribe(
      heroes => {
        this.heroes = heroes.data.results;
        console.log(heroes);
      }
    );
  }

  toggleBio() {
    this.bio = !this.bio;
  }
}
