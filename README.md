En este ejercicio intentaremos pasar este repositorio local a gitHub.
Contrario a como hicimos antes de crear el repositorio en gitHub, ahora subiremos este desde la PC junto con sus commits locales

Primero agregamos el proyecto como un repostorio usando git init, hacemos los cambios necesarios y los subimos con git commit
Dentro de gitHub creamos el repositorio donde vamos a sincronizar todo, debe estra vacio y sin ningun archivo (desmarcar la opcion de crear un README.md, ya que contara como un commit y habra fallos al sincronizar el histoiral de commits locales con el del repositorio en la nube).
Utilizamos git remote para ver que repositorios estan aociados a nuestro repo local. Como estos no estan sincronizados utilizamos el siguente comando para agregarlos:
git remote add origin [direccionRepositorio]
"origin" hace referenca al repositorio remoto en GitHub, y es donde se guardarán los commits locales cuando hagamos un push.
Ahora debemos subir los commits del repo local con push. Pero primero vinculamos el branch local con el de gitHub, para que sepa donde subir los commits
git push --set-upstream origin master
Ahora si usamos git oush para sincronizar los commit locales en el repo remoto.
--
Esta parte del archivo esta modificada desde el repositorio remoto (gitHub).
Desde la terminal haremos git pull para obtener los cambios realizados desde aca.
--
