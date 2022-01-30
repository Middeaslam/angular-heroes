import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent
  ],
  imports: [
    RouterModule,
    AppMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class HeroesModule { }
