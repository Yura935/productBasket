import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminCategoryComponent } from './admin-blog/admin-category/admin-category.component';
import { AdminProductsComponent } from './admin-blog/admin-products/admin-products.component';
import { AdminBlogsComponent } from './admin-blog/admin-blogs/admin-blogs.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import { PizzaComponent } from './products/pizza/pizza.component';
import { SaladComponent } from './products/salad/salad.component';
import { DrinksComponent } from './products/drinks/drinks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'blog', component: BlogComponent },
  {
    path: 'products', component: ProductsComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'pizza' },
      { path: 'pizza', component: PizzaComponent },
      { path: 'salad', component: SaladComponent },
      { path: 'drinks', component: DrinksComponent }
    ]
  },
  { path: 'basket', component: BasketComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  {
    path: 'admin-blog', component: AdminBlogComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'category' },
      { path: 'category', component: AdminCategoryComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'blogs', component: AdminBlogsComponent }
    ]
  },
  { path: '**', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
