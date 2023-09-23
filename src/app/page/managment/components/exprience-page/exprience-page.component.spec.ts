import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpriencePageComponent } from './exprience-page.component';

describe('ExpriencePageComponent', () => {
  let component: ExpriencePageComponent;
  let fixture: ComponentFixture<ExpriencePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpriencePageComponent]
    });
    fixture = TestBed.createComponent(ExpriencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
