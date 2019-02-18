import { IModalDialog, IModalDialogOptions,IModalDialogButton } from 'ngx-modal-dialog';
import { Component, ComponentRef } from '@angular/core';


@Component({
  selector: 'app-modal-valider-action',
  templateUrl: './modal-valider-action.component.html',
  styleUrls: ['./modal-valider-action.component.scss']
})
export class ModalValiderActionComponent implements IModalDialog {
  actionButtons: IModalDialogButton[];
 
  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'I will always close', onAction: () => true },
      { text: 'I never close', onAction: () => false }
    ];
  }
 
  dialogInit(reference: ComponentRef<IModalDialog>, options: Partial<IModalDialogOptions<any>>) {
    // no processing needed
  }

}