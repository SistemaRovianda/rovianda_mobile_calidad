import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import * as fromStepperActions from "../../../../shared/store/stepper/stepper.actions";
import * as fromStepperSelect from "../../../../shared/store/stepper/stepper.selector";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { AcceptanceDataFormComponent } from "../../components/acceptance-data-form/acceptance-data-form.component";
import { AcceptanceDataSecondFormComponent } from "../../components/acceptance-data-second-form/acceptance-data-second-form.component";
import { AcceptanceDataThirdFormComponent } from "../../components/acceptance-data-third-form/acceptance-data-third-form.component";

@Component({
  selector: "app-product-inspection",
  templateUrl: "./product-inspection.component.html",
  styleUrls: ["./product-inspection.component.scss"],
})
export class ProductInspectionComponent implements OnInit {
  steps: any = [
    {
      value: true,
    },
    {
      value: false,
    },
    {
      value: false,
    },
  ];

  @ViewChild(AcceptanceDataFormComponent, { static: false })
  firstForm: AcceptanceDataFormComponent;

  @ViewChild(AcceptanceDataSecondFormComponent, { static: false })
  secondForm: AcceptanceDataSecondFormComponent;

  @ViewChild(AcceptanceDataThirdFormComponent, { static: false })
  thirdForm: AcceptanceDataThirdFormComponent;

  disabledButton: boolean = true;

  loading$: Observable<boolean>;

  next$: Observable<boolean> = this.store.select(
    fromStepperSelect.SELECT_STEP(1)
  );

  index$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(fromStepperActions.stepperInit({ steps: this.steps }));
    setTimeout(() => {
      this.firstForm.form.valueChanges.subscribe(() => {
        this.disabledButton = this.firstForm.form.invalid;
      });
    }, 500);
  }

  onSubmit(payload) {
    //   this.generalData = payload;
    console.log(payload);
    this.index$.next(1);
    setTimeout(() => {
      this.secondForm.form.valueChanges.subscribe(() => {
        this.disabledButton = this.secondForm.form.invalid;
      });
    }, 200);
  }

  onSecondSubmit(payload) {
    // this.revisionData = payload;

    console.log(payload);
    this.index$.next(2);
    setTimeout(() => {
      this.thirdForm.form.valueChanges.subscribe(() => {
        this.disabledButton = this.thirdForm.form.invalid;
      });
    }, 200);
  }

  onThirdSubmit(payload) {
    // this.revisionData = payload;
    console.log(payload);
  }

  validateForm() {
    this.store.dispatch(
      fromStepperActions.stepperNext({
        num: 1,
        step: this.firstForm.form.valid,
      })
    );
    this.firstForm.onSubmit();
  }

  validateSecondForm() {
    this.store.dispatch(
      fromStepperActions.stepperNext({
        num: 2,
        step: this.secondForm.form.valid,
      })
    );
    this.secondForm.onSubmit();
  }

  addInspeccion() {
    this.thirdForm.onSubmit();

    // this.store.dispatch(fromActionsProduct.newProduct({ product: product }));
  }

  position(i: number) {
    console.log(i);

    this.index$.next(i);
  }
}
