'use strict';
import SpreadsheetDBTable from './SpreadSheetDbTable.js'
class DataBase
{
	constructor( spreadsheet_url )
	{
		// this.table = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "db",
		// });

		// let multiple_lang_column_names = ['CHT', 'EN', 'CHS', 'JA', 'TH', 'ID', 'VN'];

		// this.competitionTable = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "競賽名稱",
		// });

		this.challengeTable = new SpreadsheetDBTable({
			source_url: spreadsheet_url,
			table_name: "挑戰名稱",
		});

		// this.activityTable = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "活動名稱",
		// });

		// this.machineTable = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "機種",
		// });

		// this.fishTable = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "魚種",
		// });

		// this.cannonTable = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "砲種",
		// });

		// this.weaponCardTable = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "武器卡",
		// });

		// this.gachaTable = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "轉蛋機",
		// });

		// this.cumulativeScoreTable = new SpreadsheetDBTable({
		// 	source_url: spreadsheet_url,
		// 	table_name: "累積分",
		// });
	}

	getChallenge() {
		return this.challengeTable.query.select('CHT').getResultsJson();
	}
}

export default DataBase;