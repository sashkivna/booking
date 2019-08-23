import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import { HotelComponent } from './hotel/hotel.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelAddFormComponent } from './hotel-add-form/hotel-add-form.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

const appRoutes: Routes = [
  { path: 'hotel', component: HotelComponent },
  { path: 'hotel/:id',      component: HotelInfoComponent },
  { path: '',
    redirectTo: '/hotel',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    HotelInfoComponent,
    HotelAddFormComponent,
    HotelsListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
