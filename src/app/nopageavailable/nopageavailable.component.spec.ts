import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopageavailableComponent } from './nopageavailable.component';

describe('NopageavailableComponent', () => {
  let component: NopageavailableComponent;
  let fixture: ComponentFixture<NopageavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopageavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopageavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
