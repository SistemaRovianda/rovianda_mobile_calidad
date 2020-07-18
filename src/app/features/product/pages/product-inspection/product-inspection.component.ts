import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import * as fromStepperActions from "../../../../shared/store/stepper/stepper.actions";
import * as fromStepperSelect from "../../../../shared/store/stepper/stepper.selector";
import { Store } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { AcceptanceDataFormComponent } from "../../components/acceptance-data-form/acceptance-data-form.component";
import { AcceptanceDataSecondFormComponent } from "../../components/acceptance-data-second-form/acceptance-data-second-form.component";
import { AcceptanceDataThirdFormComponent } from "../../components/acceptance-data-third-form/acceptance-data-third-form.component";
import { Router } from "@angular/router";

import * as fromActionsProduct from "../../../product/store/product-inspection/product-inspection.actions";
import * as fromCatalogLots from "../../../product/store/catalog-lots/catalog-lots.selector";
import { lotResponse } from "src/app/shared/models/product-inspection.interface";

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

  apareanceFirstForm: any;

  apareanceSecondForm: any;

  apareanceThirdForm: any;

  lots$: Observable<lotResponse[]> = this.store.select(
    fromCatalogLots.fetchAllLots
  );

  constructor(private store: Store<AppStoreState>, private route: Router) {}

  ngOnInit() {
    this.store.dispatch(fromStepperActions.stepperInit({ steps: this.steps }));
    setTimeout(() => {
      this.firstForm.form.valueChanges.subscribe(() => {
        this.disabledButton = this.firstForm.form.invalid;
      });
    }, 500);
  }

  onSubmit(payload) {
    this.apareanceFirstForm = payload;

    this.index$.next(1);
    setTimeout(() => {
      this.secondForm.form.valueChanges.subscribe(() => {
        this.disabledButton = this.secondForm.form.invalid;
      });
    }, 200);
  }

  onSecondSubmit(payload) {
    this.apareanceSecondForm = payload;
    this.index$.next(2);
    setTimeout(() => {
      this.thirdForm.form.valueChanges.subscribe(() => {
        this.disabledButton = this.thirdForm.form.invalid;
      });
    }, 200);
  }

  onThirdSubmit(payload) {
    this.apareanceThirdForm = payload;
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
  }

  position(i: number) {
    this.index$.next(i);
  }

  onBack(evt) {
    this.route.navigateByUrl("/menu");
  }

  onSaveInspection() {
    this.thirdForm.onSubmit();

    const { ...firstForm } = this.apareanceFirstForm;
    const { ...secondForm } = this.apareanceSecondForm;
    const { ...thirdForm } = this.apareanceThirdForm;

    const form = {
      ...firstForm,
      validations: {
        ...secondForm,
        ...thirdForm,
      },
    };

    this.store.dispatch(fromActionsProduct.newProduct({ product: form }));
  }
}
