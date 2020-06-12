import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptanceDataThirdFormComponent } from './acceptance-data-third-form.component';

describe('AcceptanceDataThirdFormComponent', () => {
  let component: AcceptanceDataThirdFormComponent;
  let fixture: ComponentFixture<AcceptanceDataThirdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptanceDataThirdFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptanceDataThirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
