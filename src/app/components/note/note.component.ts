import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHandlerService } from 'src/app/service/http-handler.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  noteForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  constructor(private formBuilder: FormBuilder, private handler: HttpHandlerService, private router: Router) { }
  ngOnInit() {

    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]

});
  }

get f() { return this.noteForm.controls; }

  public onSubmit(user) {
    this.submitted = true;
    if (this.noteForm.invalid) {
      return;
    }
    this.handler.note(user).subscribe(res => {
      console.log('res:', res);
      localStorage.setItem('token', res.headers.get('token'));
      this.router.navigate(['/home']);
    },  (error) => console.error(error));
  }
}



