import { Component } from '@angular/core';

import { Product } from './../model/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {

    product: Product = {
        title = 'Desayuno 1',
        image = '',
        price = 20,
        texto = 'papas'
    };
}
