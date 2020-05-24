export const simpleProgramm = `
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
  ele user_data
end

when database persist_user_data then
  inc user_data
end

when database delete_user_data then
  dec user_data
end
`
