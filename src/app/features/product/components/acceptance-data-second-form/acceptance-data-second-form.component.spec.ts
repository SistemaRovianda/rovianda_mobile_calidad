import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptanceDataSecondFormComponent } from './acceptance-data-second-form.component';

describe('AcceptanceDataSecondFormComponent', () => {
  let component: AcceptanceDataSecondFormComponent;
  let fixture: ComponentFixture<AcceptanceDataSecondFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptanceDataSecondFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptanceDataSecondFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
