# JBBT

Una plantilla elemental para comenzar un proyecto basado en Bootstrap usando Jekyll. Ideal para maketear o comenzar desde cero algo que será mucho más grande...

## Jekyll Bootstrap Bower Template 

### Usa

- [Jekyll](http://jekyllrb.com/)
- [Bower](http://bower.io/)
- [Bootstrap](http://getbootstrap.com/)
- [Fontawsome](http://fortawesome.github.io/Font-Awesome/)

### Instrucciones para Mac

Hay que tener el compilador, que instala X Code.

	xcode-select --install

Es recomendable usar [Homebrew](http://brew.sh/) para manejar las librerías y programas faltantes en Mac.

	ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

Ahora, instalar node (usando homebrew es más fácil)

	brew install node

Instalar bower npm

	install -g bower 

Instalar LESS (usando node paquet manager *npm*) 

	npm install less 


### Utilizando este Repo
Para modificar las dependencias y usar otros paquetes se debe modificar el archivo **bower.json**

Este repositorio tiene también un MAKEFILE que permite ejecutar comandos comunes, para, por ejemplo, compilar las CSS a partir de los archivos less. Para esto sólo debes ejecutar:
	
	make less

o

	make css

Para iniciar el servidor jekyll:

	make server