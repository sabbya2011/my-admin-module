import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-footer',
  templateUrl: './pagination-footer.component.html',
  styleUrls: ['./pagination-footer.component.scss']
})
export class PaginationFooterComponent implements OnInit, OnChanges {
  @Output('createRowFormInvoked') formInvoked = new EventEmitter<{display:boolean}>(); 
  @Output('updatedTableStartIndex') getNewStartIndex = new EventEmitter<{index:number}>(); 
  @Input('table_data') table_details;
  @Input('complete_table_data_length') complete_table_data_length;
  @Input('rows_per_page') rows_per_page;
  @Input('start_index') start_index;
  
  pagination_info : string;
  total_row_info : string;

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    if(changes.table_details || changes.complete_table_data_length){
      this.total_row_info = this.getTotalItems();
      this.pagination_info = this.getPaginationText();
    }
  }

  ngOnInit() {  
  }
  
  getPaginationText():string{
    let current_page = Math.floor(this.start_index/this.rows_per_page)+1;
    let total_pages = Math.ceil(this.complete_table_data_length/this.rows_per_page);
    total_pages==0?total_pages=1:'';
    if(current_page>total_pages){
      return 'All Items Removed From this Page';
    }else{
      return current_page +' / '+total_pages;
    }
  }

  getTotalItems():string{
    if(this.complete_table_data_length>1){
      return this.complete_table_data_length+' Item';
    }else{
      return this.complete_table_data_length+' Items';
    }
  }
  
  createTableEntryInvoked(){
    this.formInvoked.emit({display:true});
  }
  traverseTable(direction:string){
    if(direction=='left' && this.start_index>0){
      this.getNewStartIndex.emit({
        index:this.start_index-this.rows_per_page
      });
    }else if(direction=='right' && ((this.start_index+this.rows_per_page)<this.complete_table_data_length) ){
      this.getNewStartIndex.emit({
        index:this.start_index+this.rows_per_page
      });
    }
  }
  disableTraverseTable(direction:string):boolean{
    if(direction=='left'){
      if(this.start_index<=0){
        return true;
      }
    }else if(direction=='right'){
      if((this.start_index+this.rows_per_page)>=this.complete_table_data_length){
        return true;
      }
    }
    return false;
  }
}
