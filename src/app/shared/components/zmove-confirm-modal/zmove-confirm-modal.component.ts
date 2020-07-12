import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {HebBaseComponent} from '@app/core/components/heb-base/heb-base.component';

@Component({
  selector: 'zmove-delete-modal',
  templateUrl: './zmove-confirm-modal.component.html',
  styleUrls: ['./zmove-confirm-modal.component.scss']
})
export class ZmoveConfirmModalComponent extends HebBaseComponent implements OnInit {

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
