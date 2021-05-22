import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, tap, map, switchMap } from "rxjs/operators";
import { MessageDialogComponent } from "src/app/shared/components/message-dialog/message-dialog.component";
import { ProductInspectionService } from "src/app/shared/services/product-inspection.service";
import * as fromActions from "./product-inspection.actions";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { idProductInspectorSuccess } from "../../store/product-inspection/product-inspection.selectors";
import { fetchAllLots } from '../catalog-lots/catalog-lots.actions';

@Injectable({
  providedIn: "root",
})
export class ProductInspectionEffects {
  idProductSuccess: string;

  constructor(
    private actions$: Actions,
    private productsService: ProductInspectionService,
    public modalController: ModalController,
    private store: Store<AppStoreState>,
    private route: Router
  ) {}

  product$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newProduct),
      exhaustMap((action) =>
        this.productsService.newProductInspection(action.product).pipe(
          switchMap((id) => {
            this.openModal("Exitó", "¡Se ha guardado con exitó!");
            this.user(id.id);
            return [fromActions.newProductSuccess(id.id),fetchAllLots({typeLot: "DRIEF",status: "PENDING"})];
          }),
          catchError((error) => this.errorHandler(error))
        )
      )
    )
  );

  user(id) {
    this.route.navigate([`/user/${id}/create-user`]);
  }

  errorHandler(error: any) {
    this.openModal("Error", "¡Ha ocurrido un problema, intente de nuevo!");
    return of(fromActions.newProductError(error));
  }

  async openModal(title: string, message: string) {
    const modal = await this.modalController.create({
      component: MessageDialogComponent,
      cssClass: "modal-size",
      componentProps: {
        title: title,
        message: message,
      },
    });
    return await modal.present();
  }
}
