import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailedComponent } from './members/member-detailed/member-detailed.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "members", component:MemberListComponent },
  { path: "members/:id", component:MemberDetailedComponent },
  { path: "lists/", component:ListsComponent},
  { path: "messages", component:MessagesComponent},
  { path: "**", component:HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
