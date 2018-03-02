import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedTableViewComponent } from './paged-table-view.component';

describe('PagedTableViewComponent', () => {
  let component: PagedTableViewComponent;
  let fixture: ComponentFixture<PagedTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
