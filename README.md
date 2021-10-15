# multiplexer

Writting Specification is hard. Finding edge cases to test is event harder. Hence the need of tools to help us handle that complexity.

`multiplexer` is a simple command line compiler, that let you write specification in simple human readable language.

`Multiplexer` read your specification, and draw a decision table that you can review, refine and share with your team.

## Features

* Analyse specification written in natural language
* Generate Decision table [Decision Table](https://en.wikipedia.org/wiki/Decision_table)
* Find conditions and edge cases you would have not thouth about.
* Support comment in specifications, to help you add more context.
* Support semi-colon in specifications for a better formating
* Simple

## Getting started

```
$git clone https://github.com/boriswaguia/multiplexer-cli.git
```

## Example

How to use it:

```
./bin/run analyse simple-program.logic -o csv|json -n my-output-file.ext
```


### Example of .logic file


```text
// Declare the data and actors in your system.
let data = fe_validation_message, be_validation_message, user_data;
let actors = user, browser, admin, server, database;

// Specification of a normal flow for a create user flow.
when user enter_form_data then
  // define an action.
  browser validate_user_data
  browser post_user_data
  server validate_user_data
  server save_user_data
  database persist_user_data
end
// Specification of a counter flow an action
when browser validate_user_data false then
  browser display_fe_validation_message
end

when browser post_user_data false then
  browser display
end

when server validate_user_data false then
  server return_be_validation_error
end

when admin delete_user_data then
  browser post_delete_user_data
  server validate_delete_user_data
  server delete_user_data
  database delete_user_data
end

when user or admin get_user_data then
  browser get_user_data
  server get_user_data
  database get_user_data
end

when database get_user_data then
  // ele user_data
end

when database persist_user_data then
  // inc user_data
end

when database delete_user_data then
  // dec user_data
end

```

### Example of csv file


```
 
  browser validate_user_data, true, true, true, true, true, false 
 browser post_user_data, true, true, true, true, false, false 
 server validate_user_data, true, true, true, false, false, false 
 server save_user_data, true, true, false, false, false, false 
 database persist_user_data, true, false, false, false, false, false 
 Actions, user enter_form_data is successful, Display error occured on database persist_user_data, Display error occured on server save_user_data, Display error occured on server validate_user_data, Display error occured on browser post_user_data, Display error occured on browser validate_user_data 
 
 
  browser post_delete_user_data, true, true, true, true, false 
 server validate_delete_user_data, true, true, true, false, false 
 server delete_user_data, true, true, false, false, false 
 database delete_user_data, true, false, false, false, false 
 Actions, admin delete_user_data is successful, Display error occured on database delete_user_data, Display error occured on server delete_user_data, Display error occured on server validate_delete_user_data, Display error occured on browser post_delete_user_data 
 
 
  Actions, database get_user_data is successful 
 
 
  Actions, database delete_user_data is successful 


```


## Language:

```
// 1. Declaration of data and actors
let data|actors = [val0, valu1, value2, ..., valueN];

// 2. Declarations of one or more use case

// 2.1: when
when <actor> <action> then
  // 2.2: declaration of one or more action.
  <<actor>> <<operation>>;
  <<actor>> <<operation>>;
  ...
  <<actor>> <<operation>>;
// 2.3: end
end

// 3. Declaration of one to more counter case

// 3.1 when ... false then
when actor <operation> false then
  // 3.2: Declaration of one to more action
  <<actor>> <<operation>>
  <<actor>> <<operation>>
  <<actor>> <<operation>>
  ...
  <<actor>> <<operation>>
// 3.3: end
end
```


## Tasks list

- [ ] Provide vscode syntax higligting for the .logic files

- [ ] Provide export to Plantuml

- [ ] Generate warning or errors on un-specified actions

- [ ] Advanced decision table analysis

- [ ] Model checking
