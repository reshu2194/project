import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailpadComponent } from './dailpad.component';

describe('DailpadComponent', () => {
  let component: DailpadComponent;
  let fixture: ComponentFixture<DailpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
