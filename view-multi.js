(function (){
    window.showpost = showpost;
    var h = location.protocol + '//' + location.host + location.pathname
var t = document.title
function removeJS(filename){var tags = document.getElementsByTagName('script');for (var i = tags.length; i >= 0; i--){ if (tags[i] && tags[i].getAttribute('src') != null && tags[i].getAttribute('src').indexOf(filename) != -1);tags[i].parentNode.removeChild(tags[i]);}}
function loadsplide() {
            if (document.getElementById("splidejsid"),document.getElementById("splidecss")) {
                new Splide('.splide', {
                    autoHeight: true,
                    trimSpace: false,
                    keyboard: false,
                    perPage: 1,
                }).mount();
                return;
            }
            var a = document.createElement('script');
            a.setAttribute('src','/lib/posts/slide.js');
            a.setAttribute('id',"splidejsid")
            document.head.appendChild(a);
            document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="/lib/posts/slide.css" type="text/css"/ id="splidecss">');
            a.onload = function(){
                new Splide('.splide', {
                    autoHeight: true,
                    trimSpace: false,
                    keyboard: false,
                    perPage: 1,
                }).mount();
            }
        //allow time to load
}
var images = [];
function preload() {
    return "for future use, Saturday, May 7, 2022 @ 02:05:57 AM"; 
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 2) {
      return Math.floor(interval) + " years";
    }else if(interval > 1){
      return Math.floor(interval) + " year";
    }
    interval = seconds / 2592000;
    if (interval > 2) {
      return Math.floor(interval) + " months";
    }else if(interval > 1){
      return Math.floor(interval) + " month";
    }
    interval = seconds / 86400;
    if (interval > 2) {
      return Math.floor(interval) + " days";
    }else if(interval > 1){
      return Math.floor(interval) + " day";
    }
    interval = seconds / 3600;
    if (interval > 2) {
      return Math.floor(interval) + " hours";
    }else if(interval > 1){
      return Math.floor(interval) + " hour";
    }
    interval = seconds / 60;
    if (interval > 2) {
      return Math.floor(interval) + " minutes";
    }else if(interval > 1){
      return Math.floor(interval) + " minute";
    }
    return Math.floor(seconds) + " seconds";
  }
  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }
  async function viewcount(data) {
      var a = new XMLHttpRequest();
      a.open('POST', '/api/v1/?k=viewer&mode=v', true);
      a.send(JSON.stringify(data));
      return;
  }
