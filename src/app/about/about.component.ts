import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  experienceCount: number = 0;
  clientCount: number = 0;
  projectCount: number = 0;
  awardsCount: number = 0;

  constructor() {}

  experienceCountStop: any = setInterval(() => {
    this.experienceCount++;
    if (this.experienceCount == 5) {
      clearInterval(this.experienceCountStop);
    }
  }, 100);

  clientCountStop: any = setInterval(() => {
    this.clientCount++;
    if (this.clientCount == 25) {
      clearInterval(this.clientCountStop);
    }
  }, 100);

  projectCountStop: any = setInterval(() => {
    this.projectCount++;
    if (this.projectCount == 50) {
      clearInterval(this.projectCountStop);
    }
  }, 100);

  awardsCountStop: any = setInterval(() => {
    this.awardsCount++;
    if (this.awardsCount == 10) {
      clearInterval(this.awardsCountStop);
    }
  }, 100);

  ngOnInit(): void {}
}
