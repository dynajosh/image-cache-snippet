# image-cache-snippet
This snippet is for caching images locally in reactJS hence preventing the need for constantly querying the server for an image every time it is needed

In React, you can prevent an image from reloading every time you navigate to that page by caching the image. One way to do this is to use a caching strategy known as the "cache-first" strategy. This strategy involves checking if the image is already in the cache, and if so, using the cached version instead of fetching the image from the server.

In this example, we have an ImageComponent component that accepts props such as src and alt, which are used to set the src and alt attributes of the img tag.

The useEffect hook is used to fetch the image and store it in the cache if it's not already there. If the image is already in the cache, the cached version is used instead of fetching the image from the server.

The caches.match method is used to check if the image is already in the cache, and the caches.open method is used to open the cache and store the image if it's not already there.

By using this caching strategy, you can ensure that the image is only fetched from the server once, and that subsequent requests for the image are served from the cache, which can help to improve the performance of your application.
