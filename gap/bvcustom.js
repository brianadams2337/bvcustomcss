<script>
	var bvcustom = {
		loaded : false,
		loadCustomCSS : function (client) {
			var url = "https://rawgit.com/brianadamsdesigns/bvcustomcss/master/" + client + "/bvcustom.css"
			var link = document.createElement('link');
			link.type = "text/css";
			link.rel = "stylesheet";
			link.href = url;
			var head = document.getElementsByTagName('head')[0];
			head.appendChild(link);

			link.onload = link.onreadystatechange = function() {
				if (!bvcustom.loaded && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
					bvcustom.loaded = true;
					link.onload = link.onreadystatechange = null;
				};
			};
		}
	};
	(!bvcustom.loaded) ? bvcustom.loadCustomCSS('gap') : bvcustom.loaded = false;
</script>