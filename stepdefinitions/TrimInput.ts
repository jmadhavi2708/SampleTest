import { Given } from "cucumber";
import { browser, protractor } from "protractor";
import { input,trimmedinput } from "../pages/searchPage";

const { When, Then } = require("cucumber");



Given('User enters input data', function () {
    console.log("Input including  special characters:"+ "\n"+ input);
    
 });
 When('the input data contains escape characters', function () {
    console.log("Output after removing special characters: "+ trimmedinput);
 });
 
 Then('all the escaped characters are removed in the output text', function () {
    
    console.log("Output first 35 characters after removing special characters: ");
 });