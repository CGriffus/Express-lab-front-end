import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CartService } from "./cart.service";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
