export const verificationModelTestJson =  {
  "unspecified": [],
  "decisionTables": [
      {
          "conditions": [
              {
                  "designation": "browser validate_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              },
              {
                  "designation": "browser post_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              },
              {
                  "designation": "server validate_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              },
              {
                  "designation": "server save_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              },
              {
                  "designation": "database persist_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              }
          ],
          "rules": [
              {
                  "action": {
                      "value": "user enter_form_data is successful"
                  },
                  "tests": [
                      {
                          "designation": "browser validate_user_data",
                          "value": true
                      },
                      {
                          "designation": "browser post_user_data",
                          "value": true
                      },
                      {
                          "designation": "server validate_user_data",
                          "value": true
                      },
                      {
                          "designation": "server save_user_data",
                          "value": true
                      },
                      {
                          "designation": "database persist_user_data",
                          "value": true
                      }
                  ]
              },
              {
                  "action": {
                      "value": "server save_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser validate_user_data",
                          "value": true
                      },
                      {
                          "designation": "browser post_user_data",
                          "value": true
                      },
                      {
                          "designation": "server validate_user_data",
                          "value": true
                      },
                      {
                          "designation": "server save_user_data",
                          "value": true
                      },
                      {
                          "designation": "database persist_user_data",
                          "value": false
                      }
                  ]
              },
              {
                  "action": {
                      "value": "server validate_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser validate_user_data",
                          "value": true
                      },
                      {
                          "designation": "browser post_user_data",
                          "value": true
                      },
                      {
                          "designation": "server validate_user_data",
                          "value": true
                      },
                      {
                          "designation": "server save_user_data",
                          "value": false
                      },
                      {
                          "designation": "database persist_user_data",
                          "value": false
                      }
                  ]
              },
              {
                  "action": {
                      "value": "browser post_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser validate_user_data",
                          "value": true
                      },
                      {
                          "designation": "browser post_user_data",
                          "value": true
                      },
                      {
                          "designation": "server validate_user_data",
                          "value": false
                      },
                      {
                          "designation": "server save_user_data",
                          "value": false
                      },
                      {
                          "designation": "database persist_user_data",
                          "value": false
                      }
                  ]
              },
              {
                  "action": {
                      "value": "browser validate_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser validate_user_data",
                          "value": true
                      },
                      {
                          "designation": "browser post_user_data",
                          "value": false
                      },
                      {
                          "designation": "server validate_user_data",
                          "value": false
                      },
                      {
                          "designation": "server save_user_data",
                          "value": false
                      },
                      {
                          "designation": "database persist_user_data",
                          "value": false
                      }
                  ]
              },
              {
                  "action": {
                      "value": "browser validate_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser validate_user_data",
                          "value": false
                      },
                      {
                          "designation": "browser post_user_data",
                          "value": false
                      },
                      {
                          "designation": "server validate_user_data",
                          "value": false
                      },
                      {
                          "designation": "server save_user_data",
                          "value": false
                      },
                      {
                          "designation": "database persist_user_data",
                          "value": false
                      }
                  ]
              }
          ]
      },
      {
          "conditions": [
              {
                  "designation": "browser post_delete_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              },
              {
                  "designation": "server validate_delete_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              },
              {
                  "designation": "server delete_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              },
              {
                  "designation": "database delete_user_data",
                  "outcomes": [
                      true,
                      false
                  ]
              }
          ],
          "rules": [
              {
                  "action": {
                      "value": "admin delete_user_data is successful"
                  },
                  "tests": [
                      {
                          "designation": "browser post_delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "server validate_delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "server delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "database delete_user_data",
                          "value": true
                      }
                  ]
              },
              {
                  "action": {
                      "value": "server delete_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser post_delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "server validate_delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "server delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "database delete_user_data",
                          "value": false
                      }
                  ]
              },
              {
                  "action": {
                      "value": "server validate_delete_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser post_delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "server validate_delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "server delete_user_data",
                          "value": false
                      },
                      {
                          "designation": "database delete_user_data",
                          "value": false
                      }
                  ]
              },
              {
                  "action": {
                      "value": "browser post_delete_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser post_delete_user_data",
                          "value": true
                      },
                      {
                          "designation": "server validate_delete_user_data",
                          "value": false
                      },
                      {
                          "designation": "server delete_user_data",
                          "value": false
                      },
                      {
                          "designation": "database delete_user_data",
                          "value": false
                      }
                  ]
              },
              {
                  "action": {
                      "value": "browser post_delete_user_data"
                  },
                  "tests": [
                      {
                          "designation": "browser post_delete_user_data",
                          "value": false
                      },
                      {
                          "designation": "server validate_delete_user_data",
                          "value": false
                      },
                      {
                          "designation": "server delete_user_data",
                          "value": false
                      },
                      {
                          "designation": "database delete_user_data",
                          "value": false
                      }
                  ]
              }
          ]
      },
      {
          "conditions": [],
          "rules": [
              {
                  "action": {
                      "value": "database get_user_data is successful"
                  },
                  "tests": []
              }
          ]
      },
      {
          "conditions": [],
          "rules": [
              {
                  "action": {
                      "value": "database delete_user_data is successful"
                  },
                  "tests": []
              }
          ]
      }
  ]
}
