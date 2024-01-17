import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopComponentComponent } from './back-to-top-component.component';

describe('BackToTopComponentComponent', () => {
  let component: BackToTopComponentComponent;
  let fixture: ComponentFixture<BackToTopComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackToTopComponentComponent]
    });
    fixture = TestBed.createComponent(BackToTopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
