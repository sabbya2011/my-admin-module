import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationEntityUpdatorComponent } from './pagination-entity-updator.component';

describe('PaginationEntityUpdatorComponent', () => {
  let component: PaginationEntityUpdatorComponent;
  let fixture: ComponentFixture<PaginationEntityUpdatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationEntityUpdatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationEntityUpdatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
