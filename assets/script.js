//initiates the advancedFormat plugin for dayjs 
 dayjs.extend(window.dayjs_plugin_advancedFormat); 
 //formats the date to include ordinal and fills currentDay text area
 var currentDate = dayjs().format("dddd, MMMM Do");
 $("#currentDay").html(currentDate);

//wraps the code that interacts with DOM in a call to jQuery to ensure the code is not run until the browser is finished rendering
  $(document).ready(function() {

    //adds an event listener for cick events on the save button and saves the items to local storage
    $(".saveBtn").on("click", function() {
      var event = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, event);
    })

    //compares current time using dayjs with the displayed time block to change the background color of the time blocks representing past, present, and future
    function styleBlock() {
      var currentTime = dayjs().hour();
      
      //cycles through each div with the "time-block" class to compare the time value with the current time
      $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

        if (timeBlock < currentTime) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
          
        }
        else if (timeBlock === currentTime) {
          $(this).addClass("present");
          $(this).removeClass("future");
          $(this).removeClass("past");
          
        }
        else {
          $(this).addClass("future");
          $(this).removeClass("past");
          $(this).removeClass("present");
          
        }
      })
    }
//uses a for loop to retrieve the stored data from local storage if any exists
    function storage() {
      for (let i = 9; i <= 17; i++) {
        $(`[id="hour-${i}"] .description`).val(localStorage.getItem(`hour-${i}`));
        console.log(`hour-${i}`);
      }
    }

    //calling of the functions
    styleBlock();
    storage();



  })

  
 
