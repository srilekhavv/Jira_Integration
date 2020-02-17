function createIssue() {
  // Set the Jira Credentials
  var username = "srilekha.vutukuru"; // <=========================== Set your Username here
  var password = "Cloudera08092019!"; // <=========================== Set your Password here
  var UserCredentials = "Basic " + Utilities.base64Encode(username + ":" + password);

  var IssueURL = "https://jira.cloudera.com/rest/api/2/issue"; // <=========================== Set your Jira URL here
  var IssueData = {"fields":
                           {"project": {"self":"https://jira.cloudera.com/rest/api/2/project/14602",
                                        "id":"14602","key":"ITAPPS","name":"IT Apps",
                                        "avatarUrls":{"48x48":"https://jira.cloudera.com/secure/projectavatar?avatarId=15313",
                                                      "24x24":"https://jira.cloudera.com/secure/projectavatar?size=small&avatarId=15313",
                                                      "16x16":"https://jira.cloudera.com/secure/projectavatar?size=xsmall&avatarId=15313",
                                                      "32x32":"https://jira.cloudera.com/secure/projectavatar?size=medium&avatarId=15313"}
                                       }, // Set the Project
                            "issuetype":{"self":"https://jira.cloudera.com/rest/api/2/issuetype/11503",
                                         "id":"11503",
                                         "description":"For new system accounts or passwords. Created by JIRA Service Desk.",
                                         "iconUrl":"https://jira.cloudera.com/servicedesk/issue-type-icons?icon=access",
                                         "name":"Access",
                                         "subtask":false}, 
                            "summary": "This is a test by Srilekha Vutukuru to see if I can create a jira issue through google script [This can be deleted]", // Set the Summary
                            "description": "This is a test with a written description"
                            }
                  };
   // Call the Jira API
   var payload = JSON.stringify(IssueData);

  
  //"assignee" : {"name" : "srilekha.vutukuru"},
    //                        "priority": {"name": "Best Effort"} // Set the Priority
  
  
   var headers = {"Accept":"application/json",
                  "Content-Type":"application/json",
                  "Authorization": UserCredentials,
                  "muteHttpExceptions": "True"
                 };
  
   var options = {"method":"POST",
                  "headers": headers,
                  "payload" : payload
                 };
  
   var response = UrlFetchApp.fetch(IssueURL, options);
  
   // Parse the JSON response to use the Issue Key returned by the API in the email
   var dataAll = JSON.parse(response.getContentText());
   var issueKey = dataAll.key
   
   return issueKey;
}

/*
var IssueData = {"fields":
                           {"project": {"expand":"description,lead,url,projectKeys",
                                        "self":"https://jira.cloudera.com/rest/api/2/project/14602",
                                        "id":"14602","key":"ITAPPS","name":"IT Apps",
                                        "avatarUrls":{"48x48":"https://jira.cloudera.com/secure/projectavatar?avatarId=15313",
                                                      "24x24":"https://jira.cloudera.com/secure/projectavatar?size=small&avatarId=15313",
                                                      "16x16":"https://jira.cloudera.com/secure/projectavatar?size=xsmall&avatarId=15313",
                                                      "32x32":"https://jira.cloudera.com/secure/projectavatar?size=medium&avatarId=15313"},
                                        "projectTypeKey":"service_desk"}, // Set the Project
                            "issuetype":{"self":"https://jira.cloudera.com/rest/api/2/issuetype/11503",
                                           "id":"11503",
                                           "description":"For new system accounts or passwords. Created by JIRA Service Desk.",
                                           "iconUrl":"https://jira.cloudera.com/servicedesk/issue-type-icons?icon=access",
                                           "name":"Access",
                                          }, 
                            "summary": "This is a test by Srilekha Vutukuru to see if I can create a jira issue through google script", // Set the Summary
                            
                            }
                  };
*/


