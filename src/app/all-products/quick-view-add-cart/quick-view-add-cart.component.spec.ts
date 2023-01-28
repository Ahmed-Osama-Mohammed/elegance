import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewAddCartComponent } from './quick-view-add-cart.component';

describe('QuickViewAddCartComponent', () => {
  let component: QuickViewAddCartComponent;
  let fixture: ComponentFixture<QuickViewAddCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickViewAddCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickViewAddCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
