# Notes

1. In this project we have authentication module, courses module
2. Here authentication module is eagerly loded and courses module is lazy loaded
3. we are going to implement the NGRX store in this project

---

## important commands

``` for adding the store : ng add @ngrx/store ```  
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
