(function () {
    window.showpost = showpost;
    var userdata = []; //all user data.
    const h = location.protocol + '//' + location.host + location.pathname;
    const t = document.title
    const cssstyle = `
    .sp-aw { text-align: center !important; list-style: none; } @media all and (min-width:940px) { [load-post-id]{ width: 937px!important; } } @media all and (min-width:729px) and (max-width:939px){ [load-post-id]{ width: 640px; } } @media all and (max-width:559px) { [load-post-id]{ min-width: 100% ; max-width: 100% ; width: 100% ; } 
    ._CmxRiim30CrxSPL{ min-width: 100% ; max-width: 100% ; width: 100% ; } } .fs1{ max-width: 96vw; } #splidelist{padding-left:0rem !important} /*._CmxRiim30CrxSPL{margin-top: 60px;}*/ 
    ._1VP69d9lk-Wk9zokOaylL-TMP {-webkit-filter: blur(8px); -moz-filter: blur(8px); -o-filter: blur(8px); -ms-filter: blur(8px); filter: blur(8px);} #post_viewer2{height: 100%;position: fixed; -webkit-backface-visibility: hidden; backface-visibility: hidden; right: 0; top: 0; width: 100%; z-index: 50; margin-bottom: 60px;display: flex; justify-content: center; position: fixed; left: 50%; transform: translateX(-50%); overflow-y: scroll; overflow-x: hidden;}
    [load-post-id]{display: flex;width:100vw;/*background-color: #fff;*/background-color: var(--post-background); border: 1px solid rgba(0, 0, 0, 0.125); border-radius: 0.25rem; padding: 0.5rem 0.25rem; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); flex-direction: column;} .fs1>p {font-size: 14px;line-height: 21px;margin-bottom: 0 !important;} .cZPZhMe-UCZ8htPodMyJ5 {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-ms-flex: 1 1 auto;flex: 1 1 auto;overflow: hidden;}
    ._2mHuuvyV9doV3zwbZPtIPG {display: inline-block;-ms-flex: 0 0 auto;flex: 0 0 auto} ._3LS4zudUBagjFS7HjWJYxo {color: var(--newCommunityTheme-metaText);font-size: 6px;line-height: 20px;margin: 0 4px;vertical-align: middle;} .icon {font-size: 20px;font-weight: 400;height: 20px;line-height: 20px;vertical-align: middle;width: 20px;font-style: normal;} ._2pFdCpgBihIaYh9DSMWBIu {height: 24px;}
    ._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu {border-radius: 2px;} ._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu:focus,._2pFdCpgBihIaYh9DSMWBIu.uMPgOFYlCc5uvpa2Lbteu:hover {outline: none;} ._10K5i7NW6qcm-UoCtpB3aK {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;-ms-flex-direction: row;flex-direction: row;text-align: left;width: 100%;} .pthKOcceozMuXLYrLlbL1 {margin-right: 6px;}
    .icon:before {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: 'fontello';} .icon-award:before {content: "\\e85d";} .icon-edit:before {content: "\\e835";} .icon-comment:before {content: "\\e83a";color: #878A8C;} .icon-save:before {content: "\\e869";} .icon-share:before {content: "\\e855";} .icon-3dot:before {content: "\\e80f";} .icon-trash:before { content: '\\e845'; }
    .icon-report:before { content: '\\e83d'; } ._1UoeAeSRhOKSNdY_h3iS1O {font-size: 12px;font-weight: 700;line-height: 16px;padding: 4px;box-sizing: border-box;} ._1UoeAeSRhOKSNdY_h3iS1O ._3DVrpDrMM9NLT6TlsTUMxC {margin-right: 6px;} ._3m17ICJgx45k_z-t82iVuO {cursor: default;} .FHCV02u6Cp2zYL0fhQPsO {display: inline-block;line-height: 1;text-transform: capitalize;vertical-align: middle;color: #878A8C;font-weight: 700;font-size: 12px;} ._3-miAEojrCvx_4FQ8x3P-s {font-size: 12px;font-weight: 700;line-height: 16px;-ms-flex-align: stretch;align-items: stretch;display: -ms-flexbox;display: flex;-ms-flex-direction: row;flex-direction: row;overflow: hidden;padding: 0 8px 0 4px;-ms-flex-positive: 1;flex-grow: 1;}
    ._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd {border-radius: 2px;margin-right: 4px;padding: 8px;text-transform: capitalize;white-space: nowrap;width: auto;word-break: normal;word-wrap: normal;height: 100%;} ._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd:focus,._3-miAEojrCvx_4FQ8x3P-s .YszYBnnIoNY8pZ6UwCivd:hover {outline: none;} ._3U_7i38RDpostviewer5eBv7m4M-9J {-ms-flex-align: center;align-items: center;display: -ms-flexbox;display: flex;} ._6_44iTtZoeY6_XChKt5b0 {display: inline-block;line-height: 1;text-align: left;overflow: hidden;text-overflow: ellipsis;line-height: 12px;max-height: 36px;display: -webkit-inline-box;-webkit-line-clamp: 3;white-space: normal;-webkit-box-orient: vertical;font-weight: 700;font-size: 12px;vertical-align: middle;}
    ._2qww3J5KKzsD7e5DO0BvvU {padding: 8px;word-break: normal;margin-right: 4px;} .kU8ebCMnbXfjCWfqn0WPb {border-radius: 2px;padding: 8px;display: -ms-flexbox;display: flex;-ms-flex-align: center;align-items: center;text-transform: capitalize;height: 100%;outline: none;} .kU8ebCMnbXfjCWfqn0WPb ._1GQDWqbF-wkYWbrpmOvjqJ {line-height: 16px;margin-right: 6px;} ._JRBNstMcGxbZUxrrIKXe {margin: 0 4px 0 0;width: auto;word-break: normal;} ._3MmwvEEt6fv5kQPFCVJizH {display: -ms-flexbox;display: flex;-ms-flex-direction: column;flex-direction: column;-ms-flex-pack: center;justify-content: center;} ._1hwEKkB_38tIoal6fcdrt9 {-ms-flex-align: center;align-items: center;-ms-flex-wrap: wrap-reverse;flex-wrap: wrap-reverse;-ms-flex-pack: justify;justify-content: space-between;padding-right: 0;padding-top: 4px;display: -ms-flexbox;display: flex;}
    ._10K5i7NW6qcm-UoCtpB3aK,.kU8ebCMnbXfjCWfqn0WPb {outline: none;background: transparent;border: none;color: inherit;cursor: pointer;padding: initial;color: #878A8C;} #myDropdown > a {background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;} .flex{display: flex;display: -ms-flexbox;} .icon:before {-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;font-family: 'fontello';} .icon {font-size: 20px;font-weight: 400;height: 20px;line-height: 20px;vertical-align: middle;width: 20px;font-style: normal;} .dropbtn{background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;} .dropdown { position: relative; display: inline-block; margin-left: auto; } #myDropdown > button{background-color: transparent;border: 0;font-size: 14px;line-height: 16px;display: flex;margin: 8px;}
    .dropdown-content { display: none; position: absolute; background-color: #f1f1f1; min-width: 160px; overflow: auto; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; } .dropdown-content a { color: black; padding: 12px 16px; text-decoration: none; display: block; } .show {display: block;} #myDropdown{ right: 0; } .dropdown-content div[interact] { color: black; padding: 12px 16px; text-decoration: none; display: block; cursor:pointer; } .CommentsPageTools__comment { -ms-flex-align: center; align-items: center; display: -ms-flexbox; display: flex; -ms-flex-flow: row nowrap; flex-flow: row nowrap; padding-top: 8px; width: 100% } 
    .CommentsPageTools__userIcon { overflow: hidden; text-indent: 100%; white-space: nowrap; border-radius: 50%; height: 24px; margin-right: 8px; width: 24px } .CommentsPageTools__reply { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; border: 1px solid transparent; border-radius: 15px; box-sizing: border-box; -ms-flex: 1; flex: 1; font-size: 14px; height: 30px; line-height: 17px; padding: 0 8px; text-align: left } .submit_com{ font-size: 12px; font-weight: 700; letter-spacing: unset; line-height: 16px; white-space: pre; word-break: keep-all; padding:0.375rem 0.75rem; margin: 4px 8px; -ms-flex-order: 2; order: 2; text-transform: unset; min-height: 24px; min-width: 24px; float: right; color: #fff; background-color: #007bff; border-color: #007bff; border:1px solid transparent; border-radius:0.25rem; transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; }
    #output > ul > li::marker{ content: ""; } .comment-row > *{ font-size: 14px; } .btn-reply{ cursor: pointer; text-decoration: none !important; } .btn-submit:disabled { background: #eee; color: #667; cursor: not-allowed; } #output ul { list-style-type: none; } #frm-comment{ flex-direction: column; display: flex; } #frm-comment .input-row{ display:flex; } @media all and (min-width:600px) { #frm-comment{ margin:8px 40px 24px 48px; } } .comment-row {position: relative; border-bottom: #e0dfdf 1px solid; margin-bottom: 8px; border-top: #e0dfdf 1px solid; padding: 0px 10px 0px 10px; border-right: #e0dfdf 1px solid; display:flex; flex-direction: column; } .comment-active { background-color: hsl(60, 100%, 95%); } .comment-row:target { animation: bg-fadeout 5s ease; } @keyframes bg-fadeout { from {background-color: hsl(60, 100%, 95%);} to {background-color: transparent;} } .outer-comment { margin-top:8px; padding-inline-start: 0; } .outer-comment ul { padding-inline-start: 1rem; }
    .outer-comment > li > div { border-left: 1px solid hsl(220, 100%, 60%); } .outer-comment > li li > div { border-left: 1px solid hsl(40, 100%, 60%); } span.commet-row-label { font-style: italic; } .outer-comment ul{ margin-bottom:0 !important } .posted-by { color: var(--user-at); font-weight: 700;margin-right:4px;margin-left:4px } .comment-text { margin: 0px 0px; display:flex;color:var(--text) } .reply { color: #0043ff; text-decoration: none; display: inline-block; border-radius: 4px; margin-right:8px } .btn-reply { font-size: 14px; text-decoration: none !important; color: #888787 !important; cursor: pointer; font-weight: 900; line-height: 20px; display: flex; } #comment-message { margin-left: 20px; display: inline-block; opacity: 1; } .msg-success {color: hsl(120, 75%, 40%); animation: fadeOut 5s ease;} .msg-error {color: hsl(10, 90%, 50%); animation: fadeOut 5s ease;} @keyframes fadeOut { 0%, 50% {opacity:1;} 100% {opacity:0;} }
    #post_body_1 a{color:var(--user-at);}#post_body_1 hr{border-top: 1px solid var(--text);}#post_body_1 h1,h2,h3,h4,h5,h6{font-weight: 400;margin-bottom: 8px;margin-top: 1.4em;}#post_body_1 h1{font-size: 22px;line-height: 26px;}#post_body_1 h2{font-size: 20px;line-height: 24px;}#post_body_1 h3{font-size: 18px;line-height: 22px;}#post_body_1 h4{font-size: 16px;line-height: 20px;}#post_body_1 h5{font-size: 14px;line-height: 18px;}#post_body_1 h6{font-size: 12px;line-height: 16px;}#post_body_1 pre {background-color: var(--markdowncode);}#post_body_1 code {background-color: var(--markdowncode);}#post_body_1 tbody, tfoot, thead, tr, th, td{margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}#post_body_1 table{border-collapse: collapse;border-spacing: 0;}#post_body_1 tr{border: 1px solid var(--text);color: var(--text);padding: 4px 8px;  }#post_body_1 th{border: 1px solid var(--text);color: var(--text);padding: 4px 8px;  }#post_body_1 td{border: 1px solid var(--text);color: var(--text);padding: 4px 8px;  }#post_body_1 blockquote {margin-left:8px;}
    `;
    const template = `
    <div dclass="rpBJOHq2PR60pnwJlUyP0" class="_CmxRiim30CrxSPL">
    <article load-post-id postviewercontroller="posttop" style=" display: inline-flex; margin-top: 60px;margin-bottom: 30px;">
    <div data-postalert style="justify-content: space-around; margin-left: auto; margin-right: auto; padding-top: 5px; padding-bottom: 5px; margin-bottom: 10px;border-radius: 4px; font-size: 14px;position: fixed;box-shadow: -6px 9px 17px -1px rgb(0 0 0 / 39%);z-index: 997;transition: all .99s ease-out;display: none;">
    <div style="padding-left: 5px; font-size: 14px; padding-right: 5px;"></div>
    </div>
        <header class="" style="margin-left: 8px;">
            <div class="css-1dbjc4n r-18u37iz" style="cursor:auto;">
                <div class="ad74e8a5" style="border-radius: 25px;width: 100%;box-shadow:none;border:none;">
                    <div class="css-1dbjc4n r-1awozwy r-1hwvwag r-18kxxzh r-1b7u577">
                        <a postviewercontroller="author_icon_url">
                            <img src="" postviewercontroller="author_icon_image"
                                class="avatar">
                        </a>
                    </div>
                    <div class="content">
                        <div>
                        <div class="cZPZhMe-UCZ8htPodMyJ5"><span></span>
                            <div class="_3AStxql1mQsrZuUIFP9xSg nU4Je7n-eSXStTBAPMYt8">
                                <div class="_2mHuuvyV9doV3zwbZPtIPG"><a style="color: var(--text)"
                                        class="_3ryJoIoycVkA88fy40qNJc" href="Blogs" >Blogs</a>
                                </div><span class="_3LS4zudUBagjFS7HjWJYxo _37gsGHa8DMRAxBmQS-Ppg8 _3V4xlrklKBP2Hg51ejjjvz"
                                    role="presentation" style="color: var(--text);">•</span><span class="_2fCzxBE1dlMh4OFc7B3Dun"
                                    style="color: var(--text)">Posted by</span>
                                <div class="_2mHuuvyV9doV3zwbZPtIPG"><a postviewercontroller="author_url" class="_2tbHP6ZydRpjI44J3syuqC  _23wugcdiaj44hdfugIAlnX oQctV4n0yUb0uiHDdGnmE" style="color: var(--text);margin: 0 4px;"></a>
                                    <div id="UserInfoTooltip--t3_s95h3k--lightbox"></div>
                                </div><span><span></span></span><a class="_3jOxDPIQ0KaOWpzvSQo-1s"
                                    href=""
                                    target="_blank" rel="nofollow noopener noreferrer" postviewercontroller="post_time" style="color: var(--text);">ago</a>
                            </div>
                            <div class="_2wFk1qX4e1cxk8Pkw1rAHk"></div>
                            <div class="_3XoW0oYd5806XiOr24gGdb"></div>
                            <div postviewercontroller="closebtn" style="font-weight: 900;color: #c1c1c1;margin-right: 4px;font-size: 16px;cursor: pointer;box-sizing: content-box;width: 2em;height: 1em;padding: .25em 0.25em;color: #000;background: transparent url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e&quot;) center/1em auto no-repeat;border: 0;border-radius: .25rem;opacity: .5;margin-left: auto;"></div>
                            
                        </div>
                        </div>
                        <h1 class="fw-bolder" style="margin-top:0.5rem" postviewercontroller="post_title"></h1>
                    </div>
                </div>
            </div>
        </header>
        <div postviewercontroller="post_content">
        </div>
        <div class="interactive_0" postviewercontroller="menu" style="margin-left: 8px;margin-right: 8px;margin-top:8px;">

        </div>
        <div id="cvh" style="margin-top: 4px;" postviewercontroller="post_comments"></div>
    </article>
    </div>
    `;
    document.head.insertAdjacentHTML('beforeend', `<style>${cssstyle}</style>`);
    function geturlparam(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    async function createscript(script_urls) {
        let re = /(?:\.([^.]+))?$/;
        function load(script_url) {
            return new Promise(function (resolve, reject) {
                if (createscript.loaded.has(script_url)) {
                    resolve();
                } else {
                    if (re.exec(script_url)[1] == 'css') {
                        document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="' + script_url + '" type="text/css"/>');
                        resolve()
                    } else {
                        var script = document.createElement('script');
                        script.onload = resolve;
                        script.src = script_url
                        document.head.appendChild(script);
                    }
                }
            });
        }
        var promises = [];
        for (const script_url of script_urls) {
            promises.push(load(script_url));
        }
        await Promise.all(promises);
        for (const script_url of script_urls) {
            createscript.loaded.add(script_url);
        }
    }
    document.addEventListener('DOMContentLoaded', async function () {
        createscript.loaded = new Set();
        await createscript(['/api/v1/cdn/splide.min.js', '/api/v1/cdn/splide.min.css', '/api/v1/cdn/plyr.css', '/api/v1/cdn/hls.js', '/api/v1/cdn/plyr.js','/api/v1/cdn/marked.min.js','https://cdn.quilljs.com/1.3.6/quill.snow.css','https://cdn.quilljs.com/1.3.6/quill.js']);
        userdata = await window.getUserdata()
        window.addEventListener('newuserdata',function() {
            userdata = window.getUserdata()
        })
        document.querySelector('body').insertAdjacentHTML('beforeend', '<div id="post_viewer2" style="background-color: rgba(0, 0, 0, .5) !important;"></div>')
        postviewer = document.getElementById('post_viewer2');
        postviewer.style.left = '99999px'
        postviewer.setAttribute('postviewer', 'inactive');
        postviewer.insertAdjacentHTML('afterbegin', template);
        document.querySelector('#post_viewer2 > div').addEventListener('click', function (event) {
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
        })
        if (geturlparam('p')) {
            postjson.open('GET', '/api/v1/?k=loadpid&pid=' + geturlparam('p') + '&pagetype=trending&currenttime=' + (Math.floor(Date.now() / 1000)), true);
            postjson.send();
        }
        document.querySelector('#post_viewer2').addEventListener('click', function (e) {
            if (e.target.getAttribute('id') == 'post_viewer2' || e.target.classList.contains('_CmxRiim30CrxSPL')) {
                if (postviewer.getAttribute('postviewer') == 'active') {
                    document.body.style.overflowY = ""
                    for (let index = 0; index < document.querySelectorAll('._CmxRiim30CrxSPL').length; index++) {
                        const f = document.querySelectorAll('._CmxRiim30CrxSPL')[index];
                    }
                    document.querySelector('[postviewercontroller="post_content"]').innerHTML = ''
                    window.history.pushState(t, t, h);
                    postviewer.style.left = '99999px'
                    postviewer.setAttribute('postviewer', 'inactive')
                    document.querySelector('[postviewercontroller="post_content"]').innerHTML = null;
                    document.title = t;
                }
            }
        })
        document.querySelector('[postviewercontroller="closebtn"]').addEventListener('click',function(e) {
            if (postviewer.getAttribute('postviewer') == 'active') {
                document.body.style.overflowY = ""
                for (let index = 0; index < document.querySelectorAll('._CmxRiim30CrxSPL').length; index++) {
                    const f = document.querySelectorAll('._CmxRiim30CrxSPL')[index];
                }
                document.querySelector('[postviewercontroller="post_content"]').innerHTML = ''
                window.history.pushState(t, t, h);
                postviewer.style.left = '99999px'
                postviewer.setAttribute('postviewer', 'inactive')
                document.querySelector('[postviewercontroller="post_content"]').innerHTML = null;
                document.title = t;
            }
        })
    })
    function showpost(e,post_id) {
        e.preventDefault()
        postjson.open('GET', '/api/v1/?k=loadpid&pid=' + post_id + '&pagetype=trending&currenttime=' + (Math.floor(Date.now() / 1000)), true);
        postjson.send();
    }
    const postjson = new XMLHttpRequest();
    postjson.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.body.style.overflowY = "hidden"
            postviewer.style.left = '50%'
            postviewer.setAttribute('postviewer', 'active')
            var pjson = JSON.parse(this.responseText)[0];
            if (userdata.isloggedin === true) {
                window.evt('history', {
                    postid: pjson.post_id,
                    time: Date.now(),
                    type: 1
                })
                window.evt('view', {
                    postid: pjson.post_id,
                    time: Date.now(),
                    type: 1
                })
            }
            postviewer.style.display = "none";
            document.querySelector('[load-post-id]').setAttribute('load-post-id', pjson.post_id)
            document.querySelector('[postviewercontroller="post_title"]').innerHTML = pjson.title
            document.querySelector('[postviewercontroller="author_url"]').innerHTML = pjson.author.name
            document.querySelector('[postviewercontroller="author_url"]').href = `/u/${pjson.author.name}`
            document.querySelector('[postviewercontroller="author_icon_url"]').href = `/u/${pjson.author.name}`
            document.querySelector('[postviewercontroller="author_icon_image"]').src = pjson.author.icon
            document.querySelector('[postviewercontroller="post_time"]').innerHTML = '<span class="_3LS4zudUBagjFS7HjWJYxo _37gsGHa8DMRAxBmQS-Ppg8 _3V4xlrklKBP2Hg51ejjjvz" role="presentation" style="color: var(--text);">•</span>'+timeSince(new Date(pjson.unix_time * 1000)) + ' ago'
            document.querySelector('[postviewercontroller="posttop"]');
            buildmedia(pjson)
            buildmenu(pjson)
            buildcomments(pjson)
            //document.querySelector('#output').innerHTML = ''; <== THIS WAS DELETEING ALL MY COMMENTS. WHY DID I EVER DO THIS? WASTED DAYS ON IT. F****ING DAMNIT. *fudging. 
            if (userdata.isloggedin == false) {
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
                setTimeout(() => {
                    document.querySelector('.outer-comment').insertAdjacentHTML('afterbegin',data4) 
                }, 500);
            }
            postviewer.style.display = "flex";
            window.history.pushState(pjson.title + ' - NRRINC', pjson.title + ' - NRRINC', h+`/?p=${pjson.post_id}`);
            document.title = pjson.title + '- NRRINC';
            document.querySelector('[data-postalert]').style.width = (document.querySelector(`[load-post-id] > header`).offsetWidth + 8) + "px"
        }
    }
    function buildmedia(data) {
        const base = document.querySelector('[postviewercontroller="post_content"]');
        base.innerHTML = null;
        let meta = data.metadata;
        if (data.video) {
            setTimeout(() => {
                const source = data.video.server + data.video.code + '/_.m3u8'
                //add loading for video
                base.insertAdjacentHTML('beforeend', `<video id="player" playsinline controls data-poster="${data.image[0]}" crossorigin></video>`)
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
                    base.insertAdjacentHTML('beforeend', `
                    <div class="mb-5" style=" min-width: 100%;overflow-wrap: break-word;overflow:hidden;padding-top:0px;padding-left: 16px;padding-right: 16px;" postcontent>
                        <style>
                        #post_body_1 > p{margin-bottom:2px;}
                        #post_body_1{color: var(--text);margin-bottom:8px;margin-top:8px;}
                        [postviewercontroller="post_title"]{color: var(--text);}
                        [postviewercontroller="author_url"]{color: var(--text);}
                        </style>
                            <div id="post_body_1">${data.post_body}</div>
                    </div>`)
                }
            }, 0);

        } else if (data.image) {
            if (data.image.length >= 2) {
                base.insertAdjacentHTML('beforeend', '<div class="splide" id="splidetracker"><div class="splide__track"><ul class="splide__list" postviewercontroller="slider"></ul></div></div>')
                data.image.forEach(function (i, ii) {
                    document.querySelector('[postviewercontroller="slider"]').insertAdjacentHTML('beforeend', `<li style="margin: 12px 0;" class="splide__slide sp-aw"><img class="img-fluid rounded sp-image" style="max-height: 512px;cursor:zoom-in;" src="${i}" alt"image"></li>`)
                })
                setTimeout(() => {
                    new Splide('.splide', {
                        autoHeight: true,
                        trimSpace: false,
                        keyboard: false,
                        perPage: 1,
                    }).mount();
                }, 0);
            } else {
                data.image.forEach(function (i, ii) {
                    base.insertAdjacentHTML('beforeend', `<li style="margin: 12px 0;" class="sp-aw"><img class="img-fluid rounded sp-image" style="max-height: 512px;cursor:zoom-in;" src="${i}" alt"image"></li>`)
                })
            }
            const imglist = document.querySelectorAll('.img-fluid.rounded.sp-image')
            for (let i = 0; i < imglist.length; i++) {
                imglist[i].addEventListener('click', function (e) {
                    if (e.target.style.maxHeight == '2048px') {
                        e.target.style.width = ''
                        e.target.style.maxHeight = '512px'
                        e.target.style.cursor = "zoom-in"
                    } else {
                        e.target.style.width = '100%'
                        e.target.style.maxHeight = '2048px'
                        e.target.style.cursor = "zoom-out"
                    }
                })

            }
            base.insertAdjacentHTML('beforeend', `
            <div class="mb-5" style=" min-width: 100%;overflow-wrap: break-word;overflow:hidden;padding-top:0px;padding-left: 16px;padding-right: 16px;" postcontent>
                <style>
                #post_body_1 > p{margin-bottom:2px;}
                #post_body_1{color: var(--text);margin-bottom:8px;margin-top:8px;}
                [postviewercontroller="post_title"]{color: var(--text);}
                [postviewercontroller="author_url"]{color: var(--text);}
                </style>
                    <div id="post_body_1">${data.post_body}</div>
            </div>`)
        } else {
            base.insertAdjacentHTML('beforeend', `
            <div class="mb-5" style=" min-width: 100%;overflow-wrap: break-word;overflow:hidden;padding-top:0px;padding-left: 16px;padding-right: 16px;" postcontent>
                <style>
                #post_body_1 > p{margin-bottom:2px;}
                #post_body_1{color: var(--text);margin-bottom:8px;margin-top:8px;}
                [postviewercontroller="post_title"]{color: var(--text);}
                [postviewercontroller="author_url"]{color: var(--text);}
                </style>
                    <div id="post_body_1">`+marked.parse(data.post_body) + `</div>
            </div>`)
        }
    }
    function buildmenu(data) {
        const base = document.querySelector('[postviewercontroller="menu"]');
        base.innerHTML = null;
        let markup = `
            <div style="border: 1px solid #00000024;">
            <div class="_1hwEKkB_38tIoal6fcdrt9" style="margin-left: 8px;margin-right: 8px;">
                <div class="_3-miAEojrCvx_4FQ8x3P-s">
                <div style="display:flex" btn="like" postviewercontroller="post_like_array"></div>
                    <div
                        class="_1UoeAeSRhOKSNdY_h3iS1O _3m17ICJgx45k_z-t82iVuO _3U_7i38RDpostviewer5eBv7m4M-9J _2qww3J5KKzsD7e5DO0BvvU">
                        <i class="icon icon-comment _3DVrpDrMM9NLT6TlsTUMxC" role="presentation"></i><span
                            class="FHCV02u6Cp2zYL0fhQPsO">${data.comments.count} Comments</span></div>

                    <div style="display: flex;">
                        <div class="icontop vmshare" style="display: flex;">
                            <div class="_JRBNstMcGxbZUxrrIKXe _3U_7i38RDpostviewer5eBv7m4M-9J _3yh2bniLq7bYr4BaiXowdO _1pShbCnOaF7EGWTq6IvZux _28vEaVlLWeas1CDiLuTCap vmshare"
                                id="share_native"><button data-click-id="share" class="kU8ebCMnbXfjCWfqn0WPb vmshare"><i
                                        class="icon icon-share _1GQDWqbF-wkYWbrpmOvjqJ vmshare"></i><span
                                        class="_6_44iTtZoeY6_XChKt5b0 vmshare">share</span></button></div>
                        </div>
                    </div>
                </div>
                <div class="dropdown" postviewercontroller="dropdown"></div>
            </div>
        </div>`
        if (data.like.liked === true) {
            var likemod = '<div style="display: flex; -ms-flex-align: center; align-items: center; display: -ms-flexbox; cursor: pointer;margin-right:4px" btn="like"><span elike-id="' + data.post_id + '" like-id="' + data.post_id + '" data-like="unlike" class="JrpAzXnCHrDk" style="-ms-flex-align: center; align-items: center; display: -ms-flexbox; line-height: 20px;display: flex;"><i class="like-btn JrpAzXnCHrDk" data-id="' + data.gen.SSR_id + '" style=""><i class="site-icon-s JrpAzXnCHrDk" style="font-size: 20px;line-height: 20px;color:#1696e1;line-height: 16px; margin-right: 6px;margin-left: 4px;"></i></i> <span class="likes JrpAzXnCHrDk" style="margin-left: 2px; display: inline-block; line-height: 1; text-transform: capitalize; vertical-align: middle; color: #878A8C; font-weight: 700; font-size: 12px;">' + data.like.likes + '</span></span></div>'
        } else {
            var likemod = '<div style="display: flex; -ms-flex-align: center; align-items: center; display: -ms-flexbox; cursor: pointer;margin-right:4px" btn="like"><span elike-id="' + data.post_id + '" like-id="' + data.post_id + '"  data-like="like" class="JrpAzXnCHrDk" style="-ms-flex-align: center; align-items: center; display: -ms-flexbox; line-height: 20px;display: flex;"><i class="like-btn JrpAzXnCHrDk" data-id="' + data.gen.SSR_id + '" style=""><i class="site-icon-s JrpAzXnCHrDk" style="font-size: 20px;line-height: 20px;color:unset;line-height: 16px; margin-right: 6px;margin-left: 4px;color:#878A8C;"></i></i> <span class="likes JrpAzXnCHrDk" style="margin-left: 2px; display: inline-block; line-height: 1; text-transform: capitalize; vertical-align: middle; color: #878A8C; font-weight: 700; font-size: 12px;">' + data.like.likes + '</span></span></div>'
        }
        base.innerHTML = markup;
        document.querySelector('[postviewercontroller="post_like_array"]').innerHTML = likemod;
        document.querySelector(`[elike-id='${data.post_id}']`).addEventListener("click", function like(e) {
            var post_id = this.getAttribute("like-id");
            var clicked_btn = this;
            let action = null;
            if (clicked_btn.getAttribute("data-like") === 'like') {
               action = 'like';
            } else if (clicked_btn.getAttribute("data-like") === 'unlike') {
                action = 'unlike';
            } else {
                return;
            }
            var request = new XMLHttpRequest();
            request.open('POST', '/api/v1/?k=like&time=' + (Date.now()), true);
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
        })
        document.querySelector('[postviewercontroller="dropdown"]').innerHTML = `
        <button id="pop" class="dropbtn icon icon-3dot" style="cursor: pointer;"></button>
        <div id="myDropdown" class="dropdown-content" dropdownid="${data.post_id}"></div>
        `
        const autbase = document.getElementById('myDropdown');
        if (data.self.isloggedin) {
            autbase.insertAdjacentHTML('beforeend',`<button class="kU8ebCMnbXfjCWfqn0WPb" id="reportpst" navaction="px1"> <i class="icon icon-report _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/"  navaction="px1"></i><span class="_6_44iTtZoeY6_XChKt5b0"  navaction="px1">Report</span></button>`);
        }
        if (data.self.auth) {
            autbase.insertAdjacentHTML('beforeend',` <button class="kU8ebCMnbXfjCWfqn0WPb" id="edit_post" navaction="px2"> <i class="icon icon-edit _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/" navaction="px2"></i><span class="_6_44iTtZoeY6_XChKt5b0" navaction="px2">Edit</span></button> <button class="kU8ebCMnbXfjCWfqn0WPb" id="delete_post" navaction="px3"> <i class="icon icon-trash _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/" navaction="px3"></i><span class="_6_44iTtZoeY6_XChKt5b0" navaction="px3">Delete</span></button>`)
        }
        document.querySelector('[dropdownid="'+data.post_id+'"]').addEventListener('click',function(e) {
            switch (e.target.getAttribute('navaction')) {
                case 'px3':
                confirmnotify("Are you sure you want to delete this post?", function (f) {
                    if (f) {
                        if (data.video) {
                            httpRequest(`https://tc-1.nrrinc.net/run/?pri=${userdata.private_key}&pub=${userdata.public_key}&gc=1&code=${data.video.auth.removalcode}&pid=${data.post_id}`,'GET',function(e) {
                                if (e.readyState == 4 && e.status == 200) {
                                    httpRequest('/api/v1/?k=editpost&pid=' + data.post_id + '&do=delete','GET',function(e) {
                                        if (e.readyState == 4 && e.status == 200) {
                                            var a = JSON.parse(this.responseText)
                                            notify(a.message, "#3c763d", "#dff0d8", "#d6e9c6", 10000)
                                            window.evt('deletedpost', {
                                                postid: data.post_id,
                                                time: Date.now(),
                                                by: userdata.user_id
                                            })
                                        }else if (e.readyState == 4 && e.status != 200) {
                                            window.evt('deletedpost', {
                                                postid: data.post_id,
                                                time: Date.now(),
                                                by: userdata.user_id,
                                                fail:true,
                                                http: e.status
                                            })
                                        }     
                                    })
                                }else if (e.readyState == 4 && e.status != 200) {
                                    window.evt('deletedpost', {
                                        postid: data.post_id,
                                        time: Date.now(),
                                        by: userdata.user_id,
                                        fail:true,
                                        http: e.status
                                    })
                                }
                            });
                        } else {
                            httpRequest('/api/v1/?k=editpost&pid=' + data.post_id + '&do=delete','GET',function(e) {
                                if (e.readyState == 4 && e.status == 200) {
                                    var a = JSON.parse(e.responseText)
                                    notify(a.message, "#3c763d", "#dff0d8", "#d6e9c6", 10000)
                                    window.evt('deletedpost', {
                                        postid: data.post_id,
                                        time: Date.now(),
                                        by: userdata.user_id
                                    })
                                    document.body.style.overflowY = ""
                                    for (let index = 0; index < document.querySelectorAll('._CmxRiim30CrxSPL').length; index++) {
                                        const f = document.querySelectorAll('._CmxRiim30CrxSPL')[index];
                                    }
                                    document.querySelector('[postviewercontroller="post_content"]').innerHTML = ''
                                    window.history.pushState(t, t, h);
                                    postviewer.style.left = '99999px'
                                    postviewer.setAttribute('postviewer', 'inactive')
                                    document.querySelector('[postviewercontroller="post_content"]').innerHTML = null;
                                    document.title = t;
                                }else if (e.readyState == 4 && e.status != 200) {
                                    window.evt('deletedpost', {
                                        postid: data.post_id,
                                        time: Date.now(),
                                        by: userdata.user_id,
                                        fail:true,
                                        http: e.status
                                    })
                                }
                            })
                        }
                    }
                })
                break;
                case 'px2':
                    console.log('edit mode on')
                    document.querySelector('[postviewercontroller="post_content"]').style.cssText = 'display: flex; flex-direction: column;'
                    editor('setup',document.querySelector('[postviewercontroller="post_content"]'),data.post_body)
                    document.querySelector('[postviewercontroller="post_content"]').insertAdjacentHTML('beforeend','<div style="margin-left: auto;"><button cancel=""  class="nrrinc-btn dan fatter closer">Cancel</button><button submit="" class="nrrinc-btn pri fatter closer">Edit</button></div>')
                    const btn = document.querySelector('[submit]');
                    const cancelbtn = document.querySelector('[cancel]');
                    setTimeout(() => {
                        document.querySelector('#post_body_1').children[0].addEventListener('keydown',function() {
                            editor('verify',btn)
                        })
                        document.querySelector('[markdownedtior="textarea"]').addEventListener('keydown',function() {
                            editor('verify',btn)
                        })
                        document.querySelector('#post_body_1').children[0].addEventListener('keyup',function() {
                            editor('verify',btn)
                        })
                        document.querySelector('[markdownedtior="textarea"]').addEventListener('keyup',function() {
                            editor('verify',btn)
                        })
                    }, 5);
                    btn.addEventListener('click',function(e) {
                        e.preventDefault()
                        if (editor('verify',btn)) {
                            console.log(editor('save'))
                            let form = new FormData();
                            form.append('mode',editor('save').mode)
                            form.append('body',editor('save').data)
                            httpRequest(`/api/v1/editpost?pid=${data.post_id}&do=edit`,'POST',function(e) {
                                if ((e.readyState == 4 && e.status == 200) || (e.readyState == 4 && e.status == 201) | (e.readyState == 4 && e.status == 202)) {
                                    notify("Post has been updated", "#3c763d", "#dff0d8", "#d6e9c6", 10000)
                                    data.post_body = editor('save').data
                                    buildmedia(data)
                                }
                            },form)
                        }
                    })
                    cancelbtn.addEventListener('click',function(e) {
                        e.preventDefault()
                        buildmedia(data)
                        window.history.pushState(data.title + ' - NRRINC', data.title + ' - NRRINC', h+`?p=${data.post_id}`);
                    })
                    break;
                case 'px1':
                    console.log('you reported pid: '+data.post_id)
                    break;
                default:
                    break;
            }
        })
        document.getElementById('pop').addEventListener('click', function (e) {
            document.getElementById("myDropdown").classList.toggle("show")
        })
        if (document.getElementById('myDropdown').innerHTML.length == 0) {
            document.querySelector('[postviewercontroller="dropdown"]').style.display = 'none'
        }
        document.querySelector('.vmshare').addEventListener('click', async function () {
            let platform = navigator?.userAgentData?.platform || navigator?.platform || ''
            const shareData = {
                title: `${data.title} - NRRINC.NET`,
                text: `${data.author.name} is talking about ${data.title} on NRRINC.NET`,
                url: `https://nrrinc.net?p=${data.post_id}&ref=s&rp=${platform}`
            }
            await navigator.share(shareData)
            window.evt('share', {
                postid: data.post_id,
                time: Date.now(),
                type: 1,
                u: userdata.user_id
            })
        })
    }
    function buildcomments(data) {
        const base = document.querySelector('[postviewercontroller="post_comments"]');
        base.innerHTML = null;
        let markup = `<div>
        <div class="col-md-12" style="background-color: var(--post-background); border-radius:  0px 0px 25px 25px;">
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
        </div>`;
        base.innerHTML = markup;
        setTimeout(() => {
            let end = 0;
            var started = 1;
            let cc = 0;
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
            const lang = {
            'r': 'Reply',
            's': 'Sending…',
            'a': 'Comment was submitted!',
            'e': 'Error while adding comment. Try again in a few seconds',
            'cnd_r':'Report Comment',
            'cnd_ht':'Collapse thread',
            'cnd_sh':'Expand thread',
            };
            const $form = el('#frm-comment').node();
            const $output = el('#output').node();
            const $message = el('#comment-message');
            const $submit = el('.btn-submit').node();
            const $list = el('ul').new({ 'class': 'outer-comment' }).append($output);
            function formatDatetime(datetime) {
                return datetime.replace(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/, '$3. $2. $1 $4:$5');
            }
            function buildcnd(commentid, auth, hasparent, access) {
                const id = commentid;
                const home = document.querySelector(`[comment-nav-id-drop='${id}']`);
                const edit = `<div interact edit-id="${id}"     cnc="px2">Edit</div>`;
                const del = `<div interact del-id="${id}"       cnc="px3">Delete</div>`;
                const hide = `<div interact hide-id="${id}"     cnc="px4">Collapse thread</div>`;
                const report = `<div interact report-id="${id}" cnc="px1">Report comment</div>`;
                if (userdata.isloggedin) {
                    home.insertAdjacentHTML('beforeend', report)
                    if (auth === true) {
                        home.insertAdjacentHTML('beforeend', edit)
                        home.insertAdjacentHTML('beforeend', del)
                    }
                }
                if (hasparent === '0') {
                    home.insertAdjacentHTML('beforeend', hide)
                }
                document.querySelector(`[comment-nav-id='${id}']`).addEventListener("click", function (e) {
                    document.querySelector(`[comment-nav-id-drop='${id}']`).style.display = "inline-block";
                    this.parentElement.style.position = "relative";
                })
                home.addEventListener('click',function(e) {
                    switch (e.target.getAttribute('cnc')) {
                        case 'px1':
                            console.log('report')
                            break;
                        case 'px2':
                        const editbtn = document.querySelector(`[edit-id='${id}']`);
                        const editor = document.querySelector(`[comment-nav-id-drop="${id}"]`).parentElement.querySelector('.comment-text');
                        const editorbasee = document.querySelector(`[comment-nav-id-drop="${id}"]`).parentElement;
                        if (document.querySelector('[editor="open"]')) {
                            editor.style.display = '';
                            document.querySelector('[editor="open"]').remove()
                            editbtn.innerText = 'Edit'
                        } else {
                            editor.style.display = 'none'
                            editor.insertAdjacentHTML('afterend','<div editor="open"><textarea style=" width: 100%; resize: vertical; " id="editor_submitarea">'+editor.innerText+'</textarea><br><button id="editor_submitbtn">submit</button></div>')
                            editbtn.innerText = 'Undo Edits'
                            setTimeout(() => {
                                editorbasee.querySelector('#editor_submitbtn').addEventListener('click',function() {
                                    const editorsavedata = editorbasee.querySelector('#editor_submitarea').value;
                                    var b = new FormData();
                                    b.append('comment',editorsavedata)
                                    httpRequest('/api/v1/comments?action=update&cid='+id,'POST',function() {
                                        editor.style.display = '';
                                        document.querySelector('[editor="open"]').remove()
                                        editbtn.innerText = 'Edit'
                                        editor.innerText = editorsavedata
                                    },b)
                                })
                            }, 200);
                        }
                            break;
                        case 'px3':
                            confirmnotify('Are you sure you want to delete this comment?', function (f) {
                                if (f) {
                                    httpRequest('/api/v1/comments?action=delete&cid=' + id, 'GET', function (e) {
                                        if (this.readyState == 4 && this.status == 200) {
                                            var b = document.querySelector(`[del-id='${id}']`);
                                            b.parentElement.parentElement.querySelector('.comment-info > .posted-by').innerHTML = "<i>deleted</i>"
                                            b.parentElement.parentElement.querySelector('.comment-text').innerHTML = "<i>deleted</i>"
                                            notify('Comment Deleted', "#3c763d", "#dff0d8", "#d6e9c6", 4000)
                                        }
                                    })
                                }
                            })
                            break;
                        case 'px4':
                            if (home.parentElement.parentElement.querySelector('ul').style.display === 'none') {
                                home.parentElement.parentElement.querySelector('ul').style.display = 'block'
                                document.querySelector(`[hide-id='${id}']`).innerText = "Collapse thread"
                                document.querySelector("#comment-"+id+" a.btn-reply").innerText = "Reply"
                                document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.cssText = ""
                                document.querySelector('[comment="'+id+'"]').querySelector('.btn-reply').style.cssText = ""
                            } else {
                                document.querySelector('[comment="'+id+'"]').querySelector('.comment-text').parentElement.style.cssText = "flex-direction: column; display: flex; margin-right: auto; justify-content: flex-end;"
                                document.querySelector('[comment="'+id+'"]').querySelector('.btn-reply').style.marginRight = '8px'
                                home.parentElement.parentElement.querySelector('ul').style.display = 'none'
                                document.querySelector(`[hide-id='${id}']`).innerText = "Expand thread"
                                document.querySelector("#comment-"+id+" a.btn-reply").innerText = "Reply ("+(document.querySelector("#comment-"+id).parentElement.querySelectorAll('.comment-row').length - 1)+" hidden)"
                            }
                            break;
                        default:
                            break;
                    }
                })
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
                if (document.getElementById('cmtloader')) {
                    document.getElementById('cmtloader').remove()
                }
                document.getElementById("output").insertAdjacentHTML('afterend','<button class="submit_com" id="cmtloader">Load more Comments</button>')
                document.getElementById('cmtloader').addEventListener('click',listComment)
                listComment();
                function listComment() {
                    if (end === 1) {
                        return;
                    }
                    started = 0;
                    fetch('/api/v1/?k=postcomments&pid=' + data.post_id+ "&nav="+cc)
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
                                                $item.connecter(comment.id)
                                                const $reply = el('ul').new().append($item.node());
                                                listReplies(comment, data, $reply);
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
                    fetch("/api/v1/?k=submitcomment&pid=" + data.post_id, {
                        method: 'POST',
                        body: getFormData($form),
                    }).then(response => {
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
                                    fetch("/api/v1/?k=submitcomment&pid=" + data.post_id, {
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
        }, 0);
    }
    function timeSince(date) {
        var seconds = Math.floor((new Date() - date) / 1000);
        var interval = seconds / 31536000;
        if (interval > 2) {return Math.floor(interval) + " years";} else if (interval > 1) {return Math.floor(interval) + " year";}
        interval = seconds / 2592000;
        if (interval > 2) {return Math.floor(interval) + " months";} else if (interval > 1) {return Math.floor(interval) + " month";}
        interval = seconds / 86400;
        if (interval > 2) {return Math.floor(interval) + " days";} else if (interval > 1) {return Math.floor(interval) + " day";}
        interval = seconds / 3600;
        if (interval > 2) {return Math.floor(interval) + " hours";} else if (interval > 1) {return Math.floor(interval) + " hour";}
        interval = seconds / 60;
        if (interval > 2) {return Math.floor(interval) + " minutes";} else if (interval > 1) {return Math.floor(interval) + " minute";}
        return Math.floor(seconds) + " seconds";
    }
})(window, document)
//life is hard, but God is good.
