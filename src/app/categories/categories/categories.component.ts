import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() categorySelection = new EventEmitter<string>();

  categories:any[]=[
    {name: "All"},
    {name: "Beauty"},
    {name: "Accesories"},
    {name: "Mobiles"},
    {name: "Home Appliances"}
  ]
  constructor() { }

  ngOnInit() {
  }

  onCategorySelection(category){
    this.categorySelection.emit(category.name);
  }

}
