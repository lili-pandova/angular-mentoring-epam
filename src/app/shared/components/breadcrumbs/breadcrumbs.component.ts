import { Component, Input } from '@angular/core';

import { Course } from '../../models/course/course';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
    @Input() public coursesTitle: any;

    constructor() {}

}
