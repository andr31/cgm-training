// import common elements angular modules
import CommonServices from './services/services';
import CommonComponents from './components/components';
import * as angular from 'angular';

// bundle common element angular moduels into container module
export default angular.module('app.common', [
  CommonServices.name,
  CommonComponents.name,
]);
