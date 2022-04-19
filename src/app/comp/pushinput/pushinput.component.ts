import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pushinput',
  templateUrl: './pushinput.component.html',
  styleUrls: ['./pushinput.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushinputComponent implements OnInit {

  @Input()
  truc?: { nom: string };

  constructor() { }

  ngOnInit(): void {
  }

}
