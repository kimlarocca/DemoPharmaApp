/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    }
};
$(document).ready(function() {
	//fade in & out pages
	$('.overlay').fadeOut(200);
	$('a').click(function () {
		event.preventDefault();
		newLocation = this.href;
		$('.overlay').fadeIn(200, newpage);
	});
	
	function newpage() {
		window.location = newLocation;
		$('.overlay').fadeOut(200);
	}
	
	$('#more').click(function() {
		$('.navDropDown').fadeToggle();
	});
	$('#safetyInfo').click(function() {
		event.preventDefault();
		$('#homeScreen').fadeOut(300);
		$('#safetyScreen').delay(300).fadeIn(300);
	});
	$('#indication').click(function() {
		event.preventDefault();
		$('#homeScreen').fadeOut(300);
		$('#indicationScreen').delay(300).fadeIn(300);
	});
	$('.backToHomeScreen').click(function() {
		event.preventDefault();
		$('#safetyScreen, #indicationScreen').fadeOut(300);
		$('#homeScreen').delay(300).fadeIn(300);
	});
});