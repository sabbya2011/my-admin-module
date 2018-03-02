import { Component, OnInit, ViewChild, ElementRef, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination-entity-updator',
  templateUrl: './pagination-entity-updator.component.html',
  styleUrls: ['./pagination-entity-updator.component.scss']
})
export class PaginationEntityUpdatorComponent implements OnInit {
  @Input('modify_existing_flag') modify_flag : boolean;
  @Input('selected_index') row_index : number;
  @Input('table_data') table_data;
  @Input('start_index') start_index;
  @Input('header_format') header_format;

  @Output('tableUpdateCalled') submitTableData = new EventEmitter<any>();
  @Output('modifyExistingTableData') modifyExistingTableData = new EventEmitter<any>();

  @Output('hideTableEntryForm') hideForm = new EventEmitter<{display:boolean}>();


  // @ViewChild('code1Id') code1Id : ElementRef;
  // @ViewChild('code2Id') code2Id : ElementRef;
  // @ViewChild('code2Name') code2Name : ElementRef;
  // @ViewChild('flagInput') flagInput : ElementRef;
  
  constructor() { }

  ngOnInit() {
    
    this.row_index
    if(this.modify_flag){
      this.loadSpecificFormData();
    }
  }
  
  loadSpecificFormData():void{
    for(let i =0;i<this.header_format.length;i++){
      this.header_format[i].value = this.table_data[this.row_index]
        [this.header_format[i].key];
    }
  }
  updateTableView():void{
    if(this.modify_flag){
      this.modifyExistingEntryData();
    }else{
      this.newEntryData();
    }
    this.closeForm();
  }
  getLatestBindedData(){
    let new_row_data = {};
    for(let i =0;i<this.header_format.length;i++){
      new_row_data[this.header_format[i].key] = this.header_format[i].value;
    }
    return new_row_data;
  }
  newEntryData(){
    this.submitTableData.emit(this.getLatestBindedData());
  }
  modifyExistingEntryData(){
    let modified_row_data = this.getLatestBindedData();
    this.modifyExistingTableData.emit(
      {
        row_data:modified_row_data,
        index:this.row_index,
        global_index:this.row_index+this.start_index
      }
    );
  }
  clearFormData(){
    for(let i =0;i<this.header_format.length;i++){
      if(this.header_format[i].type==='string')
        this.header_format[i].value = '';
      else if(this.header_format[i].type==='checkbox')
      this.header_format[i].value = false;
    }
  }

  closeForm(){
    this.hideForm.emit({display:false});
    this.clearFormData();
  }
}
