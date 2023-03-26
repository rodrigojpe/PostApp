import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Post } from '../models/post.models';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';

import  * as actions from '../post.actions';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
@Input() post!: Post; 

@ViewChild('inputSelected',{static: false}) txtInputSelected!: ElementRef;

// chkCompleted!: FormControl;
// txtInput!: FormControl;
filtroActual!: string;

editing : boolean = false;
posts : Post[] = [];

 constructor(private store: Store<AppState>){}

  ngOnInit(): void {

    // this.chkCompleted = new FormControl( this.post.completed )
    // this.txtInput = new FormControl( this.post.textName, Validators.required );

    // this.chkCompleted.valueChanges.subscribe(valor => {
    //     this.store.dispatch( actions.toggle({ id: this.post.id }) )
    // })

    // this.store.select('posts').subscribe(
    //   posts => this.posts = posts
    // )
    this.store.subscribe(state => {
      this.posts = state.posts;
      this.filtroActual = state.filtro
    })

    console.log('::::::::::filtroActual::::::::::', this.filtroActual)
  }

  edit(){
    this.editing = true;
    setTimeout(() => {
      this.txtInputSelected?.nativeElement.select();

    },10)
  }

  endEdition(){
    this.editing = false;
  }


  delete(id: any){
    console.log(':::::::',id)
     this.store.dispatch( actions.delet({ id: id }) )
  }

}
