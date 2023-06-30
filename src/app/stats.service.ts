import {Injectable} from "@angular/core";

@Injectable()
export class StatsService{
  resultsArr:{numberOfQuestions: number,
              time: number,
              correctAnswers: number}[] = [];

  push(entity){
    this.resultsArr.push(entity);
  }

  getCorrect(){
    let overall: number = 0;
    this.resultsArr.forEach((el)=>{overall += el.correctAnswers});
    return overall;
  }

  getWrong(){
    let correct: number = this.getCorrect();
    let overall: number = 0;
    this.resultsArr.forEach((el)=>{overall += el.numberOfQuestions});
    return overall - correct;
  }

  getNumberOfQuizzes(){
    return this.resultsArr.length;
  }

  getNumberOfQuestions(){
    let overall: number = 0;
    this.resultsArr.forEach((el)=>{overall += el.numberOfQuestions});
    return overall;
  }

  getAverageTime(){
    let overallTime: number = 0;
    let overallQuizzes : number = this.getNumberOfQuizzes();
    this.resultsArr.forEach((el)=>{overallTime += el.time});
    return Number((overallTime/overallQuizzes).toFixed(2));
  }
}
