import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/_services/message.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-members-messages',
  standalone: true,
  templateUrl: './members-messages.component.html',
  styleUrls: ['./members-messages.component.css'],
  imports: [CommonModule]
})
export class MembersMessagesComponent implements OnInit {
  @Input() username?: string;
  messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages() {
    if (this.username) {
      this.messageService.getMessageThread(this.username).subscribe({
        next: messages => this.messages = messages
      })
    }
  }

}
