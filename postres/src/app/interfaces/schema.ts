export class Post {
constructor (_id: string, name: string, price: number, stock: number, tamanio: number){
this._id = _id;
this.name = name;
this.price = price;
this.stock= stock ; 
this.tamanio = tamanio;
}
_id?: string;
name: string;
price: number;
stock :number;
tamanio: number;
}