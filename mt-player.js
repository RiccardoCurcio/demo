function dynamicallyLoadScript() {
    document.getElementById("mt-player").innerHTML = "<div id=\"Brid_39874032\" class=\"brid\" style=\"width:640; height:360;\"> </div>";
    var script = document.createElement("script");  // create a script DOM node
    script.src = "http://services.brid.tv/player/build/brid.min.js";  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)



}

function mtPayer(){
  var source = {
    "name": "Simone cacca",
    "description": "Simone fa molta puzza di cacca",
    "image": "Moving tech Logo.png",
    "source": {
        "sd": "https://59d7d6f47d7fc.streamlock.net/irctv/irctv/playlist.m3u8"
    }
  }
  $bp("Brid_39874032").src(source);
  $bp("Brid_39874032").play();
  $bp("Brid_39874032").setVolume(0.0);
  $bp("Brid_39874032").setHD(true);
}

var _bp = _bp||[]; _bp.push({
  "div": "Brid_39874032",
  "obj": {
      "id":"14775",
      "width":"640",
      "height":"360",
      "video": {
        "source": {
          "sd": "https://59d7d6f47d7fc.streamlock.net/irctv/irctv/playlist.m3u8",
          "hd": "https://59d7d6f47d7fc.streamlock.net/irctv/irctv/playlist.m3u8"
        }
      }
  },
  "onReady": function() {
      Brid.forceConfigLoad = false;
      mtPayer();
      //$bp("Brid_39874032").play();
      //$bp("Brid_39874032").setVolume(0.0);
      //$bp("Brid_39874032").setHD(true);
      //console.log($bp("Brid_39874032").isHD());
    }
});

dynamicallyLoadScript();
