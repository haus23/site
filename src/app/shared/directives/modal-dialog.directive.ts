import { Directive, Input, OnChanges, SimpleChanges, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appVisible]'
})
export class ModalDialogDirective implements OnInit, OnChanges {

  @Input()
  appVisible: boolean;

  @Output()
  appVisibleChange = new EventEmitter<boolean>();

  constructor(private modal: ElementRef) { }

  ngOnInit(): void {
    this.modal.nativeElement.querySelector('.modal-background')
      .addEventListener('click', () => {
        this.appVisibleChange.emit(false);
      });
    this.modal.nativeElement.querySelector('.delete')
      .addEventListener('click', () => {
        this.appVisibleChange.emit(false);
      });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.appVisible) {
      this.modal.nativeElement.classList.add('is-active');
    } else {
      this.modal.nativeElement.classList.remove('is-active');
    }
  }
}
