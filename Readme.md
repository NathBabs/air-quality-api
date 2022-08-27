# Air Quality API

This API gets the Air Quality for an area, when supplied the longitude and latitude and also finds the time at when Paris is most polluted;
<br>
It also periodically gets the pollution stats for Paris (every minute) and stores it in a database.
<br><br>

### Getting Started

Clone the repo <br>

```bash
git clone https://github.com/NathBabs/air-quality-api
```

<br>

cd into project directory

```bash
cd air-quality-api
```

<br>

Run the following to install the project's dependencies

```bash
npm install
```

<br>

create a `.env` file for environment variables

```bash
touch .env
```

<br>

Add values for `PORT` and `MONGODB_URI` and `IQ_API_KEY` (this is the api key of your account gotten from [https://www.iqair.com/fr/dashboard/api])

```env
PORT=3000
MONGODB_URI=
IQ_API_KEY=
```

<br>

### Run

Run the following command to get the program started

```bash
npm start
```

<br>

### Documentation

Documentation for the endpoints can be viewed at

`http://localhost:3000/api-docs`

<br>

## Tests

Run the following command to run the tests

```bash
npm run test
```
