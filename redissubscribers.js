//@jonatas Walker
//1 : Befor running this code i did
//127.0.0.1:6379> CLIENT SETNAME 'YOVIJAY'

//2 : My two channels
//127.0.0.1:6379> PUBSUB CHANNELS 
//1) "channel1"
//2) "channel2"

var redis = require('redis');
var redis_client = redis.createClient();       
var found;

redis_client.multi().client(['list']).exec(function(err, results) {

 	found = false;

	//console.log('results : ' + results);

  	var pairs = results[0].split(' ');

	//console.log('pairs : ' + pairs);

	  pairs.forEach(function(pair){

	    var kv = pair.split('=');

		//console.log('single pairs = : ' + pairs);

		//console.log('single kv = : ' + kv);
                 
		//console.log('single kv[0] = : ' + kv[0]);

		//console.log('single kv[1] = : ' + kv[1]);

	    	if (kv[0] == 'YOOVIJAY' && kv[1] == 'YOOVIJAY')
		{
	      		found = true;
			console.log('single kv = : ' + kv);
			found = false;
		}	
	  });
});



