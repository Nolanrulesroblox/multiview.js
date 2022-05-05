# Multiview.js
json data from API:
<hr>

```php

//this json assumes that the user is the author, total of 2 comments, and the logged in user has liked the post.
[{"post_id":"QdUMx8c-launch-of-the-fourm","type":"image","author":"<removed>","title":"Launch of the Fourm!","images":"https:\/\/uc-1.nrrinc.net\/23952ffc9edd6d30fbec3c224868d8f1.jpg","post_body":"\n<span style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\">Welcome to the Forum!&nbsp;<\/span>\n<div style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\"><br><\/div>\n<div style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\">What you can do<\/div>\n<div style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\"><ul><li><span style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\">Make Posts<\/span><\/li><li><span style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\">Make Friends<\/span><\/li><li>Start&nbsp;discussions<\/li><li>Make Profiles<\/li><li>Make the Forum Unique to you! change colors<\/li><\/ul><\/div>\n<div style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\"><br><\/div>\n<div style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\">Soon there will be Ways to :<\/div>\n<div style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\"><ul><li>Private Message Each other<\/li><li>Make your own Ads<\/li><li>Leave Comments<\/li><li>Even do Events!!<\/li><\/ul><\/div>\n<div style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\"><br><\/div>\n<div style=\"\\&quot;font-size:\" 13.3333px;\\\"=\"\">There is Alot Coming, Stay Tooned!<\/div>","unix_time":"1651741262","metadata":null,"exectime":0.667ms,"comments":2,"gentime":1651780888,"genexptime":1651782328,"genSERVER":"V7_r-US-S1","server_pid":"QdUMx8c-launch-of-the-fourm","liked":"true","disliked":"false","picon":"https:\/\/uc-1.nrrinc.net\/940900ef7308a232b81069e1549e78c7.jpg","pname":"<removed>","poster_id":"459937721","likes":"1","dislikes":"0"}]


```

<hr>

```php

//this json assumes that the user is the author is <removed>, <removed> has left 2 comments, 1 hour apart. This is SOFT auth, no real auth is happening until a server POST request is made.
[{"name":"<removed>","comment":"awesome post!","parent_id":"0","date":"10 hrs ago","id":"18429","auth":true},
{"name":"<removed>","comment":"eeff","parent_id":"18429","date":"9 hrs ago","id":"18430","auth":true}]

```

<hr>

```php

//this json is just a comment count.
[{"type":"total","count":2}]

```

end result expected:
<br>
<i>this is upcoming project Dino Portal</i>
<br>
![image](https://user-images.githubusercontent.com/54533608/167019049-33898489-7997-49ec-9bce-b04cf02c1115.png)
