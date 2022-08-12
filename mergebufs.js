function merge() {
	
	var a = arrayfromargs(arguments);
	var buf1 = new Buffer(a[0]);
	var buf2 = new Buffer(a[1]);
	var outbuf = new Buffer(a[2]);
	// get buffers to act on
	// assume same length

	outbuf.poke(1,0,buf1.peek(1,0,buf1.framecount()));
	outbuf.poke(2,0,buf2.peek(1,0,buf2.framecount()));
	
	outlet(0,"DONE WITH MERGE")
}