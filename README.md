# AngularConsumingSpring
Angular Web Site que consume un REST spring.


# web.config
Sobreescribe el ruteo por defecto de iis.
  http://localhost:port/test 
  IIS buscara un archivo o carpeta con el nombre "test" pero no existe por lo cual lanzara un error,
  pero la ruta /test si esta mapeado en la app angular "/{test.component}"
  
En web.config se agrego una regla que redirige cualquier url "loacalhost:port/*" a la raiz principal "/" con la ruta parametro "test"
asi angular puede interpretar esta ruta.
  http://localhost:port/test
  Ahora iis redirige a la ruta de angular /{test.component}
