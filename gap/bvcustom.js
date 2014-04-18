<script>
	bvcustom = {
		loaded : false,
		loadCustomCSS : function (client) {
			var head = document.getElementsByTagName('head')[0];
			head[0].write("<link type='text/css' rel='stylesheet' href='https://rawgit.com/brianadamsdesigns/bvcustomcss/master/" + client + "/bvcustom.css'>");
		}
	}
	(bvcustom.loaded) ? bvcustom.loadCustomCSS('gap') : return;
</script>