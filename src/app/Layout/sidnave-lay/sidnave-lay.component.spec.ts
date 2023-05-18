import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidnaveLayComponent } from './sidnave-lay.component';

describe('SidnaveLayComponent', () => {
  let component: SidnaveLayComponent;
  let fixture: ComponentFixture<SidnaveLayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidnaveLayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidnaveLayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
