import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Data} from "../models/data.model";
import {SelectService} from "../services/select.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit{
  newData: Data[] = [];
  constructor(private dataService: DataService,private selectService: SelectService,public router: Router) {
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.dataService.getData(i).subscribe(res => {
        this.newData.push(<Data>res)
      })
    }
  }
  onLucky(){
    const luckyNumber = Math.floor(Math.random() * this.newData.length);
    this.selectService.selectedQuiz(this.newData[luckyNumber].results);
    this.router.navigate(['/play/'+luckyNumber]);
  }
}
