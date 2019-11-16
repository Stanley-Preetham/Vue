const slotComp=
{
	template:'<p> <b> <slot>This is my Fallback text</slot> </b> </p> '
}

var vm = new Vue({
	el: "#app",
	components: 
	{
		slotComp
	}

	
});



