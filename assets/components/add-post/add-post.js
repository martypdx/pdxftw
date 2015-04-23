component.exports = {
	add: function(){
		var name = this.get('username'),
			post = this.get('post'),
			posts = this.get('posts');

		if ( !name || !post ) {
			alert('♡ name and post must be provided! ♡');
			return;
		}

		posts.$add({
			username: name,
			post: post
		});

		this.fire('close');
	}
}
