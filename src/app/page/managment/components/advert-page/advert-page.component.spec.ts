import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertPageComponent } from './advert-page.component';

describe('AdvertPageComponent', () => {
  let component: AdvertPageComponent;
  let fixture: ComponentFixture<AdvertPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertPageComponent]
    });
    fixture = TestBed.createComponent(AdvertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
