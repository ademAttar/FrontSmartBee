import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesFermesComponent } from './mes-fermes.component';

describe('MesFermesComponent', () => {
  let component: MesFermesComponent;
  let fixture: ComponentFixture<MesFermesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesFermesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesFermesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
