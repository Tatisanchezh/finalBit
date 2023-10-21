import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Post } from "../interfaces/schema";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {}

  urlBackend = "http://localhost:3000/pos";
  posts: Post [] = [];
  selectedPost: Post = {       
    name: "",
    price: 0,
    stock: 0,
    tamanio: 0,
  };

  createPos(post: Post){
  return this.http.post(this.urlBackend, post);
 };

   readPosts(){
    return this.http.get<any>(this.urlBackend);
    };

    updatePos(Post: Post) {
      return this.http.put(`${this.urlBackend}/${Post._id}`, Post);
    }

  deletePos(id:string){
    return this.http.delete(`${this.urlBackend}/${id}`);
   }; 
}
