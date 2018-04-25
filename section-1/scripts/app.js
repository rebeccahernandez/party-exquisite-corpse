$(document).ready(function() {

  function responsiveChat(element) {
      $(element).html('<form class="chat"><span></span><div class="messages"></div><input type="text" placeholder="are u here already? where are u?"><input type="submit" value="Send"></form>');

      function showLatestMessage() {
          $(element).find('.messages').scrollTop($(element).find('.messages').height());
      }
      showLatestMessage();


      $(element + ' input[type="text"]').keypress(function (event) {
          if (event.which == 13) {
              event.preventDefault();
              $(element + ' input[type="submit"]').click();
          }
      });
      $(element + ' input[type="submit"]').click(function (event) {
          event.preventDefault();
          var message = $(element + ' input[type="text"]').val();
          if ($(element + ' input[type="text"]').val()) {
              var d = new Date();
              var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
              var month = d.getMonth() + 1;
              var day = d.getDate();
              var currentDate =
                  (("" + day).length < 2 ? "0" : "") +
                  day +
                  "." +
                  (("" + month).length < 2 ? "0" : "") +
                  month +
                  "." +
                  d.getFullYear() +
                  "&nbsp;&nbsp;" +
                  clock;
              $(element + ' div.messages').append(
                  '<div class="message"><div class="myMessage"><p>' +
                  message +
                  "</p>" +
                  "</div></div>"
              );
              setTimeout(function () {
                  $(element + ' > span').addClass("spinner");
              }, 100);
              setTimeout(function () {
                  $(element + ' > span').removeClass("spinner");
              }, 2000);
          }
          $(element + ' input[type="text"]').val("");
          showLatestMessage();
      });
  }

  function responsiveChatPush(element, sender, origin, message) {
      var originClass;
      if (origin == 'me') {
          originClass = 'myMessage';
      } else {
          originClass = 'fromThem';
      }
      $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</div></div>');
  }

  /* Activating chatbox on element */
  responsiveChat('.responsive-html5-chat');

  /* Let's push some dummy data */
  responsiveChatPush('.chat', '0', 'you', 'hey are you coming tonight?');
  responsiveChatPush('.chat', 'rebecca', 'me', 'yes!! i cant wait to see u!! omg its been like 20 years');
  /*responsiveChatPush('.chat', 'rebecca', 'me', 'are u here already? where are u?');*/

  /*$("input[type="submit"]").click(function(){
    $("chat-bubble").show();
});*/

  /* DEMO */
  if (parent == top) {
    $("a.article").show();
  }

});
