import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesPage } from './movies.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MoviesPageRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: MoviesPage }]),
    MoviesPageRoutingModule,
  ],
  declarations: [MoviesPage]
})
export class MoviesPageModule {}
