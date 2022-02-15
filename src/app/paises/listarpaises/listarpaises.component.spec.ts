import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpaisesComponent } from './listarpaises.component';

describe('ListarpaisesComponent', () => {
  let component: ListarpaisesComponent;
  let fixture: ComponentFixture<ListarpaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpaisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarpaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
