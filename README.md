multiplexer
===========

Systems specifications correctness verifier

## Example

```
./bin/run analyse simple-program.logic -o json -n my-file.ext
```


### Example of .logic file


```text
let data = fe_validation_message, be_validation_message, user_data;
let actors = user, browser, admin, server, database;


when user enter_form_data then
  browser validate_user_data
  browser post_user_data
  server validate_user_data
  server save_user_data
  database persist_user_data
end

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
