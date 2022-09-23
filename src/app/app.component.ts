import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  option = '0';

  @Input() n1: String;
  n2: number = 0.08;
  @Input() n3: String;

  @Input() n4: String;

  n6: number = 1;

  @Input() n7: String;

  constructor() {}

  ngOnInit() {}

  getSum() {
    return Number(this.n1) * Number(this.n2) * Number(this.n3);
  }

  getSumJ() {
    return (
      Number(this.n4) * (Number(this.n2) + Number(this.n6)) * Number(this.n7)
    );
  }
}
