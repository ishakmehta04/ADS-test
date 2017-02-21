var VueComp = new Vue({
    el: ".vehicle-coverage-tables",
    beforeCreate: function() {
        var self = this;
        $.getJSON("coverage.json", function(jsdata) {
            self.car = jsdata;
        });
    },
    data: {
        car:'',
        displayStyle: 'none',
    },
    methods: {
        setPill : function(key,item) {
            console.log(key,item)
            var index = VueComp.car.coverage[key].indexOf(item)
            var targetElement = event.target
            if($(targetElement).hasClass('set')) {
                $(targetElement).removeClass('set')  
                 $(targetElement).parent().removeClass('set')              
                VueComp.car.coverage[key].splice(index,1)
            }
            else {
                $(targetElement).addClass('set')
                VueComp.car.coverage[key].push(JSON.parse(item))             
            }            
        },    
    }
})