import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtlesComponent } from './turtles.component';

describe('TurtlesComponent', () => {
  let component: TurtlesComponent;
  let fixture: ComponentFixture<TurtlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurtlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurtlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
