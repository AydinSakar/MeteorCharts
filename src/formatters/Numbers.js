(function() {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  MeteorCharts.Numbers = function(min, max, maxNumberOfLabels) {
    MeteorCharts.Formatter.call(this, min, max, maxNumberOfLabels);
  };

  MeteorCharts.Numbers.prototype = {
    formatShort: function(num) {
      var longestValue = this.getLongestValue();

      if (longestValue < 1000) {
        return numberWithCommas(num);
      }
      // thousands
      else if (longestValue < 1000000) {
        return numberWithCommas(Math.round(num / 1000 * 10)/10) + 'k';
      }
      // millions
      else if (longestValue < 1000000000) {
        return numberWithCommas(Math.round(num / 1000000 * 10)/10) + 'M';
      }
      // billions
      else {
        return numberWithCommas(Math.round(num / 1000000000 * 10)/10) + 'B';
      }
    },
    increments: function() {
      var arr = [
        1,
        2,
        3,
        5,
        10,
        20,
        25,
        50
      ],
      len = arr.length,
      n, i;

      for (n=2; n<7; n++) {
        for (i=0; i<len; i++) {
          arr.push(arr[i] * Math.pow(10, n));
        }
      }

      return arr;
    }
  };

  MeteorCharts.Util.extend(MeteorCharts.Numbers, MeteorCharts.Formatter);
})();