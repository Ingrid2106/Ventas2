import { Producto } from './Producto';
export class Pedido {
    private cod_pedido:number=0;
    private fecha: number=0;
    private total:number=0;
    private pedido : string="";

    constructor(cod_pedido:number,fecha:number,total:number,pedido:string){
        this.cod_pedido=cod_pedido;
        this.fecha=fecha;
        this.total=total;
        this.pedido=pedido;
    }

    public get_cod_pedido():number{
        return this.cod_pedido;
    }
    public get_fecha():number{
        return this.fecha;
    }
    public get_total():number{
        return this.total;
    }
    public get_pedido():string{
        return this.pedido;
    }
    public set_cod_pedido(cod_pedido:number){
        this.cod_pedido = cod_pedido;
    }
    public set_fecha(fecha:number){
        this.fecha = fecha;
    }
    public set_total(total:number){
        this.total = total;
    }
    public set_pedido(pedido:string){
        this.pedido=pedido;
    }

    
    public agregarAticulos(producto:Producto,cantidad:number):void {
        let registro ={
            codProd : producto.get_cod_producto(),
            cantidad : cantidad,
            precio : producto.get_precio(),
            unidad : producto.get_unidad()
        }
        this.total+=cantidad*producto.get_cod_producto();
    }

    public buscarPedido(Nreg:number){
        for(var reg of this.pedido){
            if (reg['Registro']== Nreg){
            console.log (" Registro: ") + reg["Registro"]+ "\n"+ reg["fecha"]+"\n"+ reg["cod_pedido"];
            }

            else{
                console.log("encontrado");
            }

        }
    }

}
