/***********************************************************************************************
**
**  Author:       Michael Hartman
**
**  Date:           2016-12-18
**
**  Filename:       eth.js
**
**  Description:    ETH/BTC Ticker
**
***********************************************************************************************/

    document.addEventListener( "DOMContentLoaded", getData );

    document.addEventListener( "DOMContentLoaded", refresh(30000) );

    function refresh( t )
    {
        setTimeout("location.reload(true);", t);
    }

    function getData()
    {
        event.preventDefault();

        var req = new XMLHttpRequest();

        req.open("GET", "http://api.etherscan.io/api?module=stats&action=ethprice", false);

        req.addEventListener( "load",function()
        {
            if( req.status >= 200 && req.status < 403 )
            {
                var response = JSON.parse( req.responseText );

                var z = response.result.ethbtc;

                var n = JSON.stringify( z );

                n = n.slice(1, -3);

                document.getElementById( "eth" ).innerHTML = n;
            }

            else
            {
                console.log( "Error: " + req.statusText );
            }
        });

        req.send( null );
    }
