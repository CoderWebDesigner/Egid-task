import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Stock } from 'src/app/@core/interfaces/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private _stocks: Stock[] = [
    { "ID": 1, "Name": "Vianet" },
    { "ID": 2, "Name": "Agritek" },
    { "ID": 3, "Name": "Akamai" },
    { "ID": 4, "Name": "Baidu" },
    { "ID": 5, "Name": "Blinkx" },
    { "ID": 6, "Name": "Blucora" },
    { "ID": 7, "Name": "Boingo" },
    { "ID": 8, "Name": "Brainybrawn" },
    { "ID": 9, "Name": "Carbonite" },
    { "ID": 10, "Name": "China Finance" },
    { "ID": 11, "Name": "ChinaCache" },
    { "ID": 12, "Name": "ADR" },
    { "ID": 13, "Name": "ChitrChatr" },
    { "ID": 14, "Name": "Cnova" },
    { "ID": 15, "Name": "Cogent" },
    { "ID": 16, "Name": "Crexendo" },
    { "ID": 17, "Name": "CrowdGather" },
    { "ID": 18, "Name": "EarthLink" },
    { "ID": 19, "Name": "Eastern" },
    { "ID": 20, "Name": "ENDEXX" },
    { "ID": 21, "Name": "Envestnet" },
    { "ID": 22, "Name": "Epazz" },
    { "ID": 23, "Name": "FlashZero" },
    { "ID": 24, "Name": "Genesis" },
    { "ID": 25, "Name": "InterNAP" },
    { "ID": 26, "Name": "MeetMe" },
    { "ID": 27, "Name": "Netease" },
    { "ID": 28, "Name": "Qihoo" }
  ]
  constructor() { }
  getStocks() {
    return of(this._stocks).pipe(
      map((stocks) =>
      stocks.map((stock) => ({ ...stock, Price: Math.floor(Math.random() * 100) + 1 }))
      )
    )
  }
}
