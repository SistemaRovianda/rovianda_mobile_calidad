import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { whitespaceValidator } from "src/app/shared/validators/whitespace.validator";
import {
  ProductInterface,
  Products,
  ProductLot,
  ProductPresentation,
} from "src/app/shared/models/product-inspection.interface";
import isEmpty from "lodash.isempty";
import * as moment from "moment";
import { select, Store } from "@ngrx/store";
import { AppStoreState } from "src/app/shared/models/app-state.interface";
import { getPresentationOfProduct } from "../../store/products-rovianda/products-rovianda.actions";
import { Subscription } from "rxjs";
import { getPresentationsOfProductFromStore } from "../../store/products-rovianda/products-rovianda.selectors";
import { AlertController } from "@ionic/angular";
import { ProductService } from "src/app/shared/services/product.service";
import { ProductInspectionService } from "src/app/shared/services/product-inspection.service";
import { Router } from "@angular/router";

@Component({
  selector: "acceptance-data-form",
  templateUrl: "./acceptance-data-form.component.html",
  styleUrls: ["./acceptance-data-form.component.scss"],
})
export class AcceptanceDataFormComponent implements OnInit,OnDestroy {
  @Input() set generalData(form) {
    if (form) {
      this.form.patchValue(form);
    }
  }
  @Output("onSubmit") submit = new EventEmitter();

  form: FormGroup;
  filterProducts: ProductLot[];

  @Input() lots: Products[] = [];
  processId:number=null;
  lotId:string=null;
  ovenProductId:number=null;
  productPresentation:ProductPresentation[] =[];
  constructor(private fb: FormBuilder,private store: Store<AppStoreState>,private alertC:AlertController,private inspectionService:ProductInspectionService,
    private route: Router) {
    this.form = fb.group({
      productId: ["", [Validators.required]],
      presentationId:[null,[Validators.required]],
      expirationDate: ["", [Validators.required, whitespaceValidator]],
      numberPackages: ["", [Validators.required, whitespaceValidator]],
      observations: [null, [ whitespaceValidator]],
    });
    this.subscription = new Subscription();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectionPresentation(event:any){
    //console.log(typeof event);
    //console.log(JSON.stringify(event.detail.value));
  this.form.get("presentationId").setValue(event.detail.value);
  }
  subscription:Subscription;


  ngOnInit() {
    this.subscription.add(
      this.store.pipe(select(getPresentationsOfProductFromStore)).subscribe((productPresentation:ProductPresentation[])=>{
        this.productPresentation = productPresentation;
      })
    );
  }

  onSubmit() {
    if(this.processId!=null && this.lotId!=null && this.form.valid){
    const { expirationDate, ...value } = this.form.value;

    const payload = {
      ...value,
      processId:this.processId,
      lotId:this.lotId,
      expirationDate: moment(expirationDate).format("YYYY-MM-DD"),
    };

    this.submit.emit(payload);
  }
  }

  async confirmCloseInspection(){
    
    const alert =  this.alertC.create({
      header: "Confirmación",
      message: "¿Seguro que desea cerrar la inspección para este lote?",
      buttons: [
        {
          text: "Cancelar",
        },{
          text: "Cerrar lote",
          cssClass: "btn-confirm-dialog",
          handler: () => {
            this.closeLot();
        }
      }
      ]
    });
    (await alert).present();
  }

  closeLot(){
    this.inspectionService.closeInspection(this.ovenProductId).subscribe(()=>{
      this.showGenericMsg("Información","Lote cerrado",true);
    },(err)=>{
      this.showGenericMsg("Error","Ocurrio un error al cerrar el lote, intente mas tarde, o consulte al administrador.",true);
    })
  }

  async showGenericMsg(title:string,msg:string,redirect:boolean){
    (await this.alertC.create({header:title,message:msg,buttons:[
      {text:"Aceptar",
      handler:()=>{
        if(redirect){
          this.route.navigateByUrl("/menu");
        }
      }
  }]})).present();
  }

  selectionLot(lot:any){
    this.ovenProductId=lot.detail.value.ovenProductId;
    this.processId=lot.detail.value.processId;
    this.lotId=lot.detail.value.lotId;
  }
  change(evt) {
    this.form.get("productId").setValue(evt.detail.value.productId);
    this.store.dispatch(getPresentationOfProduct({productId:evt.detail.value.productId}));
    this.processId=null;
    this.lotId=null;
    this.filterProducts = evt.detail.value.lot;
  }

  disabled(e) {
    return isEmpty(e);
  }
}
