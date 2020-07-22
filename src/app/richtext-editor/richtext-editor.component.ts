import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-richtext-editor',
  templateUrl: './richtext-editor.component.html',
  styleUrls: ['./richtext-editor.component.css']
})
export class RichtextEditorComponent implements OnInit {
  title: string;
  public form: FormGroup = new FormGroup({
    crProcessRichTextEditor: new FormControl( null, Validators.required),
  });
  constructor() { }
    
  ngOnInit() {
  }
}
