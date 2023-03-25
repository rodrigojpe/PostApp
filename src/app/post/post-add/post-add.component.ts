import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../post.actions';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

   fb = new FormBuilder();
  formSubmit = this.fb.nonNullable.group({
    textName: new FormControl('' ,{
      nonNullable: true,
      validators: [Validators.required]
    }),
    textDescription: new FormControl('', {
      nonNullable: true ,
      validators: [Validators.required]
    })
  })





  constructor(private store: Store<AppState>){
    // this.txtInput = new FormControl('', Validators.required)
  }
  
  ngOnInit(): void {
  }


  agregar() {
    console.log( this.formSubmit)
    
    const { textName , textDescription} = this.formSubmit.controls;
    console.log(textName.value, textDescription.value);

    if(this.formSubmit.invalid){ return }
    // console.log( this.txtInput.valid)
    this.store.dispatch( actions.crear({ textName: textName.value, textDescription: textDescription.value }) )

     this.formSubmit.reset()

  }


  onSubmit( ){

  }
}
