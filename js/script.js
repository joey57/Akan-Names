function getAkanName(){
  let yearofbirth = document.getElementedByid("year").value;
  let Month = document.getElementByid("month").value;
  let Date = document.getElementedByid("date").value;
  let gender = document.getElementsByname("genders");

  function getGender(){
    for(let gender of genders){
      if(gender.checked){
        return gender.value;
      }
    }
  }
}

let myGenderValue = getGender();
console.log(myGenderValue);

function monthValidator(){
  if(month <1 || month>12){
    return false;
  }else{
    return true;
}
}
function dateValidator(){
  if(month ===2 && Number(yearofbirth)%4 === 0){
    if(date > 28 || date < 1){
      return false;
    }else if (month === 2 && date > 29){
      return false;
    }else {
      return true;
    }
  }else if (date < 1 || date > 31){
    return false;
  }else {
    return true;
  }
}

let month = monthValidator();
let date = dateValidator();


var akan = function(y, m, d, g){
  var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua", "Ama"]
  var maleNames = ["Kwasi", "Kudwo","Kwabena", "Kwaku","Yaw","Kofi","Kwame"]
  var d = new Date(y, --m, d);
  if(g === "Female"){
    return d && femaleNames[d.getDay()];
  } else{
    return d && maleNames[d.getDay()];
  }
}
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault();
    var y = parseInt($("#year").val());
    var m = parseInt($("#month").val());
    var d = parseInt($("#date").val());
    var g = $("input.radio[name-gender]:checked").val();
    var result = akan(y, m, d, g);
    alert("Your akan name is: " + result);

    document.getElementedById("form").reset(); 
  });
});