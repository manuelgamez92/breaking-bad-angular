import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApiService } from 'src/app/@core/services/api.service';
import { Character } from 'src/app/@core/interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  loading: boolean;
  searchInput = "null";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.getCharaters();
  }
  getCharaters() {
    this.apiService.getCharacters().subscribe((data: any) => {
      if (this.searchInput === 'null') {
        this.characters = data.data.characters;
      } else if (this.searchInput) {

        this.characters = data.data.characters.filter(d => d.name.includes(this.searchInput));;

      }else{
        this.characters = data.data.characters;
      }

      this.loading = false;
    });
  }

 
  updateCharacters(sendName: string) {
    this.searchInput = sendName;
    this.getCharaters();
   
    
  }

}
