import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHomeOneComponent } from './default-home-one.component';

describe('DefaultHomeOneComponent', () => {
  let component: DefaultHomeOneComponent;
  let fixture: ComponentFixture<DefaultHomeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultHomeOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultHomeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
