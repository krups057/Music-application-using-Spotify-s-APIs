import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchalbumComponent } from './searchalbum.component';

describe('SearchalbumComponent', () => {
  let component: SearchalbumComponent;
  let fixture: ComponentFixture<SearchalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
