import { Router } from '@angular/router';
import { Utils } from './utils';
import { FetchServerDataProvider } from './fetchserverdata';
// import { AlertService } from 'src/app/alert';
// import { AlertComponent } from 'src/app/alert/alert.component';
declare var jquery:any;
declare var $ :any;

export class PtsGenericFunctions {

	constructor(public router: Router,  public utils: Utils, private serviceCallProvider: FetchServerDataProvider) { }
	/****** Navigate to Page By URL *******/
	navigateToPage(url) {
		this.router.navigateByUrl(url);
	}

	passwordToggle(iconid, pwdFld) {
		$("#" + iconid).toggleClass("fa fa-eye-slash fa fa-eye");
		let type = $("#" + pwdFld).prop("type");
		// console.log(type);
		if ("text" == type) {
			$("#" + pwdFld).prop("type", "password");
		} else {
			$("#" + pwdFld).prop("type", "text");
		}

	}
	/****** Format Date to YYYYMMDD *******/
	formatDatetoYYYYMMDD(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2)
			month = '0' + month;
		if (day.length < 2)
			day = '0' + day;

		return [year, month, day].join('-');
	}




	formatDatetoYYYYMMDDhhmmss(date, hour,min=0,sec=0) {
		// console.log("Hr--"+ hour +"Dt--"+ date );
		var d = new Date(date);
		//if (!(null == hour || hour == undefined || "" == hour)) {
			d.setHours(hour);
			d.setMinutes(min);
			d.setSeconds(sec);
		//}
		let month = '' + (d.getMonth() + 1);
		let day = '' + d.getDate();
		let year = d.getFullYear();
		let hours = d.getHours();
		let minute = d.getMinutes();
		let seconds = d.getSeconds();
		let hourstr = "" + hours;
		if (hours < 10)
			hourstr = '0' + hours;

		let minutestr = "" + minute;
		if (minute < 10)
			minutestr = '0' + minute;

		let secondsstr = "" + seconds;
		if (seconds < 10)
			secondsstr = '0' + seconds;

		if (month.length < 2)
			month = '0' + month;
		if (day.length < 2)
			day = '0' + day;

		let time = [hourstr, minutestr, secondsstr].join(':');
		let datestr = [year, month, day].join('-');
		// console.log( datestr + " " + time);
		return datestr + " " + time;
	}

	/****** Check Null *******/
	checkNull(input) {

		if (input === undefined || input === "undefined" || input === null || input === "null" || input === 'NaN') {
			input = "";
		} else {
			var type = typeof (input);
			if ("string" == type.toLowerCase()) {
				var encodedStr = input;
				var parser = new DOMParser;
				var dom = parser.parseFromString(
					'<!doctype html><body>' + encodedStr,
					'text/html');
				input = dom.body.textContent;
			} else if ("number" == type.toLowerCase()) {
				if (isNaN(input)) {
					input = "";
				}
			}
		}

		return input;
	}
/****** Check Null Number*******/
	checkNullNumber(input) {
		if (input === undefined || input === null || input === "null" || input === 'NaN' || input === '') {
			input = 0;
		} else {
			var type = typeof (input);
			if ("number" == type.toLowerCase()) {
				if (isNaN(input)) {
					input = 0;
				}
			}
		}
		return input;
	}

	

}