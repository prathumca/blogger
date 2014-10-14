function showrecentposts(json) {
	//thanks to beautifulbeta
	//I modify it to get the rest posts on the homepage
	//Jacky Supit
	//www.JackBook.com

  // start a loop
  // in this loop we get the entry from the feed and parse it
  for (var i = 0; i < numposts; i++) {
    // get entry i from feed
    var entry = json.feed.entry[i];
    // get the posttitle
    var posttitle = entry.title.$t;
    // get the post url
    // check all links for the link with rel = alternate
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }
    }
    // get the postdate, take only the first 10 characters
    var postdate = entry.published.$t.substring(0,10);
	
	
		var postdate = entry.published.$t;
		var cdyear = postdate.substring(0,4);
		var cdmonth = postdate.substring(5,7);
		var cdday = postdate.substring(8,10);
		var monthnames = new Array();
		monthnames[1] = "Jan";
		monthnames[2] = "Feb";
		monthnames[3] = "Mar";
		monthnames[4] = "Apr";
		monthnames[5] = "May";
		monthnames[6] = "Jun";
		monthnames[7] = "Jul";
		monthnames[8] = "Aug";
		monthnames[9] = "Sep";
		monthnames[10] = "Oct";
		monthnames[11] = "Nov";
		monthnames[12] = "Dec";	

		cdmonth = monthnames[parseInt(cdmonth,10)];		
		
	
    // get the post author
    var postauthor = entry.author[0].name.$t;
    // get the postcontent
    // if the Blogger-feed is set to FULL, then the content is in the content-field
    // if the Blogger-feed is set to SHORT, then the content is in the summary-field
    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    // strip off all html-tags
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");
    // reduce postcontent to numchar characters
    if (postcontent.length > numchars) postcontent = postcontent.substring(0,numchars);
    
	if (i > 0) {
		// display the results
	
		HASIL = '';
		HASIL = HASIL + '<div class="main-entry past"><ul class="dateblock left"><li class="top">' + cdmonth + ' ' + cdyear + '</li><li class="bottom">' + cdday + '</li></ul><div class="entry-content right"><h1><a href="' + posturl + '" rel="bookmark" title="' + posttitle + '">' + posttitle + '</a></h1><p>' + postcontent + '</p>';
		HASIL = HASIL + '<ul class="meta-bottom"><li class="permalink"><a href="' + posturl + '" rel="bookmark" title="Permanent Link to ' + posttitle + '">Permalink</a></li></ul></div><div class="clear"></div></div>';
		
		document.write(HASIL);
		//looking for me dude? :)
		//JackBook.Com
		
	}
  }
}
