import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { BooksComponent } from './books/books.component';
import { NgModule } from "@angular/core";
import { RouterModule , Routes} from "@angular/router";

const routes: Routes = [
    {path: '', component: BooksComponent},
    {path: 'cart', component: CartComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}