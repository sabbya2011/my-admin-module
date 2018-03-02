import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alert-window-container',
  templateUrl: './alert-window-container.component.html',
  styleUrls: ['./alert-window-container.component.scss']
})
export class AlertWindowContainerComponent implements OnInit {
  @Input('show_alert_window') alert_window_visibility : boolean;
  @Output('responseAlertWindow') ansObj = new EventEmitter<{ 'confirm':boolean }>()
  constructor() { }

  ngOnInit() {
  }
  delete(){
    this.ansObj.emit({confirm:true});
  }
  cancel(){
    this.ansObj.emit({confirm:false});
  }
}
