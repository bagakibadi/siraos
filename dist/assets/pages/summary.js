var lyogyakarta = [];
var lyogyakarta_on = [];
var lyogyakarta_of = [];
var nyogyakarta_on = 0;
var nyogyakarta_of = 0;
var cyogyakarta = 0;

var lsurabaya = [];
var lsurabaya_on = [];
var lsurabaya_of = [];
var nsurabaya_on = 0;
var nsurabaya_of = 0;
var csurabaya = 0;

var lmedan = [];
var lmedan_on = [];
var lmedan_of = [];
var nmedan_on = 0;
var nmedan_of = 0;
var cmedan = 0;

var lbandung = [];
var lbandung_on = [];
var lbandung_of = [];
var nbandung_on = 0;
var nbandung_of = 0;
var cbandung = 0;

var lmanado = [];
var lmanado_on = [];
var lmanado_of = [];
var nmanado_on = 0;
var nmanado_of = 0;
var cmanado = 0;

var llombok = [];
var llombok_on = [];
var llombok_of = [];
var nlombok_on = 0;
var nlombok_of = 0;
var clombok = 0;

var lsemarang = [];
var lsemarang_on = [];
var lsemarang_of = [];
var nsemarang_on = 0;
var nsemarang_of = 0;
var csemarang = 0;

var lbatam = [];
var lbatam_on = [];
var lbatam_of = [];
var nbatam_on = 0;
var nbatam_of = 0;
var cbatam = 0;

var ljakarta = [];
var ljakarta_on = [];
var ljakarta_of = [];
var njakarta_on = 0;
var njakarta_of = 0;
var cjakarta = 0;

var totalUser = 0;
var totalOnline = 0;
var totalOffline = 0;


