export class Quiz{
    category : string
    type:string
    difficulty:string
    question:string
    correct_answer:string
    incorrect_answers:string[]
    answers:string[]
  constructor(category : string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[],
    answers:string[]){
    this.category = category;
    this.type = type;
    this.difficulty = difficulty;
    this.question = question;
    this.correct_answer = correct_answer;
    this.incorrect_answers = incorrect_answers;
    this.answers = answers;
  }

}
