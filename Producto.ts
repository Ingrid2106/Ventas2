export class Producto{
    private cod_producto:number=0;
    private nombre:string = "";
    private modelo:string="";
    private cantidad:number=0;
    private precio:number=0;
    private stock:string="";
    private margen:string="";
    private unidad:number=0;
    private venta:number=0;

    constructor(cod_producto:number,nombre:string,modelo:string,cantidad:number,precio:number,stock:string,margen:string, unidad: number,venta:number){
        this.cod_producto=cod_producto;
        this.nombre=nombre;
        this.modelo=modelo;
        this.cantidad=cantidad;
        this.precio=precio;
        this.stock=stock;
        this.unidad=unidad;
        this.margen=margen;
        this. venta=venta;
    }

    public get_cod_producto(): number {
        return this.cod_producto;
    }
    public get_nombre(): string {
        return this.nombre;
    }
    public get_modelo(): string {
        return this.modelo;
    }
    public get_cantidad(): number {
        return this.cantidad;
    }
    public get_precio(): number {
        return this.precio;
    }
    public get_stock(): string {
        return this.stock;
    }
    public get_margen(): string {
        return this.margen;
    }
    public get_venta():number{
        return this.venta;
    }

    public set_cod_producto(cod_producto:number){
        this.cod_producto = cod_producto;
    }
    public set_nombre(nombre:string){
        this.nombre = nombre;
    }
    public set_modelo(modelo:string){
        this.modelo = modelo;
    }
    public set_cantidad(cantidad:number){
        this.cantidad = cantidad;
    } 
    public set_precio(precio:number){
        this.precio = precio;
    }
    public set_stock(stock:string){
        this.stock = stock;
    }
    public set_margen(margen:string){
        this.margen = margen;
    }
    public set_venta(venta:number){
        this.venta = venta;
    }
    public get_unidad(){
        return this.unidad;
    }
    public set_unidad(unidad:number):void{
        this.unidad = unidad;
    }

    
}