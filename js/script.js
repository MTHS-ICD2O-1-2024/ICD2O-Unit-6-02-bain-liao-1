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

let timesClicked = localStorage.timesClicked ? Number(localStorage.timesClicked) : 0

window.onload = updateCookieCount

/**
 * This function adds to the click counter on the cookie.
 */
function clickCookie() {
  timesClicked++
  localStorage.timesClicked = timesClicked
  // Display result
  document.getElementById('result').innerHTML = "Cookie Count: " + timesClicked
}

function updateCookieCount() {
  document.getElementById('result').innerHTML = "Cookie Count: " + timesClicked
}

// Update the sessionStorage
if (localStorage.timesClicked) {
  localStorage.timesClicked = Number(localStorage.timesClicked)
} else {
  localStorage.timesClicked = 0
}
