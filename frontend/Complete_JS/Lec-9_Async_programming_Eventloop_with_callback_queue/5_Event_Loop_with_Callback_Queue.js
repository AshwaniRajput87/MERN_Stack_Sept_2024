/**

  Browser Env or Node JS env:

  - JS engine works on a single thread because it is haveing single call stack. Provide the logic only but Web APIs the features.

  - Web API features:
    - setTimeout,
    - clearTimeout
    - setInterval
    - clearInterval
    - console
    - document

  - callback queue:

     - When an async operations(like setTimeout, setInterval, events) is ready to execute , its call back function is placed inside the callback queue.

 - event loop: 
    - First it check call stack is empty or not and along with that it also check, is there any callback function available in the callback queue or not, based on this if the condition is true then it will push the cb fn from cb queue to call stack.



 */
