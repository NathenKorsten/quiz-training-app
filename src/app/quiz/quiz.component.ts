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
  private questions: any[] = [];
  constructor(private QuizList: QuizService) {
    this.quizList = this.QuizList.getQuizList();
  }

  @Output() quizEvent = new EventEmitter<Array<QuizService>>();

  sendQuiz = () => {
    this.questions = this.quizList;
    this.quizEvent.emit(this.questions);
  };

  ngOnInit(): void {
    this.sendQuiz();
  }
}
