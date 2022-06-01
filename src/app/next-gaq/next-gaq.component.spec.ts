import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGaqComponent } from './next-gaq.component';

describe('NextGaqComponent', () => {
  let component: NextGaqComponent;
  let fixture: ComponentFixture<NextGaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextGaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextGaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
