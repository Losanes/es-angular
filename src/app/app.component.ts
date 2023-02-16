import { Component } from '@angular/core';
import { Nano } from './Nano';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oggetti:Nano[] = [
    new Nano(1, "Mammolo"),
    new Nano(2, "Brontolo"),
    new Nano(3, "Eolo"),
    new Nano(4, "Pisolo"),
    new Nano(5, "Dotto"),
    new Nano(6, "Gongolo"),
    new Nano(7, "Cucciolo")
  ];
  var1:string = "ciao a tutti";
  var2:string = "italic";
  var3:string = "";
}
