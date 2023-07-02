import {Component, OnInit} from '@angular/core';
import {ResultService} from "../services/result.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit{
  points: number
  correctAnswers: number
  timeInSeconds: number
  percentage: number
  timePerQuestion: number
  constructor(private service: ResultService) {
  }

  ngOnInit(): void {
    this.points = this.service.points;
    this.correctAnswers = this.service.correctAnswers;
    this.timeInSeconds = this.service.timeInSeconds;
    this.percentage = this.service.percentage;
    this.timePerQuestion = this.service.timePerQuestion;
  }

}
