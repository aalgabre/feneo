import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibFeneoComponent } from './lib-feneo.component';

describe('LibFeneoComponent', () => {
  let component: LibFeneoComponent;
  let fixture: ComponentFixture<LibFeneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibFeneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibFeneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
