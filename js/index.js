$(document).ready(function(){
    $("#insert").on("click" , function(){
    var name = $("input[name='name']").val();
    var age = $("input[name='age']").val();
    var gender = $("#gender").val();
        if( name , age , gender !== ""){
    pushedItem ={
            name:"",
            age:"",
            gender:""
        }; 
    pushedItem= {name , age , gender};
    $("input[name='name']").val("");
    $("input[name='age']").val("");
    $("#gender").val("");
    console.log(pushedItem);
    myArray.push(pushedItem); 
    }
    }); 
    
    // fill table with rows 
    var myArray = [ 
        {"Name":"Amira"   , "Age":"29" , "Gender":"female" },
        {"Name":"X"       , "Age":"20" , "Gender":"male" },
        {"Name":"leila"   , "Age":"25" , "Gender":"female" },
        {"Name":"zeina"   , "Age":"26" , "Gender":"male" },
        {"Name":"salma"   , "Age":"25" , "Gender":"female" },
        {"Name":"yara"    , "Age":"25" , "Gender":"female" },
        {"Name":"Michael" , "Age":"25" , "Gender":"female" },
        {"Name":"Nabil"   , "Age":"25" , "Gender":"female" }
    ]
    
    function fillTable (data){
        var table = document.getElementById("tableBody");
        table.innerHTML = '';
        for(var i =0 ; i < data.length; i++){
            var row  = ` 
            <tr>
                <td>${data[i].Name}</td>
                <td>${data[i].Age}</td>
                <td>${data[i].Gender}</td>
            </tr>
        `
        table.innerHTML += row
        }
    }
    fillTable(myArray);
    
    // colorize rows 
    // $("#tableBody tr:odd").css("background-color", "green");
    

  // start search filter 
    function searchThroughTable( searchInputValue , data){
    var filteredData = [];
    for(var i =0 ; i < data.length; i++){
    searchValue = searchInputValue.toLowerCase();
    var name = data[i].Name.toLowerCase();
    if(name.includes(searchValue)){
    filteredData.push(data[i]);
    }
    }
    return filteredData;   
}
$("#search-Input").on("keyup" , function(){
    var searchInputValue = $(this).val();
    console.log(searchInputValue);
    var filtereData = searchThroughTable(searchInputValue , myArray);
    fillTable(filtereData);
}); 



});














