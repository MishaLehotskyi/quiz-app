export class Data{
  public response_code: number;
  public results: [{
    category : string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[]}];
  constructor(response_code: number, results: [{
    category : string,
    type:string,
    difficulty:string,
    question:string,
    correct_answer:string,
    incorrect_answers:string[]}]){
      this.response_code = response_code;
      this.results = results;
  }

}
