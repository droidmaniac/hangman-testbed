import { TestBed } from '@angular/core/testing';
import { LetterButtonsComponent } from './letter-buttons.component';

describe('LetterButtonsComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterButtonsComponent]
    });
  });

  fit('should display a button for each letter of the alphabet', () => {
    const fixture = TestBed.createComponent(LetterButtonsComponent);
    fixture.autoDetectChanges();
    const component = fixture.componentInstance;
    const element = fixture.nativeElement;
    console.log('element:', element);
  });

});
