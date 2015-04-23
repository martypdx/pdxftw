import getAsArray from './firebase-as-array';

component.exports = {
	oninit: function(){
		var comments = this.fb.child('comments').child(this.get('post.$id'));
		this.set( 'comments', getAsArray(comments) );

		this.fb.child('posts').child(this.get('post.$id')).child('rank').on('value', function(ss){
			this.set('post.rank', ss.val());
		}.bind(this));
	},
	add: function(){
		var comment = this.get('comment')

		if ( !comment ) {
			alert('♡ comment must be provided! ♡');
			return;
		}

		this.get('comments').$add(comment);

		this.set('comment');
	},
	upvote: function(){
		var postId = this.get('post.$id');
		var rank = this.fb.child('posts').child(postId).child('rank');
		rank.transaction(function(currentRank) {
		  return (currentRank || 0)+1;
		});
	},
	downvote: function(){
		var postId = this.get('post.$id');
		var rank = this.fb.child('posts').child(postId).child('rank');
		rank.transaction(function(currentRank) {
		  return (currentRank || 0)-1;
		});
	}
}
