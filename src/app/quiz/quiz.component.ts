import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { QuizService } from '../services/quiz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService],
})
export class QuizComponent implements OnInit {
  quizList: any[];
  score: number = 0;
  correctAnswer: number = 0;
  answers: any[] = [];
  private questions: any[] = [];
  constructor(private QuizList: QuizService) {
    this.quizList = this.QuizList.getQuizList();
  }

  @Output() quizEvent = new EventEmitter<Array<QuizService>>();

  sendQuiz = () => {
    this.questions = this.quizList;
    this.quizEvent.emit(this.questions);
  };

  handleAnswers = (event: Event) => {
    this.answers.push(event.target);
    console.log(<HTMLInputElement>event.target);
  };
  // handleSubmit(event: Event) {
  //   // window.alert('submit button clicked');
  //   this.answers.forEach((answer) => {
  //     console.log(answer.innerText);
  //   });

  //   this.quizList.forEach((quizAnswer) => {
  //     this.answers.forEach((answer) => {
  //       this.correctAnswer = quizAnswer.correctAnswer;
  //       if (answer == quizAnswer.answers[this.correctAnswer]) this.score++;
  //       console.log(quizAnswer.answers[this.correctAnswer]);
  //     });
  //   });
  //   console.log(this.score);
  // }

  ngOnInit(): void {
    this.sendQuiz();
  }
}
