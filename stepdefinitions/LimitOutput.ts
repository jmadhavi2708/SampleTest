import { Given } from "cucumber";
import { browser, protractor } from "protractor";
import { input,trimmedinput,explode } from "../pages/searchPage";

const { When, Then } = require("cucumber");



When('the input data is more than 35 characters', function () {


    console.log("Output printing new line after 35 characters "+ console.log(explode(trimmedinput, 35)));
 });
 
 Then('the data is printed in new Line.', function () {
    
    //console.log("Output first 35 characters after removing special characters: ");
 });