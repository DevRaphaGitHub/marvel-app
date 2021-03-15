import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { ModalDetailsComponent } from '../components/modal-details/modal-details.component';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'heroes',
  templateUrl: 'heroes.page.html',
  styleUrls: ['heroes.page.scss']
})
export class HeroesPage implements OnInit {
  screenWidth = this.service.screenWidth;
  heroes: any[];

  constructor(private service: ApiService, private modalDetails: ModalController) {}

  ngOnInit() {
    this.service.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes.data.results;
      }
    );
  }

  // async showModal() {
  //   const modal = await this.modalDetails.create({
  //     component: ModalDetailsComponent,
  //     cssClass: 'modal-class'
  //   });

  //   await modal.present();
  // }
}
