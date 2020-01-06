import { Component } from '@angular/core';

@Component({
  selector: 'thy',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  seciliSehir;
  sehirler: string[] = ["İstanbul", "Ankara", "İzmir", "Bursa", "Konya"];
  seciliYap(s: string) {
    this.seciliSehir = s;
  }
}
