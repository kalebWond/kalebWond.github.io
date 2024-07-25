$(document).ready(function () {
  console.log("jquery ready");
  var gameStarted = false;
  $("#maze .boundary").mouseover(function () {
    if (gameStarted) {
      $("#maze .boundary").addClass("youlose");
      gameStarted = false;
      $('#status').text('You lose. Click "S" to retry.').css({color: '#ef2222'});
    }
  });

  $("#maze").mouseleave(function () {
    if (gameStarted) {
      $("#maze .boundary").addClass("youlose");
      gameStarted = false;
      $('#status').text('You lose. Click "S" to retry.').css({color: '#ef2222'});
    }
  });

  $("#start").click(function () {
    gameStarted = true;
    $("#maze .boundary").removeClass("youlose");
    $('#status').text("Game started. Careful not to touch the walls.").css({color: '#6767f1'})
});

  $("#end").mouseenter(function () {
    if (gameStarted) {
      gameStarted = false;
      $('#status').text('You Win! Click "S" to go again.').css({color: '#15bf15'});
    }
  });
});
