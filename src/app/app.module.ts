import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { HeaderComponent } from './header/header.component';
import { AdminBlogsComponent } from './admin-blog/admin-blogs/admin-blogs.component';
import { AdminCategoryComponent } from './admin-blog/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin-blog/admin-products/admin-products.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { ModalModule } from 'ngx-bootstrap/modal';
import { SearchPipe } from './pipes/search.pipe';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import { PizzaComponent } from './products/pizza/pizza.component';
import { SaladComponent } from './products/salad/salad.component';
import { DrinksComponent } from './products/drinks/drinks.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AdminBlogComponent,
    HeaderComponent,
    AdminBlogsComponent,
    AdminCategoryComponent,
    AdminProductsComponent,
    BlogDetailsComponent,
    SearchPipe,
    SearchProductPipe,
    ProductsComponent,
    BasketComponent,
    PizzaComponent,
    SaladComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
