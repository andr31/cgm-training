// vendor imports
import 'angular-material';
import 'LogUnobtrusiveExtension/dist/log-ex-unobtrusive';
import 'angular-ui-router';
import * as angular from 'angular';
// import 'ng-stats'
// app css
import './stylesheets/partials/app.scss';
// app imports
import Common from './common/common';
import Components from './components/components';

import {App} from './app';
import AppConfig from './app.config';

// top level angular module for app
angular.module('app', [
  'ui.router',
  'ngMaterial',
  'log.ex.uo',
  Common.name,
  Components.name,
])
  .config(AppConfig)
  .component('app', new App());

// start angular using code instead of ng-app declaration in the index.html
angular.bootstrap(document, ['app'], {
  strictDi: true
});
