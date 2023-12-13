# New Year Resolution Generator

Welcome to the Newyear Resolution Generator! This project is designed to help you generate and track your new year resolutions.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm: [npm - Node Package Manager](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/SebastianStovall/NewYearResolutionGenerator.git


### Usage

1. install dependencies:

   ```bash
   npm install

2. PostgreSQL Installation Steps on Ubuntu
```
sudo apt update
sudo apt install postgresql
# Hit Y and Enter
```

3.  Log in to postgres CLI
```
sudo -u postgres psql

# if you run into an error, restart ubuntu
# if you get permission denied, run this command then do the above command again

service postgresql service postgresql restart
```
### Display Current Databases
```
\l
```

###  Display Users
```
\du
```

4.  Create a User
```
CREATE ROLE <username> WITH PASSWORD '<password>';

#Run \du

#New Username should be under 'ROLE NAME' column

#List of roles should be 'Cannot login'

#Empty object for the last column 'Member of'
```

5.  Create User Admin Privileges to Create a DB and to Login
```
ALTER ROLE <username> WITH SUPERUSER;
ALTER ROLE <username> WITH CREATEDB;
ALTER ROLE <username> WITH LOGIN;
```

6.  Create Database
```
CREATE DATABASE <db-name> WITH OWNER <username>;
# \l to see the new database is created
```

7.  Connect Database to Project .env file
```
DATABASE_URL="postgres://<PSQLusername>:<PSQLpassword>@localhost:5432/<postgresDBname>?schema=schema_name"
```

8.  Test The Database
```
npx prisma migrate dev --name init

npm run seed

npm run dev

```


9. start the application:

   ```bash
   npm run dev
