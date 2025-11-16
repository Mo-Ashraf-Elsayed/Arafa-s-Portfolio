import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleOneHomeComponent } from './style-one-home.component';

describe('StyleOneHomeComponent', () => {
  let component: StyleOneHomeComponent;
  let fixture: ComponentFixture<StyleOneHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleOneHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleOneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
