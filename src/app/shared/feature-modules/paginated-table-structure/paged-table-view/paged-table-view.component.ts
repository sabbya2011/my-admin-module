import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paged-table-view',
  templateUrl: './paged-table-view.component.html',
  styleUrls: ['./paged-table-view.component.scss']
})
export class PagedTableViewComponent implements OnInit {
  @Input('table_data') table_details;
  @Input('start_index') start_index;
  @Input('rows_per_page') rows_per_page;
  @Input('header_format') header_format;
  @Output('tableDataModification') modify_data = new EventEmitter<{index:number}>();
  @Output('tableDataDeletion') delete_data = new EventEmitter<{index:number}>(); 
  constructor() { }

  ngOnInit() {
    
  }
  modifyRowInvoked(index:number){
    this.modify_data.emit({'index':index});
  }
  deleteRowInvoked(index:number){
    this.delete_data.emit({'index':index});
  }
  checkString(status){
    return status==='string'?true:false;
  }
  checkCheckbox(status){
    return status==='checkbox'?true:false;
  }
}
