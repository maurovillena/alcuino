
.PHONY: less

install:
	bower install
	make dist

server:
	jekyll server --watch --baseurl=

less:
	lessc less/compiler.less css/style.css

css: less

dist:
	cp -R bower_components/fontawesome/fonts/. fonts/fontawesome
	cp bower_components/bootstrap/dist/js/bootstrap.min.js js
	cp bower_components/jquery/dist/jquery.min.js js
	cp bower_components/p5js/docs/js/p5.min.js js
	cp -R bower_components/p5js/lib/addons/. js