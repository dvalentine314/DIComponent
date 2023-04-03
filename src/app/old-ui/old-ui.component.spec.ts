import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldUIComponent } from './old-ui.component';

describe('OldUIComponent', () => {
  let component: OldUIComponent;
  let fixture: ComponentFixture<OldUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldUIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
