# UseEffect and Eventlisteners in React 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# This is a quick tip for people new to useEffect and eventlisteners.
When you use 'addEventlistener(params)' in react it good practise to remove the event listener with 'removeEventListener(params)' when the component is unmounted
I notice many developers are not doing this and it can lead to performance issues and bugs in some cases.
