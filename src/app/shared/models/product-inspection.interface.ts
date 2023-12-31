export interface ProductInspection {
  lotId: string;
  expirationDate: string;
  productId: string;
  numberpackages: number;
  observations: string;
  validations: Validations;
}

interface Validations {
  packagingControl: boolean;
  foreignMatter: boolean;
  transport: boolean;
  weightPerPiece: boolean;
  temperature: boolean;
  odor: boolean;
  colour: boolean;
  texture: boolean;
}

export interface ProductInterface {
  loteId: number;
  description: string;
  id?: number;
  warehouseDriefId?: string;
  quantity?: string;
}

export interface lotResponse {
  loteId: string;
  products: ProductInterface[];
}

export interface ProductRovianda {
  id: number;
  name: string;
}

export interface Products {
  productId: number;
  product: string;
  lot: ProductLot[];
}

export interface ProductLot {
  lotId: number;
  processId: string;
  ovenProductId:number;
}

export interface ProductPresentation{
    id: number;
    presentation: number;
    presentationType: string;
    keySae:string;
}
