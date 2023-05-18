import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayComponent } from './header-lay.component';

describe('HeaderLayComponent', () => {
  let component: HeaderLayComponent;
  let fixture: ComponentFixture<HeaderLayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
