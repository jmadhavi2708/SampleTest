Feature: To Limit number of characters in Input

@test
Scenario:Limiting number of characters in Input.
  
  Given User enters input data
  When the input data is more than 35 characters
  Then the data is printed in new Line.