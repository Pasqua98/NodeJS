Run 
$ npm install express-generator -g
To install the package generator then
express <flags>
To init a project template. Refer to teh following flags for customization.
 -h, --help          output usage information
        --version       output the version number
    -e, --ejs           add ejs engine support
        --hbs           add handlebars engine support
        --pug           add pug engine support
    -H, --hogan         add hogan.js engine support
    -v, --view <engine> add view <engine> support (ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

Then bind the port you wish to use adding in app.js

app.listen(8080,function () {
  console.log("Connection established");
});


https://expressjs.com/en/starter/generator.html
