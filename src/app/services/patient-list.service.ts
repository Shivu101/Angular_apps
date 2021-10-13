import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PatientListService {
  //url = 'https://reqres.in/api/users?page=2';
  listData = 'assets/data/patientList.json';

  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.listData);
  }

  getUserDetails(identifier: any) {
    // return this.http.get('http://10.12.40.156:30171/fhir/r4/Patient', {
    //   params: { identifier: identifier },
    // });
    return this.http.get(this.listData).pipe(
      map((data: any) => {
        console.log('jrfhbr');
        return data.entry.filter((en: any) => {
          return en.resource.id == identifier;
        });
      })
    );
  }
}
