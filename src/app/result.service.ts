import {Injectable} from "@angular/core";
import {StatsService} from "./stats.service";

@Injectable()
export class ResultService{
  points: number
  correctAnswers: number
  timeInSeconds: number
  percentage: number
  timePerQuestion: number

  constructor(private statsService: StatsService) {
  }
    getResults(points: number,correctAnswers: number, time: number, numberOfQuestions: number){
      this.points = points;
      this.correctAnswers = correctAnswers;
      this.timeInSeconds = time;
      this.percentage = correctAnswers/numberOfQuestions*100;
      this.timePerQuestion = Number((time/numberOfQuestions).toFixed(2));
      this.statsService.push({
        numberOfQuestions: numberOfQuestions,
        time: time,
        correctAnswers: correctAnswers
      });
    }
}
