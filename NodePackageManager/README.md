# Node Package Manager(NPM)

## What is NPM

### NPM is basically a command line tool as well as a registry of third party libraries that we can add to our applications.

### Home page of npm is https://www.npmjs.com/

#### npm is shipped with Node . to check the version of npm

##### npm -v

#### to install specific version of npm run npm i -g npm@5.5.1

## Package.json

### package.json is a json file which includes basic information about your project such as its name, its version,its authors, the address of its git repostiory,its dependencies and so on.. It is basically a bunch of metadata of your applications and all node projects by standards include this json file.

#### to create a package.json file we run command npm init

#### faster way to create package.json is npm init --yes

## Installing A Node Package

#### npm i underscore

### When you run the above mentioned command two things happen:

##### There is one entry added inside the package.json file inside the dependencies

##### npm will install the latest version of the library inside the node_modules folder.

### In the previous versions of npm the following command is used npm i underscore --save

## Using A Package

### How require function resolve any modulee

#### The sequence will be Core Module >> File or Folder >> Node_modules

## Package Dependencies

### The other libraries which you saw in node_modules are the libraries in which your installed libraries depend.

### In earlier versions of npm these libraries are installed under the library's node_modules which you have installed. However, this create a mess because same library is installed at various locations and can end up in very deeply nested structure and on window specifically there is limitation on number of characters in a path. So, in recent versions of npm this behaviour is changed and now all the libraries or dependencies are installed in the same node_modules folder. But there are some exceptions there

#### if any of the installed dependencies in dependent on the different version of any library which is already installed in the node_modules then it will installed inside the library's node_module folder.

## NPM packages and Source Control

### node_modules should not be part of the repository.

### the following command is useful for git operations

#### git init , git status

### add .gitignore file and add the following entry node_modules/

## Semantic Versioning also called SemVer

### 4.13.6 === Major.Minor.Patch

### Patch releases used for bug fixes. Suppose the devloper of the library found and fixed the bug then the next release would be 4.13.7

### Minor release used to add new features that don't break the existing API. Suppose the library developer added the new features without breaking the existing API the new version would be 4.14.0

### Major relaese is used when addition of new features may break the existing API. The new release version would be 5.0.0

### The caret ^ symbol signifies that we are fine with any verion of API as long as major version is the same. This can also be represented as 4.x i.e. ^4.13.6 is equivalent to 4.x

### The tilde ~ symbol signifies that minor version should be the same. ie. ~4.13.6 is equivalent to 4.13.x

### To use the exact version of any dependencies remove ^ or ~ symbol.

## Listing the installed package

### npm list

### npm list --depth=0

## Viewing Registry Info for a Package

### npm view mongoose

### npm view mongoose dependencies

### npm view mongoose versions

## Installing a Specific Version of a Package

## npm i mongoose@5.11.3

## Updating Local Packages

### npm outdated

### Current Wanted and Latest column signify.

### npm update : Only work for minor and patch releases.

### To update the major version you need

#### npm i -g npm-check-updates

#### npm-check-updates : to list out the latest packages.

#### ncu -u : ncu is the short form of npm-check-updates. This command only update the package.json with latest version of dependencies. To install the latest package run npm i

## Dev Dependecies

### jshint is the static analysis tool for javascript. npm i jshint --save-dev.In package.json this will inside the devdependencies property but it is also installed in node_modules folder.

## Uninstlling A Package

### npm un mongoose

## Working with Global Package

### npm is one example of global packages. We can run it from any folder and it is not specific to any project.

### npm i -g <package_name>

### To see outdated global packages npm -g outdated

## Publishing A Package

### lion-lib folder or package we will publish on npm.

#### run npm init --yes command from lion-lib folder. It will create package.json

#### then create index.js file inside the lion-lib and add a simple function add and export it.

#### To add user on npm run command npm adduser and if you already have the user on npm run command npm login

### To publish run npm publish : If you get the error that means the package name is not unique. So, go to the package.json and change the package name to some unique name.

## Updating And Using A Publish Package
