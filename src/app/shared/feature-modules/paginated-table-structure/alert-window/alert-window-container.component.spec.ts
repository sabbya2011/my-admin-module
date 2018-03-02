import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionContainerComponent } from './alert-window-container.component';

describe('SelectionContainerComponent', () => {
  let component: SelectionContainerComponent;
  let fixture: ComponentFixture<SelectionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
