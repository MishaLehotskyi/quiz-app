import {Injectable} from "@angular/core";
import {Quiz} from "../models/quiz.model";
@Injectable()
export class SelectService{

  quiz : Quiz[] = [];
  htmldecode = function (input: string){
    const parser = new DOMParser().parseFromString(input,"text/html")
    return parser.documentElement.textContent;
  }
  htmldecodearr = function (input: string[]){
    let output = []
    for (let str of input) {
      const parser = new DOMParser().parseFromString(str, "text/html")
      output.push(parser.documentElement.textContent)
    }
    return output;
  }

  selectedQuiz(arr : Object[]){
    for (let quiz of arr) {
      quiz["question"] = this.htmldecode(quiz["question"])
      quiz["correct_answer"] = this.htmldecode(quiz["correct_answer"])
      quiz["incorrect_answers"] = this.htmldecodearr(quiz["incorrect_answers"])
      quiz["answers"] = [quiz["correct_answer"],...quiz["incorrect_answers"]].sort();
    }
    this.quiz = <Quiz[]>arr;
  }
}
