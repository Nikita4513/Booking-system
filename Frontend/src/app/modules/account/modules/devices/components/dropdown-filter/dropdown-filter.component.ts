import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ISearchProperty, SearchBy } from '../../interfaces';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.css']
})
export class DropdownFilterComponent implements OnInit {
  public search = new FormControl('');
  @Output() searchChangeValue: EventEmitter<string> = new EventEmitter();

  searchProperties : ISearchProperty[] = [
    { view: 'По названию', value: SearchBy.name },
    { view: 'По году выпуска', value: SearchBy.year },
    { view: 'По описанию', value: SearchBy.description }
  ];

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => {
      this.searchChangeValue.emit(value);
    })
  }
  
  public onDropdownItemClick(event: any, searchProperty: ISearchProperty){
    const dropDownMenu = document.querySelector('.dropdown-toggle');
    dropDownMenu!.innerHTML = searchProperty.view;
  }

}

