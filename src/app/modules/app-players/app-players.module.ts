import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Players1Component } from './components/players1/players1.component';
import { Players2Component } from './components/players2/players2.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: '', component: Players1Component }
]

@NgModule({
  declarations: [Players1Component, Players2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppPlayersModule { }
