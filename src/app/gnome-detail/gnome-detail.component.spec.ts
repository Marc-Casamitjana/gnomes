import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeDetailComponent } from './gnome-detail.component';

describe('GnomeDetailComponent', () => {
  let component: GnomeDetailComponent;
  let fixture: ComponentFixture<GnomeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
