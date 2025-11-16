import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3DefaultComponent } from './index3-default.component';

describe('Index3DefaultComponent', () => {
  let component: Index3DefaultComponent;
  let fixture: ComponentFixture<Index3DefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3DefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
