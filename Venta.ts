import { Producto } from "./Producto";

export class Venta{
    private cod_venta:number=0;
    private subtotal:number=0;
    private iva:number=0;
    private fecha:number=0;
    private venta : string="";

    constructor(cod_venta:number,subtotal:number,iva:number,fecha:number,venta:string){
        this.cod_venta=cod_venta;
        this.subtotal=subtotal;
        this.iva=iva;
        this.fecha=fecha;
        this.venta=venta;
    }

    public get_cod_venta():number{
        return this.cod_venta;
    }
    public get_subtotal():number{
        return this.subtotal
    }
    public get_iva():number{
        return this.iva;
    }
    public get_fecha():number{
        return this.fecha;
    }

    public set_cod_venta(cod_venta:number){
        this.cod_venta = cod_venta;
    }
    public set_subtotal(subtotal:number){
        this.subtotal = subtotal;
    }
    public set_iva(iva:number){
        this.iva = iva;
    }
    public set_fecha(fecha:number){
        this.fecha = fecha;
    }

    public agregarAticulos(producto:Producto,cantidad:number):void {
        let registro ={
            codProd : producto.get_cod_producto(),
            cantidad : cantidad,
            unidad :producto.get_unidad(),
            venta: producto.get_venta()
        }
    }

    public buscarVenta(nReg:number){
     for(var reg of this.venta){
        if (reg['Registro']== nReg){
        console.log (" Registro: ") + reg["Registro"]+ "\n"+ reg["cod_venta"]+"\n"+ reg["fecha"];
         }
    
         else{
            console.log("encontrado");
             }
    
         }
    }
}
