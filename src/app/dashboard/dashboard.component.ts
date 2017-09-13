import { Component, OnInit } from '@angular/core';


declare interface ProjectsInfo {
    nbrmembre: string;
    title: string;
    time: string;
    progress: string;

}
export const FOURPROJECTS: ProjectsInfo[] = [
    { title: 'BridgIX', nbrmembre: '20',  time: '100 H', progress: '10%' },
    { title: 'Ticketvioo', nbrmembre: '20',  time: '100 H', progress: '80%' },
    { title: 'Predix', nbrmembre: '20',  time: '100 H', progress: '25%' },
    { title: 'W.academy', nbrmembre: '20',  time: '100 H', progress: '65%' },
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    projects: any[];
    public barChartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    public barChartLabels:string[] = ['BridgIX', 'Ticketvioo', 'Predix', 'W.academy'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {data: [65, 59, 80, 81], label: 'Project'}
    ];
    // PolarArea
    public polarAreaChartLabels:string[] = ['D1', 'D2', 'D3', 'D4', 'D5'];
    public polarAreaChartData:number[] = [80, 100, 60, 40, 55];
    public polarAreaLegend:boolean = true;

    public polarAreaChartType:string = 'polarArea';
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
    constructor() {
    }

    calculColor(val) {
        var val2 = +val;
        if (val2 > 0 && val2 <= 25) {
            return 'red';
        } else if (val2 > 25 && val2 <= 70) {
            return 'orange';
        } else {
            return 'green';
        }
    }

    ngOnInit() {
        this.projects = FOURPROJECTS.filter(menuItem => menuItem);
    }
}
