import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './models/post.models';

@Pipe({
  name: 'filtroPost'
})
export class FiltroPipe implements PipeTransform {

  transform(post: Post[], filtro?: string): any {

    console.log('============= filtro actual',filtro)
    if(!filtro || filtro === undefined){
      return post;
    }

    if(filtro){
      return post.filter(post => post.textName.trim().toLowerCase() === filtro.trim().toLowerCase())
    }else{
      return []
    }


  }

}
