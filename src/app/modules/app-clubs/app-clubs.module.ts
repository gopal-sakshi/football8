import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clubs1Component } from './components/clubs1/clubs1.component';
import { Clubs2Component } from './components/clubs2/clubs2.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes = [
  { path: '', component: Clubs1Component }
]

@NgModule({
  declarations: [Clubs1Component, Clubs2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppClubsModule { }
