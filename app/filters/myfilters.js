'use strict';

angular.module('myfilters', [])

.filter('creditsfilter', function() {
   return function( items, credits) {
    var filteredcredits = [];
    angular.forEach(items, function(item) {
      if (!credits.credit1 && !credits.credit2 && !credits.credit3 && !credits.credit4 && !credits.credit5 && !credits.credit6) {
        filteredcredits.push(item);
      }
      else {
        if (credits.credit1 && item.credits === 1) {
          filteredcredits.push(item);
        }
        if (credits.credit2 && item.credits === 2) {
          filteredcredits.push(item);
        }
        if (credits.credit3 && item.credits === 3) {
          filteredcredits.push(item);
        }
        if (credits.credit4 && item.credits === 4) {
          filteredcredits.push(item);
        }
        if (credits.credit5 && item.credits === 5) {
          filteredcredits.push(item);
        }
        if (credits.credit6 && item.credits > 5) {
          filteredcredits.push(item);
        }
      }      
    });
    return filteredcredits;
  };
})

.filter('languagesfilter', function() {
   return function( items, languages) {
    var filteredlanguages = [];
    angular.forEach(items, function(item) {
      if (!languages.finnish && !languages.english && !languages.swedish) {
        filteredlanguages.push(item);
      }
      else {
        if (languages.finnish && item.language === 'FI') {
          filteredlanguages.push(item);
        }
        if (languages.english && item.language === 'EN') {
          filteredlanguages.push(item);
        }
        if (languages.swedish && item.language === 'SV') {
          filteredlanguages.push(item);
        }
      }


    });

    
    return filteredlanguages;
  };
})


.filter('periodsfilter', function() {
   return function( items, periods) {
    var filteredperiods = [];
    angular.forEach(items, function(item) {
      if (!periods.period1 && !periods.period2 && !periods.period3 && !periods.period4 && !periods.period5) {
        filteredperiods.push(item);
      }
      else {
        if (periods.period1 && item.period === 'I') {
          filteredperiods.push(item);
        }
        if (periods.period2 && item.period === 'II') {
          filteredperiods.push(item);
        }
        if (periods.period3 && item.period === 'III') {
          filteredperiods.push(item);
        }
        if (periods.period4 && item.period === 'IV') {
          filteredperiods.push(item);
        }
        if (periods.period5 && item.period === 'V') {
          filteredperiods.push(item);
        }
      }

      


    });

   
    return filteredperiods;
  };
});

