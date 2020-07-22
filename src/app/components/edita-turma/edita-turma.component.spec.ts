import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaTurmaComponent } from './edita-turma.component';

describe('EditaTurmaComponent', () => {
  let component: EditaTurmaComponent;
  let fixture: ComponentFixture<EditaTurmaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaTurmaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
