import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuizComponent } from './quiz-list.component';

describe('QuizListComponent', () => {
  let component: ManageQuizComponent;
  let fixture: ComponentFixture<ManageQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageQuizComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
