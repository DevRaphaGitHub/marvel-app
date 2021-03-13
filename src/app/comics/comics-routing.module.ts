import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsPage } from './comics.page';

const routes: Routes = [
  {
    path: 'comics',
    component: ComicsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsPageRoutingModule {}
