import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() metaData:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource:any;
  newTable:any;

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.metaData.dataSource);
  }

  showNewTable(){
    this.newTable = JSON.parse(JSON.stringify(this.metaData));
  }

  applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	
		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	}

  ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

  viewTransaction(column: any){
    // alert('1')
    this.metaData.tabs.push('Transaction ID');
    this.metaData.selected.setValue(this.metaData.tabs.length - 1);
  }

}
