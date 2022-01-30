import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission/mission.component';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component';



@NgModule({
  declarations: [
    MissionComponent,
    MissionListComponent
  ],
  imports: [
    AppMaterialModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule
  ],
  exports: [MissionListComponent]
})
export class MissionsModule { }
