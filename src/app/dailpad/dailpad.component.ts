import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dailpad",
  templateUrl: "./dailpad.component.html",
  styleUrls: ["./dailpad.component.css"]
})
export class DailpadComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DailpadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: "hello"
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
