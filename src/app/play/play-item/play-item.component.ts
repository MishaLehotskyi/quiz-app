import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList, SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {SelectService} from "../../select.service";
import {Quiz} from "../../quiz.model";
import {interval} from "rxjs";
import {ResultService} from "../../result.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-play-item',
  templateUrl: './play-item.component.html',
  styleUrls: ['./play-item.component.css']
})
export class PlayItemComponent implements OnInit,AfterViewInit{
  @ViewChildren('li') lis!: QueryList<HTMLLIElement>;
  quiz: Quiz[] = [];
  scores: number = 0;
  currentQuestion: number = 0;
  counter: number = 0;
  correctAnswers: number = 0;
  interval$: any;
  serializedEls: string = '';
  constructor(private selectService: SelectService,private resultService: ResultService,public router: Router) {
  }

  ngOnInit(): void {
    this.quiz = this.selectService.quiz;
    this.startCounter();
  }

  onAnswer(currentQuestion: number, answer: string, elements: HTMLDivElement, li: HTMLLIElement,button: HTMLButtonElement) {
    let isLastQuestion : boolean = this.currentQuestion === this.quiz.length-1;
    let isCorrect : boolean = answer === this.quiz[currentQuestion].correct_answer;
    let isZero : boolean = this.scores === 0;
    button.disabled = false;
    elements.style.pointerEvents = 'none';
    if(isCorrect){
      this.scores += 10;
      this.correctAnswers ++;
      li.style.backgroundColor = 'green';
    }
    if(!isCorrect){
      li.style.backgroundColor = 'red';
    }
    if(!isCorrect && !isZero){
      this.scores -=10;
    }
    if(isLastQuestion){
      this.resultService.getResults(this.scores,this.correctAnswers,this.counter,this.quiz.length);
      this.stopCounter();
      this.router.navigate(['/result']);
    }
  }

  onNext(elements: HTMLDivElement,button: HTMLButtonElement){
    let isLastQuestion : boolean = this.currentQuestion === this.quiz.length-1;
    let isLess : boolean = this.currentQuestion < this.quiz.length-1;
    button.disabled = true;
    this.ngAfterViewInit();
    elements.style.pointerEvents = 'auto';
    if(isLess) {
      this.currentQuestion++;
    }
    if(isLastQuestion){
      button.disabled = true;
    }
  }
  onCancel(){
    this.stopCounter();
  }

  startCounter(){
    this.interval$ = interval(1000)
      .subscribe(val=>{
        this.counter++;
      });
  }

  stopCounter(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  ngAfterViewInit() {
    this.calculateSerializedEls();
    this.lis.forEach((li: HTMLLIElement)=> {li['nativeElement']['style']['backgroundColor'] = 'white'});
  }

  calculateSerializedEls() {
    setTimeout(() => {
      this.serializedEls = this.lis.map(p => p.id).join(', ');
    }, 0);
  }
}
