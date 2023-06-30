import {Component, OnInit} from '@angular/core';
import {StatsService} from "../stats.service";
import {ApexChart, ApexTitleSubtitle} from "ng-apexcharts";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  numberOfQuizzes : number = 0;
  numberOfQuestions : number = 0;
  averageTimePerQuiz : number = 0;
  chartLabels : string[] = ['Correct answers','Wrong answers']
  chartSeries : number[] = [];
  chartDetails : ApexChart = {
    type : 'pie',
    toolbar : {
      show : true
    }
  };
  chartTitle : ApexTitleSubtitle = {
    text : 'Questions pie diagram',
    align : 'center'
  }
  constructor(private service: StatsService) {
  }

  ngOnInit(): void {
    this.numberOfQuizzes = this.service.getNumberOfQuizzes();
    this.numberOfQuestions = this.service.getNumberOfQuestions();
    this.averageTimePerQuiz = this.service.getAverageTime();
    this.chartSeries[0] = this.service.getCorrect();
    this.chartSeries[1] = this.service.getWrong();
  }

}
