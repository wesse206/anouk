import { Component } from '@angular/core';
import { random } from 'node-forge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: string = 'https://media1.tenor.com/m/2itFSdaZaw0AAAAC/rain-dance.gif'
  altResponse = 'Nee'
  notyes = true
  altResponseList = [
    "Ek is vlot in interpretatiewe dans!",
    "'Nee' as 'n uitdaging? Ek aanvaar!",
    "Jy's 'n rebel. Kom ons dans!",
    "Moenie bekommerd wees nie, ek oorreed met dans.",
    "Perfek! Kom ons begin dans!",
    "Ek wou vir 'n miskien gaan, maar ek sal met 'n weiering settle. Kom ons dans!",
    "Dans-detective hier. Ek maak nees oor in jas.",
    "'Nee' agteruit is 'on.' Toeval? Kom ons dans.",
    "Volharding is die sleutel. Tyd vir 'n dansmarathon!",
    "Ek toets jou vasberadenheid. Kom ons dans!",
    "'Nee' is nie in my danswoordeskat nie.",
    "Uitdaging aanvaar! Dodelike dansbewegings op pad.",
    "Jy moet 'n gedagteleser wees. Dans was volgende.",
    "Geen probleem! Ek verander 'nee' in 'dans!'",
    "Ek floreer op uitdagings. Dans van 'n leeftyd!",
    "Statisties gesproke, sê ja verhoog geluk. Dans toets!",
    "Jy het my by 'moet nie' gehad. Dansgeveg begin!",
    "Plan B: Dans totdat jy nie kan weerstaan ​​nie.",
    "Ek hou van 'n goeie uitdaging. Tyd vir dansmagie.",
    "Hulle sê ek kan enigiets wees, so ek het 'n dans-oortuiger geword.",
    "'Nee' as 'n antwoord? Ons praat dans hier.",
    "Swart gordel in dans-oortuiging. Maak gereed!",
    "Geen manier nie? Verblind deur danskrag wat binnekom.",
    "Ek was nog nooit goed in 'nee' neem nie. Breek die tradisie, kom ons dans!",
    "Sê 'nee,' ek sê 'dans.' Wen-wen situasie!",
    "Neem dit as 'n 'miskien' met ekstra dansstappe.",
    "Dans verbrand kalorieë! Dit is prakties 'n oefening!",
    "'Nee'? Cool. Dans my pad in jou hart.",
    "Kan nie nee vat nie, en dansbewegings is aanhoudend.",
    "Speel hard om te kry? Uitdaging aanvaar - dans tyd!",
    "Sê 'nee,' kry 'n dansvloer-konfrontasie.",
    "Niemand het berou gehad om met my te dans nie. Ek sê net.",
    "Geen probleem nie! Dans my pad na jou 'ja.'",
    "Sherlock Holmes van dans - oplossing vir die 'nee' raaisel.",
    "Dans ninja - stil maar dodelik op die dansvloer.",
    "Kan nie weerstaan ​​aan sjarme of dansbewegings nie. Kom ons gaan!"
  ]
  ChangeResponse() { 
    this.altResponse = this.altResponseList[Math.floor(Math.random() * this.altResponseList.length)]
  }
  SheSaidYes() {
    this.image = 'https://media1.tenor.com/m/kWrzVE6BRXoAAAAC/feik-happy.gif'
    this.notyes = false
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/