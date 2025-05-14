// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-02-bain-liao-1/sw.js", {
    scope: "/ICD2O-Unit-6-02-bain-liao-1/",
  })
}

let timesClicked = 0
/**
 * This function adds to the click counter on the cookie.
 */
// eslint-disable-next-line no-unused-vars
function clickCookie() {
  timesClicked++
  document.getElementById('result').innerHTML =
    timesClicked
}
