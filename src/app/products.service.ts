import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }
  productjson : object = {
      "products": [
        {
          "id": "2d50c898-c642-4baf-a1cd-84a057d14a1e",
          "name": "IPHONE 5S",
          "imgurl": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-7plus/iphone-7plus-mattblack-grid.png",
          "brand": "APPLE",
          "os": "IOS",
          "memory": "16GB",
          "colour": "SPACE GREY",
          "contentId": "iphone5s",
          "contractTerm": 24,
          "contractType": "DLC",
          "totalRecurringCharge": 55,
          "deviceRecurringCharge": 45,
          "planRecurringCharge": 10,
          "mincost": 1500,
          "deviceStartDate": "10-08-2017",
          "deviceEndDate": "30-04-2018",
          "default": true,
          "featured": true,
          "bonusGift": false,
          "hotBuy": true,
          "bluetick": false,
          "4gx": false,
          "splashProof": false,
          "removableBattery": false,
          "expandableMemory": false,
          "hdVideoRecording": false,
          "nfc": false
        },
        {
          "id": "1b253659-3b03-4a30-905d-72e4f2863ca6",
          "name": "BLACKBERRY CLASSIC",
          "imgurl": "data:image/jpeg;base64,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",
          "brand": "BLACKBERRY",
          "os": "BLACKBERRY",
          "memory": "NA",
          "colour": "BLACK",
          "contentId": "blackberryclassic",
          "contractTerm": 24,
          "contractType": "DLC",
          "totalRecurringCharge": 85,
          "deviceRecurringCharge": 50,
          "planRecurringCharge": 35,
          "mincost": 1200,
          "deviceCredit": 0,
          "deviceStartDate": "10-07-2017",
          "deviceEndDate": "30-04-2018",
          "default": true,
          "featured": false,
          "bonusGift": true,
          "hotBuy": false,
          "bluetick": false,
          "4gx": false,
          "splashProof": false,
          "removableBattery": false,
          "expandableMemory": false,
          "hdVideoRecording": false,
          "nfc": false
        },
        {
          "id": "f6996502-508c-44df-90e6-906f67181256",
          "name": "HTC DESIRE 626",
          "imgurl": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/htc-u111/htc-u11-grid.png",
          "brand": "HTC",
          "os": "ANDROID",
          "memory": "NA",
          "colour": "BLUE",
          "contentId": "htcdesire626",
          "contractTerm": 24,
          "contractType": "DLC",
          "totalRecurringCharge": 85,
          "deviceRecurringCharge": 55,
          "planRecurringCharge": 30,
          "mincost": 1700,
          "deviceCredit": 0,
          "deviceStartDate": "10-08-2017",
          "deviceEndDate": "30-04-2018",
          "default": true,
          "featured": false,
          "bonusGift": true,
          "hotBuy": false,
          "bluetick": true,
          "4gx": false,
          "splashProof": false,
          "removableBattery": false,
          "expandableMemory": false,
          "hdVideoRecording": false,
          "nfc": false
        },
        {
          "id": "f6996502-508c-44df-90e6-906f67181256",
          "name": "Samsung Galaxy S8",
          "imgurl": "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung-galaxy-a5/samsung-galaxy-a5-black-front.jpg",
          "brand": "SAMSUNG",
          "os": "ANDROID",
          "memory": "NA",
          "colour": "BLUE",
          "contentId": "samsunggalaxys8",
          "contractTerm": 12,
          "contractType": "DLC",
          "totalRecurringCharge": 90,
          "deviceRecurringCharge": 50,
          "planRecurringCharge": 40,
          "mincost": 1340,
          "deviceCredit": 0,
          "deviceStartDate": "10-07-2017",
          "deviceEndDate": "30-04-2018",
          "default": true,
          "featured": false,
          "bonusGift": false,
          "hotBuy": false,
          "bluetick": true,
          "4gx": false,
          "splashProof": true,
          "removableBattery": false,
          "expandableMemory": false,
          "hdVideoRecording": false,
          "nfc": true
        }
      ],
      "filters": {
        "brand": [
          "APPLE",
          "BLACKBERRY",
          "HTC",
          "SAMSUNG"
        ],
        "os": [
          "IOS",
          "BLACKBERRY",
          "ANDROID"
        ],
        "features": [
          "bluetick",
          "4gx",
          "splashProof",
          "removableBattery",
          "expandableMemory",
          "hdVideoRecording",
          "nfc"
        ]
      }
    }
  getProducts() {
    return this.productjson;
  }

}
