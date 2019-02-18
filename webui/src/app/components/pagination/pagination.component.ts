import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter,SimpleChanges } from '@angular/core';
import { isNumber } from '@swimlane/ngx-charts/release/utils';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PaginationComponent implements OnInit {
  pageCount = 0;
  pages: number[] = [];
   /**
   *  Number of items in collection.
   */
  @Input() collectionSize: number;

  /**
   *  Maximum number of pages to display.
   */
  @Input() maxSize: number;

  /**
   *  Current page. Page numbers start with 1
   */
  @Input() page = 1;

  /**
   *  Number of items per page.
   */
  @Input() pageSize: number;

  /**
   *  An event fired when the page is changed.
   *  Event's payload equals to the newly selected page.
   *  Will fire only if collection size is set and all values are valid.
   *  Page numbers start with 1
   */
  @Output() pageChange = new EventEmitter<number>(true);

  //numbers;
  constructor() { }

  ngOnInit() {
    //this.numbers = Array(this.collectionSize/this.pageSize).fill().map((x,i)=>i); // [0,1,2,3,4]
  }

  hasPrevious(): boolean { return this.page > 1; }

  hasNext(): boolean { return this.page < this.pageCount; }

  selectPage(pageNumber: number): void { this._updatePages(pageNumber); }

  ngOnChanges(changes: SimpleChanges): void { this._updatePages(this.page); }

  private _updatePages(newPage: number) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }

    // fill-in model needed to render pages
    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }

    // set page within 1..max range
    this._setPageInRange(newPage);

    // apply maxSize if necessary
    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start = 0;
      let end = this.pageCount;

      // either paginating or rotating page numbers
      /*if (this.rotate) {
        [start, end] = this._applyRotation();
      } else {
        [start, end] = this._applyPagination();
      }*/
      [start, end] = this._applyPagination();

      this.pages = this.pages.slice(start, end);

      // adding ellipses
      //this._applyEllipses(start, end);
    }
  }

  private getValueInRange(value: number, max: number, min = 0): number {
    return Math.max(Math.min(value, max), min);
  }

  private _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = this.getValueInRange(newPageNo, this.pageCount, 1);

    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }

    /**
   * Paginates page numbers based on maxSize items per page
   */
  private _applyPagination(): [number, number] {
    let page = Math.ceil(this.page / this.maxSize) - 1;
    let start = page * this.maxSize;
    let end = start + this.maxSize;

    return [start, end];
  }



}
