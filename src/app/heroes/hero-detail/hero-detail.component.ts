import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MissionComponent } from 'src/app/missions/mission/mission.component';
import { Hero } from '../../core/hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnChanges {

  @Input() id!: any;
  @Output() delete = new EventEmitter();

  hero!: Hero;

  constructor(private heroService: HeroesService, private dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
      this.getHero();
  }

  private getHero() {
    this.heroService.getHero(this.id).subscribe(hero => this.hero = hero)
  }

  deleteHero() {
    this.heroService.deleteHero(this.hero.id).subscribe(() => this.delete.emit())
  }

  assignMission() {
    this.dialog.open(MissionComponent, {data: this.hero})
  }

}
