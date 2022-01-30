import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Hero } from './hero';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @ViewChild(MatDrawer) private drawer!: MatDrawer;

  heroes!: Hero[];
  selectedHeroId!: string;


  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  private getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  selectHero(heroId: string) {
    this.selectedHeroId = heroId;
    this.drawer.open()
  }

  onHeroDeleted() {
    this.getHeroes();
    this.drawer.close();
  }

}
