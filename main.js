
 google.charts.load('current', {'packages':['corechart', 'bar']});
      google.charts.setOnLoadCallback(drawStuff);

      function drawStuff() {

       
        var chartDiv = document.getElementById('chart_div');

        var data = google.visualization.arrayToDataTable([
          ['', 'Distance', 'Brightness'],
          ['', 8000, 2.3],
          ['', 24000, 4.5],
          ['', 30000, 14.3],
          ['', 50000, 0.9],
          ['', 60000, 13.1]
        ]);

        var materialOptions = {
        colors: ['#33ac71', '#ffb800'],
          width: 250,
          height:180,
          legend: { position: 'none' },
      
          series: {
            0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
            1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
          },
       
        };
        function drawMaterialChart() {
          var materialChart = new google.charts.Bar(chartDiv);
          materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
         
        }
        drawMaterialChart();
    };
    /************************************************ */
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['GMB Vault',15],
        ['Trading Company',8],
        ['Other',  3],
     
      ]);

      var options = {
          colors: ['#ffb800', '#00bc8b' ,'#0f5ef7'],
          pieSliceText: 'none',
          height:150,
          backgroundColor:'none',
          chartArea:{left:0},
          legend:'none',
  
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
    }

    /****************************** */
    /*********menu************** */
    function openNav() {
      document.getElementById("mySidenav").style.height = "70px";
      document.getElementById("main").style.marginTop = "70px";
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.height = "0";
      document.getElementById("main").style.marginTop= "0";
      document.body.style.backgroundColor = "white";
    }



