import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunturiComponent } from './anunturi.component';

describe('AnunturiComponent', () => {
  let component: AnunturiComponent;
  let fixture: ComponentFixture<AnunturiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnunturiComponent]
    });
    fixture = TestBed.createComponent(AnunturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
