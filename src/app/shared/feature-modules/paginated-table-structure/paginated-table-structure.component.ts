import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';
@Component({
    selector: 'paginated-table-structure',
    templateUrl: './paginated-table-structure.component.html',
    styleUrls: ['./paginated-table-structure.component.scss'],

})
export class PaginatedTableStructureComponent implements OnInit {
    @Input('table_header_structure') table_header_obj;
    @Input('table_body') table_body_obj;

    entry_editor_visibililty : boolean;
    
    show_confirm_window : boolean;
    selected_row_id : number;
    
    modify_existing_flag : boolean;
    
    table_data;
    complete_table_data;
    rows_per_page : number;
    pagination_start_index : number;

    constructor() { 
        //sessionStorage.setItem('setTableData',JSON.stringify(this.getJSON()));
    }

    ngOnInit() {
        this.rows_per_page = 10;
        this.pagination_start_index = 0;
        //this.complete_table_data = JSON.parse(sessionStorage.getItem('setTableData'));
        this.complete_table_data = this.getJSON();
        this.entry_editor_visibililty = false;
        this.show_confirm_window = false;
        this.modify_existing_flag = false;
        this.createSlicedTable();
    }
    createSlicedTable():void{
        this.table_data = this.complete_table_data.
            slice(this.pagination_start_index,
                this.pagination_start_index+this.rows_per_page);
    }
    traverseTableView(start_index_obj){
        this.pagination_start_index = start_index_obj.index;
        this.createSlicedTable();
    }
    updateTableView(updated_row_data) : void{
        this.complete_table_data.push(updated_row_data);
        this.createSlicedTable();
    }
    showHideEntryEditor(entry_editor_details) : void{
        this.selected_row_id = -1;
        this.modify_existing_flag = false;
        this.entry_editor_visibililty = entry_editor_details.display;
    }
    modifyTableData(row_data){
        this.selected_row_id = row_data.index;
        this.modify_existing_flag = true;
        this.entry_editor_visibililty = true;
    }
    editTableDataByIndex(edit_info){
        this.table_data[edit_info.index] = edit_info.row_data;
        this.complete_table_data[edit_info.global_index] = edit_info.row_data;
    }
    showDeleteWindow(row_data){
        this.show_confirm_window = true;
        this.selected_row_id = row_data.index;
    }
    responseFromConfirmBox(responseObj){
        if(responseObj.confirm){
            this.deleteTableRow();
        }else{
            this.clearTableRow();
        }
    }
    deleteTableRow(){
        if(this.selected_row_id!==-1){
            this.complete_table_data
                .splice(this.selected_row_id+this.pagination_start_index,1);
            this.createSlicedTable();
        }
        this.show_confirm_window = false;
    }
    clearTableRow(){
        this.show_confirm_window = false;
        this.selected_row_id = -1;
    }
    getJSON(){
        return this.table_body_obj;
    }
}
