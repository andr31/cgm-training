// import common service classes
import {AngularServices} from './angular-services/angular-services'
import {DevTools} from './dev-tools/dev-tools'
import {AppServices} from './app-services/app-services'
import * as angular from 'angular';

// bind common service classes into angular services
export default angular.module('app.common.services', [])
  .service('AngularServices', AngularServices)
  .service('DevTools', DevTools)
  .service('AppServices', AppServices)
