export class Detalle_compra{
    private cod_producto:number=0;
    private unidades:number=0;
    private precio:number=0;

    constructor(cod_producto:number,unidades:number,precio:number){
        this.cod_producto = cod_producto;
        this.unidades = unidades;
        this.precio = precio;
    }

    public get_cod_producto(): number {
        return this.cod_producto;
    }
    public get_unidades(): number {
        return this.unidades;
    }
    public get_precio(): number {
        return this.precio;
    }

    public set_cod_producto(cod_producto:number){
        this.cod_producto = cod_producto;
    }
    public set_unidades(unidades:number){
        this.unidades = unidades;
    }
    public set_precio(precio:number){
        this.precio = precio;
    }
    
    
    
}