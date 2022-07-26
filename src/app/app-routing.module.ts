import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'clubs',
    loadChildren: () => import('./modules/app-clubs/app-clubs.module').then(m=>m.AppClubsModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./modules/app-players/app-players.module').then(m=>m.AppPlayersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
