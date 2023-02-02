 dayjs.extend(window.dayjs_plugin_advancedFormat);
 var currentDate = dayjs().format("dddd, MMMM Do");
 $("#currentDay").html(currentDate);

  $(document).ready(function() {

    $(".saveBtn").on("click", function() {
      var event = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(event, time);

    })

    function styleBlock() {
      var currentTime = dayjs.hour();

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

    function storage() {
      for (var i = 8; i <= 17; i++) {
        $('#hour${hour} .description').val(localStorage.getItem('hour-${hour}'));
      }
    }

    styleBlock();
    storage();



  })

  
 
