import { Inject, Injectable } from "@angular/core";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { File } from "@ionic-native/file/ngx";
import { ToastController } from "@ionic/angular";
import { API_ENDPOINT_PROVIDER } from "../../providers/tokens";
import { Storage } from "@ionic/storage";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class Reportervice {
  url: string;

  constructor(
    private fileOpener: FileOpener,
    private fileTransfer: FileTransfer,
    private file: File,
    private toastCtrl: ToastController,
    private storage: Storage,
    private authService: AuthService,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}`;
  }

  getReport(id: string) {
    console.log("pdfService... " + id);
    let fileTransfer = this.fileTransfer.create();
    this.storage.get("token").then((token) => {
      fileTransfer
        .download(
          `${
            this.endpoint
          }report/drying/${id}?uid=${this.authService.getUID()}`,
          this.file.dataDirectory + id + ".pdf",
          false,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((entry) => {
          this.fileOpener
            .open(entry.toURL(), "application/pdf")
            .then(() => {
              this.toastSuccessDownload();
            })
            .catch((error) => console.log("Error opening file", error));
        });
      // })
    });
  }

  async toastSuccessDownload() {
    const toast = await this.toastCtrl.create({
      message: "Se decargo con exito",
      duration: 2000,
      color: "success",
    });

    return await toast.present();
  }
}
