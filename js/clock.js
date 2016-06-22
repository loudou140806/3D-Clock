$(document).ready(function(){
	var clock = {

		clockArr : [],

		init: function(){
			var self = this;

			self.fillClock();
			self.animate();
		},
		animate: function(){
			var self = this;
			var timer = null;
			var boxs = Array.prototype.slice.call($('ul'));
			clearInterval(timer);
			timer = setInterval(function(){
				var timeArr = self.getTime();
				var lastTime = self.clockArr;
				self.fillClock();
				boxs.forEach(function(item, index){
				// console.log(($(item).find('.fill').html()));
				// console.log('index: ' + timeArr[index]);
				if( $(item).hasClass('rotate') ){
					console.log('test');
					$(item).removeClass('rotate');
				}
				if( lastTime[index] !== timeArr[index] ) {
					// console.log('test');
					self.rotate($(item));
				}

			})
			}, 1000);
			
		},
		isArray: function( arr ){
			return Object.prototype.toString.call(arr) === '[object Array]';
		},
		rotate: function( obj ){
			setTimeout(function(){
				obj.addClass('rotate');	
			}, 100);
		},
		fillClock: function(){
			var self = this;

			self.clockArr = self.getTime();
			// console.log($("#hour-1 .fill").length);
			// console.log(self.clockArr);
			$('#hour-1 .fill').html(self.clockArr[0]);
			$('#hour-2 .fill').html(self.clockArr[1]);
			$('#min-1 .fill').html(self.clockArr[2]);
			$('#min-2 .fill').html(self.clockArr[3]);
			$('#sec-1 .fill').html(self.clockArr[4]);
			$('#sec-2 .fill').html(self.clockArr[5]);
			$('.right').html('');
			$('.left').html('');
		},
		getTime: function(){
			var self = this;
			var time = new Date();
			var hour = time.getHours();
			var min = time.getMinutes();
			var sec = time.getSeconds();
			var forHour = self.formatTime( hour );
			var forMin = self.formatTime( min );
			var forSec = self.formatTime( sec );

			return (forHour + forMin + forSec).split('');
		},
		formatTime: function( num ){
			if( typeof num === 'number' ) {
				if( num < 10 ) {
					num = '0' + num;
				} else {
					num = '' + num;
				}
			} else if ( typeof num === 'string' ){
				// console.log(num.length);
				if( num.length < 2 ) {
					num = '0' + num;
				}
			}
			return num;
		}
	};
	clock.init();
})
	