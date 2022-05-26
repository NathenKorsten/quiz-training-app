import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css'],
  providers: [QuizService],
})
export class ManageQuizComponent implements OnInit {
  constructor(private quizService: QuizService) {}
  id: number = 0;
  question: string = '';
  answers: any[] = [];
  correctAnswer: number = 0;
  quizForm = new FormGroup({
    question: new FormControl(),
    answerOne: new FormControl(),
    answerTwo: new FormControl(),
    answerThree: new FormControl(),
    answerFour: new FormControl(),
    correctAnswer: new FormControl(),
    submit: new FormControl(),
  });

  clearInputFields = () => {
    this.question = '';
    this.answers.splice(0);
    this.correctAnswer = 0;
  };
  addQuiz = () => {
    this.quizService.addNewQuiz(
      10,
      this.question,
      this.answers,
      this.correctAnswer
    );
    console.log(this.quizService.getQuizList());
    this.clearInputFields();
  };
  ngOnInit(): void {
    console.log(this.quizService.getQuizList());
  }
}
