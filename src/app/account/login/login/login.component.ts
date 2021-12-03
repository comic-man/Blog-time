import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';
import { LoggingService } from '../../sign-up/logging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoggingService]
})
export class LoginComponent implements OnInit {
  @Input() email: { email: string; status: string; } | undefined;
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{id:number, newStatus: string}>();

  constructor(private loggingService: LoggingService) { }

  onSetTo(status:string) {
    this.statusChanged.emit({id:this.id, newStatus:status});
    this.loggingService.logStatusChange(status);
  }
  ngOnInit(): void {
  }

}
