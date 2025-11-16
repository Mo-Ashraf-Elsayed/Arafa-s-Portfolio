import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Index2FooterComponent } from './index-2-footer.component';

describe('Index2FooterComponent', () => {
  let component: Index2FooterComponent;
  let fixture: ComponentFixture<Index2FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Index2FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Index2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
