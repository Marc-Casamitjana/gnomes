import { removeDuplicates, foreach, isMatch } from './../../assets/utils';
import { GnomeService } from './../gnome.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  gnomes: any[];
  gnome: any;
  hairColor = [];
  professions = [];
  sum = 20;
  gnomeList: any[];
  memoryGnomes: any[];
  filteredGnomes: any[];
  filters = {};
  searchValue: string;

  constructor(
    private gnomeService: GnomeService,
    private router: Router) {
  }

  ngOnInit() {
    this.getGnomes();
    this.gnomeColors();
    this.gnomeProfessions();
  }

  onScroll() {
    console.log('hola');
    const start = this.sum;
    this.sum += 20;
    this.addItems(start, this.sum);
  }

  addItems(startIndex, endIndex) {
    this.gnomes.slice(startIndex, endIndex).forEach(e => {
      this.gnomeList.push(e);
      this.memoryGnomes.push(e);
    });
  }

  getGnomes() {
    this.gnomeService.getAPIGnomes()
      .subscribe((gnomes: any) => {
        this.gnomes = gnomes.Brastlewark;
        this.memoryGnomes = this.gnomes.slice(0, this.sum);
        this.gnomeList = this.gnomes;
      });
  }


  getGnome(id) {
    console.log(this.gnomes[id]);
    this.gnome = this.gnomes[id];
    return this.gnomes[id];
  }

  gnomeColors() {
    this.gnomeService.getAPIGnomes()
      .subscribe((gnomes: any) => {
        gnomes.Brastlewark.forEach((e) => {
          this.hairColor.push(e.hair_color);
          this.hairColor = removeDuplicates(this.hairColor);
        });
      });
  }

  hairColorFilter(prop) {
    this.filters['hair_color'] = prop;
    this.multipleFilter(this.filters);
  }
  gnomeProfessions() {
    this.gnomeService.getAPIGnomes()
      .subscribe((gnomes: any) => {
        gnomes.Brastlewark.forEach((e) => {
          e.professions.forEach(p => {
            this.professions.push(p);
          });
          this.professions = removeDuplicates(this.professions);
        });
      });
  }

  professionFilter(prop) {
    this.filters['professions'] = prop;
    this.multipleFilter(this.filters);
  }

  ageFilter(prop) {
    let range = prop.split('-');
    if (prop === '') { range = null; }
    this.filters['age'] = range;
    this.multipleFilter(this.filters);
  }

  multipleFilter(filters) {
    this.gnomeList = this.gnomes.filter(function (gnome) {
       return (filters.hair_color ? gnome.hair_color === filters.hair_color : true)  &&
              (filters.professions ? gnome.professions.includes(filters.professions) : true) &&
              (filters.age ? gnome.age >= filters.age[0] && gnome.age <= filters.age[1] : true);
        //  && gnome.professions.includes(filters.professions);
    //  foreach(filters, function (key) {
    //     result = isMatch(gnome, filters);
    //   });
    //   return result;
    });
    // (<HTMLInputElement>document.getElementById('searchGnomes')).value ? this.searchGnomes(this.searchValue) : true ;
  }

  searchGnomes(word) {
    this.gnomeList = this.gnomeList.filter(e => e.name.toLowerCase().includes(word.toLowerCase()));
  }

  resetGnomes() {
    this.gnomeList = this.gnomes;
    this.filters = {};
    this.searchValue = '';
    (<HTMLInputElement>document.getElementById('colorSelect')).value = '';
    (<HTMLInputElement>document.getElementById('ageSelect')).value = '';
    (<HTMLInputElement>document.getElementById('profSelect')).value = '';

  }
  closeDet() {
    this.gnome = undefined;
  }

  loadDetail(id) {
    this.router.navigate(['gnome', id])
  }
}

