import { Component } from '@angular/core';

interface User {
  name: string;
  age: number;
  isSingle: boolean;
  avatar: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'este es el title';

  rockbands: string[] = ['Metallica', 'Megadeth', 'ACDC'];
  users: User[] = [
    {
      name: 'Nicolas',
      age: 26,
      isSingle: false,
      avatar: 'assets/images/men.jpg',
    },
    {
      name: 'Julian',
      age: 28,
      isSingle: true,
      avatar: 'assets/images/woman.png',
    }
  ];
  rockBandName = '';

  changeTitle() {
    this.title = 'nuevo titulo';
  }

  deleteItem(index: number) {
    this.rockbands.splice(index, 1);
  }

  updateItem(index: number) {
    this.rockbands[index] = this.rockBandName;
  }

  addRockBand() {
    this.rockbands.push(this.rockBandName);
    this.rockBandName = '';
  }

  empty() {
    this.rockbands = [];
  }
}
