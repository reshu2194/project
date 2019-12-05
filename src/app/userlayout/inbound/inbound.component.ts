import { Component, OnInit } from "@angular/core";
export interface PeriodicElement {
  time: Date;
  duration: string;
  customer_name: string;
  call_result: string;
  recording: string;
  disposition: string;
}
@Component({
  selector: "app-inbound",
  templateUrl: "./inbound.component.html",
  styleUrls: ["./inbound.component.css"]
})
export class InboundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  displayedColumns = [
    "time",
    "duration",
    "customer_name",
    "call_result",
    "recording",
    "disposition"
  ];
  // dataSource = ELEMENT_DATA;
}
