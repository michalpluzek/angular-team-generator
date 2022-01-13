import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  numberOfTeams: number = 0;
  teams: string[][] = [];

  addMember() {
    if (this.newMemberName === '') {
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  clear() {
    this.newMemberName = '';
    this.members = [];
    this.numberOfTeams = 0;
    this.teams = [];
  }

  generateTeams() {
    const memberList = [...this.members];
    const memberInTeams = memberList.length / this.numberOfTeams;
    let teamsWithMaxMember = Math.round(
      (memberInTeams - Math.floor(memberInTeams)) * this.numberOfTeams
    );

    for (let i = 0; i < this.numberOfTeams; i++) {
      this.teams.push([]);

      for (let idx = 0; idx < memberInTeams; idx++) {
        if (teamsWithMaxMember > 0 || idx < memberInTeams - 1) {
          const randomMemberIndex = Math.floor(
            Math.random() * memberList.length
          );
          const randomMember = memberList[randomMemberIndex];
          memberList.splice(randomMemberIndex, 1);

          this.teams[i].push(randomMember);
        }
      }

      if (teamsWithMaxMember > 0) teamsWithMaxMember--;
    }
  }
}
