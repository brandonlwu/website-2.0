// Contact form backend for the /connect page.
// Deployed as a Google Apps Script web app; emails each submission to TO_EMAIL
// from the Gmail account that owns the deployment. See README.md in this folder.

const TO_EMAIL = 'brandonlwu02@gmail.com';
const PLANTS = ['sequioa', 'agave', 'cactus'];
const MAX_EMAILS_PER_HOUR = 20;

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Honeypot: real visitors never see this field, bots fill it in.
    // Pretend it worked so bots don't retry.
    if (data.website) return respond({ ok: true });

    const name = oneLine(clean(data.name, 100));
    const email = oneLine(clean(data.email, 200));
    const message = clean(data.message, 5000);
    const plant = oneLine(clean(data.plant, 20));

    if (!name || !email || PLANTS.indexOf(plant) === -1) {
      return respond({ ok: false, error: 'Missing name, email, or plant.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return respond({ ok: false, error: 'Invalid email address.' });
    }
    if (!takeRateLimitSlot()) {
      return respond({ ok: false, error: 'Too many messages right now. Please try again later.' });
    }

    MailApp.sendEmail({
      to: TO_EMAIL,
      replyTo: email,
      name: 'brandonlwu.com',
      subject: 'New hello from ' + name + ' (a ' + plant + ')',
      body:
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Plant: ' + plant + '\n\n' +
        'Message:\n' + (message || '(no message)') + '\n\n' +
        '— Sent from the Connect page on brandonlwu.com. Hit reply to respond.',
    });

    return respond({ ok: true });
  } catch (err) {
    console.error(err);
    return respond({ ok: false, error: 'Something went wrong.' });
  }
}

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

// Collapse line breaks so fields used in the subject/headers stay on one line.
function oneLine(value) {
  return value.replace(/[\r\n]+/g, ' ');
}

// Allows at most MAX_EMAILS_PER_HOUR sends per clock hour, across all visitors.
// The count lives in Script Properties; the lock keeps simultaneous requests
// from both reading the same count and slipping past the limit.
function takeRateLimitSlot() {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const props = PropertiesService.getScriptProperties();
    const hour = String(Math.floor(Date.now() / 3600000));
    const stored = JSON.parse(props.getProperty('rateLimit') || '{}');
    const count = stored.hour === hour ? stored.count : 0;
    if (count >= MAX_EMAILS_PER_HOUR) return false;
    props.setProperty('rateLimit', JSON.stringify({ hour: hour, count: count + 1 }));
    return true;
  } finally {
    lock.releaseLock();
  }
}

function respond(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
