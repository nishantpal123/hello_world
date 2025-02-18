var xUrl = context.getVariable("request.header.x-url"); // Get the header
var baseUrl = xUrl.split("?")[0]; // Extract everything before '?'
context.setVariable("baseUrl", baseUrl); // Store it for later use