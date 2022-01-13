import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = ['1', '2', '3', '4', '5', '6', '7'];
  numberOfTeams: number = 0;
  teams: string[][] = [];

  addMember() {
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }

  generateTeams() {
    const memberList = [...this.members];
    const memberInTeams = memberList.length / this.numberOfTeams;
    const maxNumberOfMember = Math.ceil(memberInTeams);
    const minNumberOfMember = Math.floor(memberInTeams);
    let isMaxNumberOfMemberInTeam = false;

    for (let i = 0; i < this.numberOfTeams; i++) {
      this.teams.push([]);

      if (!isMaxNumberOfMemberInTeam) {
        for (let idx = 0; idx < maxNumberOfMember; idx++) {
          const randomMemberIndex = Math.floor(
            Math.random() * memberList.length
          );
          const randomMember = memberList[randomMemberIndex];
          memberList.splice(randomMemberIndex, 1);

          this.teams[i].push(randomMember);
        }

        isMaxNumberOfMemberInTeam = true;
      } else {
        for (let idx = 0; idx < minNumberOfMember; idx++) {
          const randomMemberIndex = Math.floor(
            Math.random() * memberList.length
          );
          const randomMember = memberList[randomMemberIndex];
          memberList.splice(randomMemberIndex, 1);

          this.teams[i].push(randomMember);
        }
      }
    }
    console.log(this.teams);
  }
}
