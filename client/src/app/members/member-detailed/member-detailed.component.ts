import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { TabDirective, TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';
import { TimeagoModule } from 'ngx-timeago';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from 'src/app/models/member';
import { MembersMessagesComponent } from '../members-messages/members-messages.component';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-detailed',
  standalone: true,
  templateUrl: './member-detailed.component.html',
  styleUrls: ['./member-detailed.component.css'],
  imports: [CommonModule, TabsModule, GalleryModule, TimeagoModule, MembersMessagesComponent],
})
export class MemberDetailedComponent implements OnInit {
  @ViewChild("memberTabs") memberTabs?: TabsetComponent;
  member: Member | undefined;
  images: GalleryItem[] = [];
  activeTab?: TabDirective;
  messages: Message[] = [];

  constructor(private memberService: MembersService, private route: ActivatedRoute, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadMember();
  }

  onTabActivated(data: TabDirective) {
    this.activeTab = data;
    if (this.activeTab.heading === 'Messages' && this.member) {
      this.loadMessages();
    }
  }

  loadMessages() {
    if (this.member) {
      this.messageService.getMessageThread(this.member.userName).subscribe({
        next: messages => this.messages = messages
      })
    }
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get("username")

    if (!username) return;

    this.memberService.getMember(username).subscribe({
      next: member => {
        this.member = member,
        this.GetImages()
      }
    })
  }

  GetImages() {
    if (!this.member) return;

    for (const photo of this.member?.photos) {
      this.images.push(new ImageItem({
        src: photo.url,
        thumb: photo.url
      }))
    }
  }
}
