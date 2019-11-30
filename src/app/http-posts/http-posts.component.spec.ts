import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostsComponent } from './http-posts.component';

describe('HTtpPostsComponent', () => {
  let component: HttpPostsComponent;
  let fixture: ComponentFixture<HttpPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
