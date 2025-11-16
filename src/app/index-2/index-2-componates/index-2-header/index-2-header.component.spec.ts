import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2HeaderComponent } from './index-2-header.component';

describe('Index2HeaderComponent', () => {
  let component: Index2HeaderComponent;
  let fixture: ComponentFixture<Index2HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
