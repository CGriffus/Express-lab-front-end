import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  cart: any[];
  showAddForm: boolean = false;
  itemToEdit: object;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getAllItems().subscribe(response => {
      this.cart = response;
    });
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  setItemToEdit(item: object): void {
    this.itemToEdit = item;
  }

  addNewItem(form: NgForm): void {
    this.cartService.postItems(form.value).subscribe(response => {
      this.cart = response;
    });
  }

  deleteItem(id: number): void {
    console.log(id);
    this.cartService.deleteItems(id).subscribe(response => {
      this.cart = response;
    });
  }

  updateItem(form: NgForm): void {
    console.log(form.value);
  }
}
