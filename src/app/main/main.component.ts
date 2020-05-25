import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  result: any = 0;
  input: any = 0;
  constructor() { }

  ngOnInit() { }

  getresult(params?: any) {
    console.log("res", params, this.result);

    // get input stream

    //sperate input stream

    //Appy the logic according to input
  }
  insertOperator() {

  }
  insertChar() {

  }
}
