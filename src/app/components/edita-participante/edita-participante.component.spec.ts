import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaParticipanteComponent } from './edita-participante.component';

describe('EditaParticipanteComponent', () => {
  let component: EditaParticipanteComponent;
  let fixture: ComponentFixture<EditaParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
