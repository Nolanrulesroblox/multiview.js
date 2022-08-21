(function () {0
    if (location.pathname == '/new/') {
        return;
    }
    window.showpost = showpost;
    let userdata; //all user data.
    let h = location.protocol + '//' + location.host + location.pathname
    let postviewer;
    let postviewercontroller; //control all elements
    let cssstyle = `
    .sp-aw { text-align: center !important; list-style: none; } @media all and (min-width:940px) { [load-post-id]{ width: 937px!important; } } @media all and (min-width:729px) and (max-width:939px){ [load-post-id]{ width: 640px; } } @media all and (max-width:559px) { [load-post-id]{ min-width: 100% ; max-width: 100% ; width: 100% ; } 
    ._CmxRiim30CrxSPL{ min-width: 100% ; max-width: 100% ; width: 100% ; } } .fs1{ max-width: 96vw; } #splidelist{padding-left:0rem !important} ._CmxRiim30CrxSPL{margin-top: 60px;} 
    ._1VP69d9lk-Wk9zokOaylL-TMP {-webkit-filter: blur(8px); -moz-filter: blur(8px); -o-filter: blur(8px); -ms-filter: blur(8px); filter: blur(8px);} #post_viewer{height: 100%;position: fixed; -webkit-backface-visibility: hidden; backface-visibility: hidden; right: 0; top: 0; width: 100%; z-index: 50; margin-bottom: 60px;display: flex; justify-content: center; position: fixed; left: 50%; transform: translateX(-50%); overflow-y: scroll; overflow-x: hidden;}
    [load-post-id]{display: flex;width:100%;/*background-color: #fff;*/background-color: var(--post-background); border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem; padding: 0.5rem 0.25rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); flex-direction: column;} .fs1>p {font-size: 14px;line-height: 21px;margin-bottom: 0 !important;} .cZPZhMe-UCZ8htPodMyJ5 {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-ms-flex: 1 1 auto;flex: 1 1 auto;overflow: hidden;}
    ._2mHuuvyV9doV3zwbZPtIPG {display: inline-block;-ms-flex: 0 0 auto;flex: 0 0 auto} ._3LS4zudUBagjFS7HjWJYxo {color: var(--newCommunityTheme-metaText);font-size: 6px;line-height: 20px;margin: 0 4px;vertical-align: middle;} .icon {font-size: 20px;font-weight: 400;height: 20px;line-height: 20px;vertical-align: middle;width: 20px;font-style: normal;} ._2pFdCpgBihIaYh9DSMWBIu {height: 24px;}
    ._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu {border-radius: 2px;} ._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu:focus,._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu:hover {outline: none;} ._10K5i7NW6qcm-UoCtpB3aK {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;-ms-flex-direction: row;flex-direction: row;text-align: left;width: 100%;} .pthKOcceozMuXLYrLlbL1 {margin-right: 6px;}
    .icon:before {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: 'fontello';} .icon-award:before {content: "\\e85d";} .icon-edit:before {content: "\\e835";} .icon-comment:before {content: "\\e83a";color: #878A8C;} .icon-save:before {content: "\\e869";} .icon-share:before {content: "\\e855";} .icon-3dot:before {content: "\\e80f";} .icon-trash:before { content: '\\e845'; }
    .icon-report:before { content: '\\e83d'; } ._1UoeAeSRhOKSNdY_h3iS1O {font-size: 12px;font-weight: 700;line-height: 16px;padding: 4px;box-sizing: border-box;} ._1UoeAeSRhOKSNdY_h3iS1O ._3DVrpDrMM9NLT6TlsTUMxC {margin-right: 6px;} ._3m17ICJgx45k_z-t82iVuO {cursor: default;} .FHCV02u6Cp2zYL0fhQPsO {display: inline-block;line-height: 1;text-transform: capitalize;vertical-align: middle;color: #878A8C;font-weight: 700;font-size: 12px;} ._3-miAEojrCvx_4FQ8x3P-s {font-size: 12px;font-weight: 700;line-height: 16px;-ms-flex-align: stretch;align-items: stretch;display: -ms-flexbox;display: flex;-ms-flex-direction: row;flex-direction: row;overflow: hidden;padding: 0 8px 0 4px;-ms-flex-positive: 1;flex-grow: 1;}
    ._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd {border-radius: 2px;margin-right: 4px;padding: 8px;text-transform: capitalize;white-space: nowrap;width: auto;word-break: normal;word-wrap: normal;height: 100%;} ._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd:focus,._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd:hover {outline: none;} ._3U_7i38RDpostviewer5eBv7m4M-9J {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;} ._6_44iTtZoeY6_XChKt5b0 {display: inline-block;line-height: 1;text-align: left;overflow: hidden;text-overflow: ellipsis;line-height: 12px;max-height: 36px;display: -webkit-inline-box;-webkit-line-clamp: 3;white-space: normal;-webkit-box-orient: vertical;font-weight: 700;font-size: 12px;vertical-align: middle;}
    ._2qww3J5KKzsD7e5DO0BvvU {padding: 8px;word-break: normal;margin-right: 4px;} .kU8ebCMnbXfjCWfqn0WPb {border-radius: 2px;padding: 8px;display: -ms-flexbox;display: flex;-ms-flex-align: center;align-items: center;text-transform: capitalize;height: 100%;outline: none;} .kU8ebCMnbXfjCWfqn0WPb ._1GQDWqbF-wkYWbrpmOvjqJ {line-height: 16px;margin-right: 6px;} ._JRBNstMcGxbZUxrrIKXe {margin: 0 4px 0 0;width: auto;word-break: normal;} ._3MmwvEEt6fv5kQPFCVJizH {display: -ms-flexbox;display: flex;-ms-flex-direction: column;flex-direction: column;-ms-flex-pack: center;justify-content: center;} ._1hwEKkB_38tIoal6fcdrt9 {-ms-flex-align: center;align-items: center;-ms-flex-wrap: wrap-reverse;flex-wrap: wrap-reverse;-ms-flex-pack: justify;justify-content: space-between;padding-right: 0;padding-top: 4px;display: -ms-flexbox;display: flex;}
    ._10K5i7NW6qcm-UoCtpB3aK,.kU8ebCMnbXfjCWfqn0WPb {outline: none;background: transparent;border: none;color: inherit;cursor: pointer;padding: initial;color: #878A8C;} #myDropdown > a {background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;} .flex{display: flex;display: -ms-flexbox;} .icon:before {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: 'fontello';} .icon {font-size: 20px;font-weight: 400;height: 20px;line-height: 20px;vertical-align: middle;width: 20px;font-style: normal;} .dropbtn{background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;} .dropdown { position: relative; display: inline-block; margin-left: auto; } #myDropdown > button{background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;}
    .dropdown-content { display: none; position: absolute; background-color: #f1f1f1; min-width: 160px; overflow: auto; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; } .dropdown-content a { color: black; padding: 12px 16px; text-decoration: none; display: block; } .show {display: block;} #myDropdown{ right: 0; } .dropdown-content div[interact] { color: black; padding: 12px 16px; text-decoration: none; display: block; cursor:pointer; } .CommentsPageTools__comment { -ms-flex-align: center; align-items: center; display: -ms-flexbox; display: flex; -ms-flex-flow: row nowrap; flex-flow: row nowrap; padding-top: 8px; width: 100% } 
    .CommentsPageTools__userIcon { overflow: hidden; text-indent: 100%; white-space: nowrap; border-radius: 50%; height: 24px; margin-right: 8px; width: 24px } .CommentsPageTools__reply { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; border: 1px solid transparent; border-radius: 15px; box-sizing: border-box; -ms-flex: 1; flex: 1; font-size: 14px; height: 30px; line-height: 17px; padding: 0 8px; text-align: left } .submit_com{ font-size: 12px; font-weight: 700; letter-spacing: unset; line-height: 16px; white-space: pre; word-break: keep-all; padding:0.375rem 0.75rem; margin: 4px 8px; -ms-flex-order: 2; order: 2; text-transform: unset; min-height: 24px; min-width: 24px; float: right; color: #fff; background-color: #007bff; border-color: #007bff; border:1px solid transparent; border-radius:0.25rem; transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
    #output > ul > li::marker{ content: ""; } .comment-row > *{ font-size: 14px; } .btn-reply{ cursor: pointer; text-decoration: none !important; } .btn-submit:disabled { background: #eee; color: #667; cursor: not-allowed; } #output ul { list-style-type: none; } #frm-comment{ flex-direction: column; display: flex; } #frm-comment .input-row{ display:flex; } @media all and (min-width:600px) { #frm-comment{ margin:8px 40px 24px 48px; } } .comment-row { border-bottom: #e0dfdf 1px solid; margin-bottom: 8px; border-top: #e0dfdf 1px solid; padding: 0px 10px 0px 10px; border-right: #e0dfdf 1px solid; display:flex; flex-direction: column; } .comment-active { background-color: hsl(60, 100%, 95%); } .comment-row:target { animation: bg-fadeout 5s ease; } @keyframes bg-fadeout { from {background-color: hsl(60, 100%, 95%);} to {background-color: transparent;} } .outer-comment { margin-top:8px; padding-inline-start: 0; } .outer-comment ul { padding-inline-start: 1rem; }
    .outer-comment > li > div { border-left: 1px solid hsl(220, 100%, 60%); } .outer-comment > li li > div { border-left: 1px solid hsl(40, 100%, 60%); } span.commet-row-label { font-style: italic; } .outer-comment ul{ margin-bottom:0 !important } .posted-by { color: var(--user-at); font-weight: 700; } .comment-text { margin: 0px 0px; display:flex;color:var(--text) } .reply { color: #0043ff; text-decoration: none; display: inline-block; border-radius: 4px; margin-right:8px } .btn-reply { font-size: 14px; text-decoration: none !important; color: #888787 !important; cursor: pointer; font-weight: 900; line-height: 20px; display: flex; } #comment-message { margin-left: 20px; display: inline-block; opacity: 1; } .msg-success {color: hsl(120, 75%, 40%); animation: fadeOut 5s ease;} .msg-error {color: hsl(10, 90%, 50%); animation: fadeOut 5s ease;} @keyframes fadeOut { 0%, 50% {opacity:1;} 100% {opacity:0;} }
    `;
    document.head.insertAdjacentHTML('beforeend', `<style>${cssstyle}</style>`);
    document.addEventListener('DOMContentLoaded',function() {
        document.querySelector('._1VP69d9lk-Wk9zokOaylL').insertAdjacentHTML('afterend', '<div id="post_viewer" style="background-color: rgba(0, 0, 0, .5) !important;"></div>')
        postviewer = document.getElementById('post_viewer');
        postviewer.style.left = '99999px'
        postviewer.setAttribute('postviewer','inactive')
        //START fix of checktarg
        postviewer.addEventListener('click', (event) => {
            if (event.target.getAttribute('postviewer') == 'active') {
                showpost()
                
            }
        });
        if (geturlparam('p')) {
            showpost('loader', geturlparam('p'))
        }
    })
    function geturlparam(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    if (window.localStorage.getItem('sDY')) {
        //do note, this is only a SIMPLE auth, no real auth is happening here, its just for templating and stuff. try n be stupid... it wont work
        if (JSON.parse(window.localStorage.getItem('sDY')).expire >= (Date.now())) {
            window.localStorage.removeItem('sDY')
            httpRequest('/api/v1/?k=userdata&user=self','GET',function(e) {
                q = e.responseText
                userdata = JSON.parse(q)
                userdata['expire'] = Date.now();
                window.localStorage.setItem('sDY',JSON.stringify(userdata))
            })
        }else{
            userdata = JSON.parse(window.localStorage.getItem('sDY'))
        }
    } else {
        httpRequest('/api/v1/?k=userdata&user=self','GET',function(e) {
            q = e.responseText
            userdata = JSON.parse(q)
            userdata['expire'] = Date.now()  + 1000 * 60 * 60 * 4;
            window.localStorage.setItem('sDY',JSON.stringify(userdata))
        })
    }
    var delay = 0
    var t = document.title
    function loadsplide() {
        //time wasted on splide: 11 hours
        //i think its fixed this time, splide was running v1.2.5 when current is v4.07.
        if (document.querySelector('#splidejsid')) {
            setTimeout(() => {
                new Splide('.splide', {
                    autoHeight: true,
                    trimSpace: false,
                    keyboard: false,
                    perPage: 1,
                }).mount();
            }, delay);
            //wait for script to load, note for later: change from settimeout to something more "logical"
            //update: why the ** does this fix it?? 
            //set delay to 0 ms
        } else {
            var a = document.createElement('script');
            a.setAttribute('src', '/api/v1/cdn/splide.min.js');
            a.setAttribute('id', "splidejsid")
            document.body.appendChild(a);
            document.body.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="/api/v1/cdn/splide.min.css" type="text/css"/ id="splidecss">');
            a.onload = function () {
                new Splide('.splide', {
                    autoHeight: true,
                    trimSpace: false,
                    keyboard: false,
                    perPage: 1,
                }).mount();
            }
        }

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
        } else if (interval > 1) {
            return Math.floor(interval) + " year";
        }
        interval = seconds / 2592000;
        if (interval > 2) {
            return Math.floor(interval) + " months";
        } else if (interval > 1) {
            return Math.floor(interval) + " month";
        }
        interval = seconds / 86400;
        if (interval > 2) {
            return Math.floor(interval) + " days";
        } else if (interval > 1) {
            return Math.floor(interval) + " day";
        }
        interval = seconds / 3600;
        if (interval > 2) {
            return Math.floor(interval) + " hours";
        } else if (interval > 1) {
            return Math.floor(interval) + " hour";
        }
        interval = seconds / 60;
        if (interval > 2) {
            return Math.floor(interval) + " minutes";
        } else if (interval > 1) {
            return Math.floor(interval) + " minute";
        }
        return Math.floor(seconds) + " seconds";
    }
    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    function viewcount(data) {
        var a = new XMLHttpRequest();
        a.open('POST', '/api/v1/?k=viewer&mode=v', true);
        a.send(JSON.stringify(data));
        return;
    }
    function buildvideo(poster, m3u8) {
        //dotdo: add SINGLE "build" request for all needed js/css.
        var base = document.getElementById("splidelist")
        const source = m3u8;
        var markup = `<video id="player" playsinline controls data-poster="${poster}" crossorigin></video>`;
        // var markup = `<video id="player" playsinline controls data-poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg" crossorigin></video>`;
        base.insertAdjacentHTML('beforeend', markup)
        if (!document.getElementById('player_js')) {
            var a = document.createElement('script');
            a.setAttribute('src', '/api/v1/cdn/plyr.js');
            a.setAttribute('id', "player_js")
            a.setAttribute('crossorigin', 'anonymous')
            document.head.appendChild(a);
            document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="/api/v1/cdn/plyr.css" />');
            var b = document.createElement('script');
            b.setAttribute('src', '/api/v1/cdn/hls.js');
            b.setAttribute('id', "player_hls")
            b.setAttribute('crossorigin', 'anonymous')
            document.head.appendChild(b);
            b.onload = function () {
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
                        document.querySelector('.plyr').style.minHeight = "444px"
                        document.querySelector('.plyr').style.height = "444px"
                        hls.attachMedia(video);
                        
                    })
                    hls.loadSource(source);
                    window.hls = hls;
                }
            }
        } else {
            setTimeout(() => {
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
                        document.querySelector('.plyr').style.minHeight = "444px"
                        document.querySelector('.plyr').style.height = "444px"
                        hls.attachMedia(video);
                    })
                    hls.loadSource(source);
                    window.hls = hls;
                }
            }, delay);

        }
    }
    function buildvideov2(array) {
        //dotdo: add SINGLE "build" request for all needed js/css.
        var base = document.getElementById("splidelist")
        const source = array.server + array.code + '/_.m3u8';
        var markup = `<video id="player" playsinline controls data-poster="${array.server + array.code + '/thumbnail.jpg'}" crossorigin></video>`;
        // var markup = `<video id="player" playsinline controls data-poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg" crossorigin></video>`;
        base.insertAdjacentHTML('beforeend', markup)
        if (!document.getElementById('player_js')) {
            var a = document.createElement('script');
            a.setAttribute('src', '/api/v1/cdn/plyr.js');
            a.setAttribute('id', "player_js")
            a.setAttribute('crossorigin', 'anonymous')
            document.head.appendChild(a);
            document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="/api/v1/cdn/plyr.css" />');
            var b = document.createElement('script');
            b.setAttribute('src', '/api/v1/cdn/hls.js');
            b.setAttribute('id', "player_hls")
            b.setAttribute('crossorigin', 'anonymous')
            document.head.appendChild(b);
            b.onload = function () {
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
                        const defaultOptions = {
                            captions: {
                                active: false,
                                update: true,
                                language: 'en'
                            },
                            raito: '16:9',
                            previewThumbnails :{
                                enabled: true,
                                src: array.server + array.code + '/track.vtt' 
                            },
                            quality: {
                                default: availableQualities[availableQualities.length - 1],
                                options: availableQualities,
                                forced: true,
                                onChange: (e) => updateQuality(e),
                            }
                        }
                        const player = new Plyr(video, defaultOptions);
                        player.on('languagechange', () => {
                            setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
                        });
                        document.querySelector('.plyr').style.minHeight = "444px"
                        document.querySelector('.plyr').style.height = "444px"
                        hls.attachMedia(video);
                    })
                    hls.loadSource(source);
                    window.hls = hls;
                }
            }
        } else {
            setTimeout(() => {
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
                        const defaultOptions = {
                            captions: {
                                active: false,
                                update: true,
                                language: 'en'
                            },
                            //ratio: '16:9',
                            previewThumbnails :{
                                enabled: true,
                                src: array.server + array.code + '/track.vtt' 
                            },
                            quality: {
                                default: availableQualities[availableQualities.length - 1],
                                options: availableQualities,
                                forced: true,
                                onChange: (e) => updateQuality(e),
                            }
                        }
                        const player = new Plyr(video, defaultOptions);
                        player.on('ready', (event) => {
                            const instance = event.detail.plyr;
                        });
                        player.on('timeupdate', (event) => {
                            //do something later
                        });
                        player.on('languagechange', () => {
                            setTimeout(() => hls.subtitleTrack = player.currentTrack, 50);
                        });
                        document.querySelector('.plyr').style.minHeight = "444px"
                        document.querySelector('.plyr').style.height = "444px"
                        hls.attachMedia(video);
                    })
                    hls.loadSource(source);
                    window.hls = hls;
                }
            }, delay);

        }
    }
    function showpost(e, post_id, post_type, json) {
        if (e === '0') {
            showpost = function () { };
            //disables showpost
            return;
        }
        var blur = document.querySelector('._1VP69d9lk-Wk9zokOaylL')
        if (postviewer.getAttribute('postviewer') == 'active') {
            for (let index = 0; index < document.querySelectorAll('._CmxRiim30CrxSPL').length; index++) {
                const f = document.querySelectorAll('._CmxRiim30CrxSPL')[index];
                //f.remove()
            }
            document.querySelector('[postviewercontroller="post_content"]').innerHTML = ''
            blur.style.cssText = ''
            //postviewer.removeEventListener("click", clear_menus)
            disablehrefs()
            allowclick = true;
            window.history.pushState(t, t, h);
            postviewer.style.left = '99999px'
            postviewer.setAttribute('postviewer','inactive')
            return;
        }
        var urlq = window.location.href.split('/')
        if (urlq[3] == "p") {
            return;
        }
        function checktarg(evt) {
            //this is being removed soon.
            const f = document.querySelector(`[load-post-id='${post_id}']`);
            const g = document.querySelector('[data-alert]');
            let e = evt.target;
            do {
                if (e == f) {
                    return;
                } else if (e == g) {
                    return
                } e = e.parentNode;
            } while (e);
            showpost();
            document.removeEventListener('click', checktarg)
        }
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
        }
        if (window['pcache' + post_id]) {
            //console.log("post cache HIT - PID"+post_id)
            //TO BE USED IN THE FUTURE. how to handle like count handleing and post deletion via cache? maybe verify the like/comment/post deletion via simple query? nothing crazy.
            //EDIT: Friday, May 27, 2022 @ 03:31:19 AM (GMT): still need to make a web request, useless to make a complex request when its just a waste..... maybe keep for a "offline" PWA fallback?
        }
        const postjson = new XMLHttpRequest();
        let splide_data;
        postjson.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                postviewer.style.left = '50%'
                blur.style.cssText = '-webkit-filter: blur(8px); -moz-filter: blur(8px); -o-filter: blur(8px); -ms-filter: blur(8px); filter: blur(8px);'
                postviewer.setAttribute('postviewer','active')
                allowclick = false;
                var pjson = JSON.parse(this.responseText)[0];
                if (userdata.isloggedin === true) {
                    var data = {
                        'post_id': pjson.post_id,
                        'time': (Date.now() / 1000),
                        'viewtype': 1
                    }
                    var a = new XMLHttpRequest();
                    a.open('POST', '/api/v1/?k=viewer&mode=h', true);
                    a.send(JSON.stringify(data));
                    window.evt('view',{
                        postid:pjson.post_id,
                        time:Date.now(),
                        type:1
                    })
                }
                //END fix of checktarg
                window.history.pushState(pjson.title + ' - NRRINC', pjson.title + ' - NRRINC', `/?p=${pjson.post_id}`);
                //override because dont feel like enabling beta on every single testing device. sorry, but lazy.
                if (pjson.type === 'image') {
                    splide_data = `
                   <div class="splide" id="splidetracker">
                   <div class="splide__track">
                   <ul class="splide__list" id="splidelist">
                   </ul>
                    </div>
                    </div>
                    `
                } else {
                    splide_data = `
                <div id="splidelist"></div>`
                }
                if (pjson.like.liked === true) {
                    var likemod = '<div style="display: flex; -ms-flex-align: center; align-items: center; display: -ms-flexbox; cursor: pointer;margin-right:4px" btn="like"><span elike-id="' + pjson.post_id + '" like-id="' + pjson.post_id + '" data-like="unlike" class="JrpAzXnCHrDk" style="-ms-flex-align: center; align-items: center; display: -ms-flexbox; line-height: 20px;display: flex;"><i class="like-btn JrpAzXnCHrDk" data-id="' + pjson.gen.SSR_id+ '" style=""><i class="site-icon-s JrpAzXnCHrDk" style="font-size: 20px;line-height: 20px;color:#1696e1;line-height: 16px; margin-right: 6px;margin-left: 4px;"></i></i> <span class="likes JrpAzXnCHrDk" style="margin-left: 2px; display: inline-block; line-height: 1; text-transform: capitalize; vertical-align: middle; color: #878A8C; font-weight: 700; font-size: 12px;">' + pjson.like.likes + '</span></span></div>'
                } else {
                    var likemod = '<div style="display: flex; -ms-flex-align: center; align-items: center; display: -ms-flexbox; cursor: pointer;margin-right:4px" btn="like"><span elike-id="' + pjson.post_id + '" like-id="' + pjson.post_id + '"  data-like="like" class="JrpAzXnCHrDk" style="-ms-flex-align: center; align-items: center; display: -ms-flexbox; line-height: 20px;display: flex;"><i class="like-btn JrpAzXnCHrDk" data-id="' + pjson.gen.SSR_id + '" style=""><i class="site-icon-s JrpAzXnCHrDk" style="font-size: 20px;line-height: 20px;color:unset;line-height: 16px; margin-right: 6px;margin-left: 4px;color:#878A8C;"></i></i> <span class="likes JrpAzXnCHrDk" style="margin-left: 2px; display: inline-block; line-height: 1; text-transform: capitalize; vertical-align: middle; color: #878A8C; font-weight: 700; font-size: 12px;">' + pjson.like.likes + '</span></span></div>'
                }
                if (pjson.metadata) {
                    var metadata = JSON.parse(pjson.metadata)
                }
                var editmod = `
                    <section class="mb-5" style=" width:100%;overflow-wrap: break-word;overflow:hidden;padding-top:0%" postcontent>
                        <style>
                        #post_body_1 > p{
                            margin-bottom:2px;
                        }
                        #post_body_1{
                            color: var(--text);
                            margin-bottom:8px;
                            margin-top:8px;
                        }
                        [postviewercontroller="post_title"]{
                            color: var(--text);
                        }
                        [postviewercontroller="author_url"]{
                            color: var(--text);
                        }
                        </style>
                        <div class="fs1">
                            <div id="post_body_1">
                                ${pjson.post_body}
                            </div>
                        </div>
                    </section>
                    `;
                var css = `
                    <style>

                    </style>
                    `
                var template = `
                <div dclass="rpBJOHq2PR60pnwJlUyP0" class="_CmxRiim30CrxSPL">
                <article load-post-id="${pjson.post_id}" postviewercontroller="posttop">
                <div data-postalert style="justify-content: space-around; margin-left: auto; margin-right: auto; padding-top: 5px; padding-bottom: 5px; margin-bottom: 10px;border-radius: 4px; font-size: 14px;position: fixed;box-shadow: -6px 9px 17px -1px rgb(0 0 0 / 39%);z-index: 997;transition: all .99s ease-out;display: none;">
                <div style="padding-left: 5px; font-size: 14px; padding-right: 5px;"></div>
                </div>
                <header class="" style="margin-left: 8px;">
                    <div class="css-1dbjc4n r-18u37iz" style="cursor:auto;">
                        <div class="ad74e8a5" style="border-radius: 25px;width: 100%;box-shadow:none;border:none;">
                            <div class="css-1dbjc4n r-1awozwy r-1hwvwag r-18kxxzh r-1b7u577">
                                <a postviewercontroller="author_icon_url" href="/u/${pjson.author.name}">
                                    <img src="${pjson.author.icon}" postviewercontroller="author_icon_image"
                                        class="avatar">
                                </a>
                            </div>
                            <div class="content">
                                <div>
                                <div class="cZPZhMe-UCZ8htPodMyJ5"><span></span>
                                    <div class="_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8">
                                        <div class="_2mHuuvyV9doV3zwbZPtIPG"><a style="color: var(--text)"
                                                class="_3ryJoIoycVkA88fy40qNJc" href="Blogs" >Blogs</a>
                                            <div id="SubredditInfoTooltip--t3_s95h3k--lightbox--Bible"></div>
                                        </div><span class="_3LS4zudUBagjFS7HjWJYxo _37gsGHa8DMRAxBmQS-Ppg8 _3V4xlrklKBP2Hg51ejjjvz"
                                            role="presentation" style="color: var(--text);">•</span><span class="_2fCzxBE1dlMh4OFc7B3Dun"
                                            style="color: var(--text)">Posted by</span>
                                        <div class="_2mHuuvyV9doV3zwbZPtIPG"><a postviewercontroller="author_url" class="_2tbHP6ZydRpjI44J3syuqC  _23wugcdiaj44hdfugIAlnX oQctV4n0yUb0uiHDdGnmE" href="/u/${pjson.author.name}/" style="color: var(--text);margin: 0 4px;">${pjson.author.name}</a>
                                            <div id="UserInfoTooltip--t3_s95h3k--lightbox"></div>
                                        </div><span><span></span></span><a class="_3jOxDPIQ0KaOWpzvSQo-1s"
                                            href=""
                                            target="_blank" rel="nofollow noopener noreferrer" style="color: var(--text);">${timeSince(new Date(timeConverter(pjson.unix_time)))}</a>
                                    </div>
                                    <div class="_2wFk1qX4e1cxk8Pkw1rAHk"></div>
                                    <div class="_3XoW0oYd5806XiOr24gGdb"></div>
                                    <div style="font-weight: 900;color: #c1c1c1;margin-right: 4px;font-size: 16px;cursor: pointer;box-sizing: content-box;width: 2em;height: 1em;padding: .25em 0.25em;color: #000;background: transparent url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e&quot;) center/1em auto no-repeat;border: 0;border-radius: .25rem;opacity: .5;margin-left: auto;" onclick="showpost()"></div>
                                    
                                </div>
                                </div>
                                <h1 class="fw-bolder" style="margin-top:0.5rem" postviewercontroller="post_title">${pjson.title}</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div postviewercontroller="post_content">
                ${splide_data}
                <!-- Post content-->
                ${editmod}
                </div>
                <div class="interactive_0" class="interactive_0" style="margin-left: 8px;margin-right: 8px;margin-top:8px;">
                    <div style="/*border-radius: 5px 5px 0px 0px;*/ border: 1px solid #00000024;">
                        <div class="_1hwEKkB_38tIoal6fcdrt9" style="margin-left: 8px;margin-right: 8px;">
                            <div class="_3-miAEojrCvx_4FQ8x3P-s">
                            <div style="display:flex" btn="like" postviewercontroller="post_like_array">${likemod}</div>
                                <div
                                    class="_1UoeAeSRhOKSNdY_h3iS1O _3m17ICJgx45k_z-t82iVuO _3U_7i38RDpostviewer5eBv7m4M-9J _2qww3J5KKzsD7e5DO0BvvU">
                                    <i class="icon icon-comment _3DVrpDrMM9NLT6TlsTUMxC" role="presentation"></i><span
                                        class="FHCV02u6Cp2zYL0fhQPsO" id="numComments">0 Comments</span></div>
    
                                <div style="display: flex;">
                                    <div class="icontop vmshare" style="display: flex;">
                                        <div class="_JRBNstMcGxbZUxrrIKXe _3U_7i38RDpostviewer5eBv7m4M-9J _3yh2bniLq7bYr4BaiXowdO _1pShbCnOaF7EGWTq6IvZux _28vEaVlLWeas1CDiLuTCap vmshare"
                                            id="share_native"><button data-click-id="share" class="kU8ebCMnbXfjCWfqn0WPb vmshare"><i
                                                    class="icon icon-share _1GQDWqbF-wkYWbrpmOvjqJ vmshare"></i><span
                                                    class="_6_44iTtZoeY6_XChKt5b0 vmshare">share</span></button></div>
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
                <div id="cvh" style="margin-top: 4px;" postviewercontroller="post_comments"></div>
            </article>
            </div>
            `;
                var comment = `
            <div>
            <div class="col-md-12" style="background-color: var(--post-background); border-radius:  0px 0px 25px 25px;padding-bottom: 2%;">
              <div class="col-md-12">
              <div class="minid2">
                <div class="comment-form-container">
                    <div class="CommentsPageTools__comment">
                    </div>
                  <form id="frm-comment">
                    <div class="input-row">
                      <textarea class="input-field input-area form-control" type="text" name="comment" id="comment" placeholder="Add Public Comment" style="min-height:110px;resize: vertical;"></textarea>
                    </div>
                    <div class="input-row">
                      <input type="hidden" name="token" value="">
                      <input type="hidden" name="comment_id" id="commentId">
                      <input class="input-field" type="text" name="name" id="name" placeholder="e" hidden value="bacon">
                    </div>
                    <div style="padding-top: 5px;display: flex;justify-content: flex-end;"> 
                    <div id="comment-message" style="margin-right: auto;" class=""></div>
                      <input type="submit" class="submit_com btn-submit" value="Submit" style="float:right;" id="addComment_d">
                    </div>
                  </form>
                </div>
                <div></div>
                </div>
                <div id="commentloader" style="border: 1px solid #f3f3f3; border-radius: 50%; border-top: 1px solid #1696e1; width: 52px; height: 52px; animation: spin 0.75s linear infinite; animation-timing-function: linear; display: flex; margin-left: auto; margin-right: auto;"></div>
              </div>
              <div class="userComments"></div>
              <div id="output"></div>
            </div>
          </div>
            `;
            disablehrefs()
                postviewer.style.display = "none";
                if (!document.querySelector('[postviewercontroller="posttop"]')) {
                    postviewer.insertAdjacentHTML('afterbegin', template);
                    postviewer.insertAdjacentHTML('afterbegin', css);
                    document.querySelector('[postviewercontroller="post_comments"]').insertAdjacentHTML('afterbegin', comment);
                }
                document.querySelector('[load-post-id]').setAttribute('load-post-id',pjson.post_id)

                document.querySelector('[postviewercontroller="post_like_array"]').innerHTML = likemod
                document.querySelector(`[elike-id='${pjson.post_id}']`).addEventListener("click", vmlike)
                document.querySelector('[postviewercontroller="post_title"]').innerHTML = pjson.title
                document.querySelector('[postviewercontroller="author_url"]').innerHTML = pjson.author.name
                document.querySelector('[postviewercontroller="author_url"]').href = "/u/${pjson.author.name}/"
                document.querySelector('[postviewercontroller="author_icon_url"]').href = "/u/${pjson.author.name}/"
                document.querySelector('[postviewercontroller="author_icon_image"]').src = pjson.author.icon
                document.querySelector('[postviewercontroller="posttop"]');
                document.querySelector('[postviewercontroller="post_content"]').innerHTML = splide_data + editmod;
                document.querySelector('#output').innerHTML = '';
                comments(post_id)
                if (userdata.isloggedin == true) {
                    /*
                    var comment_loa = `
                    <img alt="${pjson.self_username} avatar" class="CommentsPageTools__userIcon " src="${pjson.self_icon}">
                    <button class="CommentsPageTools__reply" id="load-commenter">Leave a comment</button>`
                    document.getElementById('frm-comment').style.display = 'none'
                    document.querySelector('.CommentsPageTools__comment').insertAdjacentHTML('afterbegin',comment_loa)
                    document.getElementById('load-commenter').addEventListener('click',function() {
                        if (document.getElementById('frm-comment').style.display === 'flex') {
                            document.getElementById('frm-comment').style.display = 'none'
                        } else {
                            document.getElementById('frm-comment').style.display = 'flex'
                        }
                    })
                    */
                }else{
                    document.getElementById('frm-comment').style.display = 'none'
                    data4 = `
                    <li>
                    <a style=" text-decoration: none !important; cursor: pointer;color:black" href="/?login=true">
                    <div class="comment-row" id="comment-0" style="border-left-style:dashed;">							
                        <div class="comment-info" style="display: flex; align-items: center;"><span class="posted-by" style="display:flex;color:red">System </span> <span style="margin-left:4px;margin-right:4px;display:flex;">·</span>  <span style="margin-left: 4px; margin-right: 4px; display: flex; color: red; font-weight: 700;">Admin</span> <span style="margin-left:4px;margin-right:4px;display:flex;">·</span> <span class="posted-at" style="display:flex;color: black;">Now</span><span class="icon icon-3dot _3DVrpDrMM9NLT6TlsTUMxC" style="display: flex;margin-left: auto;"></span></div>
                        <div class="dropdown-content" style="display: none; position: absolute; background-color: #f1f1f1; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;right:0;">
                        </div>
                        <div class="comment-text">Login to Leave a Comment.</div>
                        <div><a class="btn-reply">&nbsp;</a></div>
                    </div>
                    </a>
                    </li>
                    `
                    document.querySelector('#output > .outer-comment').insertAdjacentHTML('afterbegin',data4)
                }
                if (pjson.video) {
                    buildvideov2(pjson.video)
                } else if (metadata && metadata.hasOwnProperty('m3u8')) {
                    var imgjson = pjson.images.split(',');
                    buildvideo(imgjson[0], metadata.m3u8)
                } else {
                    if (pjson.type === 'video') {
                        if (!metadata) {
                            showpost()
                            return
                        }
                        var imgjson = pjson.images.split(',');
                        buildvideo(imgjson[0], metadata.m3u8)
                    } else if (pjson.type === 'image') {
                        var imgjson = pjson.images.split(',');
                        if (imgjson[0]) {
                            if (imgjson[1]) {
                                function eaf(item, index) {
                                    if (item) {
                                        splidelist.insertAdjacentHTML('beforeend', `<li style="margin: 12px 0;" class="splide__slide sp-aw"><img class="img-fluid rounded sp-image" style="max-height: 512px;cursor:zoom-in;" src="${item}" alt="..."></li>`)
                                    }
                                }
                                imgjson.forEach(eaf)
                            } else {
                                if (imgjson.length = 1) {
                                    splidelist.insertAdjacentHTML('beforebegin', ` <div style="margin: 12px 0;"> <img class="img-fluid rounded sp-image" style=" max-height: 512px;margin-left: auto; margin-right: auto; display: flex; text-align: center;cursor:zoom-in;" src="${imgjson[0]}" draggable="false" oncontextmenu="return false;"> </div> `)
                                    //splidelist.remove()
                                }
                            }
                            loadsplide()
                            const imglist = document.querySelectorAll('.img-fluid.rounded.sp-image')
                            for (let i = 0; i < imglist.length; i++) {
                                imglist[i].addEventListener('click',function(e) {
                                    if (e.target.style.maxHeight == '2048px') {
                                        e.target.style.maxHeight = '512px'
                                        e.target.style.cursor = "zoom-in"
                                    } else {
                                        e.target.style.maxHeight = '2048px'
                                        e.target.style.cursor = "zoom-out"
                                    }
                                })
                                
                            }
                        }
                    }
                }
                if (pjson.self.auth === true) {
                    if (geturlparam('edit')) {
                        window.history.pushState(pjson.title + ' - NRRINC', pjson.title + ' - NRRINC', `/?p=${pjson.post_id}&edit=1`);
                        build_edit(pjson)
                    }
                    document.getElementById("edit_post").addEventListener('click', function () {
                        build_edit(pjson)
                    })
                    document.getElementById("delete_post").addEventListener("click", function (e) {
                        confirmnotify("Are you sure you want to delete this post?", function (f) {
                            if (f) {
                                if (pjson.video) {
                                    var q = new XMLHttpRequest();
                                    var candle = new XMLHttpRequest();
                                    const lighter = `https://tc-1.nrrinc.net/run/?pri=${userdata.private_key}&pub=${userdata.public_key}&gc=1&code=${pjson.video.auth.removalcode}&pid=${pjson.post_id}`
                                    candle.open('GET',lighter)
                                    candle.onreadystatechange = function () {
                                        if (this.readyState == 4 && this.status == 200) {
                                            q.open("GET", '/api/v1/?k=editpost&pid=' + pjson.post_id + '&do=delete')
                                            q.onreadystatechange = function () {
                                                if (this.readyState == 4 && this.status == 200) {
                                                    var a = JSON.parse(this.responseText)
                                                    notify(a.message, "#3c763d", "#dff0d8", "#d6e9c6", 10000)
                                                }
                                            }
                                            q.send();
                                        }
                                    }
                                    candle.send()
                                }else{
                                    var q = new XMLHttpRequest();
                                    q.open("GET", '/api/v1/?k=editpost&pid=' + pjson.post_id + '&do=delete')
                                    q.onreadystatechange = function () {
                                        if (this.readyState == 4 && this.status == 200) {
                                            var a = JSON.parse(this.responseText)
                                            notify(a.message, "#3c763d", "#dff0d8", "#d6e9c6", 10000)
                                        }
                                    }
                                    q.send();
                                }
                            }
                        })
                    })
                } else {
                    document.getElementById("delete_post").remove()
                    document.getElementById("edit_post").remove();
                }
                document.getElementById('pop').addEventListener('click', function (e) {
                    document.getElementById("myDropdown").classList.toggle("show")
                })
                document.querySelector('.vmshare').addEventListener('click', async function () {
                    let platform = navigator?.userAgentData?.platform || navigator?.platform || ''
                            const shareData = {
                                title: `${pjson.title} - NRRINC.NET`,
                                text: `${pjson.author.name} is talking about ${pjson.title} on NRRINC.NET`,
                                url: `https://nrrinc.net?p=${pjson.post_id}&ref=s&rp=${platform}`
                            }
                            await navigator.share(shareData)
                            window.evt('share',{
                                postid:pjson.post_id,
                                time:Date.now(),
                                type:1
                            })
                })
                postviewer.style.display = "flex";
                document.querySelector('[data-postalert]').style.width = (document.querySelector(`[load-post-id="${pjson.post_id}"] > header`).offsetWidth + 8) + "px"
                setTimeout(() => {
                    document.getElementById("post_viewer").addEventListener("click", clear_menus)
                    document.querySelector(`._CmxRiim30CrxSPL`).style.marginBottom = document.querySelector(`[load-post-id='${pjson.post_id}']`).scrollHeight + 60 + 'px'
                    var postdata = {
                        'post_id': pjson.post_id,
                        'time': (Date.now() / 1000),
                        'viewtype': 1
                    }
                    viewcount(postdata);
                }, 50);
            }
        }
        postjson.open('GET', '/api/v1/?k=loadpid&pid=' + post_id + '&pagetype=trending&currenttime=' + (Math.floor(Date.now() / 1000)), true);
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
    function build_edit(pjson) {
        window.history.pushState(pjson.title + ' - NRRINC', pjson.title + ' - NRRINC', `/?p=${pjson.post_id}&edit=1`);
        document.querySelector('[postcontent]').innerHTML = `
                        <style>
                        .fs1>p {
                          font-size: 14px;
                          line-height: 21px;
                          margin-bottom: 0 !important;
                        }
                        .ql-editor > *{
                          font-size: 14px;
                        }
                        #submit_btns > div > div {
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                            margin-left: 15px;
                            margin-right: 15px;
                          }
                          .subbuton{
                            padding: 4px 15px;
                            background-color: transparent;
                            border: 0;
                            font-size: 16px;
                            font-weight: 700;
                            border-radius: 4px;
                            cursor: pointer;
                          }
                          .subbuton:first-of-type{
                            margin-left:16px;
                            border:1px solid #007bff;
                            color: #007bff;
                            transition: all 0.2s;
                          }
                          .subbuton:first-of-type:hover{
                            margin-left:16px;
                            border:1px solid #ff2300;
                            color: #ff2300;
                            transition: all 0.2s;
                          }
                          .subbuton:last-of-type{
                            margin-left:16px;
                            border:2px solid #007bff;
                            background-color:#007bff;
                            color: white;
                          }
                          .subbuton:last-of-type[nosave=true]{
                            margin-left:8px;
                            border:2px solid #818181;
                            background-color:#818181;
                            color: white;
                          }
                          .subbutton{ 
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-end;
                          }
                      </style>
                      <div class="fs1">
                          <div id="post_body_1" class="fs-5 mb-3" name="post_body_1" style="min-height: 20vh;">${pjson.post_body}</div>
                          <div class="subbutton">
                            <button class="subbuton" id="cancel">Cancel</button>
                            <button class="subbuton" nosave="true" disabled="true">Save</button>
                            </div>
                      </div>`
        var a = document.createElement('script');
        a.setAttribute('src', '/api/v1/cdn/quill.js');
        a.setAttribute('id', "ffe")
        document.getElementById('post_viewer').appendChild(a);
        document.getElementById('post_viewer').insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css" type="text/css"/ id="ffe">');
        a.onload = function () {
            const Block = Quill.import('blots/block');
            class MyBlock extends Block { }
            MyBlock.tagName = 'DIV';
            Quill.register('blots/block', MyBlock, true);
            var quill = new Quill('#post_body_1', {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                        ['blockquote'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // dropdown with defaults from theme
                        [{ 'align': [] }],
                        ['clean']
                    ]
                },
                theme: 'snow'
            });
            var cancel = document.getElementById('cancel')
            cancel.addEventListener('click', function () {
                var url = new URL(window.location.href);
                url.searchParams.delete('edit');
                location.href = url;
            })
            document.querySelector('.ql-editor').addEventListener('click', function () {
                document.querySelector('[nosave]').setAttribute('nosave', 'false')
                document.querySelector('[nosave]').disabled = false;
                document.querySelector('[nosave]').removeAttribute('disabled')
            })
            document.querySelector('[nosave]').addEventListener('click', function () {
                var fd = new FormData()
                fd.append('body', document.querySelector('#post_body_1 > .ql-editor').innerHTML)
                var http = new XMLHttpRequest();
                http.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var json = JSON.parse(this.responseText)
                        document.querySelector('[nosave]').setAttribute('nosave', 'true')
                        document.querySelector('[nosave]').disabled = true;
                        document.querySelector('[nosave]').setAttribute('disabled', true)
                        notify(json.msg, "#3c763d", "#dff0d8", "#d6e9c6", 2500)
                        document.getElementById('cancel').remove()
                        document.querySelector('[nosave]').style.cssText = 'margin-left: 8px; border: 2px solid #28a745; background-color: #28a745; color: #ffffff;'
                        document.querySelector('[nosave]').innerHTML = 'Saved'
                        setTimeout(() => {
                            var url = new URL(window.location.href);
                            url.searchParams.delete('edit');
                            location.href = url;
                        }, 2500);
                    }
                    if (this.readyState == 4 && this.status == 201) {
                        var json = JSON.parse(this.responseText)
                        document.querySelector('[nosave]').setAttribute('nosave', 'true')
                        document.querySelector('[nosave]').disabled = true;
                        document.querySelector('[nosave]').setAttribute('disabled', true)
                        notify(json.msg, "#3c763d", "#dff0d8", "#d6e9c6", 2500)
                        document.getElementById('cancel').remove()
                        document.querySelector('[nosave]').style.cssText = 'margin-left: 8px; border: 2px solid #28a745; background-color: #28a745; color: #ffffff;'
                        document.querySelector('[nosave]').innerHTML = 'Saved'
                        setTimeout(() => {
                            var url = new URL(window.location.href);
                            url.searchParams.delete('edit');
                            location.href = url;
                        }, 2750);
                    }
                    if (this.readyState == 4 && this.status == 202) {
                        var json = JSON.parse(this.responseText)
                        document.querySelector('[nosave]').setAttribute('nosave', 'true')
                        document.querySelector('[nosave]').disabled = true;
                        document.querySelector('[nosave]').setAttribute('disabled', true)
                        notify(json.msg, "#3c763d", "#dff0d8", "#d6e9c6", 2500)
                        document.getElementById('cancel').remove()
                        document.querySelector('[nosave]').style.cssText = 'margin-left: 8px; border: 2px solid #28a745; background-color: #28a745; color: #ffffff;'
                        document.querySelector('[nosave]').innerHTML = 'Saved'
                        setTimeout(() => {
                            var url = new URL(window.location.href);
                            url.searchParams.delete('edit');
                            location.href = url;
                        }, 2500);
                    }
                }
                http.open('POST', '/api/v1/?k=editpost&do=edit&pid=' + pjson.post_id)
                http.send(fd)
            })
        }
    }
    function comments(post_id) {
        function buildcnd(commentid, auth, hasparent, access) {
            //commenter navigation dropdown
            //'access' is reserved for future testing. giving all access to the original json object. (not only id, auth, and parent id)
            var id = commentid;
            var home = document.querySelector(`[comment-nav-id-drop='${id}']`);
            var del = `<div interact del-id="${id}">Delete</div>`;
            var hide = `<div interact hide-id="${id}">Collapse thread</div>`;
            var report = `<div interact report-id="${id}">Report comment</div>`;
            if (auth === true) {
                home.insertAdjacentHTML('beforeend', del)
                var delquery = document.querySelector(`[del-id='${id}']`);
                delquery.addEventListener('click', function () {
                    confirmnotify('Are you sure you want to delete this comment?', function (f) {
                        if (f) {
                            var a = new XMLHttpRequest();
                            a.open('GET', '/api/v1/?k=editpost&do=delete_com&cid=' + id)
                            a.onreadystatechange = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    var b = document.querySelector(`[del-id='${id}']`);
                                    b.parentElement.parentElement.querySelector('.comment-info > .posted-by').innerHTML = "<i>deleted</i>"
                                    b.parentElement.parentElement.querySelector('.comment-text').innerHTML = "<i>deleted</i>"
                                    notify('Comment Deleted', "#3c763d", "#dff0d8", "#d6e9c6", 4000)
                                }
                            }
                            a.send()
                        }
                    })
                })
            }
            if (hasparent === '0') {
                home.insertAdjacentHTML('beforeend', hide)
                var hidequery = document.querySelector(`[hide-id='${id}']`);
                hidequery.addEventListener('click', function (e) {
                    if (home.parentElement.parentElement.querySelector('ul').style.display === 'none') {
                        home.parentElement.parentElement.querySelector('ul').style.display = 'block'
                        hidequery.innerText = "Collapse thread"
                        document.querySelector("#comment-"+id+" a.btn-reply").innerText = "Reply"
                        document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.cssText = ""
                        document.querySelector('[comment="'+id+'"]').querySelector('.btn-reply').style.cssText = ""
                    } else {
                        document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.flexDirection = 'column'
                        document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.display = 'flex'
                        document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.marginRight = 'auto'
                        document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.justifyContent = 'flex-end'
                        document.querySelector('[comment="'+id+'"]').querySelector('.btn-reply').style.marginRight = '8px'
                        home.parentElement.parentElement.querySelector('ul').style.display = 'none'
                        hidequery.innerText = "Expand thread"
                        document.querySelector("#comment-"+id+" a.btn-reply").innerText = "Reply ("+(document.querySelector("#comment-"+id).parentElement.querySelectorAll('.comment-row').length - 1)+" hidden)"
                    }
                })
            }
            document.querySelector(`[comment-nav-id='${id}']`).addEventListener("click", function (e) {
                document.querySelector(`[comment-nav-id-drop='${id}']`).style.display = "inline-block";
                this.parentElement.style.position = "relative";
            })
        }
        const el = selector => {
            let self = {};
            self.selector = selector;
            self.element = document.querySelector(self.selector);
            self.new = attr => { self.element = document.createElement(self.selector); if (attr) { for (var key in attr) { if (attr.hasOwnProperty(key)) { self.element.setAttribute(key, attr[key]); } } } return self; }
            self.node = () => { return self.element; }
            self.all = () => { return document.querySelectorAll(self.selector); }
            self.css = () => { return self.node().classList; }
            self.html = content => { if (content === null) return self.element; self.element.innerHTML = content; return self; }
            self.append = element => { element.appendChild(self.element); return self; }
            self.connecter = id => {return self.element.setAttribute('comment',id)}
            return self;
        };
        
        ((document, window) => {
            "use strict";
            const lang = {
                'r': 'Reply',
                's': 'Sending…',
                'a': 'Comment was submitted!',
                'e': 'Error while adding comment. Try again in a few seconds'
            };
            const $form = el('#frm-comment').node();
            const $output = el('#output').node();
            const $message = el('#comment-message');
            const $submit = el('.btn-submit').node();
            const $list = el('ul').new({ 'class': 'outer-comment' }).append($output);
            function formatDatetime(datetime) {
                return datetime.replace(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, '$3. $2. $1 $4:$5');
            }
            function replaceTemplate(id, name, date, text, parent, parentName = "", isOP,icon) {
                let del = (text === '<i>deleted</i>') ? 'deleted=true' : ''
                let top = (parent == 0) ? 'top="true"' : ''
                let OPa = (isOP === true) ? ` <span style="margin-left:4px;margin-right:4px;display:flex;color:var(--user-at);">OP</span> <span style="margin-left:4px;margin-right:4px;display:flex;color:var(--text);">&middot;</span> ` : ''
                let reply = (parent > 0) ? `<a href="#comment-${parent}" style="color:var(--user-at);" class="reply" data-id="${parent}">@${parentName}</a> ` : "";
                let template = `<div class='comment-row' id="comment-${id}" ${del} ${top}>							
                                    <div class='comment-info' style="display: flex; align-items: center;"><div><img src="${icon}" style=" height: 26px; border-radius: 20px; margin-right: 6px; "></div><span class='posted-by' style="display:flex;">${name}</span> <span style="margin-left:4px;margin-right:4px;display:flex;color:var(--atext);">&middot;</span> ${OPa}<span class='posted-at' style="display:flex;color:var(--text);">${formatDatetime(date)}</span><span class="icon icon-3dot _3DVrpDrMM9NLT6TlsTUMxC" style="display: flex;margin-left: auto;" comment-nav-id="${id}"></span></div>
                                    <div comment-nav-id-drop="${id}" class="dropdown-content" style="display: none; position: absolute; background-color: #f1f1f1; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1;right:0;">
                                    
                                    </div>
                                    <div>
                                    <div class='comment-text'>${reply}${text}</div>
                                    <div><a class='btn-reply' data-id="${id}">${lang.r}</a></div>
                                    </div>
                                </div>`;
                return template;
            }
            function newComment(item, data) {
                let template = replaceTemplate(item.id, item.name, item.date, item.comment, item.parent_id, '', item.isOP,item.user_icon);
                const $item = el("li").new().html(template).append($list.node());
                $item.connecter(item.id)
                const $reply = el('ul').new().append($item.node());
                listReplies(item, data, $reply);
                buildcnd(item.id, item.auth, item.parent_id, item)
            }
            var end = 0;
            var started = 1;
            var cc = 0;
            listComment();
            document.getElementById("output").insertAdjacentHTML('afterend','<button class="submit_com" id="cmtloader">Load more Comments</button>')
            document.getElementById('cmtloader').addEventListener('click',listComment)
            function listComment() {
                if (end === 1) {
                    return;
                }
                started = 0;
                fetch('/api/v1/?k=postcomments&pid=' + post_id+ "&nav="+cc)
                    .then(response => {
                        response.json().then(data => {
                            data.forEach(comment => {
                                if (!document.querySelector('#comment-'+comment.id)) {
                                    if (comment.parent_id == 0) {
                                        newComment(comment, data);
                                    }
                                    if (!document.querySelector('#comment-'+comment.id)) {
                                        try {
                                            let template = replaceTemplate(comment.id, comment.name, comment.date, comment.comment, comment.parent_id, '', comment.isOP,comment.user_icon);
                                            var a = document.querySelector('#comment-'+comment.parent_id+'').parentElement.querySelector('ul')
                                            const $item = el("li").new().html(template).append(a);
                                            $item.connecter(item.id)
                                            const $reply = el('ul').new().append($item.node());
                                            listReplies(item, data, $reply);
                                            buildcnd(comment.id, comment.auth, comment.parent_id, comment)
                                        } catch (error) {
                                            //SKIP :D
                                            //if commment-REPLY is not found, build the comment REPLY. this is only for replies (allows for pagination and half loading (i.e. 'couldnt find child so ill build it my self'))
                                        }
                                    }
                                }
                                if (comment.end === true) {
                                    end = 1;
                                    document.getElementById('cmtloader').style.display = 'none'
                                    document.getElementById('cmtloader').setAttribute('disabled',true)
                                }
                            });
                            if (data.length < 49) {
                                end = 1;
                                document.getElementById('cmtloader').style.display = 'none'
                                document.getElementById('cmtloader').setAttribute('disabled',true)
                            }
                            started = 1;
                            cc++;
                            document.getElementById("commentloader").style.display = "none"
                            var cd = document.querySelectorAll('[top="true"]')
                            for (let index = 0; index < cd.length; index++) {
                                const indx = cd[index].parentElement;
                                var id = indx.getAttribute('comment')
                                var ce = indx.querySelectorAll('.comment-row')
                                var cf = indx.querySelectorAll('[deleted="true"]');
                                if (ce.length >= 2 && (ce.length - 1) == cf.length) {
                                    document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.flexDirection = 'column'
                                    document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.display = 'flex'
                                    document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.marginRight = 'auto'
                                    document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.justifyContent = 'flex-end'
                                    document.querySelector('[comment="'+id+'"]').querySelector('.btn-reply').style.marginRight = '8px'
                                    indx.querySelector('[hide-id="'+id+'"]').innerText = "Expand thread"
                                    indx.querySelector('ul').style.display = 'none'
                                    document.querySelector("#comment-"+id+" a.btn-reply").innerText = "Reply ("+(document.querySelector("#comment-"+id).parentElement.querySelectorAll('.comment-row').length - 1)+" hidden)"
                                }
                            }
                        });


                    }).catch(error => {
                    });
                var g = new XMLHttpRequest();
                g.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var json = JSON.parse(this.responseText)[0];
                        document.getElementById("numComments").innerHTML = json.count + ' Comments';
                    }
                }
                g.open("GET", '/api/v1/?k=postcomments&pid=' + post_id + "&count", true);
                g.send();
            }
            function listReplies(parent, data, list) {
                data.forEach(comment => {
                    if (parent.id == comment.parent_id) {
                        let template = replaceTemplate(comment.id, comment.name, comment.date, comment.comment, comment.parent_id, parent.name, comment.isOP,comment.user_icon);
                        const $item = el("li").new().html(template).append(list.node());
                        const $reply = el('ul').new().append($item.node());
                        listReplies(comment, data, $reply);
                        buildcnd(comment.id, comment.auth, comment.parent_id, comment)
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
                if ($comment.value == "") { $comment.focus(); return; }
                if ($name.value == "") { $name.focus(); return; }
                let origContent = $submit.value;
                $submit.setAttribute("disabled", true);
                $submit.value = lang.s;
                $message.css().remove('msg-success');
                $message.css().remove('msg-error');
                $message.html("");
                fetch("/api/v1/?k=submitcomment&pid=" + post_id, {
                    method: 'POST',
                    body: getFormData($form),
                })
                    .then(response => {
                        if (response.ok) {
                            $message.css().add('msg-success');
                            $message.html(lang.a);
                            el("#comment").node().value = "";
                            el("#commentId").node().value = "";
                            listComment();
                        } else {
                            $message.css().add('msg-error');
                            $message.html(lang.e);
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
               // el("#comment").node().focus();
               if (document.getElementById('comment-reply-'+id)) {
                document.getElementById('comment-reply-'+id).remove()
                return;
                }
                var replydata = `
                <!-- proof of concept -->
                            <form id="comment-reply-${id}" style="margin: 0; flex-direction: row; align-items: center; display: flex;">
                                            <div class="input-row" style="width: 100%; height: 36px; margin-bottom: 12px; margin-top: 4px; display: flex;">
                                                <input class="nrrinc-btn ghost fatter" type="text" name="comment" id="comment" placeholder="Reply to ${document.querySelector('#comment-'+id+ ' > .comment-info > .posted-by').innerText}" style="height: 36px; border-radius: 5px 0px 0px 5px; display: flex;width:100%;margin-right:0">
                                                <button  class="btn-submit nrrinc-btn ghost fatter font-smaller" style="height: 36px; display: flex; margin: 0; border-radius: 0 0.25rem 0.25rem 0;" type="submit" id="addComment_d">Reply</button>
                                            </div>
                                            <div class="input-row">
                                                <input type="hidden" name="token" value="">
                                                <input type="hidden" name="comment_id" id="commentId" value="${id}">
                                                <input class="input-field" type="text" name="name" id="name" placeholder="e" hidden="" value="bacon">
                                            </div>
                              </form>
                              <!-- proof of concept -->
                              `
                              document.querySelector('#comment-'+id).parentElement.querySelector('ul').insertAdjacentHTML('afterbegin',replydata)
                              document.querySelector('#comment-reply-'+id).addEventListener('submit',function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                let $comment = document.querySelector('#comment-reply-'+id+'> div > input')
                                let $name = el("#name").node();
                                if ($comment.value == "") { $comment.focus(); return; }
                                if ($name.value == "") { $name.focus(); return; }
                                $submit.setAttribute("disabled", true);
                                $submit.value = lang.s;
                                $message.css().remove('msg-success');
                                $message.css().remove('msg-error');
                                $message.html("");
                                fetch("/api/v1/?k=submitcomment&pid=" + post_id, {
                                    method: 'POST',
                                    body: getFormData(el('#comment-reply-'+id).node()),
                                })
                                    .then(response => {
                                        if (response.ok) {
                                            $message.css().add('msg-success');
                                            $message.html(lang.a);
                                            document.location.reload()
                                        } else {
                                            $message.css().add('msg-error');
                                            $message.html(lang.e);
                                            return false;
                                        }
                                    }).catch(error => {
                                        // Handle error
                                    });

                                  return false;
                              })

            }
            const replyOverHandler = e => {
                if (!e.target.matches('.reply')) return;
                e.preventDefault();
                let parent = e.target.dataset.id;
                let parentCSS = el("#comment-" + parent).css();
                if (e.type == "mouseover") {
                    parentCSS.add("comment-active");
                } else if (e.type == "mouseout") {
                    parentCSS.remove("comment-active");
                }
            }
            $form.addEventListener("submit", submitHandler);
            $output.addEventListener("click", replyHandler);
            $output.addEventListener("mouseover", replyOverHandler)
            $output.addEventListener("mouseout", replyOverHandler)
        })(document, window);
    }
    function vmlike() {
        var post_id = this.getAttribute("like-id");
        var clicked_btn = this;
        if (clicked_btn.getAttribute("data-like") === 'like') {
            action = 'like';
        } else if (clicked_btn.getAttribute("data-like") === 'unlike') {
            action = 'unlike';
        } else {
            return;
        }
        var request = new XMLHttpRequest();
        request.open('POST', '/api/v1/?k=like&time' + (Date.now() / 1000), true);
        var formData = new FormData();
        formData.append('action', `${action}`);
        formData.append('post_id', `${post_id}`);
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                var res = JSON.parse(this.response);
                if (action == "like") {
                    document.querySelector(`[elike-id='${post_id}'] > i > i`).style.color = "#1696e1"
                    document.querySelector(`[like-id='${post_id}'] > i > i`).style.color = "#1696e1"
                    clicked_btn.setAttribute('data-like', 'unlike')
                } else if (action == "unlike") {
                    document.querySelector(`[elike-id='${post_id}'] > i > i`).style.color = "#878A8C"
                    document.querySelector(`[like-id='${post_id}'] > i > i`).style.color = "#878A8C"
                    clicked_btn.setAttribute('data-like', 'like')
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
            if (this.status === 400) {
                notify('Log in to leave a rating.', "#a94442", "#f2dede", "#ebccd1", 7500)
            }
        };
        request.send(formData);
    }
})(document, window);
//life is hard, but God is good.
