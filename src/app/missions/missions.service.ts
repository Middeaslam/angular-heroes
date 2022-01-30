import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mission } from '../core/Mission';
import { Hero } from '../core/hero';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  private missionAddedSource = new Subject<Mission>();
  readonly missionAdded$ = this.missionAddedSource.asObservable()

  private missionUrl!: string;

  constructor(private http: HttpClient) {
    this.missionUrl = 'api/heroes'
   }

   assignMission(mission: Mission, hero: Hero): Observable<any> {
     if(!hero.missions){
       hero.missions = [];
     }

     hero.missions.push(mission);

     return this.http.put<Hero>(`${this.missionUrl}/${hero.id}`, hero).pipe(
       map(() => this.missionAddedSource.next(mission))
     )
   }

   completeMission(mission: Mission, hero: Hero): Observable<any> {
     hero.missions = hero.missions.filter(m => m !== mission);
     return this.http.put<Hero>(`${this.missionUrl}/${hero.id}`, hero)
   }
}
