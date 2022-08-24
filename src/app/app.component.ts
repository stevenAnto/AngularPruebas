import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name : string;
  email;
  webpage : string;
  hobbies : string[];
  showHobbies : boolean;

  constructor(){
    console.log("entro a constructor");
    this.name = 'Esteven Antonio C.';
    this.email = 'ecalcinap@unsa.edu.pe';
    this.webpage = 'http://www.unsa.edu.pe';
    this.hobbies = ["Futbol","Programacion","Netflix"];
    this.showHobbies = false;
  }
  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  newHobby(hobby:{value:string;}){
    console.log("se va a crea");
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;
  }
}
