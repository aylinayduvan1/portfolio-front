import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommetnsComponent } from './commetns.component';

describe('CommetnsComponent', () => {
  let component: CommetnsComponent;
  let fixture: ComponentFixture<CommetnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommetnsComponent]
    });
    fixture = TestBed.createComponent(CommetnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
