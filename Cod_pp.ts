export class Cod_pp{
    private cod_prod_prov:number=0;
    private precio
    
    constructor(cod_prod_prov:number,precio:number){
        this.cod_prod_prov = cod_prod_prov;
        this.precio = precio;
    }

    public get_cod_prod_prov(): number {
        return this.cod_prod_prov;
    }
    public get_precio(): number {
        return this.precio;
    }

    public set_cod_prod_prov(cod_prod_prov:number){
        this.cod_prod_prov = cod_prod_prov;
    }
    public set_precio(precio:number){
        this.precio = precio;
    }
}