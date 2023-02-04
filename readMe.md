# SAFEBODA API

#### A backend application that allows administrators to monitor drivers and passengers to book rides.

#### By **Bartholomew Kelly Egesa**

## Description

A administrator can log in and monitor rides. They can also add new drivers and suspend drivers

## Behavior Driven Development

| BEHAVIOR:Our program should handle |                                         Input Example When it receives                                          |   Output Example It should return   |
| ---------------------------------- | :-------------------------------------------------------------------------------------------------------------: | :---------------------------------: |
| Admin Login                        |                                 POST /admin/login `{email: '', 'password': ''}`                                 |            Auth headers             |
| Driver Addition                    |                                  POST /driver/ `{"name":"","phoneNumber":""}`                                   |         Driver information          |
| Driver Suspension                  |                                     POST /driver/:id/suspend id on request                                      |              code 204               |
| Driver retrieval                   |                                    GET /driver/ or /driver/:id id on request                                    |   Display a driver or all drivers   |
| Driver unsuspension                |                                           DELETE /driver/:id/suspend                                            |              code 204               |
| Passenger Addition                 |                                 POST /passenger/ `{"name":"","phoneNumber":""}`                                 |        Customer information         |
| Passenger retrieval                |                                        GET /passenger or /passenger/:id                                         | Display a customer or all customers |
| Ride Start                         | POST /ride/:passengerId/:rideId `{"passengerId": 5,"driverId": 40,"pickUpPoint": "00000","destPoint": "11111"}` |          Ride information           |
| Ride retrieval                     |                                       GET /ride or /ride/:id or /ongoing                                        | Display a ride or all ongoing rides |
| Ride stop                          |                                                 POST /ride/:id                                                  |                 204                 |

## Known Bugs

There are no known bugs

## Setup/Installation Requirements

- Setup git
- Clone the repository
- Ensure docker is installed
- Add an .env file
- Place the following variables:-

  ```DB_USER=''
  DB_HOST=''
  DB_NAME=''
  DB_PASSWORD=''
  DB_PORT=
  PORT=
  HASHKEY=""
  ADMIN_EMAIL=''
  ADMIN_PASSWORD=''
  DATABASE_URL='postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}'
  ```

- Execute docker-compose up

## Technologies Used

DEVELOPMENT

- JavaScript
- Node(Express)

DATABASE

- PostgreSQL

ORM

- PRISMA

TESTING

- JEST

CONTAINERIZATION

- Docker

## Support and contact details

You can contact me via Email at kelly.egesa@gmail.com or via +254726359282.

### License

_M.I.T_
Copyright (c)2021 **KELLY EGESA**
