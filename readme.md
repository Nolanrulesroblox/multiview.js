# Multiview.js
json data from API:
<hr>

```php

//this json assumes that the user is the author, total of 2 comments, and the logged in user has liked the post.
[{"post_id":"QdUMx8c-launch-of-the-fourm","type":"image","author":"NRRINC","title":"Launch of the Fourm!","images":"https:\/\/uc-1.nrrinc.net\/23952ffc9edd6d30fbec3c224868d8f1.jpg","post_body":"<div>Welcome to the Forum!\u00a0<\/div><div>What you can do<\/div><ul><li>Make Posts<\/li><li>Make Friends<\/li><li>Start\u00a0discussions<\/li><li>Make Profiles<\/li><li>Make the Forum Unique to you! change colors<\/li><\/ul><div><br \/><\/div><div>Soon there will be Ways to :<\/div><ul><li>Private Message Each other<\/li><li>Make your own Ads<\/li><li>Leave Comments<\/li><li>Even do Events!!<\/li><\/ul><div><br \/><\/div><div>There is Alot Coming, Stay Tooned!<\/div>","unix_time":"1651741262","metadata":null,"sha2":"d681f6de915644ae54ecf83cc9a13ddfda5102358873d3dcacd27d021fea857a","comments":4,"gentime":1654612887,"genSERVER":"V7_r-US-S1","server_pid":"QdUMx8c-launch-of-the-fourm","liked":true,"disliked":false,"picon":"https:\/\/uc-1.nrrinc.net\/940900ef7308a232b81069e1549e78c7.jpg","pname":"NRRINC","poster_id":"459937721","likes":"1","dislikes":"0","auth":true}]


```

<hr>

```php

//this json assumes that the user is the author is <removed>, <removed> has left 2 comments, 1 hour apart. This is SOFT auth, no real auth is happening until a server POST request is made.
[{"name":"NRRINC","comment":"post comment","parent_id":"0","date":"1 second ago","id":"785","auth":true,"isOP":true},{"name":"NRRINC","comment":"Cool post!","parent_id":"0","date":"3 days ago","id":"777","auth":true,"isOP":true},{"name":"NRRINC","comment":"Thank you!","parent_id":"777","date":"29 seconds ago","id":"783","auth":true,"isOP":true},{"name":"NRRINC","comment":"reply of a reply","parent_id":"783","date":"16 seconds ago","id":"784","auth":true,"isOP":true}]

```

<hr>

```php

//this json is just a comment count.
[{"type":"total","count":4}]

```

end result expected:
<br>
<i>this is upcoming project Dino Portal</i>
<br>
![image](https://user-images.githubusercontent.com/54533608/172410729-29cdf0c7-6b37-4dd8-aa23-aa1eba5abc49.png)