$(document).ready(function() {

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=1",
        method: "GET",
        success: function(result) {
            lyogyakarta = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    lyogyakarta.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lyogyakarta_on.push(element);
        } else {
            lyogyakarta_of.push(element);
        }
    });
    lyogyakarta_on.forEach(function(element) {
        nyogyakarta_on += parseInt(element.harga.replace(/\./g,""));
    });
    lyogyakarta_of.forEach(function(element) {
        nyogyakarta_of += parseInt(element.harga.replace(/\./g,""));
    })

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=2",
        method: "GET",
        success: function(result) {
            lsurabaya = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    lsurabaya.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lsurabaya_on.push(element);
        } else {
            lsurabaya_of.push(element);
        }
    });
    lsurabaya_on.forEach(function(element) {
        nsurabaya_on += parseInt(element.harga.replace(/\./g,""));
    })
    lsurabaya_of.forEach(function(element) {
        nsurabaya_of += parseInt(element.harga.replace(/\./g,""));
    })

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=3",
        method: "GET",
        success: function(result) {
            lmedan = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    lmedan.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lmedan_on.push(element);
        } else {
            lmedan_of.push(element);
        }
    });
    lmedan_on.forEach(function(element) {
        nmedan_on += parseInt(element.harga.replace(/\./g,""));
    })
    lmedan_of.forEach(function(element) {
        nmedan_of += parseInt(element.harga.replace(/\./g,""));
    })

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=4",
        method: "GET",
        success: function(result) {
            lbandung = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    lbandung.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lbandung_on.push(element);
        } else {
            lbandung_of.push(element);
        }
    });
    lbandung_on.forEach(function(element) {
        nbandung_on += parseInt(element.harga.replace(/\./g,""));
    })
    lbandung_of.forEach(function(element) {
        nbandung_of += parseInt(element.harga.replace(/\./g,""));
    })

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=5",
        method: "GET",
        success: function(result) {
            lmanado = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    lmanado.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lmanado_on.push(element);
        } else {
            lmanado_of.push(element);
        }
    });
    lmanado_on.forEach(function(element) {
        nmanado_on += parseInt(element.harga.replace(/\./g,""));
    })
    lmanado_of.forEach(function(element) {
        nmanado_of += parseInt(element.harga.replace(/\./g,""));
    })

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=6",
        method: "GET",
        success: function(result) {
            llombok = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    llombok.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            llombok_on.push(element);
        } else {
            llombok_of.push(element);
        }
    });
    llombok_on.forEach(function(element) {
        nlombok_on += parseInt(element.harga.replace(/\./g,""));
    })
    llombok_of.forEach(function(element) {
        nlombok_of += parseInt(element.harga.replace(/\./g,""));
    })

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=7",
        method: "GET",
        success: function(result) {
            lsemarang = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    lsemarang.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lsemarang_on.push(element);
        } else {
            lsemarang_of.push(element);
        }
    });
    lsemarang_on.forEach(function(element) {
        nsemarang_on += parseInt(element.harga.replace(/\./g,""));
    })
    lsemarang_of.forEach(function(element) {
        nsemarang_of += parseInt(element.harga.replace(/\./g,""));
    })

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=8",
        method: "GET",
        success: function(result) {
            lbatam = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    lbatam.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            lbatam_on.push(element);
        } else {
            lbatam_of.push(element);
        }
    });
    lbatam_on.forEach(function(element) {
        nbatam_on += parseInt(element.harga.replace(/\./g,""));
    })
    lbatam_of.forEach(function(element) {
        nbatam_of += parseInt(element.harga.replace(/\./g,""));
    })

    $.ajax({
        url: "https://api-sch.primakom.co.id/chse/webonline.php?lokasi=9",
        method: "GET",
        success: function(result) {
            ljakarta = result;
            totalUser += result.response.belanja.length
        },
        async: false
    });

    ljakarta.response.belanja.forEach(function(element) {
        if (element.status == "Online") {
            ljakarta_on.push(element);
        } else {
            ljakarta_of.push(element);
        }
    });
    ljakarta_on.forEach(function(element) {
        njakarta_on += parseInt(element.harga.replace(/\./g,""));
    })
    ljakarta_of.forEach(function(element) {
        njakarta_of += parseInt(element.harga.replace(/\./g,""));
    })

    var totalUserHtml = document.getElementById("totaluser").innerHTML = totalUser;
    var totalOnlineHtml = document.getElementById("totalOnline").innerHTML =  lyogyakarta_on.length + lsurabaya_on.length + lmedan_on.length + lbandung_on.length + lmanado_on.length + llombok_on.length + lsemarang_on.length + lbatam_on.length + ljakarta_on.length;
    var totalOnlineHtml = document.getElementById("totalOffline").innerHTML =  lyogyakarta_of.length + lsurabaya_of.length + lmedan_of.length + lbandung_of.length + lmanado_of.length + llombok_of.length + lsemarang_of.length + lbatam_of.length + ljakarta_of.length;
    
    var options = {
        chart: {
            height: 340,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '25%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ["#1ccab8", '#2a76f4', '#3c1199'],
        series: [{
            name: 'Semua',
            data: [
                lyogyakarta.response.belanja.length, 
                lsurabaya.response.belanja.length,
                lmedan.response.belanja.length, 
                lbandung.response.belanja.length, 
                lmanado.response.belanja.length,
                llombok.response.belanja.length,
                lsemarang.response.belanja.length, 
                lbatam.response.belanja.length,
                ljakarta.response.belanja.length
            ]
        },{
            name: 'Offline',
            data: [
                lyogyakarta_of.length,
                lsurabaya_of.length,
                lmedan_of.length,
                lbandung_of.length,
                lmanado_of.length,
                llombok_of.length,
                lsemarang_of.length,
                lbatam_of.length,
                ljakarta_of.length 
            ]
        },{
            name: 'Online',
            data: [
                lyogyakarta_on.length,
                lsurabaya_on.length,
                lmedan_on.length,
                lbandung_on.length,
                lmanado_on.length,
                llombok_on.length,
                lsemarang_on.length,
                lbatam_on.length,
                ljakarta_on.length 
            ]
        }],
        xaxis: {
            categories: ['Yogyakarta', 'Surabaya', 'Medan', 'Bandung', 'Manado', 'Lombok', 'Semarang', 'Batam', 'Jakarta'],
            axisBorder: {
                show: true,
                color: '#bec7e0',
            },  
            axisTicks: {
                show: true,
                color: '#bec7e0',
            },    
        },
        legend: {
            offsetY: 6,
        },
        yaxis: {
            title: {
                text: '',
            },
        },
        fill: {
            opacity: 1
        },
        // legend: {
        //     floating: true
        // },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,           
            },
            strokeDashArray: 4,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "" + val + " orang"
                }
            }
        }
    }

    var options2 = {
        chart: {
            height: 340,
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                endingShape: 'rounded',
                columnWidth: '25%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ["#1ccab8", '#2a76f4', '#3c1199'],
        series: [{
            name: 'Semua',
            data: [
                nyogyakarta_of + nyogyakarta_on,
                nsurabaya_of + nsurabaya_on,
                nmedan_of + nmedan_on,
                nbandung_of + nbandung_on,
                nmanado_of + nmanado_on,
                nlombok_of + nlombok_on,
                nsemarang_of + nsemarang_on,
                nbatam_of + nbatam_on,
                njakarta_of + njakarta_on
            ]
        },{
            name: 'Offline',
            data: [
                nyogyakarta_of,
                nsurabaya_of,
                nmedan_of,
                nbandung_of,
                nmanado_of,
                nlombok_of,
                nsemarang_of,
                nbatam_of,
                njakarta_of
            ]
        },{
            name: 'Online',
            data: [
                nyogyakarta_on,
                nsurabaya_on,
                nmedan_on,
                nbandung_on,
                nmanado_on,
                nlombok_on,
                nsemarang_on,
                nbatam_on,
                njakarta_on
            ]
        }],
        xaxis: {
            categories: ['Yogyakarta', 'Surabaya', 'Medan', 'Bandung', 'Manado', 'Lombok', 'Semarang', 'Batam', 'Jakarta'],
            axisBorder: {
                show: true,
                color: '#bec7e0',
            },  
            axisTicks: {
                show: true,
                color: '#bec7e0',
            },    
        },
        legend: {
            offsetY: 6,
        },
        yaxis: {
            title: {
                text: '',
            },
        },
        fill: {
            opacity: 1
        },
        // legend: {
        //     floating: true
        // },
        grid: {
            row: {
                colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.2,           
            },
            strokeDashArray: 4,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "Rp." + val + ""
                }
            }
        }
    }
    var chart = new ApexCharts(
        document.querySelector("#ana_dash_1"),
        options
    );
    chart.render();
    var chart = new ApexCharts(
        document.querySelector("#ana_dash_2"),
        options2
    );
    chart.render();


});

