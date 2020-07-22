import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';    
import { Router } from '@angular/router';    
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  
  title: string;
  public form: FormGroup = new FormGroup({
    crProcessRichTextEditor: new FormControl( null, Validators.required),

  });
  constructor(
    private router: Router, 
    private dialogRef: MatDialogRef<TextEditorComponent>,
    @Inject(MAT_DIALOG_DATA) data) 
    {
      this.title = data.title;
    }
    
    ngOnInit() {
    }
  save() {
    this.dialogRef.close(this.form.value);
  }
  close() {
    this.dialogRef.close();
  }
}
