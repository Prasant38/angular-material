import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationPageComponent } from './transcation-page.component';

describe('TranscationPageComponent', () => {
  let component: TranscationPageComponent;
  let fixture: ComponentFixture<TranscationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranscationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
