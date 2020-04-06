# Planeteers

Captain Planet needs our help! With everything that's going on in the world today, a new generation of Planeteers has risen up. However, Captain Planet is too busy fighting eco-terrorists to implement a React application of their own and it is our job to help their organize their data!

## Setup

In our React application, the data about the new generation of Planeteers is in the `db.json` file. To mimic an API, we'll need to fire up a `json-server` using the following command:

```
  json-server -p 4000 --watch db.json
```

This command will fire up a `json-server` at 'http://localhost:4000' and following RESTful conventions, the list of our Planeteers can be found at 'http://localhost:4000/planeteers'.

After firing up our `json-server`, let's start our React application by running the following command:

```
  npm install && npm start
```

This command will download any Node Package we'll need as well as fire up our React server at 'http://localhost:3000'.


## Deliverables

1. When our React application is mounted, it should render out the list of Planeteers on the page, using the given Planeteer component.

    a) In addition to showing a Planeteer's name, twitter handle, picture, the Planeteer card should also show the proper _age_ of the Planeteer. In our `db.json`, we just have the year that the Planeteer was born. To calculate the age, first figure out how to get the current year in JavaScript. Once you figure that out, you can subtract the year that the Planeteer was born in to get the proper age.

    b) If a Planeteer is from the USA, the card should say "USA-based". Otherwise, the card should read "Working Overseas".

    c) The Planeteer component should, by default, render the bio of the Planeteer. However, when we click on an image of a Planeteer, the specific card that we clicked on should instead render the quote for that specific Planeteer in place of where the bio was. Consider how to dynamically toggle back and forth between the quote and bio for each of the cards.

2. Once you have the list of Planeteers rendering, build out the SearchBar functionality. As the user types in the SearchBar component, we'll want to dynamically render the list of Planeteers whose name or bio include the letters that are being typed. If there's no text in the SearchBar component, all the Planeteers from the database should be showing on the page.

3. After working on the SearchBar component, build out the functionality for the RandomButton component. Right now, when we press the RandomButton, a random Planeteer object who is not in the database gets logged to the console. However, the functionality that Captain Planet wants is that when we press the button, instead of logging the Planeteer the console, we want to render the Planeteer on the page. So, if Greta Thunberg gets logged to the console, we also want to see a Planeteer component for Greta Thunberg. You do not have to persist the Planeteer to the database.

If you are finished with these three deliverables, commit your code.

```
  git add .
  git commit -m 'done'
```

4. For the RandomButton, in addition to rendering the random Planeteer, have the new Planeteer persist in the backend. Because `json-server` does not have any validations, if you accidentally create a Planeteer object whose structure does not match the ones who were already in the database, you can simply erase the object in the file. Also, since we are getting a random Planeteer when we click on the button, it is fine to have duplicates in the database, as long as they have the same object structure, but different IDs.

5. Build the functionality to remove a Planeteer from the page. You will need to first put a button on the Planeteer component. When that delete button is clicked, you will need to remove the Planeteer component from the page. After you have that functionality, consider making it persist in your `json-server`. If you delete all the Planeteers when you are building this feature out, you can copy and paste the data from the `db-copy.json` into the `db.json` file.

6. In the SearchBar component, add a checkbox:

```html
  <label htmlFor="age">Sort By Age:</label>
  <input type="checkbox" id="age" name="age"/>
```

Build a functionality so that when the checkbox is checked, the Planeteers who are rendered on the page are sorted from youngest to oldest. When the checkbox is not checked, the order of the Planeteers on the page should go back to the way it is on the database. You should be able to both sort and filter the Planeteers on the page, so when you filter down the Planeteers using the SearchBar component and you then check the checkbox, all the filtered list of Planeteers should be sorted.
