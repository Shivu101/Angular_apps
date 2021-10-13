import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PatientListService } from '../services/patient-list.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent implements OnInit {
  public patientId;
  public userDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientlistservice: PatientListService
  ) {
    this.route.params.subscribe((params) => {
      this.patientId = params['id'];
      this.getUserDetails();
    });
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.patientlistservice
      .getUserDetails(this.patientId)
      .subscribe((data: any) => {
        this.userDetail = data;
        //console.log(this.userDetail);
      });
  }
}
