import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRFormComponent } from './my-r-form.component';

describe('MyRFormComponent', () => {
  let component: MyRFormComponent;
  let fixture: ComponentFixture<MyRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
