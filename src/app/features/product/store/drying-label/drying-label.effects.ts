import { Injectable } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, exhaustMap, tap } from "rxjs/operators";
import { MessageDialogComponent } from "src/app/shared/components/message-dialog/message-dialog.component";
import { DryingService } from "src/app/shared/services/drying.service";
import * as fromActions from "./drying-label.actions";

@Injectable({
  providedIn: "root",
})
export class DryingLabelEffects {
  constructor(
    private actions$: Actions,
    private dryingService: DryingService,
    public modalController: ModalController
  ) {}

  product$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.newProduct),
      exhaustMap((action) =>
        this.dryingService.newDrying(action.product).pipe(
          tap((id) => {
            fromActions.newProductSuccess(id);
            this.openModal("Exitó", "¡Se ha guardado con exitó!");
          }),
          catchError((error) => this.errorHandler(error))
        )
      )
    )
  );

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
