import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import  * as actions from '../post.actions';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.css']
})
export class PostFilterComponent implements OnInit {

   txtInput = new  FormControl;

  constructor(private store: Store<AppState>) {
  this.txtInput = new FormControl('', Validators.required)
  }

  

  ngOnInit(): void {


  }




  shearch(){

    console.log(this.txtInput.value)
       this.store.dispatch( actions.serach ({ textName: this.txtInput.value}) )

  }

}
