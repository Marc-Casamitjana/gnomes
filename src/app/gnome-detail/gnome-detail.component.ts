import { GnomeService } from './../gnome.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gnome } from '../gnome';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.css']
})
export class GnomeDetailComponent implements OnInit {
  gnome: Gnome;
  constructor(
    private route: ActivatedRoute,
    private gnomeService: GnomeService
  ) { }

  ngOnInit() {
  }
}
