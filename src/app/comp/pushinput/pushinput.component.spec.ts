import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushinputComponent } from './pushinput.component';

describe('PushinputComponent', () => {
  let component: PushinputComponent;
  let fixture: ComponentFixture<PushinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
