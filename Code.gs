/**
 * Multiplies the input value by 2.
 *
 * @param {number} input The value or range of cells to multiply.
 * @return The input multiplied by 2.
 * @customfunction
 */
function DOUBLE(input) {
  if (input.map) {            // Test whether input is an array.
    return input.map(DOUBLE); // Recurse over array if so.
  } else {
    return input * 2;
  }
}

function MAIN(input){
  var table = new Array(Math.ceil(input[0].length/2)+1); //create an array
  for (var i = 0; i < Math.ceil(input[0].length/2)+1; i++) { //make the array a 2d array
    table[i] = new Array(6); 
  }
  
  for (var k=1; k<table[0].length; k++){ //creates the header for the versions
    table[0][k]="CDPM"+k;
  }
  var temp= CJT_READ_PROJ(input);
  table [0][0]="Project";
  for (var j=1; j<table.length; j++){ //make the first col a list of the projects
       table[j][0]=temp[j-1];
  }
 
  //traverse through table and fill out the values of it
  //to find the values in each space, call a method that is a countif?
  var counter=0;
  for (var m=1; m<table.length; m++){
    for (var n=1; n<table[m].length; n++){
      //table[m][n]=COUNTIF((((m-1)/2)*2)*(((m-1)/2)*1000), "*CDPM"+n+"*");
      //table[m][n]=COUNTIF(B2:B1000,"CDPM2");
      //var sheet = SpreadsheetApp.getActive().getSheetByName('Sheet1');
      //var cell = sheet.getRange(m,n);
      //cell.setValue(0);//"=COUNTIF(B2:B1000,'CDPM2')"
      //SpreadsheetApp.getActive().getSheetByName('Sheet1').getRange(m,n).setValue('0');
      table[m][n]='=COUNTIF(Sheet4!Z2:Z1000, "*CDPM4*")';//get the sheet that you are reading and then try to do calculations based on that instead of useing the built in function
    }
  }
  
  /*
  // The code below sets the cell B5 in the first sheet as the current cell.
  var cell = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('B5');
  SpreadsheetApp.setCurrentCell(cell);
  var selection = SpreadsheetApp.getSelection();
  // Current cell: B5
  var currentCell = selection.getCurrentCell();
  */
  return table;
}

/*function COUNTIF(col){
  for (var i=0; i<table.length; i++){
    if (Sheet4!Z2:Z1000=="*CDPM4*"){
      count++;
    }
  }
}*/

function CJT_READ_PROJ(input){
  var proj = new Array(input[1].length);
    for (var j = 0; j < input[0].length; j=j+2) { //col (start from row 1 because row 0 is title)
      proj[j/2]=CONC(input[1][j]);
    } 
  return proj;
}

function CONC(str){
  var temp=str;
  if (temp!==""){
    var k= str.search("-")
    temp= str.substring(0,k);
  }
  return temp;
}

function CJT_WRITE(){}
