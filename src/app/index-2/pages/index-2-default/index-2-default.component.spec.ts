import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2DefaultComponent } from './index-2-default.component';

describe('Index2DefaultComponent', () => {
  let component: Index2DefaultComponent;
  let fixture: ComponentFixture<Index2DefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2DefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
