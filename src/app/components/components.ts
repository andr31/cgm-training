// import app component classes
import {AngularLogo} from './angular-logo/angular-logo';
import {Home} from './home/home';
import {Thing} from './thing/thing';
import {NotFound} from './not-found/not-found';
import * as angular from 'angular';

// bundle component classes into angular components
export default angular.module('app.components', [])
  .component('home', new Home())
  .component('thing', new Thing())
  .component('notFound', new NotFound())
  .component('angularLogo', new AngularLogo())
