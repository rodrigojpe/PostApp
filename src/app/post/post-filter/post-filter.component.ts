import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import  * as actions from '../../filtro/filtro.actions';
import { Post } from '../models/post.models';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css']
})
export class PostFilterComponent implements OnInit {

   txtInput = new  FormControl;
   posts: Post[] = []

   filtroActual!: string;

  constructor(private store: Store<AppState>) {
  this.txtInput = new FormControl('', Validators.required)
  }

  

  ngOnInit(): void {
    this.store.select('filtro').subscribe(
      filtro =>  this.filtroActual =  this.txtInput.value)
    
  }




  shearch(){

    console.log(this.txtInput.value)
    this.onChange();
      //  this.store.dispatch( actions.serach ({ textName: this.txtInput.value}) )

  }

  onChange(){
      this.store.dispatch( actions.filter ({ filtro: this.txtInput.value }) )
    

  }

}
