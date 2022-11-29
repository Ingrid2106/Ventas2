export class Provedor{
    private cod_provedor: number= 0;
    private nombre : string="";
    private rut : string="";
    private direccion : string="";
    private ciudad : string="";
    private telefono : number=0;
    private fax : string="";
    private email : string="";
    private formula : string="";
    private factor : string="";

    constructor(cod_provedor:number,nombre:string, rut:string,direccion:string,ciudad:string,telefono:number,fax:string,email:string,formula:string,factor:string){
        this.cod_provedor= cod_provedor;
        this.nombre= nombre;
        this.rut = rut;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.fax = fax;
        this.email = email;
        this.formula= formula;
        this.factor= factor;
    }

    public get_cod_provedor(): number {
        return this.cod_provedor;
    }
    public get_nombre(): string {
        return this.nombre;
    }
    public get_rut(): string {
        return this.rut;
    }
    public get_direccion(): string {
        return this.direccion;
    }
    public get_ciudad(): string {
        return this.ciudad;
    }
    public get_telefono(): number {
        return this.telefono;
    }
    public get_fax(): string {
        return this.fax;
    }
    public get_email(): string {
        return this.email;
    }
    public get_formula(): string {
        return this.formula;
    }
    public get_factor(): string {
        return this.factor;
    }

    public set_cod_provedor(cod_provedor:number){
        this.cod_provedor = cod_provedor;
    }
    public set_nombre(nombre:string){
        this.nombre = nombre;
    }
    public set_rut(rut:string){
        this.rut = rut;
    }
    public set_direccion(direccion:string){
        this.direccion = direccion;
    }
    public set_ciudad(ciudad:string){
        this.ciudad = ciudad;
    }
    public set_telefono(telefono:number){
        this.telefono = telefono;
    }
    public set_fax(fax:string){
        this.fax = fax;
    }
    public set_email(email:string){
        this.email = email;
    }
    public set_formula(formula:string){
        this.formula = formula;
    }
    public set_factor(factor:string){
        this.factor = factor;
    }



}