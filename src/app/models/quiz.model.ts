export class Quiz {
  id: number;
  question: string;
  answers: any[];
  correctAnswer: number;

  constructor(
    id: number,
    question: string,
    answers: any[],
    correctAnswer: number
  ) {
    (this.id = id),
      (this.question = question),
      (this.answers = answers),
      (this.correctAnswer = correctAnswer);
  }
}
