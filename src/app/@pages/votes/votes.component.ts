import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/@core/interfaces/character.interface';
import { ApiService } from 'src/app/@core/services/api.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  characters: Character[] = [];
  loading: boolean = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data.data.characters;
      this.loading = false;

    });
    this.changeVotes();


  }
  changeVotes() {
    this.loading = true;

    this.apiService.changeVotes().subscribe((data: any) => {
      console.log("changesVotes " + data);
      this.characters = data.changeVotes;
      this.loading = false;

    });
  }
  addVote(character: string, name: string) {
    this.apiService.addVote(character).subscribe((data: any) => {
      alert("Agregaste un voto para " + name);
      this.characters = data.addVote.characters;
      this.loading = false;
    })
  }

}
