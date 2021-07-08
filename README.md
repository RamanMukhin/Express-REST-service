# RS School REST service

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Downloading

```
git clone https://github.com/RamanMukhin/Express-REST-service.git
```

## go to the Express-REST-service folder

```
cd ./Express-REST-service
```

## Installing NPM modules

```
npm install
```

## Running application

If you want to run the application locally, you must first have a postgress database running.
Next, you need to specify the parameters for connecting to the database in the .env file.
After completing these points, you can start launching the application.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

However, it is better to immediately launch the application in Docker.
How to do it - read below.

## Running application in DOCKER
1. If you want to see logs run in terminal, run  
```
docker compose up
```
else run 
```
docker compose up -d
```
2. Now it works! 
3. To stop the application after comand **docker compose up** enter in terminal 
```
Ctrl+C
```
4. To stop the application after comand **docker compose up -d** enter in terminal 
```
docer compose down
```
5. Now it stops!
6. If you want to fix or add something in code - do it, and then run 
```
docker compose build
```
7. If you want to run the application again - see the paragraph above (1).

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Tables comparing performance of Nestjs express vs Nestjs fastify

Full test results can be found in the corresponding files in the  **stressTestResults** folder.
# Express
**Summary**

|                    |       |
| :-                 | :-    |
|Test duration       |190 sec|
|Scenarios created   |1366   |
|Scenarios completed |1366   |

**Scenario counts**

|                                         |             |
| :-                                      | :-          |
|Get all users                            |263 (19.253%)|
|Create a new user and then delete him    |292 (21.376%)|
|Create a new user and then get him by id |291 (21.303%)|
|Create a new user                        |249 (18.228%)|
|Create a new user and then update him    |271 (19.839%)|

**Overall Latency Distribution**

|Min    |max       |median   |P95       |P99      |
| :-    | :-       | :-      | :-       | :-      |
|4 msec |3144 msec |250 msec |1167 msec |1837 msec|

# Fastify
**Summary**

|                    |        |
| :-                 | :-     |
|Test duration       |190 sec |
|Scenarios created   |1355    |
|Scenarios completed |1355    |

**Scenario counts**

|                                         |             |
| :-                                      | :-          |
|Get all users                            |275 (20.295%)|
|Create a new user and then delete him    |273 (20.148%)|
|Create a new user and then get him by id |280 (20.664%)|
|Create a new user                        |268 (19.779%)|
|Create a new user and then update him    |259 (19.114%)|

**Overall Latency Distribution**

|Min    |max       |median   |P95       |P99      |
| :-    | :-       | :-      | :-       | :-      |
|3 msec |1448 msec |122 msec |421 msec  |695 msec |