import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

export interface Token {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'hello';

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    
    var headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.get('http://localhost:8080/api/hello', { headers ,responseType: 'text'})
    .subscribe((data: string) => {
        console.log("haha ",data);
        this.title = data
    },(error: HttpErrorResponse) => {
      console.error('An error occurred:', error.error.message);
    },() => {
      
    });
  }
}
