# New Year Resolution Generator

A New-Year's themed Next.js Application created for the 2023 [Codedéx](https://www.codedex.io/) Holiday Hackathon. The app uses a Prisma database to inspire users to create and adopt new year's resolutions. Users can generate random resolutions and contribute their own, fostering a positive community for goal-setting.

* Check out [New Year Resolution Generator](https://new-year-resolution-generator-app.vercel.app/) on Vercel!

* Connect With Us:
<br />
[Sebastian Stovall](https://www.linkedin.com/in/sebastian-stovall-a17a8a211/) <br />
[James Askelson](https://www.linkedin.com/in/james-askelson-bb4b6928a/)

## Technologies Used

- **JavaScript:** The programming language that powers the dynamic behavior of the application.
- **Next.js:** A React framework for building server-rendered and statically generated web applications.
- **React:** A JavaScript library for building user interfaces.
- **Prisma ORM:** A modern database toolkit for Node.js and TypeScript.
<br /> <br />

![Splash Page](https://i.gyazo.com/bfc9ff4e86ce4a08236f7d7ee323532b.jpg)

## Getting Started

Follow these steps to set up and run the project on your local machine:
<br />

* Clone the repository to your local machine:
```bash
   git clone https://github.com/SebastianStovall/NewYearResolutionGenerator.git
```


1. install dependencies:
```bash
   npm install
```

2. PostgreSQL Installation Steps on Ubuntu
```bash
   sudo apt update
   sudo apt install postgresql
   # Hit Y and Enter
```

3.  Log in to postgres CLI
```bash
   sudo -u postgres psql
   # if you run into an error, restart ubuntu
   # if you get permission denied, run this command then do the above command again
```

4. generate prisma migration:
```bash
   npx prisma migrate dev --name init

   service postgresql service postgresql restart

   ### Display Current Databases
   \l

   ###  Display Users
   \du
```

5.  Create a User
```bash
   CREATE ROLE <username> WITH PASSWORD '<password>';
   #Run \du
   #New Username should be under 'ROLE NAME' column
   #List of roles should be 'Cannot login'
   #Empty object for the last column 'Member of'
```

6.  Create User Admin Privileges to Create a DB and to Login
```bash
   ALTER ROLE <username> WITH SUPERUSER;
   ALTER ROLE <username> WITH CREATEDB;
   ALTER ROLE <username> WITH LOGIN;
```

7.  Create Database
```bash
   CREATE DATABASE <db-name> WITH OWNER <username>;
   # \l to see the new database is created
```

8.  Connect Database to Project .env file
```bash
   DATABASE_URL="postgres://<PSQLusername>:<PSQLpassword>@localhost:5432/<postgresDBname>?schema=schema_name"
```

9.  Test The Database
```bash
   npx prisma migrate dev --name init
   npm run seed
   npm run dev
```

10. Ensure correct node version:
```bash
   nvm install 20.9
   nvm alias default 20.9
```

11. start the application:
```bash
   npm run dev
```
