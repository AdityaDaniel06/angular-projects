import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTdFormComponent } from './my-td-form.component';

describe('MyTdFormComponent', () => {
  let component: MyTdFormComponent;
  let fixture: ComponentFixture<MyTdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
