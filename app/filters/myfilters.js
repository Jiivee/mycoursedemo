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

.filter('schoolsfilter', function() {
   return function( items, schools) {
    var filteredschools = [];
    angular.forEach(items, function(item) {
      if (schools === 'all') {
        filteredschools.push(item);
      }
      else if (schools === 'arts' && item.school === 'ARTS School of Arts, Design, and Architecture') {
        filteredschools.push(item);
      }
      else if (schools === 'eng' && item.school === 'ENG School of Engineering') {
        filteredschools.push(item);
      }
      else if (schools === 'biz' && item.school === 'BIZ School of Business') {
        filteredschools.push(item);
      }
      else if (schools === 'chem' && item.school === 'CHEM School of Chemical Technology') {
        filteredschools.push(item);
      }
      else if (schools === 'elec' && item.school === 'ELEC School of Electrical Engineering') {
        filteredschools.push(item);
      }
      else if (schools === 'sci' && item.school === 'SCI School of Science') {
        filteredschools.push(item);
      }
      else if (schools === 'lang' && item.school === 'Language Centre') {
        filteredschools.push(item);
      }
      else if (schools === 'open' && item.school === 'Open University') {
        filteredschools.push(item);
      }
      else if (schools === 'lib' && item.school === 'Library') {
        filteredschools.push(item);
      }
    });
    return filteredschools;
  };
})

.filter('periodsfilter', function() {
   return function( items, periods) {
    var filteredperiods = [];
    var selectedperiods = [];
    var add;
    var inselected;
    angular.forEach(items, function(item) {
      if (!periods.period1 && !periods.period2 && !periods.period3 && !periods.period4 && !periods.period5) {
        filteredperiods.push(item);
      }
      else {
        if (periods.period1) {
          selectedperiods.push('I');
        }
        if (periods.period2) {
          selectedperiods.push('II');
        }
        if (periods.period3) {
          selectedperiods.push('III');
        }
        if (periods.period4) {
          selectedperiods.push('IV');
        }
        if (periods.period5) {
          selectedperiods.push('V');
        }
        add = true;
        inselected = false;
        for (var i=0; i<item.period.length; i++) {
          for (var j=0; j<selectedperiods.length; j++) {
            if (item.period[i] === selectedperiods[j]) {
              inselected = true;
            }
          }
          if (!inselected) {
            add = false;
          }
          inselected = false;
        }
        if (add) {
          filteredperiods.push(item);
        }
      }
    });
    return filteredperiods;
  };
});


/*
.filter('periodsfilter', function() {
   return function( items, periods) {
    var filteredperiods = [];
    var i;
    var j;
    var addToArray;
    angular.forEach(items, function(item) {
      if (!periods.period1 && !periods.period2 && !periods.period3 && !periods.period4 && !periods.period5) {
        filteredperiods.push(item);
      }
      else {
        if (periods.period1) {
          for (i=0; i<item.period.length; i++) {
            if (item.period[i] === 'I') {
              addToArray=true;
              for(j=0;j<filteredperiods.length;j++){
                  if(filteredperiods[j] === item){
                      addToArray=false;
                  }
              }
              if (addToArray) {
                filteredperiods.push(item);
              }
            }
          }
        }
        if (periods.period2) {
          for (i=0; i<item.period.length; i++) {
            if (item.period[i] === 'II') {
              addToArray=true;
              for(j=0;j<filteredperiods.length;j++){
                  if(filteredperiods[j] === item){
                      addToArray=false;
                  }
              }
              if (addToArray) {
                filteredperiods.push(item);
              }
            }
          }
        }
        if (periods.period3) {
          for (i=0; i<item.period.length; i++) {
            if (item.period[i] === 'III') {
              addToArray=true;
              for(j=0;j<filteredperiods.length;j++){
                  if(filteredperiods[j] === item){
                      addToArray=false;
                  }
              }
              if (addToArray) {
                filteredperiods.push(item);
              }
            }
          }
        }
        if (periods.period4) {
          for (i=0; i<item.period.length; i++) {
            if (item.period[i] === 'IV') {
              addToArray=true;
              for(j=0;j<filteredperiods.length;j++){
                  if(filteredperiods[j] === item){
                      addToArray=false;
                  }
              }
              if (addToArray) {
                filteredperiods.push(item);
              }
            }
          }
        }
        if (periods.period5) {
          for (i=0; i<item.period.length; i++) {
            if (item.period[i] === 'V') {
              addToArray=true;
              for(j=0;j<filteredperiods.length;j++){
                  if(filteredperiods[j] === item){
                      addToArray=false;
                  }
              }
              if (addToArray) {
                filteredperiods.push(item);
              }
            }
          }
        }
      }
    });
    return filteredperiods;
  };
});
*/
