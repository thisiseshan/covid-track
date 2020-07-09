import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

export interface PeriodicElement {
  state: string;
  confirmed: number;
  recovered: number;
  deaths: number;
  active: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {state: "Maharashtra",
    confirmed: 217121,
    recovered: 118558,
    deaths: 9250,
    active: 89294
    },
    {
    state: "Tamil Nadu",
    confirmed: 122350,
    recovered: 74167,
    deaths: 1510,
    active: 46483
    },
    {
    state: "Delhi",
    confirmed: 99444,
    recovered: 71339,
    deaths: 3067,
    active: 25038
    },
    {
    state: "Gujarat",
    confirmed: 36123,
    recovered: 25900,
    deaths: 1944,
    active: 8279
    },
    {
    state: "Uttar Pradesh",
    confirmed: 27707,
    recovered: 18761,
    deaths: 785,
    active: 8161
    },
    {
    state: "Rajasthan",
    confirmed: 20164,
    recovered: 15928,
    deaths: 456,
    active: 3780
    },
    {
    state: "West Bengal",
    confirmed: 22126,
    recovered: 14711,
    deaths: 757,
    active: 6658
    },
    {
    state: "Madhya Pradesh",
    confirmed: 14930,
    recovered: 11411,
    deaths: 608,
    active: 2911
    },
    {
    state: "Haryana",
    confirmed: 17005,
    recovered: 12944,
    deaths: 265,
    active: 3796
    },
    {
    state: "State Unassigned",
    confirmed: 4629,
    recovered: 0,
    deaths: 0,
    active: 4629
    },
    {
    state: "Karnataka",
    confirmed: 23474,
    recovered: 9849,
    deaths: 372,
    active: 13249
    },
    {
    state: "Andhra Pradesh",
    confirmed: 18697,
    recovered: 8422,
    deaths: 232,
    active: 10043
    },
    {
    state: "Bihar",
    confirmed: 11860,
    recovered: 8765,
    deaths: 90,
    active: 3005
    },
    {
    state: "Telangana",
    confirmed: 23902,
    recovered: 12703,
    deaths: 295,
    active: 10904
    },
    {
    state: "Jammu and Kashmir",
    confirmed: 8429,
    recovered: 5255,
    deaths: 132,
    active: 3042
    },
    {
    state: "Assam",
    confirmed: 11737,
    recovered: 7434,
    deaths: 14,
    active: 4286
    },
    {
    state: "Odisha",
    confirmed: 9070,
    recovered: 6224,
    deaths: 46,
    active: 2800
    },
    {
    state: "Punjab",
    confirmed: 6283,
    recovered: 4408,
    deaths: 164,
    active: 1711
    },
    {
    state: "Kerala",
    confirmed: 5430,
    recovered: 3174,
    deaths: 26,
    active: 2228
    },
    {
    state: "Uttarakhand",
    confirmed: 3124,
    recovered: 2524,
    deaths: 42,
    active: 530
    },
    {
    state: "Chhattisgarh",
    confirmed: 3207,
    recovered: 2578,
    deaths: 14,
    active: 615
    },
    {
    state: "Jharkhand",
    confirmed: 2807,
    recovered: 2045,
    deaths: 18,
    active: 744
    },
    {
    state: "Tripura",
    confirmed: 1580,
    recovered: 1206,
    deaths: 1,
    active: 373
    },
    {
    state: "Ladakh",
    confirmed: 1005,
    recovered: 826,
    deaths: 1,
    active: 178
    },
    {
    state: "Goa",
    confirmed: 1761,
    recovered: 936,
    deaths: 7,
    active: 818
    },
    {
    state: "Himachal Pradesh",
    confirmed: 1066,
    recovered: 724,
    deaths: 10,
    active: 319
    },
    {
    state: "Manipur",
    confirmed: 1366,
    recovered: 689,
    deaths: 0,
    active: 677
    },
    {
    state: "Chandigarh",
    confirmed: 466,
    recovered: 395,
    deaths: 6,
    active: 65
    },
    {
    state: "Puducherry",
    confirmed: 946,
    recovered: 448,
    deaths: 14,
    active: 484
    },
    {
    state: "Nagaland",
    confirmed: 578,
    recovered: 228,
    deaths: 0,
    active: 350
    },
    {
    state: "Mizoram",
    confirmed: 186,
    recovered: 133,
    deaths: 0,
    active: 53
    },
    {
    state: "Arunachal Pradesh",
    confirmed: 269,
    recovered: 78,
    deaths: 1,
    active: 190
    },
    {
    state: "Sikkim",
    confirmed: 125,
    recovered: 61,
    deaths: 0,
    active: 51
    },
    {
    state: "Dadra and Nagar Haveli and Daman and Diu",
    confirmed: 373,
    recovered: 159,
    deaths: 0,
    active: 211
    },
    {
    state: "Andaman and Nicobar Islands",
    confirmed: 125,
    recovered: 72,
    deaths: 0,
    active: 53
    },
    {
    state: "Meghalaya",
    confirmed: 72,
    recovered: 43,
    deaths: 1,
    active: 28
    },
    {
    state: "Lakshadweep",
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    active: 0
    }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards1 = [];
  cards2 = [];
  cards3 = [];
  pieChart = [];

  displayedColumns: string[] = ['state', 'confirmed', 'recovered', 'deaths','active'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards1 = this.dashboardService.cards1();
    this.cards2 = this.dashboardService.cards2();
    this.cards3 = this.dashboardService.cards3();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
