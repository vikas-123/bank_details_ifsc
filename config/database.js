if(process.env.NODE_ENV === 'production')
{
	module.exports= {mongoURI:
		'mongodb://<dbuser>:<dbpassword>@ds239682.mlab.com:39682/banking_ifsc'

	}
}

else{

module.exports = {mongoURI:
'mongodb://localhost/banking'}

}