import App from './app';
import Ractive from 'ractive';
import Components from './components';
import tap from 'ractive-events-tap';
import fade from 'ractive-transitions-fade';
import Firebase from 'firebase';
import getAsArray from './firebase-as-array';


Ractive.events.tap = tap;
Ractive.transitions.fade = fade;

var fb = Ractive.prototype.fb = new Firebase('https://pdxftw.firebaseio.com/'),
	posts = fb.child('posts'),
	messages = fb.child('messages');

new App({
    el: document.body,
    data: {
    	posts: getAsArray(posts)
    	// messages: getAsArray(messages)
    }
});
