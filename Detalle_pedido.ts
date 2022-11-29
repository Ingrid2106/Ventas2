export class Detalle_pedido {

    private unidades : number=0;
    private total : number=0;
    private precio : number=0;

    constructor(unidades:number,total:number,precio:number){
        this.unidades = unidades;
        this.total = total;
        this.precio = precio;
    }

    public get_unidades(): number {
        return this.unidades;
    }
    public get_total(): number{
        return this.total;
    }
    public get_precio():number{
        return this.precio;
    }

    public set_unidaes(unidaes:number){
        this.unidades = unidaes;
    }
    public set_total(total:number){
        this.total = total;
    }
    public set_precio(precio:number){
        this.precio = precio;
    }
}