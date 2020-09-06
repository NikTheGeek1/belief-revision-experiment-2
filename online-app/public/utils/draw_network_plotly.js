
function draw_network_plotly(plot_div, name1, name2, condition, title=''){
  if(plot_div == 'network_1'){
    title1=''
    title2=''
    title3=''
  } else{
    title1='<i>Recall: '+name1+' formed their opinion reading one scenario<br> and '+name2+' formed theirs from a <b>different</b> scenario.</i>'
    title2='<i>Recall: '+name1+'</i> and <i>'+name2+'</i> formed their opinion<br> reading the <b>same scenario</b>.</i>'
    title3='<i>Recall: '+name1+' formed their opinion reading one scenario<br> and '+name2+' formed theirs from a <b>different</b> scenario. <br>However, '+name1+' told '+name2+' everything they learned from the scenario they read.<br> This means that <b>'+name2+' knew everything</b> about '+name1+'s <br>belief and their certainty <b>before you</b> interviewed both.'

  }
  if (condition == 1){
    // condition 1 (indipendent source, no communication)
    var trace1 = {
         'x': [0.2, 0.8, 0.5, 0.5, 0.3, 0.7, 1],
         'y': [0.4, 0.4, 0.0, 0.6, 0.8, 0.8, 1],
         'type': 'scatter',
         'mode': 'text',
         'text': ['<b>'+name1+'</b>', '<b>'+name2+'</b>', '<b>You</b>', '<b>scenario1</b>', '<b>scenario2</b>','<b>scenario3</b>', ''],
         'textfont': {'family': 'sans serif', 'size': 18},
         'hoverinfo': 'none'
       }

    var data = [trace1]
    var layout = {'showlegend': false,
     'title':title1,
     'yaxis': {'fixedrange': true,
     'showgrid': false,
     'showaxis': false,
     'showticks': false,
     'zeroline': false,
     'showticklabels': false},

    'xaxis': {'fixedrange': true,
     'showgrid': false,
     'showaxis': false,
     'showticks': false,
     'zeroline': false,
     'showticklabels': false,
     'range': [-0.15, 1.15]},

    'annotations': [
      // middle arrow
     {'showarrow': true,
      'x': 0.5,
      'y': 0.05,
      'ax': 0,
      'ay': -150,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // left up arrow
     {'showarrow': true,
      'x': 0.25,
      'y': 0.45,
      'ax': 25,
      'ay': -90,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // right up arrow
      {'showarrow': true,
      'x': 0.75,
      'y': 0.45,
      'ax': -25,
      'ay': -90,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // left down arrow
      {'showarrow': true,
      'x': 0.435,
      'y': 0.015,
      'ax': -80,
      'ay': -95,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // right down arrow
     {'showarrow': true,
      'x': 0.56,
      'y': 0.015,
      'ax': 80,
      'ay': -95,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'}]}


  }else if(condition == 2){
    // condition 2 (dependent source, no communication)
    var trace1 = {
         'x': [0.2, 0.8, 0.5, .5, 0.5, 1],
         'y': [0.4, 0.4, 0.0, .6, 0.8, 1],
         'type': 'scatter',
         'mode': 'text',
         'text': ['<b>'+name1+'</b>', '<b>'+name2+'</b>', '<b>You</b>', '<b>scenario1</b>', '<b>scenario2</b>', ''],
         'textfont': {'family': 'sans serif', 'size': 18},
         'hoverinfo': 'none'
       }

    var data = [trace1]
    var layout = {'showlegend': false,
     'title':title2,
     'yaxis': {'fixedrange': true,
     'showgrid': false,
     'showaxis': false,
     'showticks': false,
     'zeroline': false,
     'showticklabels': false},

    'xaxis': {'fixedrange': true,
     'showgrid': false,
     'showaxis': false,
     'showticks': false,
     'zeroline': false,
     'showticklabels': false,
     'range': [-0.15, 1.15]},

    'annotations': [
      // middle arrow
     {'showarrow': true,
      'x': 0.5,
      'y': 0.05,
      'ax': 0,
      'ay': -150,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // left up arrow
     {'showarrow': true,
      'x': 0.25,
      'y': 0.45,
      'ax': 90,
      'ay': -90,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // right up arrow
      {'showarrow': true,
      'x': 0.75,
      'y': 0.45,
      'ax': -90,
      'ay': -90,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // left down arrow
      {'showarrow': true,
      'x': 0.435,
      'y': 0.015,
      'ax': -80,
      'ay': -95,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // right down arrow
     {'showarrow': true,
      'x': 0.56,
      'y': 0.015,
      'ax': 80,
      'ay': -95,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'}]}
  }else{
    // condition 3 (indipendent sources, with communication)
    var trace1 = {
         'x': [0.3, 0.7, 0.5, .5, 0.3, 0.7, 1],
         'y': [0.5, 0.3, 0.0, .2, 0.8, 0.8, 1],
         'type': 'scatter',
         'mode': 'text',
         'text': ['<b>'+name1+'</b>', '<b>'+name2+'</b>', '<b>You</b>', '<b>scenario1</b>','<b>scenario2</b>','<b>scenario3</b>', ''],
         'textfont': {'family': 'sans serif', 'size': 18},
         'hoverinfo': 'none'
       }

    var data = [trace1]
    var layout = {'showlegend': false,
     'title':title3,
     'yaxis': {'fixedrange': true,
     'showgrid': false,
     'showaxis': false,
     'showticks': false,
     'zeroline': false,
     'showticklabels': false},

    'xaxis': {'fixedrange': true,
     'showgrid': false,
     'showaxis': false,
     'showticks': false,
     'zeroline': false,
     'showticklabels': false,
     'range': [-0.15, 1.15]},

    'annotations': [
      // middle arrow
     {'showarrow': true,
      'x': 0.5,
      'y': 0.05,
      'ax': 0,
      'ay': -35,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // left up arrow
     {'showarrow': true,
      'x': 0.3,
      'y': 0.55,
      'ax': 0,
      'ay': -60,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // right up arrow
      {'showarrow': true,
      'x': 0.7,
      'y': 0.35,
      'ax': 0,
      'ay': -117,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // left down arrow
      {'showarrow': true,
      'x': 0.435,
      'y': 0.05,
      'ax': -60,
      'ay': -120,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // right down arrow
     {'showarrow': true,
      'x': 0.55,
      'y': 0.05,
      'ax': 60,
      'ay': -60,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'},
      // name1 to name2
     {'showarrow': true,
      'x': 0.63,
      'y': 0.3,
      'ax': -140,
      'ay': -47,
      'arrowsize': 2,
      'arrowhead': 1,
      'xanchor': 'left',
      'yanchor': 'bottom'}]}

  }
  Plotly.newPlot(plot_div, data, layout, {displayModeBar: false}, {staticPlot: true});
}
