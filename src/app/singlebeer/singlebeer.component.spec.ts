import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebeerComponent } from './singlebeer.component';

describe('SinglebeerComponent', () => {
  let component: SinglebeerComponent;
  let fixture: ComponentFixture<SinglebeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglebeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglebeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
