import { Component, OnInit } from '@angular/core';
import { PatientListService } from '../services/patient-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  dataList: any;

  constructor(
    private patientListData: PatientListService,
    private router: Router
  ) {
    this.patientListData.users().subscribe((data: any) => {
      this.dataList = data;
      let patientId = data?.entry[0]?.resource.id;
      this.router.navigate(['patientDetail/' + patientId]);
    });
  }

  ngOnInit(): void {}

  onSelect(patientId: any) {
    console.log(patientId);
    this.router.navigate(['patientDetail/' + patientId]);
  }
}
