# Multiview.js
![image](https://user-images.githubusercontent.com/54533608/194001464-9f13b08e-731d-4d50-b024-8a7dfa76be64.png)

*some comments been removed

test data (json responce via api)

> user data
```
{
"username":"__REMOVED__",
"user_id":"123456789",
"isloggedin":true,
"user_icon":"__REMOVED__.jpg",
"public_key":"3c850b0c02f70992c4d79cb1f78e1e9e9286e29d6e35abc8c143c4218bc25369",
"private_key":"__REMOVED__",
"post_csrf":"600e0113-aa0e-448c-93e8-69f8c45a635e",
"std":"vTDg_AtZuK14ohE6XZjbhIG4g9OdLYmQ47CwlEXOXWoLkN4c9Gq7N4y7E46w-4uEcIK9baTuxw7E3sfaHTDu5Pc9JpaUyp-Mwi"}
```
> post data
```
[{
"post_id":"IPGUSYi-fff",
"type":"text",
"title":"fff",
"images":"Array",
"post_body":"# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n> > ...by using additional greater-than signs right next to each other...\n> > >...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    \/\/ Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code \"fences\"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\n<script>\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n<\/script>\n```\n\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## Links\n\n[link text](http:\/\/e.e.e)\n\n[link with title](http:\/\/e.e\/e\/demo\/ \"title text!\")\n\nAutoconverted link https:\/\/e.e\/e\/e(enable e)",
"unix_time":"1662777609",
"self":{
  "self_icon":"__REMOVED__",
  "self_username":"__REMOVED__",
  "self_id":"123456789",
  "auth":true,
  "isloggedin":true
 },
"sha2":"e022601b792499958c54659c11d8eb04d85e61c87924f5995396df7f017c5d0d",
"comments":{
 "count":4
},
"gen":{
 "gentime":1662893247,
 "genSERVER":"V7_r-US-S1",
 "SSR_id":"IPGUSYi-fff"
},
"like":{
 "liked":true,
 "disliked":false,
 "likes":"1","dislikes":"0"
 },
"author":{
 "icon":"__REMOVED__",
  "name":"__REMOVED__",
  "id":"123456789"
 }}]
```
> comment data
```
[{"name":"__REMOVED__","comment":"test3","parent_id":"0","date":"26 seconds ago","id":"920","auth":true,"isOP":true,"user_icon":"__REMOVED__"},{"name":"__REMOVED__","comment":"Test 1","parent_id":"0","date":"37 seconds ago","id":"918","auth":true,"isOP":true,"user_icon":"__REMOVED__"},{"name":"__REMOVED__","comment":"tesy2","parent_id":"918","date":"30 seconds ago","id":"919","auth":true,"isOP":true,"user_icon":"__REMOVED__"},{"name":"__REMOVED__","comment":"test4","parent_id":"919","date":"21 seconds ago","id":"921","auth":true,"isOP":true,"user_icon":"__REMOVED__"}]
```

Goals of V2 of Multiview.js:
- Rewrite with cleaner code (i.e. <s>not reinserting html when it can be reused</s> <-- done)
- <s>Use better logic in terms of "Clicking outside of the frame" and loading</s>  Done as of <a href="https://git.nrrinc.net/multiview.js/commit/841d941b89015b7c2855c6c5981979f726d0824e">841d94</a>
- Better looking UI
- <s>Better data loading (i.e. self json, possible caching posts for offline use)</s>
- <s>revise old methods of script loading</s> Done as of <a href="https://git.nrrinc.net/multiview.js/commit/841d941b89015b7c2855c6c5981979f726d0824e">841d94</a> and implemented<a href="https://github.com/Nolanrulesroblox/multiview.js/blob/e475032e4495303e48af76f62d61b7b09b7bc126/version2/multiview.js#L155"> here</a>
- <s>revise old methods of scripts (aka get rid of checktag)</s>
- <s>send less data over the internet</s>
- <s>use less memeory</s>
- <s>better tracking</s>? (GDPR respecting) <-- front end tracking non GDPR respecting, once data is processed, GDPR is respected <---- done




## NOTICE:

this script is <ins> UNSTABLE </ins>.  use at your own risk.<s> in fact, dont use it at all, just use v1 if you <em> really </em> need to use it.</s><br>
<sub><sup>multiview.js is alot more stable now.</sup><sub>

<em>also changes wont be listed till later as, im too busy writing stuff to think</em>
