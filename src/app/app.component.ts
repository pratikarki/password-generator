import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minLimit = 8;
  maxLimit = 30;
  givenLength = 0;
  useLetter = false;
  useNumber = false;
  useSymbol = false;
  finalPassword = '';

  setUserLength(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    const parsedValue = parseInt(value); //if value has letters, parsedValue will be NaN
    if (!isNaN(parsedValue)) this.givenLength = parsedValue;
  }

  toggleUseLetter() {
    this.useLetter = !this.useLetter;
  }

  toggleUseNumber() {
    this.useNumber = !this.useNumber;
  }

  toggleUseSymbol() {
    this.useSymbol = !this.useSymbol;
  }

  onFormSubmit() {
    if (!(this.minLimit<=this.givenLength && this.givenLength<=this.maxLimit && (this.useLetter || this.useNumber || this.useSymbol))) return;

    const allLetters = 'abcdefghijklmnopqrstuvwxyz';
    const allNumbers = '0123456789';
    const allSymbols = '~!@#$%^&*_-,.';

    let validCharacters = '';
    if (this.useLetter) validCharacters += allLetters;
    if (this.useNumber) validCharacters += allNumbers;
    if (this.useSymbol) validCharacters += allSymbols;

    let generatedPassword = '';

    for(let i=0; i<this.givenLength; i++) {
      const randomIndex = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[randomIndex];
    }

    console.log(generatedPassword)

    this.finalPassword = generatedPassword;
  }
}
