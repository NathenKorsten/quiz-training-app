import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css'],
})
export class ListQuizComponent implements OnInit {
  quizQuestion: any[] = [];

  recieveQuiz = ($event: any[]) => {
    this.quizQuestion = $event;
  };
  constructor() {}
  ngOnInit(): void {}
}
