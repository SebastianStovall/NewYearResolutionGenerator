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

2. ensure sqlite3 is installed on your machine:

   ```bash
   npm install -g sqlite3

2. generate prisma migration:

   ```bash
   npx prisma migrate dev --name init


3. seed the prisma database:

   ```bash
   npm run seed

4. start the application:

   ```bash
   npm run dev
