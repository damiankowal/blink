;(function( $, window, undefined ) {

    $.fn.blink = function( speed ) {
        // Make the element calling this function blink at the speed requested.
        // If the speed is 0, stop blinking.
        // If the speed is not a positive number, do nothing.

        var blinker;

        function isValid( speed ) {
            return ( typeof speed === "number" && speed >= 0 );
        }

        function initializeBlinker( element ) {
            // Create a blinker object which holds the methods and data needed
            // to accomplish toggling the element's visibility, and attach the
            // new object to the element for future use.

            var blinker = {},
                blinkID;

            function toggleVisibilityProperty( index, visibility ) {
                return ( visibility === "visible" ) ? "hidden" : "visible";
            }
            function toggleElementVisibility() {
                element.css( "visibility", toggleVisibilityProperty );
            }

            // Define required methods
            blinker.isBlinking = function() {
                return ( blinkID !== undefined );
            };
            blinker.start = function( speed ) {
                blinkID = window.setInterval( toggleElementVisibility, speed );
            };
            blinker.stop = function() {
                window.clearInterval( blinkID );
                // Don't leave the element hidden when blinking stops!
                element.css( "visibility", "visible" );
            };

            // Attach the blinker object to the element which called blink
            element.data( "blinker", blinker );

            return blinker;
        }
 
        // This is the main point
        if ( isValid( speed ) ) {

            blinker = this.data( "blinker" ) || initializeBlinker( this );

            if ( blinker.isBlinking() ) {
                blinker.stop();
            }
            if ( speed > 0 ) {
                blinker.start( speed );
            }
        }

        return this; // Enable chaining
    };
}( jQuery, window ));