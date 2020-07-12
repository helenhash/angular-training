import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {forbiddenNameValidator} from '@app/demo-form/validation/nameValidator';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {
  name = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl('', [forbiddenNameValidator(/bob/i)]),
    lastName: new FormControl(''),
  });
  constructor() { }

  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Lee'
    });
  }
}
