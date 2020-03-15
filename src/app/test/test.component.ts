import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',
  //we can change template as below: we write inline template because we can see the 
  //template and class at the same time
  template: `
            <h3>{{nam | lowercase}}</h3>  
            <h3>{{nam | uppercase}}</h3>
            <h3>{{nam | titlecase}}</h3> 
            <h3>{{nam | slice:3}}</h3><!--Trinh-->   
            <h3>{{nam | slice:3:5}}</h3><!--Tr-->  
            <h3>{{person | json}}</h3>    
            <h3>{{5.678 | number:'1.2-3'}}</h3> <!--5.678-->
            <h3>{{5.678 | number:'3.4-5'}}</h3> <!--005.6780-->
            <h3>{{5.678 | number:'3.1-2'}}</h3> <!--005.67-->
            <h3>{{0.25 | percent}}</h3> <!--25%-->
            <h3>{{1.25 | currency:'GBP'}}</h3> <!--£1.25-->
            <h3>{{1.25 | currency:'EUR': 'code'}}</h3> <!--EUR1.25-->
            <h3>{{date}}</h3> <!--Sun Mar 15 2020 17:52:04 GMT+0700 (Indochina Time)-->
            <h3>{{date | date: 'short'}}</h3> <!--3/15/20, 5:52 PM-->
            <h3>{{date | date: 'shortDate'}}</h3> <!--3/15/20-->
            <h3>{{date | date: 'shortTime'}}</h3> <!--5:52 PM-->
            <h3>{{"Hello " + nam}}</h3>
            <button (click)="fireEvent()">Send event</button>
            <div *ngFor = "let color of colors; index as i">
              <h3>{{i}} {{color}}</h3>
            </div>
            <div *ngFor = "let color of colors; odd as f">
              <h3>{{f}} {{color}}</h3>
            </div>
            <div [ngSwitch]="color">
              <div *ngSwitchCase="'red'">You pick red color</div>
              <div *ngSwitchCase="'blue'">You pick blue color</div>
              <div *ngSwitchCase="'green'">You pick green color</div>
              <div *ngSwitchDefault>Pick again</div>
            </div>


            <h2 *ngIf='isSpecial; then Block; else elseBlock'></h2>
            <ng-template #Block>
              <h2>Hello World</h2>
            </ng-template>
            <ng-template #elseBlock>
              <h2>Hello guest</h2>
            </ng-template>

            <h2 class="text-success">
                Welcome {{name}}
            </h2>
            <h2>
                {{2+3}}
            </h2>
            <h2>
                {{"2+3"}}
            </h2>
            <h2 [class.text-danger]="hasError">
                {{"Hello " + name}}
            </h2>
            <h2 class="text-special" [class] = "successClass">
                {{greeting()}}
            </h2>
            <h2 [ngClass] = "messageClasses">
                {{name}}
            </h2>
            <h2 [style.color]="'orange'">Style Binding 1</h2>
            <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>
            <h2 [style.color]="highLightColor">Style Binding 3</h2>
            <h2 [ngStyle]="titleStyle">Style Binding 4</h2>
            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Log</button>
            <input [id]="myId" type="text">
            <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Rainy day">
            <input [(ngModel)] = "twoWayBinding" type="text" > {{twoWayBinding}}
            <button (click)="onClick($event)">Greet</button> {{response}}
            `,
  //<input disabled="false" id="{{myId}}" type="text" value="Sunny day"> disabled is still true
  //styleUrls: ['./test.component.scss']
  //we use [ngStyle] function
  //#myInput is a variable
  styles: [`
    .text-success {
      color: green
    }
    .text-danger {
      color: red
    }
    .text-special {
      font-style: italic
    }
  `]
})
export class TestComponent implements OnInit {
  
  public date = new Date()
  public person = {
    firstName: "Joy",
    lastName: "Cheng"
  }
  //@Input() public parentData;//receive input from parent app
  @Input('parentData') public nam
  //Send result from the child to parent
  @Output() public childEvent = new EventEmitter()
  public colors = ["red", "green", "yellow", "blue"]
  public color = ""
  public twoWayBinding = ""
  public name = "a joyful world"
  public myId = 'testId'
  public isDisabled = false
  public successClass = "text-success"
  public hasError = false
  public isSpecial = true
  public highLightColor = 'orange'
  public response = ""
  public titleStyle = {
    color: 'blue',
    fontStyle: 'italic'
  }
  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit(): void {
  }
  greeting(){
    return "Hello " + this.name
  }
  onClick(event){
    console.log(event)
    this.response = event.type
  }
  logMessage(value){
    console.log(value)
  }
  fireEvent(){
    this.childEvent.emit("Hey guys")
  }
}
