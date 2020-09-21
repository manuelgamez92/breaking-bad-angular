import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() oldCharacters: Character[];
  
  @Output() sendName = new EventEmitter<string>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  searchByName(value: string) {
  const nameLowerCase = value.toLowerCase();
  const name = value.charAt(0).toUpperCase() + nameLowerCase.slice(1);
    this.sendName.emit(name);
     this.router.navigate[('characters')];
  }

}
