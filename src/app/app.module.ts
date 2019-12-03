import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UserlayoutComponent } from "./userlayout/userlayout.component";
import { LoginComponent } from "./userlayout/login/login.component";
import { ProcessSelectionComponent } from "./userlayout/process-selection/process-selection.component";
import { from } from "rxjs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatTabsModule,
  MatSelectModule,
  MatTableModule,
  MatIconModule
} from "@angular/material";
import { MainpageComponent } from "./userlayout/mainpage/mainpage.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DailpadComponent } from "./dailpad/dailpad.component";

const routes: Routes = [
  { path: " ", component: LoginComponent },
  { path: "process-selection", component: ProcessSelectionComponent },
  { path: "mainpage", component: MainpageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserlayoutComponent,
    LoginComponent,
    ProcessSelectionComponent,
    MainpageComponent,
    DailpadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MatTableModule,
    ScrollingModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
