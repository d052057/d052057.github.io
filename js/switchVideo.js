$(document).ready(function () {
     $('#btnVideo').click(function () {
          $('video source').attr('src', 'videos/oldDirtySong.mp4');
          $('video').get(0).load();
     });
});
