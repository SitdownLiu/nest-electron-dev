import { Component, OnInit } from '@angular/core';
import { faGithub, faQq } from '@fortawesome/free-brands-svg-icons';
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ne-footer',
  templateUrl: './ne-footer.component.html',
  styleUrls: ['./ne-footer.component.scss'],
})
export class NeFooterComponent implements OnInit {
  faGithub = faGithub;
  faQq = faQq;
  faAt = faAt;
  faEnvelope = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
}
