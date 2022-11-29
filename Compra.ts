import { Producto } from "./Producto";

export class Compra {
    private cod_compra:number=0;
    private num_doc:number=0;
    private cod_provedor:number=0;
    private subtotal:number=0;
    private iva:number=0;
    private fecha: number=0;
    private detalle_compras : any[] = [];
    private compra:string="";

    constructor(cod_compra:number,num_doc:number,cod_provedor:number,subtotal:number,iva:number,fecha:number,
        compra:string){
        this.cod_compra= cod_compra;
        this.num_doc= num_doc;
        this.cod_provedor = cod_provedor;
        this.subtotal = subtotal;
        this.iva= iva;
        this.fecha= fecha;
        this.compra=compra;
    }

    public get_cod_compra(): number {
        return this.cod_compra;
    }
    public get_num_doc(): number {
        return this.num_doc;
    }
    public get_cod_provedor(): number {
        return this.cod_provedor;
    }
    public get_subtotal(): number {
        return this.subtotal;
    }
    public get_iva(): number {
        return this.iva;
    }
    public get_fecha(): number {
        return this.fecha;
    }
    public set_cod_compra(cod_compra:number){
        this.cod_compra = cod_compra ;
    }
    public set_num_doc(num_doc:number){
        this.num_doc = num_doc;
    }
    public set_cod_provedor(cod_provedor:number){
        this.cod_provedor = cod_provedor;
    }
    public set_subtotal(subtotal:number){
        this.subtotal= subtotal;
    }
    public set_iva(iva:number){
        this.iva = iva;
    }
    public set_fecha(fecha:number){
        this.fecha = fecha;
    }
    
    public agregarArticulos(producto:Producto,cantidad: number ):void{
        let registro = {
            codProd : producto.get_cod_producto(),
            cantidad : cantidad,
            unidad :  producto.get_unidad(),
            precio: producto.get_precio()
        }
        producto.set_stock(producto.get_stock()+cantidad);
        this.subtotal += cantidad * producto.get_precio();
        this.iva += (cantidad * producto.get_precio()) - ((cantidad * producto.get_precio())/1.16);
    }

    public buscarVenta(nReg:number){
        for(var reg of this.compra){
           if (reg['Registro']== nReg){
           console.log (" Registro: ") + reg["Registro"]+"\n"+ reg["num_doc"] +"\n"+reg["cod_compra"] 
           +"\n"+ reg["cod_provedor"]+"\n"+reg["fecha"];
            }
       
            else{
               console.log("encontrado");
                }
       
            }
       }


}