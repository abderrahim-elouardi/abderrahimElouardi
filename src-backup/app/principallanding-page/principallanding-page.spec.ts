import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipallandingPage } from './principallanding-page';

describe('PrincipallandingPage', () => {
  let component: PrincipallandingPage;
  let fixture: ComponentFixture<PrincipallandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipallandingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipallandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
