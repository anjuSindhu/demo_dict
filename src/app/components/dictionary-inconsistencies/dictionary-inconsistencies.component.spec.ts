import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryInconsistenciesComponent } from './dictionary-inconsistencies.component';

describe('DictionaryInconsistenciesComponent', () => {
  let component: DictionaryInconsistenciesComponent;
  let fixture: ComponentFixture<DictionaryInconsistenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryInconsistenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryInconsistenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
