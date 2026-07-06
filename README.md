# LoginForm

A simple login form built with **HTML**, **CSS**, and **JavaScript**.

**Live demo:** https://loginform012345.netlify.app/

---

## What is this project?

This is a **frontend login form** with client-side validation.

It is **not** a real authentication system. There is no server, no database, and no user account check. The button **Invia** checks if the email and password are valid and shows an error message if they are not.

---

## How it works

1. The user fills in **Email** and **Password**
2. The user clicks **Invia**
3. JavaScript runs `validationData()` in `index.js`
4. If the input is wrong → an error message appears below the form
5. If the input is correct → the red borders are removed and the error message is cleared

### Validation rules

| Input | Rule | Error message |
|-------|------|---------------|
| Empty fields | Both email and password are required | *Inserire tutti i campi* |
| Email | Must contain `@` | *I campi inseriti non sono validi!* |
| Password | Must be between 8 and 32 characters | *Inserisci una password compresa tra 8 e 32 caratteri* |
| Valid input | No errors | Error message disappears |

---

## How to test the project

### Option 1 — Live site
Open https://loginform012345.netlify.app/ in your browser.

### Option 2 — Run locally
1. Clone this repository
2. Open `index.html` in your browser (or use Live Server in VS Code)

### Test cases

Try these examples to see how the form reacts:

| Email | Password | Expected result |
|-------|----------|-----------------|
| *(empty)* | *(empty)* | Error: *Inserire tutti i campi* |
| `test` | `12345678` | Error: email must contain `@` |
| `test@email.com` | `123` | Error: password too short |
| `test@email.com` | `password123` | No error — form is valid |

> **Note:** When the form is valid, nothing else happens on screen because this project only validates the input. It does not log the user in or redirect to another page.

---

## Project structure

```
LoginForm/
├── index.html    # Form layout (email, password, submit button)
├── style.css     # Styles and animations
├── index.js      # Form validation logic
└── README.md     # This file
```

---

## Technologies used

- HTML5
- CSS3 (flexbox, hover animations, CSS variables)
- JavaScript (FormData, event listeners, DOM manipulation)

---

## What I learned

- How to build a form with HTML
- How to style a page with CSS
- How to validate user input with JavaScript
- How to deploy a static site with GitHub and Netlify

---

## Author

**KIJtN08** — PCTO school project
