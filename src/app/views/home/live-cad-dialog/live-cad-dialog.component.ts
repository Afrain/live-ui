import { LiveService } from './../../../shared/service/live.service';
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as moment from 'moment';

@Component({
  selector: 'app-live-cad-dialog',
  templateUrl: './live-cad-dialog.component.html',
  styleUrls: ['./live-cad-dialog.component.css']
})
export class LiveCadDialogComponent implements OnInit {

  liveForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<LiveCadDialogComponent>,
              private formBuilder: FormBuilder,
              private liveService: LiveService) { }

  ngOnInit(): void {
    this.liveForm = this.formBuilder.group({
      nomeLive: ['', Validators.required],
      nomeCanal: ['', Validators.required],
      dataLive: ['', Validators.required],
      horaLive: ['', Validators.required],
      linkLive: ['', Validators.required],
    });
  }

  salvarLive() {
    const newData: moment.Moment = moment.utc(this.liveForm.value.dataLive).local();
    this.liveForm.value.dataLive = newData.format(`YYYY-MM-DDT${this.liveForm.value.horaLive}`);
    this.liveService.postLive(this.liveForm.value)
      .subscribe(response => {

      });
    this.dialogRef.close();
    this.liveForm.reset();
    window.location.reload();
  }

  cancelar(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

}
