Feature: To Remove escape characters 

@test
Scenario: Removing escaped characters  in a line
  
  Given User enters input data
  When the input data contains escape characters
  Then all the escaped characters are removed in the output text
