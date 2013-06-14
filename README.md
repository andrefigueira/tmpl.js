tmpl.js
=======

Super simple jQuery templating

tmpl.js is for simple jQuery templating, ever had to do:

`html += '<div class="somthing"> ' + something + '</div>';`

Can get real messy real quick right? I wrote this simple jQuery plugin, This is by no means a complete templating system. This is just something simple that can be built upon. But it gets a basic job done and for many that's all that's needed.

##Usage

Include the script on your page.

`<script src="tmpl/tmpl.js"></script>`

Create a templates folder (by default the folder will be /templates/)

Create your template and copy it to the templates folder (Note double curly braces)

`<div class="something">{{placeholder1}}</div>`

Initiate the plugin when you need templating

Set the template you need, no extension needed you can override 

`var template = $().tmpl('html-file-name'); `

Parse your data to the template

`var html = template.parse({placeholder1: 'The thing I want to put there'});`

Now you have the html you need with your dynamic content loaded do as you will...
