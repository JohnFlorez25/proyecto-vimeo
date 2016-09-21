(function() {
  'use strict';

  angular
    .module('proyectoVimeo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
