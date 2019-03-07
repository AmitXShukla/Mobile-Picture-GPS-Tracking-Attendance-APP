import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../services/backend.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent implements OnInit {
  attendanceSaved: boolean = false;
  showCurrentLocation: boolean = false;
  showHistLocation: boolean = false;
  histLat;
  histLng;
  userData;
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private displayedColumns = ['createdAt', 'data', 'id', 'path'];
  members;
  showFileUpload: boolean = false;
  attendanceDocId;
  picUrl;

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
  this.userData = {
    email: localStorage.getItem("email"),
    uid:  localStorage.getItem("uid"),
    gpsLoc : {
      "lat": null,
      "lng": null
    },
    dttm: new Date()
  };
  this.getUserLocation();
  this.dataSource = new MatTableDataSource(this.members);
  }
  onTabClick(event) {
    if (event.index === 1) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getHistLocation();
    }
}
getUserLocation() {
  const positionOption = { enableHighAccuracy: false, maximumAge: Infinity, timeout: 60000 };
        const gpsSunccuss = function (currentPosition) {
            // use gps position
        };
        const gpsFailed = function () {
            // use some 3rd party position solution(get position by your device ip)
            // getPositionBy3rdParty();
        };

        /// locate the user
        if (navigator.geolocation) {
            // navigator.geolocation.watchPosition((position => {
                navigator.geolocation.getCurrentPosition((position => {
                // call these two lines from another function at settime interval, only capture new GPS coords here through watchPosition
                    this.userData.gpsLoc.lat = position.coords.latitude;
                    this.userData.gpsLoc.lng = position.coords.longitude;
                return this.userData;
            }), gpsFailed, positionOption);
        }
}
setAttendance() {
  if (confirm("Are you sure want to Submit your attendance ?")) {
    this._backendService.setAttendance('NA', this.userData);
    this.attendanceSaved = true;
  }
}
deleteAttendance(docId) {
  if (confirm("Are you sure want to Delete your attendance ?")) {
    this._backendService.deleteAttendance(docId);
  }
}
getHistLocation() {
  this._backendService.getAttendance()
      .subscribe(members => {
          this.dataSource = new MatTableDataSource(members);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
      });
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
