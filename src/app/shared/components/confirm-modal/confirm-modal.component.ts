import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BaseComponent} from '@app/core/components/base/base.component';

@Component({
  selector: 'zmove-delete-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent extends BaseComponent implements OnInit {

  @Input() title = 'Confirm';
  @Input() content = 'Are you sure you want to delete the selected rows?';

  constructor(public activeModal: NgbActiveModal) {
    super();
  }

  /**
   * Init.
   */
  ngOnInit() {
    setTimeout(() => {
      document.getElementById('yesBtn').focus();
    }, 100);
  }

  /**
   * Delete the selected rows
   */
  onRemoveSelected() {
    this.activeModal.close();
  }

}
