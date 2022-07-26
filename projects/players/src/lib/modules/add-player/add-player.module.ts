import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlayerComponent } from './components/create-player/create-player.component';
import { PlayerPickerComponent } from './components/player-picker/player-picker.component';



@NgModule({
  declarations: [CreatePlayerComponent, PlayerPickerComponent],
  imports: [
    CommonModule
  ]
})
export class AddPlayerModule { }
