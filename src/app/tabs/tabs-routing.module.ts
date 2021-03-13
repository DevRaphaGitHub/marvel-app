import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'heroes',
        loadChildren: () => import('../heroes/heroes.module').then(m => m.HeroesPageModule)
      },
      {
        path: 'comics',
        loadChildren: () => import('../comics/comics.module').then(m => m.ComicsPageModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('../movies/movies.module').then(m => m.MoviesPageModule)
      },
      {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
      },
      {
        path: 'tab1',
        redirectTo: '/heroes',
        pathMatch: 'full'
      },
      {
        path: 'tab2',
        redirectTo: '/comics',
        pathMatch: 'full'
      },
      {
        path: 'tab3',
        redirectTo: '/movies',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
