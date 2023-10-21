import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposteriaComponent } from './reposteria.component';

describe('ReposteriaComponent', () => {
  let component: ReposteriaComponent;
  let fixture: ComponentFixture<ReposteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposteriaComponent]
    });
    fixture = TestBed.createComponent(ReposteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
