import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

  searchValue:string="iPhone";

  changeSearchValue(eventData: Event)
  {
    console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue=(<HTMLInputElement>eventData.target).value;
  }
}
