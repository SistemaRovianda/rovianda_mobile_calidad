import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DryingLabelFormComponent } from './drying-label-form.component';

describe('DryingLabelFormComponent', () => {
  let component: DryingLabelFormComponent;
  let fixture: ComponentFixture<DryingLabelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DryingLabelFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DryingLabelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
