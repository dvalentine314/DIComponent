import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUIComponent } from './new-ui.component';

describe('NewUIComponent', () => {
  let component: NewUIComponent;
  let fixture: ComponentFixture<NewUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
