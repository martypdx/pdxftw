import getAsArray from './firebase-as-array';

component.exports = {
	oninit: function(){
		var comments = this.fb.child('comments').child(this.get('post.$id'));
		this.set( 'comments', getAsArray(comments) );
	},
	add: function(){
		var comment = this.get('comment')

		if ( !comment ) {
			alert('♡ comment must be provided! ♡');
			return;
		}

		this.get('comments').$add(comment);

		this.set('comment');
	}
}
