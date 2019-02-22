import { Directive, Input, OnChanges, SimpleChanges, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appVisible]'
})
export class ModalDialogDirective implements OnInit, OnChanges {

  @Input('appVisible')
  visible: boolean;

  @Output('appVisibleChange')
  visibleChange = new EventEmitter<boolean>();

  constructor(private modal: ElementRef) { }

  ngOnInit(): void {
    this.modal.nativeElement.querySelector('.modal-background')
      .addEventListener('click', () => {
        this.visibleChange.emit(false);
      });
      this.modal.nativeElement.querySelector('.delete')
      .addEventListener('click', () => {
        this.visibleChange.emit(false);
      });
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.visible) {
      this.modal.nativeElement.classList.add('is-active');
    } else {
      this.modal.nativeElement.classList.remove('is-active');
    }
  }
}
