import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCartComponent } from './preview-cart.component';

describe('PreviewCartComponent', () => {
  let component: PreviewCartComponent;
  let fixture: ComponentFixture<PreviewCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
