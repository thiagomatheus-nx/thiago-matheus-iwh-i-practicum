require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Please DO NOT INCLUDE the private app access token in your repo.
// * Store it in a .env file as PRIVATE_APP_ACCESS
const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS || '';

// Custom Object type ID - replace with your actual custom object schema ID
const CUSTOM_OBJECT_TYPE = process.env.CUSTOM_OBJECT_TYPE || '2-PLACEHOLDER';

// ROUTE 1 - Homepage: GET all custom object records and render the homepage template
app.get('/', async (req, res) => {
      const url = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}?properties=name,species,bio&limit=100`;
      const headers = {
              Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
              'Content-Type': 'application/json'
      };
      try {
              const resp = await axios.get(url, { headers });
              const data = resp.data.results;
              res.render('homepage', {
                        title: 'My Pets | Integrating With HubSpot I Practicum',
                        data
              });
      } catch (error) {
              console.error(error);
              res.status(500).send('Error fetching custom object data.');
      }
});

// ROUTE 2 - GET form to create a new custom object record
app.get('/update-cobj', (req, res) => {
      res.render('updates', {
              title: 'Update Custom Object Form | Integrating With HubSpot I Practicum'
      });
});

// ROUTE 3 - POST form data to create a new custom object record, then redirect to homepage
app.post('/update-cobj', async (req, res) => {
      const { name, species, bio } = req.body;
      const newRecord = {
              properties: {
                        name,
                        species,
                        bio
              }
      };
      const url = `https://api.hubapi.com/crm/v3/objects/${CUSTOM_OBJECT_TYPE}`;
      const headers = {
              Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
              'Content-Type': 'application/json'
      };
      try {
              await axios.post(url, newRecord, { headers });
              res.redirect('/');
      } catch (error) {
              console.error(error);
              res.status(500).send('Error creating custom object record.');
      }
});

// Localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));
