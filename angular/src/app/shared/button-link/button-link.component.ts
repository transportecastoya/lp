import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {

  @Input() link!: Link;

  constructor() { }

  ngOnInit(): void {
  }

}
