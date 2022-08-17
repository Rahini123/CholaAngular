import { Component, OnInit } from '@angular/core';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';

@Component({
  selector: 'app-sla-policy',
  templateUrl: './sla-policy.component.html',
  styleUrls: ['./sla-policy.component.scss'],
})
export class SlaPolicyComponent implements OnInit {
  policies: any;

  rules: any;

  timeZones: any;

  workingHours: any;

  checked: boolean = true;

  multipleRule: any;

  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService) {}

  ngOnInit(): void {
    const breadcrumb = { dynamicText: 'SLA Policies' };
    this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);

    this.policies = [
      {
        Priority: 'high',
        Respond_within: '2hrs',
        Resolve_within: '12 hrs',
        Operational_Hrs: '12hrs',
        Escalation_Email: 'true',
      },
      {
        Priority: 'high',
        Respond_within: '2hrs',
        Resolve_within: '12 hrs',
        Operational_Hrs: '12hrs',
        Escalation_Email: 'true',
      },
    ];
    this.timeZones = [
      { format: 'Hours', code: 'Hrs' },
      { format: 'minutes', code: 'Mins' },
      { format: 'days', code: 'Days' },
      { format: 'months', code: 'Mos' },
    ];
    this.workingHours = [
      { Hours: 'Calendar Hours', code: 'Ca Hrs' },
      { Hours: 'Business Hours', code: 'Bss Hrs' },
    ];
  }

  addRule() {
    this.rules = [{}];
  }

  deleteRule() {
    this.rules.pop();
  }

  addMultipleRule() {
    // Object.keys(myArray).length-to check size
    if (this.multipleRule) {
      this.multipleRule.push(this.multipleRule);
    } else {
      this.multipleRule = [{}];
    }
  }

  deleteMultipleRule() {
    this.multipleRule.pop();
  }
}
