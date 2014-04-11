;(function( $, window, undefined ) {

    $.fn.blink = function( speed ) {
        
        // Set a default speed incase the argument passed is not valid
        speed = ( typeof speed === "number" && speed > 0 ) ? speed : 500;

        return this.css( "animation", "blink " + ( speed / 1000 ) + "s infinite" );
    };
}( jQuery, window ));