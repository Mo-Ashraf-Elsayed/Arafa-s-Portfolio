import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearBoxComponent } from './gear-box.component';

describe('GearBoxComponent', () => {
  let component: GearBoxComponent;
  let fixture: ComponentFixture<GearBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
