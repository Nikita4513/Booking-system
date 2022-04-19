import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.css']
})
export class DropdownFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  onDropdownItemClick(event: any){
    console.log(event);
    const dropDownMenu = document.querySelector('.dropdown-toggle');
    dropDownMenu!.innerHTML = event.srcElement.outerText;
  }

}
