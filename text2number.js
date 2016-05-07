"use strict";
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js
        module.exports = factory();
    } else {
        // Browser
        root.text2num = factory();
  }
}(this, function () {

    
    var text2num = {};
    text2num.version = '0.0.1';

    //TRANSLATIONS 
    var SMALL_NUMBERS = {

        //English:
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen': 16,
        'seventeen': 17,
        'eighteen': 18,
        'nineteen': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
      
        //Spanish:
        'cero': 0,
        'uno': 1,
        'dos': 2,
        'tres': 3,
        'cuatro': 4,
        'cinco': 5,
        'seis': 6,
        'siete': 7,
        'ocho': 8,
        'nueve': 9,
        'diez': 10,
        'once': 11,
        'doce': 12,
        'trece': 13,
        'catorce': 14,
        'quince': 15,
        'dieciseis': 16,
        'diecisiete': 17,
        'dieciocho': 18,
        'diecinueve': 19,
        'veinte': 20,
        'veintiuno': 21,
        'veintidos': 22,
        'veintitres': 23,
        'veinticuatro': 24,
        'veinticinco': 25,
        'veintiséis': 26,
        'veintisiete': 27,
        'veintiocho': 28,
        'veintinueve': 29,

        'treinta': 30,
        'cuarenta': 40,
        'cincuenta': 50,
        'sesenta': 60,
        'setenta': 70,
        'ochenta': 80,
        'noventa': 90,
      
        'cien': 100,
        'ciento': 100,
        'doscientos': 200,
        'trescientos': 300,
        'cuatrocientos': 400,
        'quinientos': 500,
        'seiscientos': 600,
        'setecientos': 700,
        'ochocientos': 800,
        'novecientos': 900
      
    };

    var MAGNITUDES = {

        //English:
        'thousand':     1000,
        'million':      1000000,
        'billion':      1000000000,
        'trillion':     1000000000000,
        'quadrillion':  1000000000000000,
        'quintillion':  1000000000000000000,
        'sextillion':   1000000000000000000000,
        'septillion':   1000000000000000000000000,
        'octillion':    1000000000000000000000000000,
        'nonillion':    1000000000000000000000000000000,
        'decillion':    1000000000000000000000000000000000,

        //Spanish:
        'mil':     1000,
        'millón':      1000000,
        'billón':      1000000000,
        'trillón':     1000000000000,
        'quadrillion':  1000000000000000,
        'quintillion':  1000000000000000000,
        'sextillion':   1000000000000000000000,
        'septillion':   1000000000000000000000000,
        'octillion':    1000000000000000000000000000,
        'nonillion':    1000000000000000000000000000000,
        'decillion':    1000000000000000000000000000000000,
    };


    text2num.convert = function(text) {
        
        var wordArray = text.toLowerCase().toString().split(/[\s-]+/);
        console.log(wordArray);
        var result = 0;
        var acc = 0;
        wordArray.forEach(function(textNumber){
            var num = SMALL_NUMBERS[textNumber];
            if (num != null) {
                acc = acc + num;
            }
            else if (textNumber == "hundred") {
                acc = acc * 100;
            }
            else {
                var magnitude = MAGNITUDES[textNumber];
                //Only for Spanish as it is not said "uno mil for 1000, it is only mil":
                console.log("magnitude: "+magnitude);
                if (magnitude!=null) {
                    if(acc == 0){
                        if (textNumber == "cien" || textNumber == "ciento" || textNumber == "mil") {
                            acc = 1;
                        }
                    }
                    result = result + acc * magnitude;
                    acc = 0;
                }
                
            }
            console.log("result: "+result+" --- acc: "+acc);

        });
        return acc + result;
    }

    return text2num;
}));





