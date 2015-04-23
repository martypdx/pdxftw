component.exports = {
	add: function(message){
		this.get('messages').$add(message);
		this.set('message');
		// window.location = 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&cad=rja&uact=8&ved=0CD8QtwIwBg&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdQw4w9WgXcQ&ei=fBw5VdiVM4yzogSpmYD4Ag&usg=AFQjCNG7el8GOsX8SUPmhUksMRzOa9FzwQ&sig2=tftt_QpWsv2tQ71hbFKs5g';
	},
	addPost: function(){
		this.set('addingPost', true);
	},
	viewPost: function() {
		this.set('selectedPost', this.event.context)
		this.set('viewingPost', true);
	},
	oninit: function(){
		this.on('add-post.close', function(){
			this.set('addingPost', false);
		});
		this.on('view-post.close', function(){
			this.set('viewingPost', false);
		})
	}
}
