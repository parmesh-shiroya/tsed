---
meta:
 - name: description
   content: Use Passport.js with Express, TypeScript and Ts.ED. Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.
 - name: keywords
   content: ts.ed express typescript passport.js node.js javascript decorators
projects:   
 - title: Kit Passport.js
   href: https://github.com/TypedProject/tsed-example-passportjs
   src: /passportjs.png
 - title: Kit TypeORM
   href: https://github.com/TypedProject/tsed-example-typeorm
   src: /typeorm.png
 - title: Kit Azure AD
   href: https://github.com/TypedProject/tsed-example-passport-azure-ad
   src: /azure.png        
---
# Passport.js

<Banner class="--darken" src="http://www.passportjs.org/images/logo.svg" height="128" href="http://www.passportjs.org/"></Banner>

> Passport is authentication middleware for Node.js.

Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.
A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
  
<Projects type="examples"/>
  
## Installation

Before using the Passport, we need to install the [Passport.js](https://www.npmjs.com/package/passport) and the Passport-local.

```bash
npm install --save passport
```

## Configure your server

Add this configuration to your server:

<<< @/docs/tutorials/snippets/passport/server.ts

## Create a new Protocol

A Protocol is a special Ts.ED service which is used to declare a Passport Strategy and handle Passport lifecycle.

Here an example with the PassportLocal:

<Tabs class="-code">
  <Tab label="LoginLocalProtocol.ts">
  
<<< @/examples/passportjs/src/protocols/LoginLocalProtocol.ts

  </Tab>
  <Tab label="LoginLocalProtocol.spec.ts">
  
<<< @/examples/passportjs/src/protocols/LoginLocalProtocol.spec.ts

  </Tab>  
</Tabs>  

::: tip
For signup and basic flow you can checkout one of our examples:

<Projects type="examples"/>
:::

## Create the Passport controller

Create a new Passport controller as following:

<<< @/docs/tutorials/snippets/passport/PassportCtrl.ts

This controller will provide required all endpoints which will be used by the different protocols.

## Protect a route

@@Authorize@@ and @@Authenticate@@ decorator can be used as a Guard to protect your routes.

<<< @/docs/tutorials/snippets/passport/guard-ctrl.ts

## Basic Auth

It also possible to use the Basic Auth. To doing that, you have to create a Protocol based on `passport-http` strategy.

<<< @/examples/passportjs/src/protocols/BasicProtocol.ts

Then, add the protocol name on @@Authorize@@ decorator:

<<< @/docs/tutorials/snippets/passport/guard-basic-auth.ts

## Advanced Auth
### JWT

JWT auth scenario for example is different. The Strategy will produce a payload which contain data and jwt token. This information
aren't attached no the request and cannot be retrieve by using the default Ts.ED decorator.

To solve it, the `@tsed/passport` has two decorators @@Arg@@ and @@Args@@ to get argument given to the original verify function by the Strategy.

For example, the official `passport-jwt` documentation give this javascript code to configure the strategy:

<<< @/docs/tutorials/snippets/passport/OriginalJwtPassport.js

The example code can be written with Ts.ED as following:

<<< @/docs/tutorials/snippets/passport/JwtProtocol.ts

### Azure Bearer Auth

Azure bearer, use another scenario which require to return multiple argument. The `$onVerify` method accept an `Array` to return multiple value.

<<< @/docs/tutorials/snippets/passport/AzureBearerProtocol.ts

### Discord Auth

Discord passport give an example to refresh the token. To doing that you have to create a new Strategy and register with the refresh function from `passport-oauth2-refresh` module.

Here the JavaScript code:

<<< @/docs/tutorials/snippets/passport/OriginalDiscordProtocol.js

Ts.ED provide a way to handle the strategy built by the `@tsed/passport` by using the `$onInstall` hook.

<<< @/docs/tutorials/snippets/passport/DiscordProtocol.ts

## Decorators

<ApiList query="module == '@tsed/passport' && symbolType === 'decorator'" />


