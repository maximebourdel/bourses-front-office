import { Component }        from '@angular/core';

@Component({
    selector: 'dashboard-list',
    template: `
        <quotes-detail></quotes-detail>
        <historicaldata-chart></historicaldata-chart>
        <historicaldata-list></historicaldata-list>
    `,
})
export class DashboardListComponent {}
