import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { addVoteOperation} from '../operations/mutation';
import {getCharacters} from '../operations/query';
import {changeVotes} from'../operations/subscription';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apollo: Apollo) { }

  // get Characters
  getCharacters(){
    return this.apollo.watchQuery<any>({
      query: getCharacters,
    }).valueChanges
  }

  //Get votes changes on real time
  changeVotes(){
    return this.apollo.subscribe({
      query:changeVotes
    });
  }
  addVote(character:string){
    return this.apollo.mutate({
      mutation: addVoteOperation,
      variables:{
        character
      }
    });
  }

  
}
