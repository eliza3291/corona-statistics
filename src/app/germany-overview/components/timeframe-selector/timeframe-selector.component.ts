import { Component, EventEmitter, Output } from '@angular/core';
import { TIMEFRAME, Timeframe } from '@common';

@Component({
  selector: 'app-timeframe-selector',
  templateUrl: './timeframe-selector.component.html',
  styleUrls: ['./timeframe-selector.component.scss']
})
export class TimeframeSelectorComponent {
  public timeframeData = TIMEFRAME;
  public selectedTimeframeIndex: number;
  public showNext: boolean;
  public showBack: boolean;

  @Output() timeframeSelected: EventEmitter<Timeframe> = new EventEmitter<Timeframe>();

  constructor() {
    this.selectedTimeframeIndex = 0;
    this.showNext = true;
    this.showBack = false;
  }
  get selectedTimeframe(): Timeframe {
    return this.timeframeData[this.selectedTimeframeIndex];
  }

  onNext(): void {
    if (this.selectedTimeframeIndex < this.timeframeData.length - 1) {
      this.selectedTimeframeIndex++;
      this.timeframeSelected.emit(this.selectedTimeframe);
    }
  }

  onBack(): void {
    if (this.selectedTimeframeIndex > 0) {
      this.selectedTimeframeIndex--;
      this.timeframeSelected.emit(this.selectedTimeframe);
    }
  }
}
