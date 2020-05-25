import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainComponent } from "./main/main.component";
import { DemoMaterialModule } from "./material-module";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
