import { Component } from '@angular/core';
// 1.6b For this to compile, you must add import...
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  // 8.7 Add the displayList property
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    this.displayList = [];
    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

         let fetchedSatellites = data.satellites;
         let satellite= {};
         // loop over satellites
         for (let i=0; i<fetchedSatellites.length; i++){
           // create a Satellite object
           satellite= new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
           // add the new Satellite object
           this.sourceList.push(satellite);
         }
         
         // 8.10 Set displayList to be a copy of sourceList when app loads
         this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));

}

// 8.6 Add a search method to the AppComponent class.

search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.sourceList.length; i++) {
     let name = this.sourceList[i].name.toLowerCase();
     if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  // assign this.displayList to be the the array of matching satellites
  // this will cause Angular to re-make the table, but now only containing matches
  this.displayList = matchingSatellites;
}
 }