import { Component, OnInit } from '@angular/core';
import { AccordionModule } from "ng2-accordion";
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-productcatalogue',
  templateUrl: './productcatalogue.component.html',
  styleUrls: ['./productcatalogue.component.css']
})
export class ProductcatalogueComponent implements OnInit {
  obj: object = {
    brandcheckboxArray: [],
    oscheckboxArray: [],
    featurescheckboxArray: []
  };
  brandcheckboxArray: any[] = [];
  oscheckboxArray: any[] = [];
  featurescheckboxArray: any[] = [];
  checked: boolean = false;
  productCatalogue: any[];
  filter: object;
  constructor(service: ProductsService) {
    this.productCatalogue = service.getProducts()['products'];
    this.filter = service.getProducts()['filters'];
  }

  ngOnInit() {
  }

  toggleCheckbox(item, $event, filtercategory) {
    if (filtercategory == "brand") {
      if ($event.target.checked == true && !this.brandcheckboxArray.includes(item)) {
        this.brandcheckboxArray.push(item);
        this.obj['brandcheckboxArray'] = this.brandcheckboxArray;
      } else if ($event.target.checked == false && this.brandcheckboxArray.includes(item)) {
        this.brandcheckboxArray.splice(this.brandcheckboxArray.indexOf(item), 1);
        this.obj['brandcheckboxArray'] = this.brandcheckboxArray;
      }
    } else if (filtercategory == "os") {
      if ($event.target.checked == true && !this.oscheckboxArray.includes(item)) {
        this.oscheckboxArray.push(item);
        this.obj['oscheckboxArray'] = this.oscheckboxArray;
      } else if ($event.target.checked == false && this.oscheckboxArray.includes(item)) {
        this.oscheckboxArray.splice(this.oscheckboxArray.indexOf(item), 1);
        this.obj['oscheckboxArray'] = this.oscheckboxArray;
      }
    } else if (filtercategory == "features") {
      if ($event.target.checked == true && !this.featurescheckboxArray.includes(item)) {
        this.featurescheckboxArray.push(item);
        this.obj['featurescheckboxArray'] = this.featurescheckboxArray;
      } else if ($event.target.checked == false && this.featurescheckboxArray.includes(item)) {
        this.featurescheckboxArray.splice(this.featurescheckboxArray.indexOf(item), 1);
        this.obj['featurescheckboxArray'] = this.featurescheckboxArray;
      }
    }

  }
}
