import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {HttpClientModule} from "@angular/common/http";
import { QuizItemComponent } from './quiz-list/quiz-item/quiz-item.component';
import {AppRoutingModule} from "./app-routing.module";
import { PlayItemComponent } from './play/play-item/play-item.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ResultsComponent } from './results/results.component';
import { StatsComponent } from './stats/stats.component';
import {DataService} from "./services/data.service";
import {SelectService} from "./services/select.service";
import {ResultService} from "./services/result.service";
import {StatsService} from "./services/stats.service";
import {NgApexchartsModule} from "ng-apexcharts";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizListComponent,
    QuizItemComponent,
    PlayItemComponent,
    ResultsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ],
  providers: [DataService,SelectService,ResultService,StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
