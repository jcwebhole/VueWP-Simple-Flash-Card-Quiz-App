# Simple Flash Card Quiz App 
>Simple implementation of WP-REST API
Created using VueJS CDN and Bootstrap. 


## Usage
1. Open index.html on your browser
2. Type WordPress category slug in the text box
3. Click on "Take Quiz" Button
4. Enjoy the Game

## Files
* index.html > Simple HTML file handling the imports for VueJS and Bootstrap CDNs
* app.js > contains all the basic logic for the game and connection to the WordPress backend

## Code
**app.js**(*line 1*): `const backend_endpoint = 'http://nqub8.com/projects/wpdemo';`
*change backend_endpoint to your WordPress installation URL*
**app.js**(*line 13*): `max: 5,';`
*this is the maximum number of questions per quiz*


### Resources / Links
[![VueJS](https://vuejs.org/images/logo.png)](https://vuejs.org/)
[![WP-REST API](http://v2.wp-api.org/assets/images/banner.jpg)](http://v2.wp-api.org/)
[![WordPress](https://s.w.org/about/images/logos/wordpress-logo-hoz-rgb.png)](https://wordpress.org)

Created by: [Jason Bruno](https://jasonbruno.net)