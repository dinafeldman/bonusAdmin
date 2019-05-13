import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLineComponent } from './client-line.component';

describe('ClientLineComponent', () => {
  let component: ClientLineComponent;
  let fixture: ComponentFixture<ClientLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
