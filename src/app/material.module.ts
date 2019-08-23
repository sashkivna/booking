import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [
    MatCardModule,
    MatBadgeModule
  ],
  exports: [MatCardModule,
    MatBadgeModule]
})
export class MaterialModule { }
