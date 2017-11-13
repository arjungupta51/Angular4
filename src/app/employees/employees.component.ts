import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// to use datatable install these dependencies first and then modify angularcli.json file, styles and scripts

// "styles": [
//          "../node_modules/datatables.net-dt/css/jquery.dataTables.css"
//       ],
//       "scripts": [
//         "../node_modules/jquery/dist/jquery.js",
//         "../node_modules/datatables.net/js/jquery.dataTables.js"

// npm install jquery --save
// npm install datatables.net --save
// npm install datatables.net-dt --save
// npm install angular-datatables --save
// npm install @types/jquery --save-dev
// npm install @types/datatables.net --save-dev