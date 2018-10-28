# Generate the cache ( mobile and desktop )for a WordPress site 

You site needs to have a sitemap.xml ( YOAST generated )

This could work for any other type of websites (didn't test yet) deppending on the strutcuture of the sitemap.xml


## install


```
npm install
``` 


## set an .env file 

set an .env file at the root of the folder 

```
PAGES_SITEMAP_URL=https://www.mysite.com/page-sitemap.xml
POSTS_SITEMAP_URL=https://www.mysite.com/post-sitemap.xml
```


## run

```
npm start
``` 
