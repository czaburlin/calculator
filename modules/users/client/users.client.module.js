'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('calculator', ['core']);
ApplicationConfiguration.registerModule('users.admin', ['core.admin']);
ApplicationConfiguration.registerModule('users.admin.routes', ['core.admin.routes']);
