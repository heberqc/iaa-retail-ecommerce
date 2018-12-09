import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  // @Prop() productos:any[];
  @Prop() productos:any[] = [
    {photo:'/assets/icon/icon.png', name: 'Objeto 1'},{photo:'/assets/icon/icon.png', name: 'Objeto 2'},
    {photo:'/assets/icon/icon.png', name: 'Objeto 3'},{photo:'/assets/icon/icon.png', name: 'Objeto 4'},
    {photo:'/assets/icon/icon.png', name: 'Objeto 5'},{photo:'/assets/icon/icon.png', name: 'Objeto 6'},
    {photo:'/assets/icon/icon.png', name: 'Objeto 7'},{photo:'/assets/icon/icon.png', name: 'Objeto 8'},
    {photo:'/assets/icon/icon.png', name: 'Objeto 9'},{photo:'/assets/icon/icon.png', name: 'Objeto 10'},
    {photo:'/assets/icon/icon.png', name: 'Objeto 11'},{photo:'/assets/icon/icon.png', name: 'Objeto 12'},
    {photo:'/assets/icon/icon.png', name: 'Objeto 13'}
  ];
  @State() cartProducts: any[] = [];

  getProducts() {
    return this.productos.map(producto => (
      <ion-card class="product-card">
        <img src={producto.photo} alt={producto.name}/>
        <h1>{producto.name}</h1>
        <ion-button onClick={() => this.addToCart(producto)}>Agregar al<br/>carrito</ion-button>
      </ion-card>
    ))
  }

  addToCart(product:any) {
    this.cartProducts = [...this.cartProducts, product];
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Retail e-commerce web page</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <div class='app-home'>
          <div class="toolbar">
            <ion-item>
              <ion-icon name="search"></ion-icon>
              <ion-input type="text" placeholder="Buscar" value=""></ion-input>
            </ion-item>
            <ion-button class="cart" color="light">
              <ion-icon name="cart"></ion-icon>
              <ion-badge>{`${this.cartProducts.length}`}</ion-badge>
              {/* <ion-label>{`${this.cartProducts.length === 1? 'producto' : 'productos'}`}</ion-label> */}
            </ion-button>
          </div>
        </div>
        <h1>Productos</h1>
        <div class="products-container">
          {this.getProducts()}
        </div>
        {/* <ion-button href="/profile/ionic" expand="block">Profile page</ion-button> */}
      </ion-content>
    ];
  }
}
