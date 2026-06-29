# Integrating With HubSpot I: Foundations Practicum
## Thiago Matheus — HubSpot Academy Practicum Repository

This repository is the completed practicum submission for the **Integrating With HubSpot I: Foundations** certification.

---

## Custom Object: Pets

This practicum uses a custom object called **Pets** with the following properties:
- `name` (string) — The name of the pet
- `species` (string) — The species/type of pet (e.g., Dog, Cat, Bird)
- `bio` (string) — A short biography of the pet

---

## Custom Object List View

**Put your HubSpot developer test account custom objects URL link here:**
https://app.hubspot.com/contacts/YOUR-ACCOUNT-ID/objects/YOUR-CUSTOM-OBJECT-ID/views/all/list

> ⚠️ Replace YOUR-ACCOUNT-ID and YOUR-CUSTOM-OBJECT-ID with your actual test account values after setting up the HubSpot developer test account.

---

## Setup Instructions

1. Clone this repository to your local environment
2. Create a `.env` file in the root directory with the following variables:
   ```
   PRIVATE_APP_ACCESS=your_private_app_access_token_here
   CUSTOM_OBJECT_TYPE=your_custom_object_type_id_here
   ```
3. Run `npm install` to install dependencies
4. Run `node index.js` to start the server
5. Open `http://localhost:3000` in your browser

---

## Routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Homepage — displays all Pets records in a table |
| GET | `/update-cobj` | Form to add a new Pet record |
| POST | `/update-cobj` | Submits the form and creates a new record, then redirects to homepage |

---

## Technologies Used

- Node.js
- Express
- Axios
- Pug (template engine)
- dotenv
- HubSpot CRM API v3

---

## Tips

- Commit to your repository often.
- The subject of the custom object is up to you. Feel free to get creative!
- Please create a test account. **DO NOT include your private app access token in your repo.**
- Ensure you re-merge any working branches into the main branch.
