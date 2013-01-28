About
=======

DigiPIN is a randomized digital PIN entry tool for websites written in javascript using jQuery. DigiPIN allows users to more securely enter their PIN by avoiding keyboard input and thus reducing the risk from malicious programs such as keyloggers.

DigiPin also employs a keypad which randomizes the location of the numbers befor every input.

Currently only one DigiPIN can be used per page, this will change in the next day or two.

DigiPIN is licensed under the MIT license.

Using
-----
Prerequisits: jQuery Library v. 1.4.2 or greater

First, include DigiPIN as well as a compatible version of jQuery (see above).

```html
<script src="http://code.jquery.com/jquery-1.9.0.min.js"></script>
<script src="test.js"></script>
```

Then just initialize DigiPIN on a text input element.

```html
<script>
$(document).ready(function() {
  $('#input').digipin();
});
</script>
```

