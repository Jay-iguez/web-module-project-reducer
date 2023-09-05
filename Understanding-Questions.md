# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.


When a user clicks on '1'... 

1. It's onClick is then invoked which passes it's synthetic event object to 'eventHandler' found in AppJS, which is the function that was passed as the 'onClick' for '1'.

2. Within 'eventHandler', it invokes the dispatch function or in my code's case 'calculatorValueDispatch' - which then as a result of being called inside of it, 'addOne' is then called or invoked.

3. Within 'addOne', it returns an action object with the type 'ACTIONS.ADD_ONE' but no payload. This inturn becomes the argument sent to the dispatch function 'calculatorValueDispatch'

4. Inside the reducer, it cross-examines the action.type based on what 'calculatorValueDispatch' returned. The particular action.type at this time is 'ACTIONS.ADD_ONE'. It matches the case with the same action.type and then sets the state total to a copy of itself plus 1.

5. React then now knows state just changed, so it re-renders the DOM to now paint the change of state that occured. 
...

* TotalDisplay shows the total plus 1.
