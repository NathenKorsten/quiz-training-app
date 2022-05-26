export class Question {
  questionID: number;
  options: any[];

  constructor(questionID: number, options: any[]) {
    this.questionID = questionID;
    this.options = options;
  }
}
