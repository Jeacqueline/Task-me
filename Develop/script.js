//To show current date
let actualDate = document.getElementById("currentDay");
actualDate.innerHTML = dayjs().format("dddd, MMMM D.");

//To save button and the notes
$(document).ready(function (){
  $(".saveBtn").on("click", function(){
    let notes = $(this).siblings(".description").val();
    let hours = $(this).parent().attr("id");
    localStorage.setItem(hours,notes);
  })

 function showIt() {
  let currentTime = dayjs().format("HH");

  $(".timeBlock").each(function(){
    let timeSpent = parseInt($(this).attr("id").split("hour")[1]);

    //Adding the conditions to "present", "past", and "future"
    if (timeSpent < currentTime) {
      $(this).addClass("past");
      $(this).removeClass("present future");
      

    } else if (timeSpent === currentTime){
      $(this).removeClass("past future");
      $(this).addClass("present");
     
    } else {
      $(this).removeClass("past present");
      $(this).addClass("future");
      
    }

  })
}
//to get the value for each hour of the local storage using getItem 
  $("#hour0 .description").val(localStorage.getItem("hour0"));
  $("#hour1 .description").val(localStorage.getItem("hour1"));
  $("#hour2 .description").val(localStorage.getItem("hour2"));
  $("#hour3 .description").val(localStorage.getItem("hour3"));
  $("#hour4 .description").val(localStorage.getItem("hour4"));
  $("#hour5 .description").val(localStorage.getItem("hour5"));
  $("#hour6 .description").val(localStorage.getItem("hour6"));
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));

    showIt();
})
    