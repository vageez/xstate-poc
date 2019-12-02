# Boilerplate React App
State Machine POC for Signer UI

States are declarative
onEntry: actions
onExit: actions
invoke: Any external services to call when we enter a state
on: Transitions available to a particular state, these transitions can only be called if we are in the state
guards: conditionals that we can use to create branches in our state chart
context: Provides a way to store our applications data
after: a timer tied to a state that will execute a transition based on a delay

Investigtion required for 
1. ...

2. Nested states running in parallel. Eg. SideBar State Machine, running inside Parent Application State Machine

3. Spawning States.

4. Testing libraries

5. Lazy Loading features behind featrure flags.
<!-- https://medium.com/@avinash.ega_47164/excluding-work-in-progress-features-from-your-production-builds-using-webpack-feature-flags-and-5909c38c9314 -->

<!-- https://webpack.js.org/plugins/define-plugin/ -->
Feature flags are defined in WEBPACK. They are available globally

<!-- https://webpack.js.org/plugins/define-plugin/#feature-flags -->
Enable/disable features in production/development build using feature flags.

Building app with feature enabled/disabled reflected in bundle size. :check:

We can hide unfinished features behind this flag. When defining XSTATE machine we can conditionally include new features. 
When rendering components, we can conditionally include them in the build by leveraging REACT Lazy and Suspense. 

6. Tree Shaking
XSTATE supports Tree shaking. 
