import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [ {
      name: 'Tamil Nadu',
      data: [1, 42, 969,8002 ,38716 , 111151 ]
    }, {
      name: 'NCT of Delhi',
      data: [7, 49, 1069, 7233, 34687, 99444 ]
    }, {
      name: 'Uttar Pradesh',
      data: [12, 65, 452 ,3573 ,12088 , 27707]
    }, {
      name: 'Andaman and Nicobar Islands',
      data: [0,9 , 11,33 ,38 , 125]
    }, {
      name: 'Andhra Pradesh',
      data: [1, 19, 405, 2018, 5429, 18697]
    }, {
      name: 'Arunachal Pradesh',
      data: [0, 0, 1, 1,67 , 269]
    }, {
      name: 'Assam',
      data: [0, 0, 29,65 ,3431 , 11737 ]
    }, {
      name: 'Bihar',
      data: [0, 11, 64, 749 ,5948 , 11860]
    }, {
      name: 'Chandigarh',
      data: [0, 8, 19,181 ,332 , 466]
    }, {
      name: 'Chhattisgarh',
      data: [0, 7, 25,59 , 1398, 3207]
    }, {
      name: 'Daman and Diu',
      data: [0, 0, 0, 1, 28, 373]
    }, {
      name: 'Dadra and Nagar Haveli',
      data: [0, 0, 0, 1, 28, 373]
    }, {
      name: 'Goa',
      data: [0, 3, 7,7 ,417 , 1761]
    }, {
      name: 'Gujarat',
      data: [0, 55, 468,8542 , 22067, 36123]
    }, {
      name: 'Himachal Pradesh',
      data: [0, 3, 32,59 , 470, 1066]
    }, {
      name: 'Haryana',
      data: [14, 35, 179,730 ,5968 , 17006 ]
    }, {
      name: 'Jharkhand',
      data: [0, 0, 17, 161, 1599, 2807]
    }, {
      name: 'Jammu and Kashmir',
      data: [2, 33, 224,879 ,4574 ,8429]
    }, {
      name: 'Karnataka',
      data: [6, 81, 215,862 ,6245 ,23474 ]
    }, {
      name: 'Kerala',
      data: [19, 182, 373,520 ,2245 , 5430 ]
    }, {
      name: 'Lakshadweep',
      data: [0, 13, 15, 0 , 0, 0]
    }, {
      name: 'Ladakh',
      data: [0, 0, 0, 42, 135, 1005]
    },  {
      name: 'Maharastra',
      data: [14, 186, 1761,23401 ,97648 , 206619]
    }, {
      name: 'Meghalaya',
      data: [0, 0, 0,13 ,44 , 72]
    }, {
      name: 'Manipur',
      data: [0, 1, 2,2 ,366 , 1366]
    }, {
      name: 'Madhya Pradesh',
      data: [0, 39, 529, 3785, 10241,14930 ]
    }, {
      name: 'Mizoram',
      data: [0, 1, 1, 1,102 , 186]
    },{
      name: 'Nagaland',
      data: [0, 0, 0,0 ,130 , 578]
    },
    {
      name: 'Odisha',
      data: [0, 3, 54, 414,3386 , 9070 ]
    },
    {
      name: 'Punjab',
      data: [1, 38, 158, 1877 , 2887, 6283 ]
    },{
      name: 'Puducherry',
      data: [0, 1, 7,12 ,157 , 946]
    },{
      name: 'Rajasthan',
      data: [3, 54, 700,3988 ,11838 ,20164]
    },{
      name: 'Sikkim',
      data: [0, 0, 0,0 , 13, 125]
    },{
      name: 'Telangana',
      data: [1, 67, 503, 1275,4320 , 23902]
    },{
      name: 'Tripura',
      data: [0, 0, 2,152 , 915, 1580]
    },{
      name: 'Uttarakhand',
      data: [0, 6, 35, 68, 1655, 3124 ]
    },{
      name: 'West Bengal',
      data: [0, 18, 126,2063 , 9768, 22126]
    }];
  }

  cards1() {
    return [81,2059,11484,37257,81997,198370,333008];
  }
  cards2() {
    return [9,170,1365,27969,10007,95754,169689];
  }
  cards3() {
    return [2,55,395,2649,1223,5608,9520];
  }

  pieChart() {
    return [{
      name: 'Maharastra',
      y: 30.69,
      sliced: true,
      selected: true
    }, {
      name: 'Tamil Nadu',
      y: 16.51
    }, {
      name: 'Delhi',
      y: 14.77
    }, {
      name: 'Gujarat',
      y: 5.36
    }, {
      name: 'Uttar Pradesh',
      y: 4.11
    }, {
      name: 'Rajasthan',
      y: 2.99
    }, {
      name: 'West Bengal',
      y: 3.28
    }, {
      name: 'Madhya Pradesh',
      y: 2.21
    }, {
      name: 'Haryana',
      y: 2.52
    }, {
      name: 'State Unassigned',
      y: 0.68
    }, {
      name: 'Karnataka',
      y: 3.48
    }, {
      name: 'Andhra Pradesh',
      y: 2.77
    }, {
      name: 'Bihar',
      y: 1.76
    }, {
      name: 'Telangana',
      y: 3.55
    }, {
      name: 'Jammu and Kashmir',
      y: 1.25
    }, {
      name: 'Assam',
      y: 1.74
    }, {
      name: 'Odisha',
      y: 1.34
    }, {
      name: 'Punjab',
      y: 0.933
    }, {
      name: 'Kerala',
      y: 0.80
    }, {
      name: 'Uttarakhand',
      y: 0.46
    }, {
      name: 'Chhattisgarh',
      y: 0.47
    }, {
      name: 'Jharkhand',
      y: 0.41
    }, {
      name: 'Tripura',
      y: 0.23
    }, {
      name: 'Ladakh',
      y: 0.149
    }, {
      name: 'Goa',
      y: 0.26
    }, {
      name: 'Himachal Pradesh',
      y: 0.15
    }, {
      name: 'Manipur',
      y: 0.20
    }, {
      name: 'Puducherry',
      y: 0.14
    }, {
      name: 'Chandigarh',
      y: 0.06
    }, {
      name: 'Nagaland',
      y: 0.085
    }, {
      name: 'Mizoram',
      y: 0.02
    }, {
      name: 'Arunachal Pradesh',
      y: 0.03
    }, {
      name: 'Sikkim',
      y: 0.018
    }, {
      name: 'Dadra and Nagar Haveli and Daman and Diu',
      y: 0.055
    }, {
      name: 'Andaman and Nicobar Islands',
      y: 0.018
    }, {
      name: 'Meghalaya',
      y: 0.010
    }, {
      name: 'Lakshadweep',
      y: 0
    }];
  }
}
