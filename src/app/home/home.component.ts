import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SimpleModalComponent} from "@app/shared/components/simple-modal/simple-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(SimpleModalComponent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {
  }

}
