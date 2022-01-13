import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  numberOfTeams: number | '' = '';
  teams: string[][] = [];
  errorNameMessage = '';
  errorNumberOfTeamsMessage = '';
  minNumberOfTeams = 2;

  addMember() {
    if (this.newMemberName === '') {
      this.errorNameMessage = "Name can't be empty.";
      return;
    }
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  clear() {
    this.newMemberName = '';
    this.members = [];
    this.numberOfTeams = '';
    this.teams = [];
    this.errorNameMessage = '';
    this.errorNumberOfTeamsMessage = '';
  }

  generateTeams() {
    if (this.numberOfTeams < 2) {
      this.errorNumberOfTeamsMessage = 'There must be at least 2 teams.';
    }
    const memberList = [...this.members];
    const memberInTeams = memberList.length / Number(this.numberOfTeams);
    let teamsWithMaxMember = Math.round(
      (memberInTeams - Math.floor(memberInTeams)) * Number(this.numberOfTeams)
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

  checkErrorMsg() {
    if (this.newMemberName.length > 0) this.errorNameMessage = '';
    if (this.newMemberName.length > 0) this.errorNumberOfTeamsMessage = '';
  }
}
