import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComicsPage } from './comics.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ComicsPageRoutingModule } from './comics-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ComicsPage }]),
    ComicsPageRoutingModule
  ],
  declarations: [ComicsPage]
})
export class ComicsPageModule {}
