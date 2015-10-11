
var HtmlGenerator = (function() {

  /**
   * Creates a new option element for the select box with available lines
   * 
   * @param  {Object} lineData    Data for the current line
   * @param  {Number} lineIndex   Index in the array with all lines
   * @return {HtmlElement}
   */
  var createLineOptionElement = function(lineData, lineIndex) {
    var element = $('<option></option>');

    element.val(lineIndex);
    element.html('Line: ' + lineData.name);

    if (lineData.stations.length === 0) {
      element.attr('disabled', 'disabled');
    }

    return element;
  };

  /**
   * Creates a new option element for the select box with available stations
   * 
   * @param  {Object} stationData   Data for the current station
   * @param  {Number} stationIndex  Index in the array with all stations
   * @return {HtmlElement}              
   */
  var createStationOptionElement = function(stationData, stationIndex) {
    var element = $('<option></option>');

    element.val(stationIndex);
    element.html(stationData.name);

    return element;
  };

  /**
   * Creates a table row element for the specific time from the timetable
   *
   * Also calculating is the time in the past or in the future
   * @param  {String} timeData  
   * @param  {Number} timeIndex 
   * @return {HtmlElement} 
   */
  var createTableRowTimeElement = function(timeData, timeIndex) {
    var trElement = $('<tr></tr>');

    var tdTime = $('<td></td>');
    tdTime.html(timeData);

    var tdArrive = $('<td></td>');
    var timeNow = moment(),
        timeArrive = moment(),
        timeDataSplit = timeData.split(':');

    timeArrive.set('hours', timeDataSplit[0]);
    timeArrive.set('minutes', timeDataSplit[1]);

    if (timeNow.isAfter(timeArrive)) {
      tdArrive.html('arrived ' + timeArrive.fromNow());
      trElement.addClass('hidden');
    }
    else {
      var diff = timeArrive.diff(timeNow);
      if (diff / 60000 <= 3) { // 3 minutes
        trElement.addClass('danger');
      }
      else if (diff / 60000 <= 10) { // 10 minutes
        trElement.addClass('warning');
      }
      else if (diff / 60000 <= 30) { // 30 minutes
        trElement.addClass('success');
      }

      tdArrive.html(timeArrive.fromNow());
    }

    trElement.append(tdTime);
    trElement.append(tdArrive);

    return trElement;
  };

  return {
    createLineOptionElement: createLineOptionElement,
    createStationOptionElement: createStationOptionElement,
    createTableRowTimeElement: createTableRowTimeElement
  };

})();