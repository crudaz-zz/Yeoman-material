(function() {
  'use strict';

  angular
    .module('integraMaterial')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
  	$.material.init();
    $log.debug('runBlock end');
  }

})();
