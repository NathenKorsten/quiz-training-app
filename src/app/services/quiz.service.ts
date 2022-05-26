import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  quizList = [
    new Quiz(
      1,
      'What does HTML stand for ?',
      [
        'Hyper Trainer Marking Language',
        'Hyper Text Marketing Language',
        'Hyper Text Markup Language',
        'Hyper Text Markup Leveler',
      ],
      2
    ),
    new Quiz(
      2,
      'During program development, software requirements specify ?',
      [
        'How the program will accomplish the task',
        'What the task is that the program must perform',
        'How to dividide the task into subtasks',
        'How to test the program when it is done',
      ],
      1
    ),
    new Quiz(
      3,
      'Select the true statement',
      [
        'When you open a file for reading, if the file does not exits, an error occurs',
        'When you open a file for writing, if the file does not exist, a new file is created',
        'When you open a file for writing, if the file does not exist, the existing file is overwritten with the new file',
        'All of the mentioned',
      ],
      3
    ),
  ];

  getQuizList = () => {
    return this.quizList;
  };

  addNewQuiz = (
    id: number,
    question: string,
    answers: any[],
    correctAnswer: number
  ) => {
    this.quizList.push(new Quiz(id, question, answers, correctAnswer));
  };

  deleteQuiz = (id: number) => {
    const index = this.quizList.findIndex((quiz) => quiz.id == id);
    this.quizList.splice(index, 1);
  };
  constructor() {}
}
