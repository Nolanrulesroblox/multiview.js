//tmp stuff
window.evt = function (params) {
    
};
function timeSince (params) {
    return params
}
function timeConverter (params) {
    return params
}
function vmlike(params) {
    console.log('like')
}
(function() {
    //window.showpost = showpost;
    let userdata; //all user data.
    let h = location.protocol + '//' + location.host + location.pathname;
    let t = document.title
    //let post_id = '4iRZzfm-sp-pics-2-occ';
    let post_id = '5WLNBDG-sp-pics-1-occ';
    let cssstyle = `
    .sp-aw { text-align: center !important; list-style: none; } @media all and (min-width:940px) { [load-post-id]{ width: 937px!important; } } @media all and (min-width:729px) and (max-width:939px){ [load-post-id]{ width: 640px; } } @media all and (max-width:559px) { [load-post-id]{ min-width: 100% ; max-width: 100% ; width: 100% ; } 
    ._CmxRiim30CrxSPL{ min-width: 100% ; max-width: 100% ; width: 100% ; } } .fs1{ max-width: 96vw; } #splidelist{padding-left:0rem !important} /*._CmxRiim30CrxSPL{margin-top: 60px;}*/ 
    ._1VP69d9lk-Wk9zokOaylL-TMP {-webkit-filter: blur(8px); -moz-filter: blur(8px); -o-filter: blur(8px); -ms-filter: blur(8px); filter: blur(8px);} #post_viewer2{height: 100%;position: fixed; -webkit-backface-visibility: hidden; backface-visibility: hidden; right: 0; top: 0; width: 100%; z-index: 50; margin-bottom: 60px;display: flex; justify-content: center; position: fixed; left: 50%; transform: translateX(-50%); overflow-y: scroll; overflow-x: hidden;}
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
    #output > ul > li::marker{ content: ""; } .comment-row > *{ font-size: 14px; } .btn-reply{ cursor: pointer; text-decoration: none !important; } .btn-submit:disabled { background: #eee; color: #667; cursor: not-allowed; } #output ul { list-style-type: none; } #frm-comment{ flex-direction: column; display: flex; } #frm-comment .input-row{ display:flex; } @media all and (min-width:600px) { #frm-comment{ margin:8px 40px 24px 48px; } } .comment-row {position: relative; border-bottom: #e0dfdf 1px solid; margin-bottom: 8px; border-top: #e0dfdf 1px solid; padding: 0px 10px 0px 10px; border-right: #e0dfdf 1px solid; display:flex; flex-direction: column; } .comment-active { background-color: hsl(60, 100%, 95%); } .comment-row:target { animation: bg-fadeout 5s ease; } @keyframes bg-fadeout { from {background-color: hsl(60, 100%, 95%);} to {background-color: transparent;} } .outer-comment { margin-top:8px; padding-inline-start: 0; } .outer-comment ul { padding-inline-start: 1rem; }
    .outer-comment > li > div { border-left: 1px solid hsl(220, 100%, 60%); } .outer-comment > li li > div { border-left: 1px solid hsl(40, 100%, 60%); } span.commet-row-label { font-style: italic; } .outer-comment ul{ margin-bottom:0 !important } .posted-by { color: var(--user-at); font-weight: 700; } .comment-text { margin: 0px 0px; display:flex;color:var(--text) } .reply { color: #0043ff; text-decoration: none; display: inline-block; border-radius: 4px; margin-right:8px } .btn-reply { font-size: 14px; text-decoration: none !important; color: #888787 !important; cursor: pointer; font-weight: 900; line-height: 20px; display: flex; } #comment-message { margin-left: 20px; display: inline-block; opacity: 1; } .msg-success {color: hsl(120, 75%, 40%); animation: fadeOut 5s ease;} .msg-error {color: hsl(10, 90%, 50%); animation: fadeOut 5s ease;} @keyframes fadeOut { 0%, 50% {opacity:1;} 100% {opacity:0;} }
    `;
    var template = `
    <div dclass="rpBJOHq2PR60pnwJlUyP0" class="_CmxRiim30CrxSPL">
    <article load-post-id postviewercontroller="posttop" style=" display: inline-flex; margin-top: 60px;">
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
                                    <div id="SubredditInfoTooltip--t3_s95h3k--lightbox--Bible"></div>
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
                            <div style="font-weight: 900;color: #c1c1c1;margin-right: 4px;font-size: 16px;cursor: pointer;box-sizing: content-box;width: 2em;height: 1em;padding: .25em 0.25em;color: #000;background: transparent url(&quot;data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e&quot;) center/1em auto no-repeat;border: 0;border-radius: .25rem;opacity: .5;margin-left: auto;" onclick="showpost()"></div>
                            
                        </div>
                        </div>
                        <h1 class="fw-bolder" style="margin-top:0.5rem" postviewercontroller="post_title"></h1>
                    </div>
                </div>
            </div>
        </header>
        <div postviewercontroller="post_content">
        </div>
        <div class="interactive_0" class="interactive_0" style="margin-left: 8px;margin-right: 8px;margin-top:8px;">
            <div style="/*border-radius: 5px 5px 0px 0px;*/ border: 1px solid #00000024;">
                <div class="_1hwEKkB_38tIoal6fcdrt9" style="margin-left: 8px;margin-right: 8px;">
                    <div class="_3-miAEojrCvx_4FQ8x3P-s">
                    <div style="display:flex" btn="like" postviewercontroller="post_like_array"></div>
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
                    <div class="dropdown" postviewercontroller="dropdown">
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
    var comment = `<div>
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
        </div>`;
    document.head.insertAdjacentHTML('beforeend', `<style>${cssstyle}</style>`);
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
    let sliding = document.createElement('script');
    sliding.setAttribute('src', '/api/v1/cdn/splide.min.js');
    sliding.setAttribute('id', "splidejsid")
    document.body.appendChild(sliding);
    document.body.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="/api/v1/cdn/splide.min.css" type="text/css"/ id="splidecss">');
    document.addEventListener('DOMContentLoaded',function() {
        document.querySelector('body').insertAdjacentHTML('beforeend', '<div id="post_viewer2" style="background-color: rgba(0, 0, 0, .5) !important;"></div>')
        postviewer = document.getElementById('post_viewer2');
        postviewer.style.left = '99999px'
        postviewer.setAttribute('postviewer','inactive');
        postviewer.insertAdjacentHTML('afterbegin', template);
        //postviewer.insertAdjacentHTML('afterbegin', css);
        document.querySelector('[postviewercontroller="post_comments"]').insertAdjacentHTML('afterbegin', comment);
        //START fix of checktarg
        postviewer.addEventListener('click', (event) => {
            if (event.target.getAttribute('postviewer') == 'active') {
                showpost()
                
            }
        });
        if (geturlparam('p')) {
            showpost('loader', geturlparam('p'))
        }
        postjson.open('GET', '/api/v1/?k=loadpid&pid=' + post_id + '&pagetype=trending&currenttime=' + (Math.floor(Date.now() / 1000)), true);
        postjson.send();
        document.getElementById('post_viewer2').addEventListener('click',function(e) {
            if (e.target.getAttribute('id') == 'post_viewer2') {
                document.body.style.overflowY = ""
                if (postviewer.getAttribute('postviewer') == 'active') {
                    for (let index = 0; index < document.querySelectorAll('._CmxRiim30CrxSPL').length; index++) {
                        const f = document.querySelectorAll('._CmxRiim30CrxSPL')[index];
                        //f.remove()
                    }
                    document.querySelector('[postviewercontroller="post_content"]').innerHTML = ''
                    //blur.style.cssText = ''
                    //postviewer.removeEventListener("click", clear_menus)
                    //disablehrefs()
                    window.history.pushState(t, t, h);
                    postviewer.style.left = '99999px'
                    postviewer.setAttribute('postviewer','inactive')
                }
            }
        })
    })
    const postjson = new XMLHttpRequest();
    postjson.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.body.style.overflowY = "hidden"
            postviewer.style.left = '50%'
            //blur.style.cssText = '-webkit-filter: blur(8px); -moz-filter: blur(8px); -o-filter: blur(8px); -ms-filter: blur(8px); filter: blur(8px);'
            postviewer.setAttribute('postviewer','active')
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
            //window.history.pushState(pjson.title + ' - NRRINC', pjson.title + ' - NRRINC', `/?p=${pjson.post_id}`);
            //override because dont feel like enabling beta on every single testing device. sorry, but lazy.
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
        //disablehrefs()
            postviewer.style.display = "none";
            document.querySelector('[load-post-id]').setAttribute('load-post-id',pjson.post_id)
            document.querySelector('[postviewercontroller="post_like_array"]').innerHTML = likemod
            document.querySelector(`[elike-id='${pjson.post_id}']`).addEventListener("click", vmlike)
            document.querySelector('[postviewercontroller="post_title"]').innerHTML = pjson.title
            document.querySelector('[postviewercontroller="author_url"]').innerHTML = pjson.author.name
            document.querySelector('[postviewercontroller="author_url"]').href = "/u/${pjson.author.name}/"
            document.querySelector('[postviewercontroller="author_icon_url"]').href = "/u/${pjson.author.name}/"
            document.querySelector('[postviewercontroller="author_icon_image"]').src = pjson.author.icon
            document.querySelector('[postviewercontroller="post_time"]').innerHTML = timeSince(new Date(pjson.unix_time * 1000)) + ' ago'
            document.querySelector('[postviewercontroller="posttop"]');
            buildmedia(pjson)
            //document.querySelector('[postviewercontroller="post_content"]').innerHTML = splide_data + editmod;
            document.querySelector('[postviewercontroller="dropdown"]').innerHTML = `
            <button id="pop" class="dropbtn icon icon-3dot" style="cursor: pointer;"></button>
            <div id="myDropdown" class="dropdown-content">
                <button class="kU8ebCMnbXfjCWfqn0WPb"> <i class="icon icon-report _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/"></i><span class="_6_44iTtZoeY6_XChKt5b0">Report</span></button>
                <button class="kU8ebCMnbXfjCWfqn0WPb" id="edit_post"> <i class="icon icon-edit _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/"></i><span class="_6_44iTtZoeY6_XChKt5b0">Edit</span></button>
                <button class="kU8ebCMnbXfjCWfqn0WPb" id="delete_post"> <i class="icon icon-trash _1GQDWqbF-wkYWbrpmOvjqJ" style="/*color:#ff8d00*/"></i><span class="_6_44iTtZoeY6_XChKt5b0">Delete</span></button>
            </div>
            `
            document.querySelector('#output').innerHTML = '';
            //comments(post_id)
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
                if (document.getElementById("delete_post")) {
                    document.getElementById("delete_post").remove()
                }
                if (document.getElementById("edit_post")) {
                    document.getElementById("edit_post").remove()
                }
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
            //loading comments
            
            //end
            postviewer.style.display = "flex";
            document.querySelector('[data-postalert]').style.width = (document.querySelector(`[load-post-id] > header`).offsetWidth + 8) + "px"
        }
    }
    function buildmedia(data) {
        const base = document.querySelector('[postviewercontroller="post_content"]');
        base.innerHTML = null;
        let meta = data.metadata;
        if (data.video) {
            //add loading for video
        } else if(data.image) {
            if (data.image.length >=2) {
                base.insertAdjacentHTML('beforeend','<div class="splide" id="splidetracker"><div class="splide__track"><ul class="splide__list" postviewercontroller="slider"></ul></div></div>')
                data.image.forEach(function(i,ii) {
                    document.querySelector('[postviewercontroller="slider"]').insertAdjacentHTML('beforeend', `<li style="margin: 12px 0;" class="splide__slide sp-aw"><img class="img-fluid rounded sp-image" style="max-height: 512px;cursor:zoom-in;" src="${i}" alt"image"></li>`)
                })
                //now load splide
                try {
                    setTimeout(() => {
                        new Splide('.splide', {
                            autoHeight: true,
                            trimSpace: false,
                            keyboard: false,
                            perPage: 1,
                        }).mount();
                    }, 0);
                } catch (error) {
                    sliding.onload = function () {
                        new Splide('.splide', {
                            autoHeight: true,
                            trimSpace: false,
                            keyboard: false,
                            perPage: 1,
                        }).mount();
                    }
                }
            } else {
                data.image.forEach(function(i,ii) {
                    base.insertAdjacentHTML('beforeend', `<li style="margin: 12px 0;" class="sp-aw"><img class="img-fluid rounded sp-image" style="max-height: 512px;cursor:zoom-in;" src="${i}" alt"image"></li>`)
                })
            }
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
        base.insertAdjacentHTML('beforeend',`
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
    function buildmenu(data) {
        
    }
    function buildcomments(data) {

    }
})(window,document)
