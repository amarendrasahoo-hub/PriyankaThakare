import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { format } from 'url';
import { from, empty, Subject } from 'rxjs';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const myNote = {
    notesubject: form.value.subject,
    initiatingdivision: form.value.initiatingdivision,
    initiatedBy: form.value.initiatedBy,
    };
    alert(form.value.subject);
    // fhj,kh,hk
    this.http.post<{message: string}>('http://10.20.11.93:3000/angular_Post', myNote)
     .subscribe((responsedata) => {
      console.log(responsedata.message);
     });


    form.reset();

  }
  }
