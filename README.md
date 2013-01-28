About
=======

DigiPIN is a randomized digital PIN entry tool for websites written in javascript using jQuery. DigiPIN allows users to more securely enter their PIN by avoiding keyboard input and thus reducing the risk from malicious programs such as keyloggers.

DigiPin also employs a keypad which randomizes the location of the numbers befor every input.

Currently only one DigiPIN can be used per page, this will change in the next day or two.

DigiPIN is licensed under the MIT license.

Using
-----
Prerequisits: jQuery Library v. 1.4.2 or greater - [jQuery can be acquired here](http://jquery.com)

First, include DigiPIN as well as a compatible version of jQuery (see above) and a DigiPIN CSS stylsheet. All except the jQuery Library can be found in the src folder. 

DigiPIN comes with 3 styles by default. A light, a dark, and a no background style. You can simply modify the css to change these files. I prefer the dark though.

```html
<link rel="stylesheet" href="css/digipin-style-dark.css" />
<script src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
<script src="digipin-0.1.0.min.js"></script>
```

Include the digipin div where you want it to appear on the page. By default it is a block style element with width = 160px and height = 170px.

```html
<div id="digipin"></div>
```

Then just initialize DigiPIN on a text input element.

```html
<script>
$(document).ready(function() {
  $('#input').digipin();
});
</script>
```

