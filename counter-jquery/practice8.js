$(function () {
    let timeInput = $("#time-input");
    let counterInput = $("#counter-input");
    // console.log(timeInput);
    // console.log(counterInput);
    $(timeInput).prepend("<button id='less-time'> - </button>");
    $(timeInput).append("<button id='plus-time'> + </button>");
    $(counterInput).prepend("<button id='less-num'> - </button>");
    $(counterInput).append("<button id='plus-num'> + </button>");
    let input = $(".form-control");
    let num0 = 1;
    let time0 = "06:00";
    let time = time0.split(":").map(Number);
    let values = time[0] * 60 + time[1];
    let hours = Math.floor(values / 60);
    let minutes = values % 60;
    // console.log(values);
    // console.log(hours);
    // console.log(minutes);
  
    $("#plus-num").on("click", increaseNum);
    $("#less-num").on("click", reduceNum);
    $("#plus-time").on("click", increaseTime);
    $("#less-time").on("click", reduceTime);
    function increaseNum() {
      num0++;
      $(input[1]).val(num0);
    }
    function reduceNum() {
      num0--;
      $(input[1]).val(num0);
    }
  
    function increaseTime() {
      values = values + 15;
      hours = Math.floor(values / 60);
      minutes = values % 60;
      //     console.log(values);
      //     console.log(minutes);
      // console.log(hours);
      if (minutes < 10) {
        $(input[0]).val(`${hours}: 0${minutes} `);
      } else {
        $(input[0]).val(`${hours}: ${minutes} `);
      }
    }
  
    function reduceTime() {
      values = values - 15;
      var hours = Math.floor(values / 60);
      var minutes = values % 60;
      if (minutes < 10) {
        $(input[0]).val(`${hours}: 0${minutes} `);
      } else {
        $(input[0]).val(`${hours}: ${minutes} `);
      }
    }
  });
  