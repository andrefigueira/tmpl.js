tmpl.js
=======

Super simple jQuery templating

tmpl.js is for simple jQuery templating, ever had to do:

`html += '<div class="somthing"> ' + something + '</div>';`

Can get real messy real quick right? I wrote this simple jQuery plugin, This is by no means a complete templating system. This is just something simple that can be built upon. But it gets a basic job done and for many that's all that's needed.

##Usage

1- Include the script on your page.

`<script src="tmpl/tmpl.js"></script>`

2- Create a templates folder (by default the folder will be /templates/)

3- Create your template and copy it to the templates folder (Note double curly braces)

`<div class="something">{{placeholder1}}</div>`

4- Initiate the plugin when you need templating

5- Set the template you need, no extension needed you can override 

`var template = $().tmpl('html-file-name'); `

6- Parse your data to the template

`var html = template.parse({placeholder1: 'The thing I want to put there'});`

7- Now you have the html you need with your dynamic content loaded do as you will...

##Parameters

`templateDir`

You can change the default templates directory to anything you like.

Default: /templates/

`extension`

Any file type will work, html is the default as it's html that is the main thing tmpl was made for templating

Default: 'html'

`regex`

This matches double curly braces but you can obviosly match whatever you like

Default: '/\{\{(.*?)\}\}/g'

`callback`

Callback parameter for you to run something upon completion of getting the template.

Default: function(){}
