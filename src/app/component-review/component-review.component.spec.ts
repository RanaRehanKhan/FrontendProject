import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReviewComponent } from './component-review.component';

describe('ComponentReviewComponent', () => {
  let component: ComponentReviewComponent;
  let fixture: ComponentFixture<ComponentReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
