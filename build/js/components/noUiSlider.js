'use strict';

var priceSlider = document.getElementById('priceSlider');
var priceInputMin = document.getElementById('priceInputMin');
var priceInputMax = document.getElementById('priceInputMax');
var inputs = [priceInputMin, priceInputMax];
//var cfilterMinSpan = document.getElementById('cfilter-price-min');
//var cfilterMaxSpan = document.getElementById('cfilter-price-max');
noUiSlider.create(priceSlider, {
  start: [1290, 9400],
  connect: true,
  range: {
    'min': [1290],
    'max': [9400]
  },
  format: wNumb({
    decimals: 0,
    thousand: ' '
  })
});

//priceSlider.noUiSlider.on('update', function ( values, handle ) {
//	if ( handle ) {
//		cfilterMaxSpan.innerHTML = values[handle];
//	} else {
//		cfilterMinSpan.innerHTML = values[handle];
//	}
//});
priceSlider.noUiSlider.on('update', function (values, handle) {
  inputs[handle].value = values[handle];
});

function setSliderHandle(i, value) {
  var r = [null, null];
  r[i] = value;
  priceSlider.noUiSlider.set(r);
}

// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

  input.addEventListener('change', function () {
    setSliderHandle(handle, this.value);
  });

  input.addEventListener('keydown', function (e) {

    var values = priceSlider.noUiSlider.get();
    var value = Number(values[handle]);

    // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
    var steps = priceSlider.noUiSlider.steps();

    // [down, up]
    var step = steps[handle];

    var position;

    // 13 is enter,
    // 38 is key up,
    // 40 is key down.
    switch (e.which) {

      case 13:
        setSliderHandle(handle, this.value);
        break;

      case 38:

        // Get step to go increase slider value (up)
        position = step[1];

        // false = no step is set
        if (position === false) {
          position = 1;
        }

        // null = edge of slider
        if (position !== null) {
          setSliderHandle(handle, value + position);
        }

        break;

      case 40:

        position = step[0];

        if (position === false) {
          position = 1;
        }

        if (position !== null) {
          setSliderHandle(handle, value - position);
        }

        break;
    }
  });
});