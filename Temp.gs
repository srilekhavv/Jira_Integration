/**
 * Find subtotals of a list of data
 *
 * @param {number} input A column that you want to group
 * @return A 2 column table, where there the right side is the unique values and the left side is the subtotals of the unique values
 * @customfunction
 */
function sub_array(input) {//dont include the header when highlighting the data
  var arr = new Array(input.length);
  for (var i=0; i<arr.length; i++){
    arr[i]= new Array (2);
  }
  arr[0][0]="Values";
  arr[0][1]="Sub totals";
  for (var m=1; m<arr.length; m++){
    for (var n=0; n<arr[m].length; n++){
      arr[m][n]=0;
    }
  }
  var proj_arr = new Array (input.length);// the array for the array with unique values
  var sub_total = new Array (input.length); // the array that has the subtotals the idecies match with proj_arr
  
  var proj_ind=0;
  for (var j=0; j<input.length; j++){//read all the data
    var temp=check_duplicate(proj_arr, input[j][0]);
    if (temp==-1){
      proj_arr[proj_ind]= input[j][0];
      if (sub_total[proj_ind]==null){
        sub_total[proj_ind]=0;
      }
      sub_total[proj_ind]++;
      proj_ind++;
    }
    else {
      sub_total[temp]++;
    }
  }
  
  for (var k=1; k<arr.length; k++){//copy the 2 arrays into the final table
    arr[k][0]= proj_arr[k-1];
    arr[k][1]= sub_total[k-1];
  }
  
  //create a new array that will be as long as the filled in parts of the table
  var row=0;
  for (var r=0; r<arr.length; r++){
    if (arr[r][0]!=null){
        row++;
    }
  }
  var arr2= new Array (row);
  for (var i=0; i<arr2.length; i++){
    arr2[i]= new Array (2);
  }
  
  for (var s=0; s<arr2.length; s++){
    for (var t=0; t<arr2[s].length; t++){
      arr2[s][t]=arr[s][t];
    }   
  }
  return arr2;
}

function check_duplicate(arr2, value){
  for (var i=0; i<arr2.length; i++){
    if (arr2[i]!=null && arr2[i]==value){
      return i;
    }
  }
  return -1;
}
