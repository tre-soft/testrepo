
animatedcollapse.addDiv('Q1', 'fade=0,speed=300,group=QA,')
animatedcollapse.addDiv('Q2', 'fade=0,speed=300,group=QA,persist=1,hide=1')
animatedcollapse.addDiv('Q3', 'fade=0,speed=300,group=QA,hide=1')

animatedcollapse.addDiv('1', 'fade=0,speed=300,group=quoteview,')
animatedcollapse.addDiv('2', 'fade=0,speed=300,group=quoteview,persist=1,hide=1')
animatedcollapse.addDiv('3', 'fade=0,speed=300,group=quoteview,hide=1')

animatedcollapse.addDiv('TD1', 'fade=0,speed=300,group=techdetail,')
animatedcollapse.addDiv('TD2', 'fade=0,speed=300,group=techdetail,persist=1,hide=1')
animatedcollapse.addDiv('TD3', 'fade=0,speed=300,group=techdetail,hide=1')

animatedcollapse.ontoggle=function($, divobj, state){ //fires each time a DIV is expanded/contracted
	//$: Access to jQuery
	//divobj: DOM reference to DIV being expanded/ collapsed. Use "divobj.id" to get its ID
	//state: "block" or "none", depending on state
}

animatedcollapse.init()