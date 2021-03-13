import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'heroes',
  templateUrl: 'heroes.page.html',
  styleUrls: ['heroes.page.scss']
})
export class HeroesPage implements OnInit {

  heroes: any[];

  bio: boolean = false;

  constructor(private service: ApiService) {}

  ngOnInit() {
    this.service.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes.data.results;
      }
    );
  }

  toggleBio() {
    this.bio = !this.bio;
  }
}
