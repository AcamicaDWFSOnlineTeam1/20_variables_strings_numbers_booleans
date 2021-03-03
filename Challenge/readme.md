Crea una rama de master, el nombre de su rama debe tener la siguiente estructura:
ch_nombre_apellidoPaterno_appelidoMaterno
ejemplo: ch_angel_perez_perez

Crea un directorio cuyo nombre debe tener la siguiente estructura:  
nombre_apellidoPaterno_appelidoMaterno  
ejemplo: angel_perez_perez  

Dentro de este directorio cargar el o los archivos de la solución al challengue.


Ejemplo de comandos de git en consola
```
cd 20_variables_strings_numbers_booleans
git checkout master
git checkout -b ch_ange_perez_perez
mkdir angel_perez_perez
cd angel_perez_perez
touch script.js
git add *
git commit -m "Solución challenge"
git push origin ch_ange_perez_perez
```

# Challenge
Crea un HTML y mediante javascript guarda en una variable tu nombre y en otra tu apellido.  
Con la función alert muestra tu nombre y apellido concatenados.
