import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productfilter',
})
export class ProductfilterPipe implements PipeTransform {
  filteredProductCatalogue: any[] = [];
  transform(productCatalogue: any[], obj: object): any {
    if (obj['brandcheckboxArray'].length !== 0 || obj['oscheckboxArray'].length !== 0 || obj['featurescheckboxArray'].length !== 0) {
      this.filteredProductCatalogue = [];
      for (var k in productCatalogue) {
        if (obj['brandcheckboxArray'].includes(productCatalogue[k].brand)) {
          this.filteredProductCatalogue.push(productCatalogue[k]);
        }
        if (obj['oscheckboxArray'].includes(productCatalogue[k].os) && !obj['brandcheckboxArray'].includes(productCatalogue[k].brand)) {
          this.filteredProductCatalogue.push(productCatalogue[k]);
        }
        if (productCatalogue[k].bluetick == true && obj['featurescheckboxArray'].includes('bluetick') &&
          !obj['brandcheckboxArray'].includes(productCatalogue[k].brand) && !obj['oscheckboxArray'].includes(productCatalogue[k].os)) {
          this.filteredProductCatalogue.push(productCatalogue[k]);
        }
        if (productCatalogue[k].splashProof == true && obj['featurescheckboxArray'].includes('splashProof') &&
          !obj['brandcheckboxArray'].includes(productCatalogue[k].brand) && !obj['oscheckboxArray'].includes(productCatalogue[k].os)) {
          this.filteredProductCatalogue.push(productCatalogue[k]);
        }
        if (productCatalogue[k].removableBattery == true && obj['featurescheckboxArray'].includes('removableBattery') &&
          !obj['brandcheckboxArray'].includes(productCatalogue[k].brand) && !obj['oscheckboxArray'].includes(productCatalogue[k].os)) {
          this.filteredProductCatalogue.push(productCatalogue[k]);
        }
        if (productCatalogue[k].expandableMemory == true && obj['featurescheckboxArray'].includes('expandableMemory') &&
          !obj['brandcheckboxArray'].includes(productCatalogue[k].brand) && !obj['oscheckboxArray'].includes(productCatalogue[k].os)) {
          this.filteredProductCatalogue.push(productCatalogue[k]);
        }
        if (productCatalogue[k].hdVideoRecording == true && obj['featurescheckboxArray'].includes('hdVideoRecording') &&
          !obj['brandcheckboxArray'].includes(productCatalogue[k].brand) && !obj['oscheckboxArray'].includes(productCatalogue[k].os)) {
          this.filteredProductCatalogue.push(productCatalogue[k]);
        }
        if (productCatalogue[k].nfc == true && obj['featurescheckboxArray'].includes('nfc') &&
          !obj['brandcheckboxArray'].includes(productCatalogue[k].brand) && !obj['oscheckboxArray'].includes(productCatalogue[k].os)) {
          this.filteredProductCatalogue.push(productCatalogue[k]);
        }
      }
      return this.filteredProductCatalogue;
    }
    else {
      return productCatalogue;
    }
  }
}
