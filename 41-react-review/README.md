# Notes

##Functional Vs Class Components

### Class
 - Lifecycle methods
 - State
 - Access to props via `this.props`

### Functional
  - No lifecycle methods
  - No state
  - Access to props via `props` (first argument of that functional component)

## Controlled Components
  - State controls the Input && the Input controls the state
  - Need to have a `value` attribute (or something equivalent) [This is how the state controls the input]
  - Need to have a `onChange` attribute [This is how the input controls the state]

## Inverse Data Flow
  - Parent defines a function
  - Parent sends the function definition down to the child
  - Event happens in the child
  - The event handler should invoke the function that was passed down with appropriate arguments
  - Parent now has access to information from the child

## Async React
  - Populate your state using `fetch` in `componentDidMount(){}`