function buildvideo(poster,m3u8) {
    var base = document.getElementById("splidelist")
    const source = m3u8;
    var markup = `<video id="player" playsinline controls data-poster="${poster}" crossorigin></video>`;
   // var markup = `<video id="player" playsinline controls data-poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg" crossorigin></video>`;
    base.insertAdjacentHTML('beforeend',markup)
    if (document.getElementById("player_js"),document.getElementById("player_hls")) {
        function updateQuality(newQuality) {
            if (newQuality === 0) {
              window.hls.currentLevel = -1; //Enable AUTO quality if option.value = 0
            } else {
              window.hls.levels.forEach((level, levelIndex) => {
                if (level.height === newQuality) {
                  window.hls.currentLevel = levelIndex;
                }
              });
            }
          }
       //const source = m3u8;
        const video = document.querySelector('#player');
        const defaultOptions = {};
        if (!Hls.isSupported()) {
          video.src = source;
        } else {
            const hls = new Hls({
                maxMaxBufferLength: '15',
            });
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                const availableQualities = hls.levels.map((l) => l.height)
                defaultOptions.quality = {
                    default: availableQualities[availableQualities.length - 1],
                    options: availableQualities,
                    forced: true,        
                    onChange: (e) => updateQuality(e),
                }
                defaultOptions.captions = {
                    active: false, update: true, language: 'en'
                }
                const player = new Plyr(video, defaultOptions);
                player.on('languagechange', () => {
                    setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
                  });
                  document.querySelector('.plyr').style.minHeight  = "444px"
                  document.querySelector('.plyr').style.height  = "444px"
                  hls.attachMedia(video);
            })
          hls.loadSource(source);
          window.hls = hls;
        }
    }else{
    var a = document.createElement('script');
    a.setAttribute('src','/api/v1/cdn/plyr.js');
    a.setAttribute('id',"player_js")
    a.setAttribute('integrity','sha384-uax8bmVz/F8mujhaWffZ88h+z0gLEpiA0cwr3YrDKKZ+067Gp0KNRvHbQkjLSUQj')
    a.setAttribute('crossorigin','anonymous')
    document.head.appendChild(a);
    document.head.insertAdjacentHTML('beforeend','<link rel="stylesheet" href="/api/v1/cdn/plyr.css" />');
    var b = document.createElement('script');
    b.setAttribute('src','/api/v1/cdn/hls.js');
    b.setAttribute('id',"player_hls")
    b.setAttribute('integrity','sha384-FSscRoYqQx+aRysVdvMNt2wLcgFIMbYudcy01xVelD901vcXg5CmMoqAru3KgbEs')
    b.setAttribute('crossorigin','anonymous')
    document.head.appendChild(b);
    b.onload = function(){
        function updateQuality(newQuality) {
            if (newQuality === 0) {
              window.hls.currentLevel = -1; //Enable AUTO quality if option.value = 0
            } else {
              window.hls.levels.forEach((level, levelIndex) => {
                if (level.height === newQuality) {
                  window.hls.currentLevel = levelIndex;
                }
              });
            }
          }
       //const source = m3u8;
        const video = document.querySelector('#player');
        const defaultOptions = {};
        if (!Hls.isSupported()) {
          video.src = source;
        } else {
            const hls = new Hls({
                maxMaxBufferLength: '15',
            });
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                const availableQualities = hls.levels.map((l) => l.height)
                defaultOptions.quality = {
                    default: availableQualities[availableQualities.length - 1],
                    options: availableQualities,
                    forced: true,        
                    onChange: (e) => updateQuality(e),
                }
                defaultOptions.captions = {
                    active: false, update: true, language: 'en'
                }
                const player = new Plyr(video, defaultOptions);
                player.on('languagechange', () => {
                    setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
                  });
                  document.querySelector('.plyr').style.minHeight  = "444px"
                  document.querySelector('.plyr').style.height  = "444px"
                  hls.attachMedia(video);
            })
          hls.loadSource(source);
          window.hls = hls;
        }
    }
}
}
function showpost(e,post_id,post_type,json) {
    if (e === '0') {
        showpost = function() {};
        //disables showpost
        return;
    }
    if (document.querySelector('._1VP69d9lk-Wk9zokOaylL').getAttribute("open")) {
        document.querySelector('._1VP69d9lk-Wk9zokOaylL').removeAttribute("open")
        document.getElementById("post_viewer").removeEventListener("click",clear_menus)
        if (document.getElementById('post_viewer')) {
            document.getElementById('post_viewer').remove();   
        }
        document.removeEventListener('click',checktarg)
        disablehrefs()
        allowclick = true;
        window.history.pushState(t, t, h);
 
        return;
    }
    var urlq = window.location.href.split('/')
    if (window.innerWidth < 559 || urlq[3] == "p") {
        return;
    }
    function checktarg(evt) {const f = document.querySelector(`[load-post-id='${post_id}']`);const gg = document.querySelector('.MEAGs');let e = evt.target;do {if(e == f) {return;}e = e.parentNode;} while (e);showpost();document.removeEventListener('click',checktarg)}
    function disablehrefs() {
        var dom = document.querySelector('._1VP69d9lk-Wk9zokOaylL');
        var elems = dom.getElementsByTagName('a');
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].classList.contains("removed_href")) {
                elems[i].classList.remove("removed_href");
            } else {
              elems[i].classList.add("removed_href");
            }
        }
      }
    try {
        e.preventDefault()
    } catch (error) {
        var error;
        //does nothing.
    }
    const postjson = new XMLHttpRequest();
    postjson.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            allowclick = false;
            var pjson = JSON.parse(this.responseText)[0];
            document.querySelector('._1VP69d9lk-Wk9zokOaylL').insertAdjacentHTML('afterend','<div id="post_viewer" style="background-color: rgba(0, 0, 0, .5) !important;"></div>')
            var pv = document.getElementById('post_viewer');
           document.querySelector('._1VP69d9lk-Wk9zokOaylL').setAttribute("open","true")
           window.history.pushState(pjson.title + ' - Dino Portal', pjson.title + ' - Dino Portal', `/p/${pjson.post_id}`);
            if (pjson.liked === true) {
                var likemod = '<div style="display: flex; -ms-flex-align: center; align-items: center; display: -ms-flexbox; cursor: pointer;margin-right:4px" btn="like"><span elike-id="'+pjson.post_id+'" like-id="'+pjson.post_id+'" data-like="unlike" class="JrpAzXnCHrDk" style="-ms-flex-align: center; align-items: center; display: -ms-flexbox; line-height: 20px;display: flex;"><i class="like-btn JrpAzXnCHrDk" data-id="'+pjson.server_pid+'" style=""><i class="site-icon-s JrpAzXnCHrDk" style="font-size: 20px;line-height: 20px;color:#1696e1;line-height: 16px; margin-right: 6px;margin-left: 4px;"></i></i> <span class="likes JrpAzXnCHrDk" style="margin-left: 2px; display: inline-block; line-height: 1; text-transform: capitalize; vertical-align: middle; color: #878A8C; font-weight: 700; font-size: 12px;">'+pjson.likes+'</span></span></div>'
            } else {
                var likemod = '<div style="display: flex; -ms-flex-align: center; align-items: center; display: -ms-flexbox; cursor: pointer;margin-right:4px" btn="like"><span elike-id="'+pjson.post_id+'" like-id="'+pjson.post_id+'"  data-like="like" class="JrpAzXnCHrDk" style="-ms-flex-align: center; align-items: center; display: -ms-flexbox; line-height: 20px;display: flex;"><i class="like-btn JrpAzXnCHrDk" data-id="'+pjson.server_pid+'" style=""><i class="site-icon-s JrpAzXnCHrDk" style="font-size: 20px;line-height: 20px;color:unset;line-height: 16px; margin-right: 6px;margin-left: 4px;color:#878A8C;"></i></i> <span class="likes JrpAzXnCHrDk" style="margin-left: 2px; display: inline-block; line-height: 1; text-transform: capitalize; vertical-align: middle; color: #878A8C; font-weight: 700; font-size: 12px;">'+pjson.likes+'</span></span></div>'
            }
            if (pjson.metadata) {
                var metadata = JSON.parse(pjson.metadata)
            }
            var css = `
            <style>
            .sp-aw {
                text-align: center !important;
                list-style: none;
              }
            @media all and (min-width:729px) {
                    [load-post-id]{
                        width: 640px !important;
                    }
                }
                .fs1{
                    max-width: 96vw;
                }
                #splidelist{padding-left:0rem !important}
                ._CmxRiim30CrxSPL{margin-top: 60px;}
                ._1VP69d9lk-Wk9zokOaylL {-webkit-filter: blur(8px); -moz-filter: blur(8px); -o-filter: blur(8px); -ms-filter: blur(8px); filter: blur(8px);}
                #post_viewer{height: 100%;position: fixed; -webkit-backface-visibility: hidden; backface-visibility: hidden; right: 0; top: 0; width: 100%; z-index: 50; margin-bottom: 60px;display: flex; justify-content: center; position: fixed; left: 50%; transform: translateX(-50%); overflow-y: scroll; overflow-x: hidden;}
                [load-post-id]{display: flex;width:100%;background-color: #fff; border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem; padding: 0.5rem 0.25rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); flex-direction: column;}
                .fs1>p {font-size: 14px;line-height: 21px;margin-bottom: 0 !important;}
                .cZPZhMe-UCZ8htPodMyJ5 {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-ms-flex: 1 1 auto;flex: 1 1 auto;overflow: hidden;}
                ._2mHuuvyV9doV3zwbZPtIPG {display: inline-block;-ms-flex: 0 0 auto;flex: 0 0 auto}
                ._2mHuuvyV9doV3zwbZPtIPG {display: inline-block;-ms-flex: 0 0 auto;flex: 0 0 auto}
                ._2l1d6HSQ764u0JcvRSEJXD:focus:not(:focus-visible) {outline: none}
                ._3LS4zudUBagjFS7HjWJYxo {color: var(--newCommunityTheme-metaText);font-size: 6px;line-height: 20px;margin: 0 4px;vertical-align: middle;}
                .icon {font-size: 20px;font-weight: 400;height: 20px;line-height: 20px;vertical-align: middle;width: 20px;font-style: normal;}
                ._2pFdCpgBihIaYh9DSMWBIu {height: 24px;}
                ._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu {border-radius: 2px;}
                ._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu:focus,._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu:hover {outline: none;}
                ._10K5i7NW6qcm-UoCtpB3aK {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;-ms-flex-direction: row;flex-direction: row;text-align: left;width: 100%;}
                .pthKOcceozMuXLYrLlbL1 {margin-right: 6px;}
                ._2-cXnP74241WI7fpcpfPmg {display: inline-block;}
                ._2l1d6HSQ764u0JcvRSEJXD:focus:not(:focus-visible) {outline: none;}
                .icon:before {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: 'fontello';}
                .icon-award:before {content: "\\e85d";}
                .icon-edit:before {content: "\\e835";}
                .icon-comment:before {content: "\\e83a";color: #878A8C;}
                .icon-save:before {content: "\\e869";}
                .icon-share:before {content: "\\e855";}
                .icon-3dot:before {content: "\\e80f";}
                .icon-trash:before { content: '\\e845'; }
                .icon-report:before { content: '\\e83d'; }
                ._1UoeAeSRhOKSNdY_h3iS1O {font-size: 12px;font-weight: 700;line-height: 16px;padding: 4px;box-sizing: border-box;}
                ._1UoeAeSRhOKSNdY_h3iS1O ._3DVrpDrMM9NLT6TlsTUMxC {margin-right: 6px;}
                ._3m17ICJgx45k_z-t82iVuO {cursor: default;}
                .FHCV02u6Cp2zYL0fhQPsO {display: inline-block;line-height: 1;text-transform: capitalize;vertical-align: middle;color: #878A8C;font-weight: 700;font-size: 12px;}
                .OccjSdFd6HkHhShRg6DOl {font-size: 12px;font-weight: 700;line-height: 16px;display: -ms-flexbox;display: flex;position: relative;}
                @media (max-width: 459px) {
                    ._2sAFaB0tx4Hd5KxVkdUcAx {display: none;}._21pmAV9gWG6F_UKVe7YIE0 {display: none;}
                }._1EbinKu2t3KjaT2gR156Qp {border-radius: 4px;cursor: pointer;height: 24px;line-height: 0;padding: 0 4px;width: 100%;}
                ._1EbinKu2t3KjaT2gR156Qp {vertical-align: middle;}
                ._1EbinKu2t3KjaT2gR156Qp,._1EbinKu2t3KjaT2gR156Qp i {display: inline-block;}
                ._3-miAEojrCvx_4FQ8x3P-s {font-size: 12px;font-weight: 700;line-height: 16px;-ms-flex-align: stretch;align-items: stretch;display: -ms-flexbox;display: flex;-ms-flex-direction: row;flex-direction: row;overflow: hidden;padding: 0 8px 0 4px;-ms-flex-positive: 1;flex-grow: 1;}
                ._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd {border-radius: 2px;margin-right: 4px;padding: 8px;text-transform: capitalize;white-space: nowrap;width: auto;word-break: normal;word-wrap: normal;height: 100%;}
                ._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd:focus,._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd:hover {outline: none;}
                ._3U_7i38RDPV5eBv7m4M-9J {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;}
                ._70940WUuFmpHbhKlj8EjZ {overflow: hidden;text-overflow: ellipsis;line-height: 12px;max-height: 36px;display: -webkit-inline-box;-webkit-line-clamp: 3;white-space: normal;-webkit-box-orient: vertical;font-weight: 700;font-size: 12px;}
                ._21pmAV9gWG6F_UKVe7YIE0 {-ms-flex: 1 1 auto;flex: 1 1 auto;}
                ._6_44iTtZoeY6_XChKt5b0 {display: inline-block;line-height: 1;text-align: left;overflow: hidden;text-overflow: ellipsis;line-height: 12px;max-height: 36px;display: -webkit-inline-box;-webkit-line-clamp: 3;white-space: normal;-webkit-box-orient: vertical;font-weight: 700;font-size: 12px;vertical-align: middle;}
                ._2qww3J5KKzsD7e5DO0BvvU {padding: 8px;word-break: normal;margin-right: 4px;}
                .kU8ebCMnbXfjCWfqn0WPb {border-radius: 2px;padding: 8px;display: -ms-flexbox;display: flex;-ms-flex-align: center;align-items: center;text-transform: capitalize;height: 100%;outline: none;}
                .kU8ebCMnbXfjCWfqn0WPb ._1GQDWqbF-wkYWbrpmOvjqJ {line-height: 16px;margin-right: 6px;}
                ._JRBNstMcGxbZUxrrIKXe {margin: 0 4px 0 0;width: auto;word-break: normal;}
                ._3MmwvEEt6fv5kQPFCVJizH {display: -ms-flexbox;display: flex;-ms-flex-direction: column;flex-direction: column;-ms-flex-pack: center;justify-content: center;}
                .icon._3yNNYT3e1avhAAWVHd0-92 {display: inline-block;line-height: 18px;}
                .icon._1Xe01txJfRB9udUU85DNeR {display: inline-block;margin-right: -2px;}
                ._3KTYozwt91D81Yub-OQ4S3:focus:not(:focus-visible) {outline: none;}
                ._1hwEKkB_38tIoal6fcdrt9 {-ms-flex-align: center;align-items: center;-ms-flex-wrap: wrap-reverse;flex-wrap: wrap-reverse;-ms-flex-pack: justify;justify-content: space-between;padding-right: 0;padding-top: 4px;display: -ms-flexbox;display: flex;}
                ._2pFdCpgBihIaYh9DSMWBIu {height: 24px;}
                ._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu {border-radius: 2px;}
                ._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu:focus,._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu:hover {outline: none;}
                ._10K5i7NW6qcm-UoCtpB3aK,.kU8ebCMnbXfjCWfqn0WPb {outline: none;background: transparent;border: none;color: inherit;cursor: pointer;padding: initial;color: #878A8C;}
                #myDropdown > a {background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;}
                .flex{display: flex;display: -ms-flexbox;}
                .icon:before {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: 'fontello';} .icon {font-size: 20px;font-weight: 400;height: 20px;line-height: 20px;vertical-align: middle;width: 20px;font-style: normal;} .dropbtn{background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;} .dropdown { position: relative; display: inline-block; margin-left: auto; } #myDropdown > button{background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;} .dropdown-content { display: none; position: absolute; background-color: #f1f1f1; min-width: 160px; overflow: auto; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; } .dropdown-content a { color: black; padding: 12px 16px; text-decoration: none; display: block; } .show {display: block;} #myDropdown{ right: 0; }
                </style>
                `
            var template = `
            <div dclass="rpBJOHq2PR60pnwJlUyP0" class="_CmxRiim30CrxSPL">
            <article load-post-id="${pjson.post_id}">
            <div data-postalert style="justify-content: space-around; margin-left: auto; margin-right: auto; padding-top: 5px; padding-bottom: 5px; margin-bottom: 10px;border-radius: 4px; font-size: 14px;position: fixed;box-shadow: -6px 9px 17px -1px rgb(0 0 0 / 39%);z-index: 997;transition: all .99s ease-out;display: none;">
            <div style="padding-left: 5px; font-size: 14px; padding-right: 5px;"></div>
            </div>
            <header class="" style="margin-left: 8px;">
                <div class="css-1dbjc4n r-18u37iz" style="cursor:auto;">
                    <div class="ad74e8a5" style="border-radius: 25px;width: 100%;box-shadow:none;border:none;">
                        <div class="css-1dbjc4n r-1awozwy r-1hwvwag r-18kxxzh r-1b7u577">
                            <a href="/u/${pjson.author}">
                                <img src="${pjson.picon}" alt="Name"
                                    class="avatar">
                            </a>
                        </div>
                        <div class="content">
                            <div>
                            <div class="cZPZhMe-UCZ8htPodMyJ5"><span></span>
                                <div class="_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8">
                                    <div class="_2mHuuvyV9doV3zwbZPtIPG"><a data-click-id="subreddit"
                                            class="_3ryJoIoycVkA88fy40qNJc" href="Blogs">Blogs</a>
                                        <div id="SubredditInfoTooltip--t3_s95h3k--lightbox--Bible"></div>
                                    </div><span class="_3LS4zudUBagjFS7HjWJYxo _37gsGHa8DMRAxBmQS-Ppg8 _3V4xlrklKBP2Hg51ejjjvz"
                                        role="presentation">•</span><span class="_2fCzxBE1dlMh4OFc7B3Dun"
                                        style="color: rgb(129, 131, 132);">Posted by</span>
                                    <div class="_2mHuuvyV9doV3zwbZPtIPG"><a
                                            class="_2tbHP6ZydRpjI44J3syuqC  _23wugcdiaj44hdfugIAlnX oQctV4n0yUb0uiHDdGnmE"
                                            href="/u/${pjson.author}/" style="color: rgb(129, 131, 132);margin: 0 4px;">${pjson.author}</a>
                                        <div id="UserInfoTooltip--t3_s95h3k--lightbox"></div>
                                    </div><span><span></span></span><a class="_3jOxDPIQ0KaOWpzvSQo-1s"
                                        href=""
                                        target="_blank" rel="nofollow noopener noreferrer" style="color: rgb(129, 131, 132);">${timeSince(new Date(timeConverter(pjson.unix_time)))}</a>
                                </div>
                                <div class="_2wFk1qX4e1cxk8Pkw1rAHk"></div>
                                <div class="_3XoW0oYd5806XiOr24gGdb"></div>
                                <div style="margin-left: auto; font-weight: 400; font-size: 20px; color: #c1c1c1; margin-right: 4px;cursor:pointer;" onclick="showpost()">X</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="fw-bolder" style=""0px 10px 8px 10px>${pjson.title}</h1>
                <!-- Post categories-->
            </header>
            <div class="splide">
                <div class="splide__track">
                <ul class="splide__list" id="splidelist">
                </ul>
                </div>
            </div>
            <!-- Post content-->
            <section class="mb-5" style=" width:100%;overflow-wrap: break-word;overflow:hidden;padding-top:0%">
                <div class="interactive_0">
                </div>
                <div class="fs1">
                ${pjson.post_body}
                </div>
            </section>
            <div class="interactive_0" class="interactive_0" style="margin-left: 8px;margin-right: 8px;">
                <div>
                    <div class="_1hwEKkB_38tIoal6fcdrt9">
                        <div class="_3-miAEojrCvx_4FQ8x3P-s">
                        <div style="display:flex" btn="like">${likemod}</div>
                            <div
                                class="_1UoeAeSRhOKSNdY_h3iS1O _3m17ICJgx45k_z-t82iVuO _3U_7i38RDPV5eBv7m4M-9J _2qww3J5KKzsD7e5DO0BvvU">
                                <i class="icon icon-comment _3DVrpDrMM9NLT6TlsTUMxC" role="presentation"></i><span
                                    class="FHCV02u6Cp2zYL0fhQPsO" id="numComments">0 Comments</span></div>

                            <div style="display: flex;">
                                <div class="icontop vmshare" style="display: flex;">
                                    <div class="_JRBNstMcGxbZUxrrIKXe _3U_7i38RDPV5eBv7m4M-9J _3yh2bniLq7bYr4BaiXowdO _1pShbCnOaF7EGWTq6IvZux _28vEaVlLWeas1CDiLuTCap vmshare"
                                        id="share_native"><button data-click-id="share" class="kU8ebCMnbXfjCWfqn0WPb vmshare"><i
                                                class="icon icon-share _1GQDWqbF-wkYWbrpmOvjqJ vmshare"></i><span
                                                class="_6_44iTtZoeY6_XChKt5b0 vmshare">share</span></button></div>
                                    <div class="_21pmAV9gWG6F_UKVe7YIE0"></div>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button id="pop" class="dropbtn icon icon-3dot" style="cursor: pointer;"></button>
                            <div id="myDropdown" class="dropdown-content">
                            <button class="kU8ebCMnbXfjCWfqn0WPb"> <i class="icon icon-report _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/"></i><span class="_6_44iTtZoeY6_XChKt5b0">Report</span></button>
                            <button class="kU8ebCMnbXfjCWfqn0WPb" id="edit_post"> <i class="icon icon-edit _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/"></i><span class="_6_44iTtZoeY6_XChKt5b0">Edit</span></button>
                            <button class="kU8ebCMnbXfjCWfqn0WPb" id="delete_post"> <i class="icon icon-trash _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/"></i><span class="_6_44iTtZoeY6_XChKt5b0">Delete</span></button>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
            <div id="cvh" style="margin-top: 4px;"></div>
        </article>
        </div>
        `;
        var comment = `
        <div>
        <div class="col-md-12" style="background-color: #fbfbfb; border-radius:  0px 0px 25px 25px;padding-bottom: 2%;">
          <div class="col-md-12">
            <div class="comment-form-container">
              <form id="frm-comment">
                <div class="input-row">
                  <textarea class="input-field input-area form-control" type="text" name="comment" id="comment" placeholder="Add Public Comment" style="height: 20%;resize: none;"></textarea>
                </div>
                <div class="input-row">
                  <input type="hidden" name="token" value="">
                  <input type="hidden" name="comment_id" id="commentId">
                  <input class="input-field" type="text" name="name" id="name" placeholder="e" hidden value="bacon">
                </div>
                <div style="padding-top: 5px;display: flex;justify-content: flex-end;"> 
                <div id="comment-message" style="margin-right: auto;" class=""></div>
                  <input type="submit" class="btn-submit btn-primary btn" value="Submit" style="float:right;" id="addComment_d">
                </div>
              </form>
            </div>
            <div id="commentloader" style="border: 1px solid #f3f3f3; border-radius: 50%; border-top: 1px solid #1696e1; width: 52px; height: 52px; animation: spin 0.75s linear infinite; animation-timing-function: linear; display: flex; margin-left: auto; margin-right: auto;"></div>
          </div>
          <div class="userComments"></div>
          <style>
            #output > ul > li::marker{
              content: "";
            }
            .comment-row > *{
              font-size: 14px;
            }
            .btn-reply{
              cursor: pointer;
              text-decoration: none !important;
            }
            .btn-submit:disabled {
            background: #eee;
            color: #667;
            cursor: not-allowed;
            }

            #output ul {
            list-style-type: none;
            }

            .comment-row {
            border-bottom: #e0dfdf 1px solid;
            margin-bottom: 15px;
            padding: 5px 10px 5px 10px;
            }
            .comment-active {
            background-color: hsl(60, 100%, 95%);
            }
            .comment-row:target {
            animation: bg-fadeout 5s ease;
            }
            @keyframes bg-fadeout {
            from {background-color: hsl(60, 100%, 95%);}
            to {background-color: transparent;}
            }

            .outer-comment {
            padding-inline-start: 0;
            }
            .outer-comment ul {
            padding-inline-start: 1rem;
            }
            .outer-comment ul ul {
            padding-inline-start: 0;
            }
            .outer-comment > li > div {
            border-left: 3px solid hsl(220, 100%, 60%);
            }
            .outer-comment > li li > div {
            border-left: 3px solid hsl(40, 100%, 60%);
            }

            span.commet-row-label {
            font-style: italic;
            }

            .posted-by {
            color: hsl(220, 100%, 40%);
            font-weight: 700;
            }
            .comment-text {
            margin: 0px 0px;
            }
            .reply {
            background: #f2f2f2;
            color: #667;
            text-decoration: none;
            display: inline-block;
            border-radius: 4px;
            }
            .btn-reply {
            font-size: 0.8em;
            text-decoration: underline;
            color: #888787;
            cursor:pointer;
            }

            #comment-message {
            margin-left: 20px;
            display: inline-block;
            opacity: 1;
            }

            .msg-success {color: hsl(120, 75%, 40%); animation: fadeOut 5s ease;}
            .msg-error {color: hsl(10, 90%, 50%); animation: fadeOut 5s ease;}

            @keyframes fadeOut {
            0%, 50% {opacity:1;}
            100% {opacity:0;}
            }
          </style>
          <div id="output"></div>
        </div>
      </div>
        `;
        pv.style.display = "none";
        pv.insertAdjacentHTML('afterbegin',template);
        pv.insertAdjacentHTML('afterbegin',css);
        document.getElementById('cvh').insertAdjacentHTML('afterbegin',comment);
        document.querySelector(`[elike-id='${pjson.post_id}']`).addEventListener("click", vmlike)
        comments(post_id)
        if (metadata && metadata.hasOwnProperty('m3u8')) { 
            var imgjson = pjson.images.split(',');
            buildvideo(imgjson[0],metadata.m3u8)

        }else{
            if (pjson.type === 'image') {
                var imgjson = pjson.images.split(',');
                if (imgjson[0]) {
                    if (imgjson[1]) {
                        function eaf(item, index) {
                            if (item) {
                                splidelist.insertAdjacentHTML('beforeend',`<li style="margin: 24px 0;" class="splide__slide sp-aw"><img class="img-fluid rounded sp-image" style="max-height: 1024px;" src="${item}" alt="..."></li>`)
                            }
                        }
                        imgjson.forEach(eaf)
                        loadsplide()
                    } else {
                        if (imgjson.length = 1) {
                            splidelist.insertAdjacentHTML('beforebegin',` <div style="margin: 24px 0;"> <img class="img-fluid rounded sp-imag" style="max-height: 1024px; margin-left: auto; margin-right: auto; display: flex; text-align: center;" src="${imgjson[0]}" draggable="false" oncontextmenu="return false;"> </div> `)
                            splidelist.remove()
                        }
                    }
                } 
            } 
        }
        //popup
        if (pjson.auth === true) {
            document.getElementById("edit_post").addEventListener('click',function(e) {
                var url = new URL(window.location.href);
                url.searchParams.set('edit', true);
                location.href = url;
            })
            document.getElementById("delete_post").addEventListener("click",function(e) {
                if (confirm("Are you sure you want to DELETE this post?")) {
                  var q = new XMLHttpRequest();
                  q.open("GET",'/api/v1/?k=editpost&pid='+pjson.post_id+'&do=delete')
                  q.send();
                  q.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                      var a = JSON.parse(this.responseText)
                      notify(a.message,"#3c763d","#dff0d8","#d6e9c6", 10000)
                    } 
                  }
                }
            })
        }else{
            document.getElementById("delete_post").remove()
            document.getElementById("edit_post").remove();
        }
        document.getElementById('pop').addEventListener('click',function(e) {
            document.getElementById("myDropdown").classList.toggle("show")
        })                              
        //end popup
        disablehrefs()
        document.querySelector('.vmshare').addEventListener('click',async function() {
            const shareData = {
                title: `${pjson.title} - Dinoportal.com`,
                text: `${pjson.author} is talking about ${pjson.title} on Dinoportal.com`,
                url: `https://dinoportal.com/p/${pjson.post_id}`
            }
            await navigator.share(shareData)
        })
        pv.style.display = "flex";
        if (!window.innerWidth < 559) {
            document.querySelector('._CmxRiim30CrxSPL > article').style.cssText  = "width:"+(document.querySelector('._1tvThPWQpORoc2taKebHxs ').offsetWidth + document.querySelector('._1OVBBWLtHoSPfGCRaPzpTf ').offsetWidth) + "px !important;"   
        }
        document.querySelector('[data-postalert]').style.width  = (document.querySelector(`[load-post-id="${pjson.post_id}"] > header`).offsetWidth + 8) + "px"
        document.removeEventListener('click',checktarg)
        setTimeout(() => {
        //wait for doc to load, 50ms
        document.addEventListener('click', checktarg, false)
        document.getElementById("post_viewer").addEventListener("click",clear_menus)
        document.querySelector(`._CmxRiim30CrxSPL`).style.marginBottom = document.querySelector(`[load-post-id='${pjson.post_id}']`).scrollHeight + 60 + 'px'
        var postdata = {
            'post_id':pjson.post_id,
            'time':Date.now(),
            'viewtype': 1
        }
        viewcount(postdata);
        }, 50);
        }}
    postjson.open('GET', '/api/v1/?k=loadpid&pid=' + post_id + '&pagetype=trending&currenttime=' + Date.now(), true);
    postjson.send();
}
function clear_menus(event) {
    if (!event.target.matches('.icon-3dot')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.style.display === "inline-block") {
            openDropdown.style.display = "none";
          }
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }                       
}
function deletecomment(e) {
    ethis = this;
    e.preventDefault();
    if (confirm("are you sure you want to DELETE this comment?")) {
        var a = new XMLHttpRequest();
        a.open('GET','/api/v1/?k=editpost&do=delete_com&cid='+this.getAttribute("del-id"))
        a.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                ethis.parentElement.parentElement.querySelector('.comment-info > .posted-by').innerHTML = "<i>deleted</i>"
                ethis.parentElement.parentElement.querySelector('.comment-text').innerHTML = "<i>deleted</i>"
                notify('Comment Deleted',"#3c763d","#dff0d8","#d6e9c6",3000)
            }}
        a.send()
    }
    return false;
}
function comments(post_id) {
    const el = selector => {
        let self = {};
        self.selector = selector;
        self.element = document.querySelector(self.selector);
        self.new = attr => {
            self.element = document.createElement(self.selector);
            if(attr) {
                for (var key in attr) {
                    if(attr.hasOwnProperty(key)) {
                        self.element.setAttribute(key, attr[key]);
                    }
                }
            }
            return self;
        }
        self.node = () => {
            return self.element;
        }
        self.all = () => {
            return document.querySelectorAll(self.selector);
        }
        self.css = () => {
            return self.node().classList;
        }
        self.html = content => {
            if(content === null) return self.element;
            self.element.innerHTML = content;
            return self;
        }
        self.append = element => {
            element.appendChild(self.element);
            return self;
        }
        return self;
    }
    ;((document, window) => {
        "use strict";
        const lang = {
            'reply': 'Reply',
            'sending': 'Sending…',
            'added': 'Comment was submitted!',
            'error': 'Error while adding comment!'
        };
        const $form = el('#frm-comment').node();
        const $output = el('#output').node();
        const $message = el('#comment-message');
        const $submit = el('.btn-submit').node();
        const $list = el('ul').new({'class':'outer-comment'}).append( $output );
        function formatDatetime(datetime) {
            return datetime.replace(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, '$3. $2. $1 $4:$5');
        }
        function replaceTemplate(id, name, date, text, parent, parentName = "") {
            let reply = (parent > 0) ? `<a href="#comment-${parent}" class="reply" data-id="${parent}">↳ ${parentName}</a> ` : "";
            let template = `<div class='comment-row' id="comment-${id}">							
                                <div class='comment-info' style="display: flex; align-items: center;"><span class='posted-by' style="display:flex;">${name}</span> <span style="margin-left:4px;margin-right:4px;display:flex;">&middot;</span> <span class='posted-at' style="display:flex;">${formatDatetime(date)}</span><span class="icon icon-3dot _3DVrpDrMM9NLT6TlsTUMxC" style="display: flex;margin-left: 8px;" comment-nav-id="${id}"></span></div>
                                <div comment-nav-id-drop="${id}" class="dropdown-content" style="display: none; position: absolute; background-color: #f1f1f1; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;"><a del-id="${id}">Delete</a> </div>
                                <div class='comment-text'>${reply}${text}</div>
                                <div><a class='btn-reply' data-id="${id}">${lang.reply}</a></div>
                            </div>`;
            return template;
        }
        function newComment(item, data) {
            let template = replaceTemplate(item.id, item.name, item.date, item.comment, item.parent_id);
            const $item = el("li").new().html(template).append( $list.node() );
            const $reply = el('ul').new().append( $item.node() );
    
            listReplies(item, data, $reply);
            document.querySelector(`[comment-nav-id='${item.id}']`).addEventListener("click",function(e) {
                if (item.auth === true) {
                    document.querySelector(`[del-id='${item.id}']`).addEventListener("click",deletecomment)
                }else{
                    if (document.querySelector(`[del-id='${item.id}']`)) {
                        document.querySelector(`[del-id='${item.id}']`).remove();
                    }      
                }
                document.querySelector(`[comment-nav-id-drop='${item.id}']`).style.display = "inline-block";
                this.parentElement.style.position = "relative";
        })}
        function listComment() {
            fetch('/api/v1/?k=postcomments&pid='+post_id)
             .then(response => {
                $list.html("");
                response.json().then(data => {
                    data.forEach(comment => {
                        if (comment.parent_id == 0) {
                            newComment(comment, data);
                        }
                    });
                    document.getElementById("commentloader").style.display = "none"
                 });
             }).catch(error => {
             });
            var h = new XMLHttpRequest();
            h.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var json = JSON.parse(this.responseText)[0];
                    document.getElementById("numComments").innerHTML  = json.count + ' Comments';
               }
            }
            h.open("GET", '/api/v1/?k=postcomments&pid='+post_id+"&count", true);
            h.send();
        }
        function listReplies(parent, data, list) {
            data.forEach(comment => {
                if (parent.id == comment.parent_id) {
    
                    let template = replaceTemplate(comment.id, comment.name, comment.date, comment.comment, comment.parent_id, parent.name);
    
                    const $item = el("li").new().html(template).append( list.node() );
                    const $reply = el('ul').new().append( $item.node() );
    
                    listReplies(comment, data, $reply);
                    document.querySelector(`[comment-nav-id='${comment.id}']`).addEventListener("click",function(e) {
                        if (comment.auth) {
                            document.querySelector(`[del-id='${comment.id}']`).addEventListener("click",deletecomment)
                        }else{
                            if (document.querySelector(`[del-id='${comment.id}']`)) {
                                document.querySelector(`[del-id='${comment.id}']`).remove();   
                            }
                        }
                        document.querySelector(`[comment-nav-id-drop='${comment.id}']`).style.display = "inline-block";
                        this.parentElement.style.position = "relative";
                    })
                }
            });
        }
        const getFormData = form => {
            let formData = new FormData();
        for (var i = 0; i < form.elements.length; i++) {
            var field = form.elements[i];
            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;
            if (field.type === 'select-multiple') {
                for (var n = 0; n < field.options.length; n++) {
                    if (!field.options[n].selected) continue;
                    formData.append(field.name, field.options[n].value);
                }
            }
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                formData.append(field.name, field.value);
            }
        }
        return formData;
        }
        const submitHandler = e => {
            e.preventDefault();
            e.stopPropagation();
            let $comment = el("#comment").node();
            let $name = el("#name").node();
    
            if($comment.value == "") { $comment.focus(); return; }
            if($name.value == "") { $name.focus(); return; }
            
            let origContent = $submit.value;
    
            $submit.setAttribute("disabled", true);
            $submit.value = lang.sending;
    
            $message.css().remove('msg-success');
            $message.css().remove('msg-error');
            $message.html("");
            fetch("/api/v1/?k=submitcomment&pid="+post_id, {
                method: 'POST',
                body: getFormData($form),
              })
             .then(response => {
                if (response.ok) {
            
                    $message.css().add('msg-success');
                    $message.html(lang.added);
                    
                    el("#name").node().value = "";
                    el("#comment").node().value = "";
                    el("#commentId").node().value = "";
                    
                    listComment();
                } else {
                    $message.css().add('msg-error');
                    $message.html(lang.error);
                    return false;
                }
             }).catch(error => {
                // Handle error
             });
             
             setTimeout(() => {
                $submit.removeAttribute("disabled");
                $submit.value = origContent;
            }, 1000);
    
            setTimeout(() => {
                $message.css().remove('msg-error');
                $message.css().remove('msg-success');
                $message.html("");
            }, 5000);
        }
        const replyHandler = e => {
            if (!e.target.matches('.btn-reply')) return;
            e.preventDefault();
            let id = e.target.dataset.id;
            el('#commentId').node().value = id;
            el("#comment").node().focus();
        }
        const replyOverHandler = e => {
            if (!e.target.matches('.reply')) return;
            e.preventDefault();
            let parent = e.target.dataset.id;
            let parentCSS = el("#comment-"+parent).css();
            if(e.type == "mouseover") {
                parentCSS.add("comment-active");
            } else if(e.type == "mouseout") {
                parentCSS.remove("comment-active");
            }
        }
        $form.addEventListener("submit", submitHandler);
        $output.addEventListener("click", replyHandler);
        $output.addEventListener("mouseover", replyOverHandler)
        $output.addEventListener("mouseout", replyOverHandler)
        listComment();
    })(document, window);
}
function vmlike() {
    var post_id = this.getAttribute("like-id");
    var clicked_btn = this;
    if (clicked_btn.getAttribute("data-like") === 'like') {
        action = 'like';
    } else if (clicked_btn.getAttribute("data-like") === 'unlike') {
        action = 'unlike';
    }else{
      return;
    }
    var request = new XMLHttpRequest();
    request.open('POST', '/api/v1/?k=like&time'+Date.now(), true);
    var formData = new FormData();
    formData.append('action', `${action}`);
    formData.append('post_id', `${post_id}`);
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var res = JSON.parse(this.response); 
            if (action == "like") {
                document.querySelector(`[elike-id='${post_id}'] > i > i`).style.color = "#1696e1"
                document.querySelector(`[like-id='${post_id}'] > i > i`).style.color = "#1696e1"
                clicked_btn.setAttribute('data-like','unlike')
            } else if (action == "unlike") {
                document.querySelector(`[elike-id='${post_id}'] > i > i`).style.color = "#878A8C"
                document.querySelector(`[like-id='${post_id}'] > i > i`).style.color = "#878A8C"
                clicked_btn.setAttribute('data-like','like')
            }
            var allSiblingsLike = clicked_btn.parentElement.querySelectorAll('span.likes');
            for (let i = 0; i < allSiblingsLike.length; i++) {
                allSiblingsLike[i].innerText = res.likes;
            }
            var allSiblingsLikem = document.querySelector(`[like-id='${post_id}']`).parentElement.querySelectorAll('span.likes')
            for (let i = 0; i < allSiblingsLikem.length; i++) {
                allSiblingsLikem[i].innerText = res.likes;
            }
        }
        if (this.status >= 200 && this.status === 400) {
            notify('Log in to leave a rating.',"#a94442","#f2dede","#ebccd1",7500)
        }
    };
    request.send(formData);
  }
})(document, window);
//
