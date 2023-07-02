import {Component, Input} from '@angular/core';
import {Data} from "../../models/data.model";
import {SelectService} from "../../services/select.service";

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.css']
})
export class QuizItemComponent {
    @Input() quiz: Data;
    @Input() index: number;
    constructor(private service: SelectService) {
    }
  onClick(){
    this.service.selectedQuiz(this.quiz.results)
  }
}
