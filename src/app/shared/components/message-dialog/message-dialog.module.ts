import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MessageDialogComponent } from "./message-dialog.component";
import { IonicModule } from "@ionic/angular";

const COMMON_IMPORTS = [CommonModule, IonicModule];

const COMMON_DECLARATIONS = [MessageDialogComponent];

@NgModule({
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  declarations: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class MessageDialogModule {}
