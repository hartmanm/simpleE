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

    req.open("GET", "https://api.coincap.io/v2/assets/ethereum", false);

    req.addEventListener( "load",function()
    {
      if( req.status >= 200 && req.status < 403 )
      {

        var response = JSON.parse( req.responseText );

        var z = response.data.priceUsd;

        var n = JSON.stringify( z );

        n = n.slice(1, 7);

		if(n.slice(1,2) != ".")
		{
			var n = JSON.stringify( z );
			n = n.slice(1, 8);
		}

        document.getElementById( "eth" ).innerHTML = n;
      }

        else
        {
            console.log( "Error: " + req.statusText );
        }
        });

        req.send( null );
    }
