import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from 'src/app/models/member';
import { Pagination } from 'src/app/models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  /* members$: Observable<Member[]> | undefined; */
  members: Member[] = [];
  pagination: Pagination | undefined;
  pagenumber = 1;
  pagesize = 5;

  constructor(private memberService: MembersService) { }
  ngOnInit(): void {
    /* this.members$ = this.memberService.getMembers(); */
    this.loadMember();
  }

  loadMember() {
    this.memberService.getMembers(this.pagenumber, this.pagesize).subscribe({
      next: response => {
        if (response.result && response.pagination) {
          this.members = response.result;
          this.pagination = response.pagination;
        }
      }
    })
  }

}
