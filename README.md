# Akan Name Generator

## Project Description
The Akan Name Generator is a web application that generates traditional Ghanaian Akan names based on the day of the week a user was born. In Akan culture, every person is given a name corresponding to their birth day. Users enter their name, date of birth, and gender to discover their unique Akan name.

## Author(s)
- **Lerionka Olentiki**

## Setup Instructions
1. Clone or download this repository to your local machine.
2. Make sure all three files are in the same folder:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
4. No installations or dependencies required — it runs entirely in the browser.

## BDD (Behavior-Driven Development)

**Feature: Generate Akan Name**

```
Scenario: User submits valid birth details
  Given the user is on the Akan Name Generator page
  When they enter their name, day, month, year, and gender
  And they click "Generate Name"
  Then they should see their Akan name displayed on the screen

Scenario: User submits incomplete form
  Given the user is on the Akan Name Generator page
  When they leave one or more fields empty
  And they click "Generate Name"
  Then they should see "Please fill in all fields."

Scenario: Female user born on a Friday
  Given the user selects "Female" as gender
  When their birth date falls on a Friday
  Then their Akan name should be "Afua"

Scenario: Male user born on a Wednesday
  Given the user selects "Male" as gender
  When their birth date falls on a Wednesday
  Then their Akan name should be "Kwaku"
```

## Technologies Used
- **HTML5** — Page structure and form inputs
- **CSS3** — Styling and layout
- **JavaScript (Vanilla)** — Date calculation logic using Zeller's Congruence formula

## Contact Information
For questions or feedback, please reach out to:
- **Author:** Lerionka Olentiki
- **Email:** lekurialerionkaolentiki@gmail.com

## License & Copyright
© 2026 Akan Name Generator. All rights reserved by Lerionka Olentiki.
