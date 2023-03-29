import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
	selector: 'app-transaction-page',
	templateUrl: './transaction-page.component.html',
	styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent {
	currentDate: any = new Date();
	submit: boolean = false;
	filterForm: FormGroup;

	heroData = [
		{
			dataSource: [
				{
					"transaction_id": "123456",
					"account": "Account 1",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 1",
					"location": "Location 1",
					"status": "Status 1",
					"form": "Form 1",
					"rt": "RT 1",
					"dda": "DDA 1",
					"check_amount": "101.00",
					"atm_location": "ATM Location 1",
					"transaction_type": "Transaction Type 1",
					"deposit_amount": "51.00",
					"reason_code": "Reason Code 1",
				},
				{
					"transaction_id": "1234567",
					"account": "Account 2",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 2",
					"location": "Location 2",
					"status": "Status 2",
					"form": "Form 2",
					"rt": "RT 2",
					"dda": "DDA 2",
					"check_amount": "102.00",
					"atm_location": "ATM Location 2",
					"transaction_type": "Transaction Type 2",
					"deposit_amount": "52.00",
					"reason_code": "Reason Code 2"
				}, {
					"transaction_id": "1234568",
					"account": "Account 3",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 3",
					"location": "Location 3",
					"status": "Status 3",
					"form": "Form 3",
					"rt": "RT 3",
					"dda": "DDA 3",
					"check_amount": "103.00",
					"atm_location": "ATM Location 3",
					"transaction_type": "Transaction Type 3",
					"deposit_amount": "53.00",
					"reason_code": "Reason Code 3"
				}, {
					"transaction_id": "1234569",
					"account": "Account 4",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 4",
					"location": "Location 4",
					"status": "Status 4",
					"form": "Form 4",
					"rt": "RT 4",
					"dda": "DDA 4",
					"check_amount": "104.00",
					"atm_location": "ATM Location 4",
					"transaction_type": "Transaction Type 4",
					"deposit_amount": "54.00",
					"reason_code": "Reason Code 4"
				},
				{
					"transaction_id": "1234560",
					"account": "Account 5",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 5",
					"location": "Location 5",
					"status": "Status 5",
					"form": "Form 5",
					"rt": "RT 5",
					"dda": "DDA 5",
					"check_amount": "105.00",
					"atm_location": "ATM Location 5",
					"transaction_type": "Transaction Type 5",
					"deposit_amount": "55.00",
					"reason_code": "Reason Code 5"
				},
				{
					"transaction_id": "0123456",
					"account": "Account 6",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 6",
					"location": "Location 6",
					"status": "Status 6",
					"form": "Form 6",
					"rt": "RT 6",
					"dda": "DDA 6",
					"check_amount": "106.00",
					"atm_location": "ATM Location 6",
					"transaction_type": "Transaction Type 6",
					"deposit_amount": "56.00",
					"reason_code": "Reason Code 6"
				}, {
					"transaction_id": "1123456",
					"account": "Account 7",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 7",
					"location": "Location 7",
					"status": "Status 7",
					"form": "Form 7",
					"rt": "RT 7",
					"dda": "DDA 7",
					"check_amount": "707.00",
					"atm_location": "ATM Location 7",
					"transaction_type": "Transaction Type 7",
					"deposit_amount": "57.00",
					"reason_code": "Reason Code 7"
				}, {
					"transaction_id": "2123456",
					"account": "Account 8",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 8",
					"location": "Location 8",
					"status": "Status 8",
					"form": "Form 8",
					"rt": "RT 8",
					"dda": "DDA 8",
					"check_amount": "108.00",
					"atm_location": "ATM Location 1",
					"transaction_type": "Transaction Type 8",
					"deposit_amount": "58.00",
					"reason_code": "Reason Code 8"
				},
				{
					"transaction_id": "3123456",
					"account": "Account 9",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 9",
					"location": "Location 9",
					"status": "Status 9",
					"form": "Form 9",
					"rt": "RT 9",
					"dda": "DDA 9",
					"check_amount": "109.00",
					"atm_location": "ATM Location 9",
					"transaction_type": "Transaction Type 9",
					"deposit_amount": "59.00",
					"reason_code": "Reason Code 9"
				},
				{
					"transaction_id": "4123456",
					"account": "Account 10",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 10",
					"location": "Location 10",
					"status": "Status 10",
					"form": "Form 10",
					"rt": "RT 10",
					"dda": "DDA 10",
					"check_amount": "110.00",
					"atm_location": "ATM Location 10",
					"transaction_type": "Transaction Type 10",
					"deposit_amount": "60.00",
					"reason_code": "Reason Code 10"
				}, {
					"transaction_id": "5123456",
					"account": "Account 11",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 11",
					"location": "Location 11",
					"status": "Status 11",
					"form": "Form 11",
					"rt": "RT 11",
					"dda": "DDA 11",
					"check_amount": "111.00",
					"atm_location": "ATM Location 11",
					"transaction_type": "Transaction Type 11",
					"deposit_amount": "61.00",
					"reason_code": "Reason Code 11"
				}, {
					"transaction_id": "6123456",
					"account": "Account 12",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 12",
					"location": "Location 12",
					"status": "Status 12",
					"form": "Form 12",
					"rt": "RT 12",
					"dda": "DDA 12",
					"check_amount": "112.00",
					"atm_location": "ATM Location 12",
					"transaction_type": "Transaction Type 12",
					"deposit_amount": "62.00",
					"reason_code": "Reason Code 12"
				},
				{
					"transaction_id": "7123456",
					"account": "Account 13",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 13",
					"location": "Location 13",
					"status": "Status 13",
					"form": "Form 13",
					"rt": "RT 13",
					"dda": "DDA 13",
					"check_amount": "113.00",
					"atm_location": "ATM Location 13",
					"transaction_type": "Transaction Type 13",
					"deposit_amount": "63.00",
					"reason_code": "Reason Code 13"
				},
				{
					"transaction_id": "8123456",
					"account": "Account 14",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 14",
					"location": "Location 14",
					"status": "Status 14",
					"form": "Form 14",
					"rt": "RT 14",
					"dda": "DDA 14",
					"check_amount": "114.00",
					"atm_location": "ATM Location 14",
					"transaction_type": "Transaction Type 14",
					"deposit_amount": "64.00",
					"reason_code": "Reason Code 14"
				}, {
					"transaction_id": "9123456",
					"account": "Account 15",
					"start_date": "2022-01-01",
					"end_date": "2022-01-31",
					"originator": "originator 15",
					"location": "Location 15",
					"status": "Status 15",
					"form": "Form 15",
					"rt": "RT 15",
					"dda": "DDA 15",
					"check_amount": "115.00",
					"atm_location": "ATM Location 15",
					"transaction_type": "Transaction Type 15",
					"deposit_amount": "65.00",
					"reason_code": "Reason Code 15"
				}
			],
			columns: [
				{
					field: 'transaction_id',
					label: 'Transaction ID',
					type: 'string'
				},
				{
					field: 'account',
					label: 'Account',
					type: 'string'
				},
				{
					field: 'start_date',
					label: 'Start Date',
					type: 'date'
				},
				{
					field: 'end_date',
					label: 'End Date',
					type: 'date'
				},
				{
					field: 'originator',
					label: 'Originator',
					type: 'string'
				},
				{
					field: 'location',
					label: 'Location',
					type: 'string'
				},
				{
					field: 'status',
					label: 'Status',
					type: 'string'
				},
				{
					field: 'form',
					label: 'Form',
					type: 'string'
				},
				{
					field: 'rt',
					label: 'RT',
					type: 'string'
				},
				{
					field: 'dda',
					label: 'DDA',
					type: 'string'
				},
				{
					field: 'check_amount',
					label: 'Check Amount',
					type: 'string'
				},
				{
					field: 'atm_location',
					label: 'ATM Location',
					type: 'string'
				},
				{
					field: 'transaction_type',
					label: 'Transaction Type',
					type: 'string'
				},
				{
					field: 'deposit_amount',
					label: 'Deposit Amount',
					type: 'string'
				},
				{
					field: 'reason_code',
					label: 'Reason Code',
					type: 'string'
				}
			],
			displayedColumns: ['transaction_id', 'account', 'start_date', 'end_date', 'originator', 'location', 'status', 'form', 'rt', 'dda', 'check_amount', 'atm_location', 'transaction_type', 'deposit_amount', 'reason_code'],
			filter: {
				label: 'Filter',
				placeholder: 'Search...'
			},
			pageSizeOptions: [10, 25, 50],
			nestatedData: []
		}
	]

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

}