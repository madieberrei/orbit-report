// 3.5 Update the import statements to access Input and Satellite classes
import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  constructor() { }
  // 3.4 Add the code below just before the constructor
  @Input() satellites: Satellite[];
  ngOnInit() {
    
  }

  // 7.3 Add a sort method to the OrbitListComponent class.
  sort(column: string): void {
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }
}
