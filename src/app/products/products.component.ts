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
  showUpdateForm: boolean = false;
  itemToUpdate: object;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getAllItems().subscribe(response => {
      this.cart = response;
    });
  }

  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
  }

  toggleUpdateForm(): void {
    this.showUpdateForm = !this.showUpdateForm;
  }

  setItemToEdit(item): void {
    this.itemToUpdate = item;
  }

  addNewItem(form: NgForm): void {
    this.cartService.postItems(form.value).subscribe(response => {
      this.cart = response;
      form.reset();
    });
    this.toggleAddForm();
  }

  deleteItem(id: number): void {
    this.cartService.deleteItems(id).subscribe(response => {
      this.cart = response;
    });
  }

  updateItem(form: NgForm, id: number): void {
    this.cartService.putItems(form.value, id).subscribe(response => {
      this.cart = response;
    });
    this.toggleUpdateForm();
  }
}
