import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index3HeaderComponent } from './index3-header.component';

describe('Index3HeaderComponent', () => {
  let component: Index3HeaderComponent;
  let fixture: ComponentFixture<Index3HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index3HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index3HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
