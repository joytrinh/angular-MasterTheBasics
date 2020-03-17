import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//for AppComponent below, check index.html <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Joy's website";
  public name = "JoyTrinh"
  public message = ""
}
