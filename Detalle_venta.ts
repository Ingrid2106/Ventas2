export class Detalle_venta{
    private cod_producto:number=0;
    private unidades:number=0;
    private venta:number=0;

    constructor(cod_producto:number,unidades:number,venta:number){
        this.cod_producto=cod_producto;
        this.unidades=unidades;
        this. venta=venta;
    }

    public get_cod_producto():number{
        return this.cod_producto;
    }
    public get_unidades():number{
        return this.unidades;
    }
    public get_venta():number{
        return this.venta;
    }

    public set_cod_producto(cod_producto:number){
        this.cod_producto = cod_producto;
    }
    public set_unidades(unidades:number){
        this.unidades = unidades;
    }
    public set_precio_venta(venta:number){
        this.venta = venta;
    }


}