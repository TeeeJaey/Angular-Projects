import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmanagerFormComponent } from './taskmanager-form.component';

describe('TaskmanagerFormComponent', () => {
  let component: TaskmanagerFormComponent;
  let fixture: ComponentFixture<TaskmanagerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmanagerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmanagerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
