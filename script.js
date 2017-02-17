var VueComp = new Vue({
    el: ".vehicle-coverage-tables",
    data: {
        "vehicle_models":["ILX","MDX","RDX","RLX","TL","TLX","TSX"],
        "years":[2018,2017,2016,2015,2014,2013,2012,2011,2010],
        "coverage":{
            "ILX":[2017,2016,2015,2014],
            "MDX":[2017,2016,2015,2014],
            "RDX":[2011,2010],
            "RLX":[2012,2011,2010],
            "TL":[2014,2013,2012,2011,2010],
            "TLX":[2016,2015,2014,2013],
            "TSX":[2017,2015]
        }, 
    },
    methods: {
        setPill : function() {
            console.log(event.target)
            var targetElement = event.target
            if($(targetElement).hasClass('set'))
                $(targetElement).removeClass('set')
            else 
                $(targetElement).addClass('set')
        }
    }
})