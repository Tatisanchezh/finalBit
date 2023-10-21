import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-reposteria',
  templateUrl: './reposteria.component.html',
  styleUrls: ['./reposteria.component.css']
})
export class ReposteriaComponent {
  constructor(public homeService: HomeService) {}

  ngOnInit(): void {
    this.getAllPost();
  }


/*addPost(form: NgForm){
this.homeService.createPos(form.value).subscribe(
  (res)=>{
    
console.log("res", res);
}, 
(err)=>{
console.log("err:", err)})
}

handleSubmit(form: NgForm){
console.log(form.value);
}*/

getAllPost() {
  this.homeService.readPosts().subscribe(
    (res) => {
      this.homeService.posts = res.allPos;
    },
    (err) => {
      console.log('err:', err);
    }
  );
}

editPost(post: any) {
  this.homeService.selectedPost = post;
}

removePost(id: string | any) {
  this.homeService.deletePos(id).subscribe(
    (res) => {
      this.getAllPost();
    },
    (err) => {
      console.log('err:', err);
    }
  );
}

handleSubmitPost(form: NgForm) {
  if (form.value._id) {
    this.homeService.updatePos(form.value).subscribe(
      (res) => {
        form.reset();
        this.getAllPost();
        console.log('res:', res);
      },
      (err) => {
        console.log('err:', err);
      }
    );
  } else {
    this.homeService.createPos(form.value).subscribe(
      (res) => {
        form.reset();
        this.getAllPost();
        console.log('res:', res);
      },
      (err) => {
        console.log('err:', err);
      }
    );
  }
}
resetForm(form: NgForm) {
  form.reset();
  this.homeService.selectedPost = {     
      name: "",
      price: 0,
      stock: 0,
      tamanio: 0,
  };
  this.getAllPost();
}
}



