/*jslint browser: true*/
/*global $*/
/*global classie*/
/*global response*/
/* "use strict"; */

jQuery(window).load(function () {

    /* Enregistrement Velocity Effects */

    $.Velocity
        .RegisterEffect("transition.bounceInIntro", {
        defaultDuration: 1500,
        calls: [ 
            [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ], rotateZ: [ -5, 5 ] }, 0.40 ], 
            [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0, rotateZ: 2.5 }, 0.20 ],
            [ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.50 ]
        ]
    })
        .RegisterEffect("transition.slideDownBigOutIntro", {
        defaultDuration: 500,
        calls: [
            [ { opacity: [ 1 ], translateY: -75, scaleX: [ 1.05, 1 ], scaleY: [ 1.05, 1 ], rotateZ: [ -5 ] }, 0.5 ],
            [ { opacity: [ 0, 1 ], translateY: 750, rotateZ: [ 0 ] } ]
        ],
    })
        .RegisterEffect("transition.slideUpBigInIam", {
        defaultDuration: 500,
        calls: [
            [ { opacity: [ 1, 0 ], translateY: [ -30, 500], translateZ: 0 } ],
            [ { translateY: 15 }, 0.500 ],
            [ { translateY: 0 }, 0.750 ]
        ]
    })

        .RegisterEffect("transition.bounceInAnd", {
        defaultDuration: 1000,
        calls: [ 
            [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ], rotateZ: [ -5, 5 ] }, 0.40 ], 
            [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0, rotateZ: 2.5 }, 0.20 ],
            [ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.50 ]
        ]
    })

        .RegisterEffect("transition.slideOut", {
        defaultDuration: 400,
        calls: [ 
            [ { opacity: [ 0, 1 ], translateX: [ 100, 0 ] }, 0.4 ]
        ]
    })

        .RegisterEffect("transition.slideIn", {
        defaultDuration: 600,
        calls: [ 
            [ { opacity: [ 1, 0 ], translateX: [ 50, -150 ] }, 0.4 ],
            [ { opacity: [ 1 ], translateX: [ 0, 50 ] }, 0.2 ]
        ]
    })

        .RegisterEffect("transition.scaleTower", {
        defaultDuration: 500,
        calls: [ 
            [ { scaleY: [ 1.1, 0 ]}, 0.50],
            [ { scaleY: [ 0.9, 1.1 ]}, 0.25],
            [ { scaleY: [ 1, 0.9 ]}, 0.50]
        ]
    })

        .RegisterEffect("transition.scaleFormClose", {
        defaultDuration: 500,
        calls: [ 
            [ { scaleY: [ 1.1, 1 ]}, 0.25],
            [ { scaleY: [ 0, 1.1 ]}, 0.50] 
        ]
    })

        .RegisterEffect("transition.scaleFormOpen", {
        defaultDuration: 500,
        calls: [ 
            [ { scaleY: [ 1.1, 0 ]}, 0.50],
            [ { scaleY: [ 1, 1.1 ]}, 0.25]
        ]
    })

        .RegisterEffect("transition.bounceOut", {
        defaultDuration: 800,
        calls: [
            [ { scaleX: 0.95, scaleY: 0.95 }, 0.35 ],
            [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35 ],
            [ { opacity: [ 0, 1 ], scaleX: 0.3, scaleY: 0.3 }, 0.30 ]
        ]
    })

        .RegisterEffect("transition.bounceUpIn", {
        defaultDuration: 800,
        calls: [
            [ { translateY: [ 50, 0 ] }, 0.60 ],
            [ { translateY: [ -400, 50 ] }, 0.60, { easing: "easeOutCirc" } ],
            [ { translateY: [ -357, -400 ] }, 0.20 ]
        ]
    });

    /* Animation - Name Card */
    $('#svgcard')
        .velocity("transition.bounceInIntro")
        .velocity(("transition.slideDownBigOutIntro"), {delay: 900}, setTimeout(function(){ 
        $("section").remove(".cardwrapper");
    }, 3350));


    /* Lettering - I am a / Looking for an */
    $(".iam").lettering('lines').children('span').lettering();

    /* Lettering - & / In */
    $(".and").lettering('lines').children('span').lettering();

    /* Animation - I am a */
    $(".line1 span")
        .delay(3350)
        .velocity(("transition.slideUpBigInIam"), {stagger: 25});

    /* Animation - & */
    $(".and")
        .delay(4500)
        .velocity(("transition.bounceInAnd"));

    /* Disparition - I am a / Apparition - Looking for an */
    $(".iam .line1 span")
        .delay(2000)
        .velocity(("transition.slideOut"), {stagger: null}, setTimeout(function(){ 
        $(".iam .line2 span")
            .css('position', 'relative')
            .velocity(("transition.slideIn"), {stagger: 25, display: ""});
    }, 6750));

    /* Disparition - Motion Designer / Apparition - Apprenticeship */
    setTimeout(function(){ 
        $(".motiondesigner-color .mdcolor1, .motiondesigner-color .mdcolor2, .motiondesigner-color .mdcolor3, .motiondesigner-color .mdcolor4")
            .css('opacity', '0');
        $(".motiondesigner-color .mdcolor1end, .motiondesigner-color .mdcolor2end, .motiondesigner-color .mdcolor3end, .motiondesigner-color .mdcolor4end")
            .css('opacity', '1');
    }, 6400);

    setTimeout(function(){ 
        $("svg")
            .remove(".motiondesigner");
        $(".apprenticeship")
            .css('opacity', '1')
            .css('position', 'relative');  

        var userAgent = navigator.userAgent.toLowerCase(); 

        if (userAgent.indexOf('safari') !== -1){ 
            if(userAgent.indexOf('chrome')  > -1){
                //browser is chrome
            }else{
                //browser is safari, add css
                $(".apprenticeship-color .apcolor4")
                    .css('transform', 'scale(1, 1)');

                $(".apprenticeship")
                    .css('position', 'relative') 
                    .velocity(("transition.slideIn"), {display: ""});
            }
        }
    }, 7200);

    /* Disparition - & / Apparition - In */
    $(".and .line1 span")
        .delay(2000)
        .velocity(("transition.slideOut"), {stagger: null}, setTimeout(function(){ 
        $(".and .line2 span")
            .css('position', 'relative')
            .velocity(("transition.slideIn"), {stagger: 25, display: ""});
    }, 6750));

    /* Disparition - Front-End Developer / Apparition - Paris */
    setTimeout(function(){ 
        $(".developer-color .fedcolor1, .developer-color .fedcolor2, .developer-color .fedcolor3, .developer-color .fedcolor4")
            .css('opacity', '0');
        $(".developer-color .fedcolor1end, .developer-color .fedcolor2end, .developer-color .fedcolor3end, .developer-color .fedcolor4end")
            .css('opacity', '1');
    }, 6400);

    setTimeout(function(){ 
        $("svg")
            .remove(".developer");
        $(".paris")
            .css('opacity', '1')
            .css('position', 'relative');
        
        var userAgent = navigator.userAgent.toLowerCase(); 

        if (userAgent.indexOf('safari') !== -1){ 
            if(userAgent.indexOf('chrome')  > -1){
                //browser is chrome
            }else{
                //browser is safari, add css
                $(".paris-color .pcolor4")
                    .css('transform', 'scale(1, 1)');

                $(".paris")
                    .css('position', 'relative') 
                    .velocity(("transition.slideIn"), {display: ""});
            }
        }
    }, 7200);


    /* Animation - Eiffel Tower */
    $("#bottom")
        .delay(8000)
        .velocity(("transition.scaleTower"));

    $("#middle")
        .delay(8400)
        .velocity(("transition.scaleTower"));

    $("#top")
        .delay(8800)
        .velocity(("transition.scaleTower"));

    setTimeout(function(){ 
        $("#smallcloud")
            .velocity({ translateX: -65 }, { duration: 4750, loop: true });
        $("#mediumcloud")
            .velocity({ translateY: 7 })
            .velocity({ translateX: 60 }, { duration: 4500, loop: true });
        $("#bigcloud")
            .velocity({ translateX: -60 }, { duration: 4000, loop: true });
    }, 8500);

    /* Disparition - Looking for an / Apparenticeship / in / Paris */
    setTimeout(function(){ 
        $(".iam, .apprenticeship, .and, .paris")
            .velocity(("transition.bounceOut"), {stagger: 250, drag: true, display: ""});
    }, 9750);

    $(".eiffeltowerwrapper")
        .delay(10800)
        .velocity(("transition.bounceUpIn"));

    /* Supression - Looking for an / Apparenticeship / in / Paris / Apparition - Hire Me */
    setTimeout(function(){ 
        $("svg")
            .remove(".apprenticeship, .paris");
        $("h2")
            .remove(".iam, .and");
    }, 12000);

    setTimeout(function(){ 
        $(".eiffeltowerwrapper")
            .css('transform', 'translateY(0)');
        $(".hireme")
            .velocity(("transition.scaleTower"));
    }, 12000);

    /* Animation Formulaire */

    $.fn.slideFadeToggle = function(speed, easing, callback) {
        return this.animate({
            opacity: 'toggle',
            height: 'toggle'
        }, speed, easing, callback);
    };

    $('.hireme').click(function() {
        $(".formwrapper")
            .slideFadeToggle(500, 'swing');
        $(this)
            .toggleClass("hiremehover");
    });

    /* Formulaire - Champs */

    /* Animation - Champs */
    var fieldForm = function() {
        // trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        if (!String.prototype.trim) {
            (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
            // in case the input is already filled..
            if( inputEl.value.trim() !== '' ) {
                classie.add( inputEl.parentNode, 'input--filled' );
            }

            // events:
            inputEl.addEventListener( 'focus', onInputFocus );
            inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
            classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
            if( ev.target.value.trim() === '' ) {
                classie.remove( ev.target.parentNode, 'input--filled' );
            }
        }
    };

    fieldForm();

    /* Verification - Champs */

    // Needed variables
    var $contactform 	= $('#contactform'),
        $success		= 'Your message has been sent. Thank you!';

    $contactform.submit(function(){
        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $(this).serialize(),
            success: function(msg)
            {
                if(msg === 'SEND'){
                    response = '<div class="success">'+ $success +'</div>';
                }
                else{
                    response = '<div class="error">'+ msg +'</div>';
                }
                // Hide any previous response text
                $(".error,.success").remove();
                // Show response message
                $contactform.prepend(response);
            }
        });
        return false;
    });
});