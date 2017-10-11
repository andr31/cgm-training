import './thing.scss';
import {IController, IControllerConstructor, Injectable} from 'angular';

/**
 *  Component Definition
 *
 * @export
 * @class Thing
 * @implements {ng.IComponentOptions}
 */
export class Thing implements ng.IComponentOptions {

  /**
   * Controller used with Component
   *
   * @type {Function}
   */
  public controller: Injectable<IControllerConstructor> = ThingController;

  /**
   * Template used with Component
   *
   * @type {string}
   */
  public template: string = require('./thing.html').toString();

  /**
   * Object containing pairs Directive Bindings for Component
   *
   * @type {Object}
   */
  public bindings: { [binding: string]: string; } = {
    $router: '<'
  };

  public $canActivate: any = (): boolean => {
    return true;
  }
}

/**
 * about - Controller
 *
 * @export
 * @class ThingController
 */
export class ThingController implements IController {

  /**
   * $inject to make angular DI minifiication safe
   *
   * @static
   * @type {Array<string>}
   */
  public static $inject: [string] = ['$log', 'AngularServices', 'AppServices', '$stateParams', '$state'];
  public id: Number = 0;

  /**
   * @param {*} $log Angular Log Service
   * @param {*} AngularServices Angular Services Convenience Service
   * @param {*} AppServices App Services Convenience Service
   */
  constructor(public $log: any, public AngularServices: any, public AppServices: any, public $stateParams: ng.ui.IStateParamsService, public $state: ng.ui.IStateService) {
    this.$log = $log.getInstance('Thing', false);
    this.$log.debug('constructor');
  }

  /**
   * life cycle hook (road to ng2)
   */
  public $onInit(): void {
    if (this.$stateParams.id === '0') {
      this.$state.go('notFound');
    }
    this.id = this.$stateParams.id;
  }
}
