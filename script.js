var VueComp = new Vue({
    el: ".vehicle-coverage-tables",
    beforeCreate: function() {
        //this function is used to get the data from the json file before DOM is created
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
            //getting the index of the item
            var index = VueComp.car.coverage[key].indexOf(item)
            var targetElement = event.target
            if($(targetElement).hasClass('set')) {
                //removing class set from both td and div element
                $(targetElement).removeClass('set')  
                $(targetElement).parent().removeClass('set')              
                // splicing the item from the array of objects
                VueComp.car.coverage[key].splice(index,1)
            }
            else {
                $(targetElement).addClass('set')
                //pushing the item to json file
                VueComp.car.coverage[key].push(JSON.parse(item))             
            }            
        },    
    }
})