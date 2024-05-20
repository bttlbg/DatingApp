import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';
import { MessageService } from 'src/app/_services/message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-members-messages',
  standalone: true,
  templateUrl: './members-messages.component.html',
  styleUrls: ['./members-messages.component.css'],
  imports: [CommonModule, TimeagoModule]
})
export class MembersMessagesComponent implements OnInit {
  @Input() username?: string;
  @Input() messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
