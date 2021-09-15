import { Component } from "@angular/core";

@Component({
  selector:'[app-warning-alert]',
  template:`
  <style>
    h3 {
      text-align: center;
      margin: 30px;
      padding: 10px 10px;
      background-color: pink;
      border-color: red;
      border-radius: 50%;
    }
  </style>
  <h3> This is Warning!!!</h3>`,

})
export class WarningComponent {}
