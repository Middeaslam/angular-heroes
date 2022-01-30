import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnChanges {

  @Input() id!: string;
  @Output() delete = new EventEmitter();

  hero!: Hero;

  constructor(private heroService: HeroesService) { }

  ngOnChanges(changes: SimpleChanges): void {
      this.getHero();
  }

  private getHero() {
    this.heroService.getHero(this.id).subscribe(hero => this.hero = hero)
  }

  deleteHero() {
    this.heroService.deleteHero(this.hero.id).subscribe(() => this.delete.emit())
  }

}
