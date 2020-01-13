import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck,
    OnChanges, OnDestroy, OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  title = 'angular-mentoring';
  ngOnChanges() {
    //console.log('OnChange hook');
  }

  ngOnInit() {
    //console.log('OnInit hook');
  }

  ngDoCheck() {
    //console.log('DoCheck hook');
  }

  ngAfterContentInit() {
   // console.log('AfterContentInit hook');
  }

  ngAfterContentChecked() {
    //console.log('AfterContentChecked hook');
  }

  ngAfterViewInit() {
    //console.log('AfterViewInit hook');
  }

  ngAfterViewChecked() {
    //console.log('AfterViewChecked hook');
  }

  ngOnDestroy() {
    //console.log('OnDestroy hook');
  }
}
