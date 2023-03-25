import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { PostAddComponent } from './post-add/post-add.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostFooterComponent } from './post-footer/post-footer.component';

// forms
import { ReactiveFormsModule } from '@angular/forms';
import { PostFilterComponent } from './post-filter/post-filter.component';




@NgModule({
  declarations: [
  PostPageComponent,
  PostAddComponent,
  PostListComponent,
  PostItemComponent,
  PostFooterComponent,
  PostFilterComponent
 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PostPageComponent
  ]
})
export class PostModule { }
