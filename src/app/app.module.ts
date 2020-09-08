import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import {
  FileTransfer,
  FileTransferObject,
} from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppProvidersModule } from "./providers/app-providers.module";
import { MessageDialogModule } from "./shared/components/message-dialog/message-dialog.module";
import { effects } from "./shared/store/effect/index.effects";
import { metaReducers, reducers } from "./shared/store/reducer/index.reducer";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
    }),
    HttpClientModule,
    AppProvidersModule,
    MessageDialogModule,
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppProvidersModule,
    FileTransfer,
    FileOpener,
    FileTransferObject,
    File,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
