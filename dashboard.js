var PinPoint = PinPoint || {};

/// becca needs http://img.youtube.com/vi/<id>/hqdefault.
window.addEventListener('load', function(){
  PinPoint.VideoPresenter = function(url) {
    this.url = url;
    this.present();
  }

  PinPoint.VideoPresenter.prototype = {
    present: function() {
      var grid = document.getElementById("grid");
      var cardDiv = document.createElement("div");
      var flipContainer = document.createElement("div");
      var flipper = document.createElement("div");
      var front = document.createElement("div");
      var backLink = document.createElement("a");
      var back = document.createElement("div");
      var thumbnail = document.createElement("img");

      cardDiv.setAttribute("class", "video-card");
      grid.appendChild(cardDiv);

      flipContainer.setAttribute("class", "flip-container");
      flipContainer.setAttribute("ontouchstart", "this.classList.toggle('hover');");

      cardDiv.appendChild(flipContainer);
      flipper.setAttribute("class", "flipper");
      flipContainer.appendChild(flipper);

      front.setAttribute("class", "front");
      thumbnail.setAttribute("src", "http://img.youtube.com/vi/QQWhJrkgXII/hqdefault.jpg");
      front.appendChild(thumbnail);
      back.setAttribute("class", "back");

      backLink.setAttribute("href", this.url);
      backLink.setAttribute("target", "_blank");
      backLink.appendChild(back)

      flipper.appendChild(front);
      flipper.appendChild(backLink);
    }
  }

  function main(){
    for (url in localStorage){
      var presenter = new PinPoint.VideoPresenter(url)
    }
  }

  main();

})


