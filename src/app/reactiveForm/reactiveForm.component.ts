import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactiveForm.component.html',
    styleUrls: ['./reactiveForm.component.css']
})
export class ReactiveFormComponent implements OnInit {
    form: FormGroup;
    done = false;
    ngOnInit() {
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.email, Validators.required]),
            password: new FormControl(null, [Validators.minLength(5), Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            city: new FormControl(null, [Validators.required]),
            file: new FormControl(null, [Validators.required]),
        });
    }

    submit() {
        this.done = true;
    }
}