var keypressSlider = document.getElementById('priceSlider');
var input0 = document.getElementById('priceInput1');
var input1 = document.getElementById('priceInput2');
var inputs = [input0, input1];

noUiSlider.create(keypressSlider, {
    start: [20, 80],
    connect: true,

    range: {
        'min': [0],

        'max': 200
    }
});

//keypressSlider.noUiSlider.on('update', function( values, handle ) {
//    inputs[handle].value = values[handle];
//});
