import { Component } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.css']
})
export class BottomsheetComponent {

  constructor(private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetBoxComponent);
  }


}

@Component({
  selector: 'app-bottomsheet-box',
  templateUrl: './bottomsheetbox.html',
})
export class BottomSheetBoxComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetBoxComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
