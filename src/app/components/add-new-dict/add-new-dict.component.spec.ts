import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDictComponent } from './add-new-dict.component';

describe('AddNewDictComponent', () => {
  let component: AddNewDictComponent;
  let fixture: ComponentFixture<AddNewDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
