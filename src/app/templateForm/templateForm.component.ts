import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-form',
    templateUrl: './templateForm.component.html',
    styleUrls: ['./templateForm.component.css']
})
export class TemplateFormComponent {
    formData;

    formSubmit(form: NgForm) {
        this.formData = form.value;
    }
}