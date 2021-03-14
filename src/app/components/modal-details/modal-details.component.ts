import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],
})
export class ModalDetailsComponent implements OnInit {

  constructor(public modalDetails: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalDetails.dismiss();
  }
}
