import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TimeagoModule } from 'ngx-timeago';
import { MessageService } from 'src/app/_services/message.service';
import { Message } from 'src/app/models/message';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-members-messages',
  standalone: true,
  templateUrl: './members-messages.component.html',
  styleUrls: ['./members-messages.component.css'],
  imports: [CommonModule, TimeagoModule, FormsModule],
})
export class MembersMessagesComponent implements OnInit {
  @ViewChild("messageForm") messageForm?: NgForm;
  @Input() username?: string;
  @Input() messages: Message[] = [];
  messageContent = '';

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (!this.username) return;
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm?.reset();
    })
  }

}
