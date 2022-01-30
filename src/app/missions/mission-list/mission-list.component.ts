import { Component, Input, OnInit } from '@angular/core';
import { Mission } from 'src/app/core/Mission';
import { Hero } from 'src/app/heroes/hero';
import { MissionsService } from '../missions.service';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  @Input() hero!: Hero;

  constructor(public missionService: MissionsService) { }

  ngOnInit(): void {
    this.missionService.missionAdded$.subscribe(mission => {
      if (!this.hero.missions) {
        this.hero.missions = [];
      }
      this.hero.missions.push(mission);
    });
  }

  completeMission(mission: Mission) {
    this.missionService.completeMission(mission, this.hero).subscribe(() => {
      this.hero.missions = this.hero.missions.filter(m => m !== mission);
    });
  }

  getPriorityColor(mission: Mission): string {
    switch(mission.priority) {
      case 'medium':
        return 'yellow';
        case 'high':
          return 'red';
        default:
          return 'yellow'
    }
  }


}
