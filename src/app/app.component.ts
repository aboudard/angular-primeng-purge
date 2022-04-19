import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pushTruc = {
    nom: 'alain'
  }
  title = 'purgeApp';

  constructor() {}

  testPush(test = false): void {
    // this.pushTruc.nom = 'toto'; // ne fonctionnera pas en mode push
    const test2 = test;
    console.log(test2);
    this.pushTruc = {...this.pushTruc, nom: 'titi'};
  }
}
