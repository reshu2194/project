import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mainpage",
  templateUrl: "./mainpage.component.html",
  styleUrls: ["./mainpage.component.css"]
})
export class MainpageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  items = Array.from({ length: 10 }).map((_, i) => `${i}`);
  displayedColumns = [
    "time",
    "duration",
    "customer_name",
    "call_result",
    "recording",
    "disposition"
  ];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  time: Date;
  duration: string;
  customer_name: string;
  call_result: string;
  recording: string;
  disposition: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    time: new Date(),
    duration: "02.00",
    customer_name: "John Smithe",
    call_result: "success",
    recording: "true",
    disposition: "Network"
  },
  {
    time: new Date(),
    duration: "02.00",
    customer_name: "John Smithe",
    call_result: "success",
    recording: "true",
    disposition: "Network"
  },
  {
    time: new Date(),
    duration: "02.00",
    customer_name: "John Smithe",
    call_result: "success",
    recording: "true",
    disposition: "Network"
  },
  {
    time: new Date(),
    duration: "02.00",
    customer_name: "John Smithe",
    call_result: "success",
    recording: "true",
    disposition: "Network"
  },
  {
    time: new Date(),
    duration: "02.00",
    customer_name: "John Smithe",
    call_result: "success",
    recording: "true",
    disposition: "Network"
  },
  {
    time: new Date(),
    duration: "02.00",
    customer_name: "John Smithe",
    call_result: "success",
    recording: "true",
    disposition: "Network"
  }
];
