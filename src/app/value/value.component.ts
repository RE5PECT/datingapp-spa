import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;

  constructor(private _http: HttpClient) {

  }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this._http.get('https://localhost:44370/api/values').subscribe(
      resp => {
        this.values = resp;
      }, error => {
        console.log(error);
      });
  }
}
