import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//for AppComponent below, check index.html <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helloWorld';
  public name = "JoyTrinh"
  public message = ""
}
