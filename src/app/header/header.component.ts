import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  searchTerm: string = '';
  selectedCategory: string = 'all';

  performSearch() {
    
    console.log('Search term:', this.searchTerm);
    console.log('Selected category:', this.selectedCategory);
    
   
    this.searchTerm = '';
    this.selectedCategory = 'all';
  }
  
  
  gOnInit(): void {
  }
 

}


