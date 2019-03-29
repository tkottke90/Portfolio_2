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
    this.sdates.push(new Date(now.getFullYear(), 3, 20));
    this.sdates.push(new Date(now.getFullYear(), 6, 21));
    this.sdates.push(new Date(now.getFullYear(), 9, 22));
    this.sdates.push(new Date(now.getFullYear(), 12, 21));
  }

  setSeason() {
    const now = new Date();
    for (let i = 3; i > 0; i--) {
      if (now > this.sdates[i]) {
        this.season = i;
        break;
      }
    }

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
