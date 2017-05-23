var $ = require('jquery');
class OffCanvas{
	constructor(){
		this.button = $('.button') ;
		this.sidebar = $('.sidebar');
		this.content = $('.off-canvas-content');
		this.events();
	}
	
	events(){
		this.button.click(this.toggleMenu.bind(this));
	}

	toggleMenu(){
		if(this.sidebar.hasClass('expand')){
        this.sidebar.removeClass('expand');
        this.content.addClass('is-close');
        this.content.removeClass('is-open');
      }
      else{
         this.sidebar.addClass('expand');
         this.content.addClass('is-open');
         this.content.removeClass('is-close');
      }
         return false;
   	}
}
module.exports = OffCanvas;