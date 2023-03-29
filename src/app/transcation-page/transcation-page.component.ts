import { Component, Inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
	selector: 'app-transcation-page',
	templateUrl: './transcation-page.component.html',
	styleUrls: ['./transcation-page.component.css']
})
export class TranscationPageComponent {
	currentDate: any = (new Date()).toISOString().substring(0,10);
	submit: boolean = false;
	filterForm: FormGroup;
	dataSource = new MatTableDataSource(Data);
	displayedColumns: string[] = ['transaction_id', 'account', 'start_date', 'end_date', 'originator', 'location', 'status', 'form', 'rt', 'dda', 'check_amount', 'atm_location', 'transaction_type', 'deposit_amount', 'reason_code'];

	@ViewChild(MatPaginator) paginator!: MatPaginator;
  	@ViewChild(MatSort) sort!: MatSort;

	constructor(private fb: FormBuilder, public dialog: MatDialog) {

		this.filterForm = this.fb.group({
			transaction_id: [], // [Validators.required]
			account: [],
			start_date: [this.currentDate],
			end_date: [this.currentDate],
			originator: [],
			location: [],
			status: [],
			form: [],
			rt: [],
			dda: [],
			check_amount: [],
			atm_location: [],
			transaction_type: [],
			deposit_amount: [],
			reason_code: [],
			deposit_amount_operator: []
		});

	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	
		if (this.dataSource.paginator) {
		  this.dataSource.paginator.firstPage();
		}
	}

	onSubmit() {
		this.submit = true;
		if (this.filterForm.invalid) {
			return false;
		}
		return true;
	}

	onReset() {
		this.filterForm.reset();
		this.onSubmit();
		this.submit = false;
	}

	public keyPress(event: KeyboardEvent, filter: string) {
        let result;
        let patt;
        switch (filter) {
            case 'numeric':
                patt = /^([0-9])$/;
                result = patt.test(event.key);
                return result;
                break;
            case 'date':
                patt = /^([0-9/])$/;
                result = patt.test(event.key);
                return result;
                break;
            case 'currency':
                patt = /^([0-9.])$/;
                result = patt.test(event.key);
                return result;
                break;
        }
        if (event.key == 'Enter') {
            // this.search();
        }
		return true
    }

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {});
		dialogRef.afterClosed().subscribe(result => {
		  console.log('The dialog was closed');
		});
	  }
}

@Component({
	selector: 'transcation-page-detail',
	templateUrl: 'transcation-page-detail.component.html',
  })
  export class DialogOverviewExampleDialog {
	constructor(
	  public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
	//   @Inject(MAT_DIALOG_DATA) public data: DialogData,
	) {}
  
	onNoClick(): void {
	  this.dialogRef.close();
	}
  }

export interface TransactionHistory {	
	transaction_id: string
	account: string
	start_date: string
	end_date: string
	originator:string
	location: string
	status: string
	form: string
	rt: string
	dda: string
	check_amount: string
	atm_location: string
	transaction_type: string
	deposit_amount: string
	reason_code: string
  }

  const Data: TransactionHistory[]= [
	{
		transaction_id: "123456",
		account: "Account 1",
		start_date: "2022-01-01",
		end_date: "2022-01-31",
		originator: "originator 1",
		location: "Location 1",
		status: "Status 1",
		form: "Form 1",
		rt: "RT 1",
		dda: "DDA 1",
		check_amount: "101.00",
		atm_location: "ATM Location 1",
		transaction_type: "Transaction Type 1",
		deposit_amount: "51.00",
		reason_code: "Reason Code 1"
	},
	{
		"transaction_id": "1234567",
		"account": "Account 2",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "102.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 2",
		"deposit_amount": "52.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "1234568",
		"account": "Account 3",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "103.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 3",
		"deposit_amount": "53.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "1234569",
		"account": "Account 4",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "104.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 4",
		"deposit_amount": "54.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "1234560",
		"account": "Account 5",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "105.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 5",
		"deposit_amount": "55.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "0123456",
		"account": "Account 6",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "106.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 6",
		"deposit_amount": "56.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "1123456",
		"account": "Account 7",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "107.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 7",
		"deposit_amount": "57.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "2123456",
		"account": "Account 8",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "108.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 8",
		"deposit_amount": "58.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "3123456",
		"account": "Account 9",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "109.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 9",
		"deposit_amount": "59.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "4123456",
		"account": "Account 10",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "110.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 10",
		"deposit_amount": "60.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "5123456",
		"account": "Account 11",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "111.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 11",
		"deposit_amount": "61.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "6123456",
		"account": "Account 12",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "112.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 12",
		"deposit_amount": "62.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "7123456",
		"account": "Account 13",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "113.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 13",
		"deposit_amount": "63.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "8123456",
		"account": "Account 14",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "114.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 14",
		"deposit_amount": "64.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "9123456",
		"account": "Account 15",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "115.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 15",
		"deposit_amount": "65.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "1023456",
		"account": "Account 16",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "116.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 16",
		"deposit_amount": "66.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "1123456",
		"account": "Account 17",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "117.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 17",
		"deposit_amount": "67.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "1223456",
		"account": "Account 18",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "118.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 18",
		"deposit_amount": "68.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "1323456",
		"account": "Account 19",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "119.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 19",
		"deposit_amount": "69.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "1423456",
		"account": "Account 20",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "120.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 20",
		"deposit_amount": "70.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "1523456",
		"account": "Account 21",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "121.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 21",
		"deposit_amount": "71.00",
		"reason_code": "Reason Code 1"
	},
	{
		"transaction_id": "1623456",
		"account": "Account 22",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "122.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 22",
		"deposit_amount": "72.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "1723456",
		"account": "Account 23",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "123.00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 23",
		"deposit_amount": "73.00",
		"reason_code": "Reason Code 1"
	}, {
		"transaction_id": "1823456",
		"account": "Account 24",
		"start_date": "2022-01-01",
		"end_date": "2022-01-31",
		"originator": "originator 1",
		"location": "Location 1",
		"status": "Status 1",
		"form": "Form 1",
		"rt": "RT 1",
		"dda": "DDA 1",
		"check_amount": "124 .00",
		"atm_location": "ATM Location 1",
		"transaction_type": "Transaction Type 24",
		"deposit_amount": "74.00",
		"reason_code": "Reason Code 1"
	}
];
