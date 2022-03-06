# When In Rome

# Description

This app allows users to either enter a Roman Numeral or number that will then be converted to the other.

# Wireframe

![Wireframes](https://res.cloudinary.com/dn2x2ldxj/image/upload/v1646280373/Screen_Shot_2022-03-02_at_11.06.04_PM_mxukwb.png)

# Questions

## Roman Math

To implement the mathematical operations, I would first edit the form and create four additional buttons representing each operation and another input where the user can enter the second number. On the back end, I would set up a state that would update on click depending on which mathematical equation was selected as well as an additional state that would track the value of the second input. I would then set up conditional statements to run each respective mathematical equation depending on what was selected.

## Testing

I would test this code by doing some unit testing. According to the Next.js documentation, the most commonly used testing tools are: Cypress, Playwright, and Jest. The tool I would use for the unit testing would be Jest.

## Logging

To implement logging into the app, I would either look into Pino which is the logging package Next.js recommends or one of the pre-built logging integrations Vercel offers that are compatible with Next.js. From the list in Vercel, I would look into Logalert.

## Validation

After doing some research, I would install express-validator and validate the input fields to only either accept numbers or just the certain Roman numerals in uppercase, depending on which toggle state the user is in. For example, if the user is on the Number to Roman Numeral form, we would just allow the user to enter numbers. If the user enters any letter or symbols, the app should respond with an alert letting the user know what is wrong with the input they entered.

## Continuous Integration

Semaphore appears to be a great software that can facilitate continuous integration. This software integrates with GitHub, so when any new code is pushed into GitHub, Semaphore builds the code and runs automated test suites. If there is an error that is detected, we would get notified and we can then correct. If the code passes, Semaphore automatically initiates the next pipeline to deploy the new version and allows another developer to review the changes and then merge the new code into the master branch.
