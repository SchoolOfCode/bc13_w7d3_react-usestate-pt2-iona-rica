# React useState Workshop - Afternoon Tasks

For these tasks, we're going to be splitting everything down into individual components so that we can get used to writing our apps in this way.

You'll be building a font viewer app that has an `Input` component where a user can type in text. That text will be stored in a `text` state so you can display that same text in different fonts in a list of `Item` components on the page. You'll want to end up being able to see the user's input (that same text) in multiple different fonts.

## Task 1

**1.1:**

👉 For this task, we've again given you the React app premade, so all you need to do is install the Node modules as usual.

**1.2**

If you look at the file tree, you'll see that you have a `components` folder an `App` folder and two other folder's along side it. This is the way we advise that you organise your React apps; all your components should have their own folder inside the `components` folder.

**1.3**

👉 Inside the Input folder in the `index.js` file, you're going to create a new component, which means you need to do three key things:

1. Import React into the file.
2. Create a new functional component called `Input` that will return JSX (we'll come back to the specifics of this in the next part).
3. Export that function as a default export.

Remember, the `Input` component's function name _must_ be capitalized as it's a component.

**1.4**

👉 In that `Input` component's function, return an `<input type="text">` element in JSX; you'll use this later to take in some text.

**1.5**

👉 Now repeat those steps again (making a new component called `Item` in the Item folder under index.js and then steps one to three in task 1.3) but this time for a new component called `Item` that returns a list item (`<li>`) element in JSX instead of an input element.

## Task 2

**2.1**

👉 In [App.js](./src/components/App/App.js), import those two components that we just made (`Input` and `Item`) into this file so that you can use them at the App level.

**2.2**

👉 Now return both of those components within the JSX in `App` and load your app up in your browser. (Don't forget what you need to do in order to see a local version of your React app in the browser - it's different from loading a normal HTML file.)

On the page in your browser, you should see your input field and an empty bullet point.

**2.3**

Now, we're going to make those components actually do something.

👉 Still in `App.js`, create a piece of state called `text`. Don't forget to use the 'set' convention when you're making the functionality that will eventually change the state! Set the initial state to be an empty string (so that the value of the state is an empty string when the page is first loaded).

**2.4**

👉 For the function you'll use to change this state, create a new function within your `App` component's function underneath where you defined your state called `handleChange`, similar to how you did the `handleClick` function from this morning's activity. This function needs to  change the state of  `text`  to whatever value the user inputs into the input field.

    (Don't forget what we learned in JavaScript to get the value that the user enters in an input field! If you have forgotten though, you can Google for a reminder.)

**2.5**

Next, we're going to hand down that `text` state as **props** to the two components.

👉 When you're deciding what you need to hand down to which component, draw out a component tree like we did in the lecture and then plan out which component needs what (the `text` state itself and/or the `handleChange` function that changes that state).

👉 Once you've made your plan, hand your props into your `Input` and `Item` components. If you need a refresher on using props, you can review [the React docs](https://reactjs.org/docs/components-and-props.html) or Google for other resources.

## Task 3

**3.1**

The last thing we're going to do is prove the power of reusable components using fonts!

👉 In the `Item` component, **take in** `font` to the function as a prop. Hand `font` in to some inline styling into the `<li>` JSX tag by doing `` style={{fontFamily: `${font}`}} ``.

**3.2**

👉 Back at the app level, add at least two other items by reusing your `Item` component.

👉 For each one, **hand in** a prop of `font`; in each instance of the `Item`'s `font` prop, hand in a different font's name of your choice (just like the font names you'd use in your CSS normally) to each `Item`. Your objective is to have each `Item` render the same text that the user inputs in a different font.

Now load up your app again in the browser, type in a word, and bask in the glory of your React typeface extravaganza!
