import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import DateTimeUtils from '@app/core/util/date-time.util';
import {NgbDateParserFormatter, NgbDatepickerConfig, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    NgbDatepickerConfig,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent implements ControlValueAccessor, OnInit, OnChanges {

  @Input() minDate: Date; // if not passed in, no min date
  @Input() maxDate: Date; // if not passed in, no max date
  @Input() disableDayIndex: number[] = [];
  @Input() hasClearButton = true;
  @Input() disabled: boolean;
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';

  @Output() onDateSelected = new EventEmitter<Date>();

  datePickerObj: NgbDateStruct; // format for picker to read
  minDateStruct: NgbDateStruct; // format for min date
  maxDateStruct: NgbDateStruct; // format for max date
  dynamicId;

  dateVal = null;

  onModelChanged: any = () => { };

  onTouched: any = () => { };

  constructor(private formatter: NgbDateParserFormatter,
    private config: NgbDatepickerConfig,
    private _eref: ElementRef) {
    config.markDisabled = (date: NgbDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      return this.disableDayIndex.indexOf(d.getDay()) >= 0;
    };
  }

  /**
   * Init.
   */
  ngOnInit() {
    this.updatePicker();
  }

  /**
   * Update picker on any changes to inputs.
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.updatePicker();
  }

  /**
   * Update picker with required ngb structs based on date val.
   */
  updatePicker() {
    if (this.minDate && this.minDate instanceof Date) {
      this.minDateStruct = {
        year: this.minDate.getFullYear(),
        month: this.minDate.getMonth() + 1,
        day: this.minDate.getDate()
      };
    }
    if (this.maxDate && this.maxDate instanceof Date) {
      this.maxDateStruct = {
        year: this.maxDate.getFullYear(),
        month: this.maxDate.getMonth() + 1,
        day: this.maxDate.getDate()
      };
    }
    if (this.dateVal != null) {
      this.datePickerObj = this.formatter.parse(this.dateVal.toString());
    } else {
      this.datePickerObj = null;
    }
  }

  /**
   * Get current value of control.
   * @returns {any[]}
   */
  get value() {
    return this.dateVal;
  }

  /**
   * Set value of control.
   * @param val
   */
  set value(val: Date) {
    this.dateVal = val;
  }

  /**
   * On change register.
   * @param fn
   */
  registerOnChange(fn: any): void {
    this.onModelChanged = fn;
  }

  /**
   * On touch register.
   * @param fn
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Write value to control.
   * @param obj
   */
  writeValue(obj: Date): void {
    this.value = obj;
    this.updatePicker();
  }

  /**
   * Disable control.
   * @param {boolean} isDisabled
   */
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  /**
   * Update date val whether null or not. Update form object and emit date selected.
   */
  dateSelected() {
    let updatedDate = null;
    if (!isNullOrUndefined(this.datePickerObj)) {
      updatedDate = DateTimeUtils.dateWithoutTime(new Date(this.formatter.format(this.datePickerObj)));
    }
    this.writeValue(updatedDate);
    this.onModelChanged(this.dateVal);
    this.onTouched();
    this.onDateSelected.emit(this.dateVal);
  }

  /**
   * clear dates and emit change
   */
  clearDate() {
    this.datePickerObj = null;
    this.dateSelected();
  }

  /**
   * On open assign a random id. Give id for dom purposes.
   * @param id
   */
  openDatepicker(id) {
    this.dynamicId = id;
  }

  /**
   * handles on click outside the datepicker
   * @param event
   */
  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (isNullOrUndefined(this.dynamicId)) {
      return;
    } else if (!this._eref.nativeElement.contains(event.target)) {
      const self = this;
      setTimeout(function () {
        self.dynamicId.close();
      }, 10);
    }
  }

}
