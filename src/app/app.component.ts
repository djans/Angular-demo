import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-demo';
  constructor(private http: HttpClient) {}

  getData() {
    this.http.get('https://dog.ceo/api/breeds/list/all')
      .subscribe((data:any) => {     
        alert(JSON.stringify(data));
      });
  }

  ngOnInit() {    
  }    
    
  firstFunction() {    
    alert( 'Hello ' + '\nWelcome to C# Corner \nFunction in First Component');    
  }
}
