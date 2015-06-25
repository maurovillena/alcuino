
.PHONY: less

install:
	bower install
	make dist

server:
	jekyll server --watch --baseurl=

less:
	lessc less/compiler.less css/style.css --clean-css

css: less

dist:
	cp -R bower_components/font-awesome/fonts fonts/font-awesome
	cp bower_components/bootstrap/dist/js/bootstrap.min.js js
	cp bower_components/jquery/dist/jquery.min.js js