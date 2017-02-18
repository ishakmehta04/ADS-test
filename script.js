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
    },
    methods: {
        setPill : function() {
            console.log(event.target)
            var targetElement = event.target
            if($(targetElement).hasClass('set'))
                $(targetElement).removeClass('set')
            else 
                $(targetElement).addClass('set')
        },    
    }
})