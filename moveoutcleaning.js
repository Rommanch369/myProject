<!-- important script --><script>jQuery(document).ready(function($) {
    function calculateCost(area) {
        var cost = 0;
      
        jQuery('.cost-calculator-summary-price').show();
            if (area >= 1 && area <= 50) {
                cost = 1750;
            } else if (area >= 51 && area <= 60) {
                cost = 1980;
            } else if (area >= 61 && area <= 65) {
                cost = 2145;
            } else if (area >= 66 && area <= 70) {
                cost = 2310;
            } else if (area >= 71 && area <= 75) {
                cost = 2475;
            } else if (area >= 76 && area <= 80) {
                cost = 2640;
            } else if (area >= 81 && area <= 90) {
                cost = 2970;
            } else if (area >= 91 && area <= 100) {
                cost = 3300;
            } else if (area >= 101 && area <= 110) {
                cost = 3520;
            } else if (area >= 111 && area <= 120) {
                cost = 3840;
            } else if (area >= 121 && area <= 140) {
                cost = 4480;
            } else if (area >= 141 && area <= 150) {
                cost = 4800;
            } else if (area >= 151 && area <= 160) {
                cost = 4960;
            } else if (area >= 161 && area <= 170) {
                cost = 5270;
            } else if (area >= 171 && area <= 180) {
                cost = 5580;
            } else if (area >= 181 && area <= 190) {
                cost = 5890;
            } else if (area >= 191 && area <= 199) {
                cost = 6169;
            }

        return cost;
    }

    function handleCalculation() {
        var area = $('#clean-area-value').val();
        var onetimefee = $('#onetimefee').val()
        var areaCost = calculateCost(parseInt(area));
        var finalCost = onetimefee + finalCost;
        $('#serviceCost').val(finalCost);
    }
    

    
    $('.cost-calculator-cost-slider').on('slide', function(event, ui) {
        var sliderValue = ui.value;
        $('#clean-area-value').val(sliderValue);
        handleCalculation();
    });

  let debounceTimer;
$('#clean-area').on('keyup', function() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {
        handleCalculation();
    }, 500);
});


    handleCalculation();
  
 $('#appointment-date').on('change', function() {
        var selectedDate = $('#appointment-date').val();
        $('#selectedDate').text(selectedDate);
  });
$('#time-frame').on('selectmenuchange', function() {
        var selectedTime = $('#time-frame option:selected').text();
        $('#selectedTime').text(selectedTime);
    });
});</script>