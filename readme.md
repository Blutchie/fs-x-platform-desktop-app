Template Fullstack X-Platform Desktop App
========================================= 
### Ionic / Electron / Dotnet Core / SQLite

This is a template to create full stack cross platform desktop applications with a web technology front-end, dotnet core back-end and sqlite storage capabilities. I had big plans (to know more about my initial ideas, scroll to the bottome of this page), but because of lack of time I didn't get further than a proof of concept / template project.

To show that sqllite works, every time the about page is opened, it adds a timestamp in a table.

This project came together with source from different git's, other sites and my own coding. Too bad I forgot about the sources and apologize for sharing this.

#### Getting started
I created some scripts to help building, but still needs some manual actions. You could build the back-end for all platforms before building the electron executables, but that is not advisable because the build will contain all 3 back-ends while it only uses 1 (so waste of diskspace).

##### 1. build back-end
In the console, go to /src/api and run the following commands
* dotnet restore
* dotnet publish -r win-x64 --output ../../api/win
* dotnet publish -r linux-x64 --output ../../api/linux
* dotnet publish -r osx-x64 --output ../../api/mac

##### 2. test front-end
In the console, go back to root of project and run the following commands
* npm install
* npm run start
In another console, run the following command
* electron .

##### 3. build executable
In the console, run the following commands
* npm run build-windows
* npm run build-linux
* npm run build-mac
Or optionally
* npm run build-all

##### 4. run executable
The executables (and for windows installer) are found in the dist folder.
#

### Original ideas why I Started this
I have a passion for programming and cryptocurrency, but non of the existing blockchains is 100% what I expect them to be or written in a language I master good enough to fork it. Often the core is written in C++, front-ends built wit QtFramework and smartcontracts in their own language. My knowledge lays more at C# and web front-ends.

With this in mind I wanted to combine Stratis, Ethereum and Verge. Startis is C# based, Ethereum has some great dApps which can be connected to your Mist wallet and verge is great in speed, privacy and low fees. This combination of this requirements and my knowledge base, I started to make a POC with this stack.

The first plan was to create a Core Wallet with 1 integrated dApp: a marketplace. Customers could buy and sell stuff, while the transaction stays in a smart contract until the item is delivered. This could be verified with extensions to that dApp which can verify tracking numbers.

After release, developers should be able to develop dApps and extenstions to them and put them in a store (hostend on the blockchain) which users can download and install in their wallet.

### The future
Too bad this became a stale project without a single bit of blockchain code because of lack of time. I'm pretty new to the open-source community, while I really do believe in open-source. So this is an attempt to share this with you, and if people think this is a great idea too, then maybe it's nice to bring this project back alive and continue this as an open-source project.
