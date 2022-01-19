import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pattern-create',
  templateUrl: './pattern-create.component.html',
  styleUrls: ['./pattern-create.component.css']
})
export class PatternCreateComponent implements OnInit {

  pattern: string = "";

  constructor() { }

  ngOnInit(): void {

  }

  range(start: string, stop: string) {
    var idx = start.charCodeAt(0);
    var end = stop.charCodeAt(0);
    var ret = Array();

    while (idx <= end) {
      ret.push(String.fromCharCode(idx));
      ++idx;
    }

    return ret;
  }

  generatePattern(length: any) {
    var ret = "";
    var uppers = this.range('A', 'Z');
    var lowers = this.range('a', 'z');
    var numbers = this.range('0', '9')

    for (var u = 0; u < uppers.length; ++u)
      for (var l = 0; l < lowers.length; ++l)
        for (var n = 0; n < numbers.length; ++n)
          if (length != 0 && ret.length >= length) {
            this.pattern = ret.substring(0, length);
            return;
          } else {
            ret += uppers[u] + lowers[l] + numbers[n];
            this.pattern = ret;
          }

    return this.pattern;
  }
}
