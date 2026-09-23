# Contact form backend (Google Apps Script)

`contact.gs` receives submissions from the Connect page (`src/components/Connect.js`)
and emails them to you through your own Gmail. It is not part of the React build.

## Deploying

1. Go to https://script.google.com, signed in as brandonlwu02@gmail.com, and click **New project**.
2. Replace the contents of `Code.gs` with `contact.gs` and save.
3. Click **Deploy → New deployment**, choose type **Web app**, and set:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy** and approve the permission prompt. Google will warn that the app
   is unverified; click **Advanced → Go to (project name)**, since it's your own script.
5. Copy the **Web app URL** (ends in `/exec`) into `FORM_ENDPOINT` in `src/components/Connect.js`.

## Updating the script later

Edit it in the Apps Script editor, then **Deploy → Manage deployments → ✏️ Edit →
Version: New version → Deploy**. This keeps the same URL. Creating a *new*
deployment instead would change the URL, and the site would need updating.
