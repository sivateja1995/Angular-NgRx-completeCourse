# Notes

1. In this project we have authentication module, courses module
2. Here authentication module is eagerly loded and courses module is lazy loaded
3. we are going to implement the NGRX store in this project

---

## important commands

`for adding the store : ng add @ngrx/store`  
 `for adding the devtools : ng add @ngrx/store-devtools`

`add the modules in app.module.ts`

StoreModule.forRoot(reducers, {metaReducers})  
StoreDevtoolsModule.instrument({maxAge:25, logOnly:environment.production})

---

## configuring NgRx feature module using NgRx schematics

`for creating store module: ng generate store auth/Auth --module=auth.module.ts`

---

## actions concept in the ngrx

1. for creating the action on must create seperate the file.
2. the source of the action must be unique therefore it is defined as the place of origin in [] brackets and action type.
3. we are going to add the utility function props.
4. after triggering the login we can se the action part details in redux tools.
5. the state remains empty.
6. So to summarize the store, it's like an in-memory database that contains data that is going to get

---

## How to query a store data.

1. query the data enable and disable the login and logout button.
2. add subscribe method to the store and that is injected.
3. now problem is that up on refresh the value is chnaged and data is not getting fetched in the memory.
4. in order to overcome this we use the selector.

## How to add the feature selectors

1. in the redcuer add the featureKeyword 'authFeatureKey'
2. now refoactor the code in the selector.
3. change the logout function.

## adding the auth gaurd service

1. created the authgaurd service and injected in the routes section.
2. we can find route section the app.module.ts
3. simple logic get the selector in pipe and return it to canActivate function.

## adding the ngRx effects.

1. we are trying to store the changes made in the frontend along with the ui changes.
2. effects help to update the backend with perfectly syncronizing the data.
3. will add the effects to the to app module and feature modules and also create file for the effects.

## understanding the ngrx effects simple

1. created the effects file and imported into the root module.
2. now import actions and subscribe the actions and save them in the local storage or the cookie storage.

## ngrx effects step by step implementation.

1. use pipe and ofType operator and subscribe the actions.


## NgRx Effects - fetching the data from the backend. 

1.
