$(document).ready(() => {

function soundCan() {
  $('#canSound').each(function() {
    this.play();
    this.currentTime = 0;
  });
  $('#canSound').attr('src', 'music/can.mp3');

}



let gif = $('img').first();

$('.startGif').on('click', function(){
  soundCan();
  let g = gif.attr('src');
  gif.attr('src', g);
});


  function hideDes() {
    $('#playWeightless').hide();
    $('#playAirstream').hide();
    $('#playRain').hide();
    $('#playOceanwaves').hide();
    $('#playBirds').hide();
    $('#playNature').hide();
  }
    hideDes();

  // make each section fill window vertically (height)
$('.all-secs').css( {'height': (  $(window).height() )  } );

$('.all-secs').hide();

$('#home').show();

$('.nextPage').on('click', function() {
  // use DOM to find the section we're inside
  $('audio').each(function(){
  this.pause(); // Stop playing
  this.currentTime = 0; // Reset time
}); 
    let currentSection = $(this).parent().closest('.all-secs');
  // slide this section out of sight
    $(currentSection).slideToggle();


    // show the next section - unless we are on the last section
    if ( $(currentSection).attr("id") != "final" ) {
    	$(currentSection).next().slideToggle();
    } else {
        $('#home').slideToggle();
    }
});


let theInterval;

$('.startTime').on('click', function(){
  // 1000 = 1 second
  theInterval = setInterval(myinhaleFunction, 1000);
});

let stopTimes = [4, 7, 8];
let num = 0;
let timeBlock= 0;

function myinhaleFunction() {
  $('#breatheIn').text(num);
  if (timeBlock == 0) {
    end = stopTimes[0];
    $('#para').text("Breathe In");
  } else if (timeBlock == 1) {
    end = stopTimes[1];
    $('#para').text("Hold In");
  } else if (timeBlock == 2) {
    end = stopTimes[2];
      $('#para').text("Breathe Out");
  } else {
      timeBlock = 0;
    clearInterval(theInterval);
  }

    num +=1;

  if (num > end) {
    num = 0;
    timeBlock++;
  }
}

function stop() {

$('audio').each(function() {
  this.pause();
  this.currentTime = 0;
});
}

function play() {

$('audio').each(function() {
  this.pause();
  this.currentTime = 0;
});
}

$('#weightless').click(function () {
     $('audio').attr('src', 'music/weightless.mp3');
     play();
      });

$('#airstream').click(function () {
    $('audio').attr('src', 'music/airstream.mp3');
     play();
    });

$('#oceanwaves').click(function () {
    $('audio').attr('src', 'music/oceanwaves.mp3');
    play();
   });

$('#rain').click(function () {
    $('audio').attr('src', 'music/rain.mp3');
    play();
    });


$('#nature').click(function () {
    $('audio').attr('src', 'music/nature.mp3');
    play();
    });

$('#birds').click(function () {
    $('audio').attr('src', 'music/birds.mp3');
    play();
    });

$('.albumCover').click(function() {
  hideDes();

    switch ($(this).attr("id")) {
          case "weightless":
            $('#playWeightless').show();
            break;
          case "airstream":
            $('#playAirstream').show();
            break;
          case "oceanwaves":
            $('#playOceanwaves').show();
            break;
          case "rain":
            $('#playRain').show();
            break;
            case "nature":
              $('#playNature').show();
              break;
            case "birds":
                $('#playBirds').show();
              break;
        }

});

  function hideAll() {
    $('#angerRoom').hide();
    $('#breathingRoom').hide();
    $('#musicRoom').hide();
  }
    hideAll();


  $('#angerClick').click(function () {
       $('#angerRoom').slideToggle();
        });

  $('#breathingClick').click(function () {
       $('#breathingRoom').slideToggle();
        });


    $('#musicClick').click(function () {
       $('#musicRoom').slideToggle();
        });

});
