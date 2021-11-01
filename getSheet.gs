function myFunction() {
  var ui = SpreadsheetApp.getUi();
  var startdate = ui.prompt("Please enter start date (mm/dd/yyyy)");
  var enddate = ui.prompt("Please enter end date (mm/dd/yyyy)")

    const  ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet1 = ss.getSheetByName("Playhouse Volunteer Hour Log");
    const  range1 = sheet1.getRange("B:F");
    const  filter = range1.createFilter();
    const Filter_Criteria1 = SpreadsheetApp.newFilterCriteria().whenDateAfter(startdate);
    const  Filter_Criteria2 = SpreadsheetApp.newFilterCriteria().whenDateBefore(enddate);
    
    const  add_filter1 =  filter.setColumnFilterCriteria(2,Filter_Criteria1);
    const  add_filter2 = filter.setColumnFilterCriteria(2,Filter_Criteria2);

  const  range2 = sheet1.getDataRange();

  const  new_sheet = ss.insertSheet();
  new_sheet.setName("India/Mumbai data");

  range2.copyTo(new_sheet.getRange(1,1));

  filter.remove();
}
