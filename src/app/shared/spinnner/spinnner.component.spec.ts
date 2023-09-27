import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnnerComponent } from './spinnner.component';

describe('SpinnnerComponent', () => {
  let component: SpinnnerComponent;
  let fixture: ComponentFixture<SpinnnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnnerComponent]
    });
    fixture = TestBed.createComponent(SpinnnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
