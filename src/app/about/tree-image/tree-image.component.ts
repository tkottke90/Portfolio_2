import { Component, OnInit } from '@angular/core';

enum Seasons {
  Spring,
  Summer,
  Fall,
  Winter
}

@Component({
  selector: 'app-tree-image',
  templateUrl: './tree-image.component.html',
  styleUrls: ['./tree-image.component.scss']
})
export class TreeImageComponent implements OnInit {

  sdates = [];

  season: Seasons;

  constructor() {}

  ngOnInit() {
    this.season = Seasons.Winter;
    this.getDates();
    this.setSeason();
  }

  getDates() {
    const now = new Date();
    this.sdates.push(new Date(now.getFullYear(), 2, 20));
    this.sdates.push(new Date(now.getFullYear(), 5, 21));
    this.sdates.push(new Date(now.getFullYear(), 8, 22));
    this.sdates.push(new Date(now.getFullYear(), 11, 21));
  }

  setSeason() {
    const now = new Date();
    const temp = [];
    for (let i = 3; i >= 0; i--) {
      temp.push({ current: now, season: this.sdates[i], result: (now > this.sdates[i])});
      if (now > this.sdates[i]) {
        this.season = i;
        break;
      }
    }

    console.table(temp);

    if (this.season === 3) {
      this.festiveLights();
    }
  }


  festiveLights() {
    setInterval(() => {
      const node = document.querySelectorAll('circle');
      const rndNode = Math.round(Math.random() * node.length) % node.length;
      node[rndNode].classList.toggle('blink-green');
      setTimeout(() => { node[rndNode].classList.toggle('blink-green'); }, 1500);
    }, 500);

    setInterval(() => {
        const node = document.querySelectorAll('circle');
        const rndNode = Math.round(Math.random() * node.length) % node.length;
        node[rndNode].classList.toggle('blink-red');
        setTimeout(() => { node[rndNode].classList.toggle('blink-red'); }, 1450);
    }, 525);
  }

}
