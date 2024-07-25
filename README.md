## NodeJS with Redis Caching

1. Install redis on your local machine.
2. We can set the validity of Caching in redis in seconds.
3. redis GUI we can see the caching data.
4. caching not used in frequently changed data.
5. It will improve the system performmance(api)
6. Code work flow:
   i. config folder created the redis client connection and imported wherever is required.
   ii. In routes imported the cacheMiddleware if data already there in that return data otherwise call to controller.
   iii. controller will call to service/db get data and set into redis and returned the data to api. In next api call it will return from cache only.

```bash
# npm i
# nmp run start
```
