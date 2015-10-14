
var App = (function() {

  var data = {
    lines: [
      {
        key: 0,
        name: '1',
        stations: [
          {
            key: '0',
            name: 'Les Jardins de l’Hôpital',
            directions: [
              ['7:44', '9:07', '9:52', '11:02', '12:25', '13:17', '14:45', '16:25', '17:15', '18:05'],
              ['7:27', '8:09', '9:32', '10:17', '11:27', '12:50', '13:42', '15:14', '16:50', '17:40', '18:30' ]
            ],
          },

          {
            key: '1',
            name: 'Parrine Basse',
            directions: [
              ['7:45', '7:45', '9:08', '9:53', '11:03', '12:26', '13:18', '14:46', '16:26', '17:16', '18:06'],
              ['7:26', '8:08', '9:31', '10:16', '11:26', '12:49', '13:41', '15:13', '16:49', '17:39', '18:29']
            ]
          },

          {
            key: '2',
            name: 'Pons',
            directions: [
              ['7:46', '9:09', '9:54', '11:04', '12:27', '13:19', '14:47', '16:27', '17:17', '18:07'],
              ['7:25', '8:07', '9:30', '10:15', '11:25', '12:48', '13:40', '15:12', '16:48', '17:38', '18:28']
            ]
          },

          {
            key: '3',
            name: 'Tillet',
            directions: [
              ['7:46', '9:09', '9:54', '11:04', '12:27', '13:19', '14:47', '16:27', '17:17', '18:07'],
              ['7:25', '8:07', '9:30', '10:15', '11:25', '12:48', '13:40', '15:12', '16:48', '17:38', '18:28']
            ]
          },

          {
            key: '4',
            name: 'Pinquié',
            directions: [
              ['7:47', '9:10', '9:55', '11:05', '12:28', '13:20', '14:48', '16:28', '17:18', '18:08'],
              ['7:24', '8:06', '9:29', '10:14', '11:24', '12:47', '13:39', '15:11', '16:47', '17:37', '18:27']
            ]
          },

          {
            key: '5',
            name: 'Centre des Impôts',
            directions: [
              ['7:47', '9:10', '9:55', '11:05', '12:28', '13:20', '14:48', '16:28', '17:18', '18:08'],
              ['7:24', '8:06', '9:29', '10:14', '11:24', '12:47', '13:39', '15:11', '16:47', '17:37', '18:27']
            ]
          },

          {
            key: '6',
            name: 'Les Miattes',
            directions: [
              ['7:48', '9:11', '9:56', '11:06', '12:29', '13:21', '14:49', '16:29', '17:19', '18:09'],
              ['7:23', '8:05', '9:28', '10:13', '11:23', '12:46', '13:38', '15:10', '16:46', '17:36', '18:26']
            ]
          },

          {
            key: '7',
            name: 'La Pintre',
            directions: [
              ['7:50', '9:13', '9:58', '11:08', '12:31', '13:23', '14:51', '16:31', '17:21', '18:11'],
              ['7:21', '8:03', '9:26', '10:11', '11:21', '12:44', '13:36', '15:08', '16:44', '17:34', '18:24']
            ]
          },

          {
            key: '8',
            name: 'Gendarmerie',
            directions: [
              ['7:50', '9:13', '9:58', '11:08', '12:31', '13:23', '14:51', '16:31', '17:21', '18:11'],
              ['7:21', '8:03', '9:26', '10:11', '11:21', '12:44', '13:36', '15:08', '16:44', '17:34', '18:24']
            ]
          },

          {
            key: '9',
            name: 'I.U.T.',
            directions: [
              ['7:53', '9:16', '10:01', '11:11', '12:34', '13:26', '14:54', '16:34', '17:24', '18:14'],
              ['7:18', '8:00', '9:23', '10:08', '11:18', '12:41', '13:33', '15:05', '16:41', '17:31', '18:21']
            ]
          },

          {
            key: '10',
            name: 'Ecureuils',
            directions: [
              ['7:55', '9:18', '10:03', '11:13', '12:36', '13:28', '14:56', '16:36', '17:26', '18:16'],
              ['7:16', '7:58', '9:21', '10:06', '11:16', '12:39', '13:31', '15:03', '16:39', '17:29', '18:19']
            ]
          },

          {
            key: '11',
            name: 'Genevriers',
            directions: [
              ['7:56', '9:19', '10:04', '11:14', '12:37', '13:29', '14:57', '16:37', '17:27', '18:17'],
              []
            ]
          },

          {
            key: '12',
            name: 'Nayrac',
            directions: [
              ['7:57', '9:20', '10:05', '11:15', '12:38', '13:30', '14:58', '16:38', '17:28', '18:18'],
              ['7:15', '7:57', '9:20', '10:05', '11:15', '12:38', '13:30', '15:02', '16:38', '17:28', '18:18']
            ]
          },
        ]
      },

      {
        name: '2 (future)',
        stations: []
      },

      {
        name: '3 (future)',
        stations: []
      },

      {
        name: '4 (future)',
        stations: []
      },

      {
        name: '5 (future)',
        stations: []
      },

      {
        name: '6 (future)',
        stations: []
      },

      {
        name: '7 (future)',
        stations: []
      },

      {
        name: '8 (future)',
        stations: []
      },

      {
        name: '9 (future)',
        stations: []
      },

      {
        name: '10 (future)',
        stations: []
      },

      {
        name: '11 (future)',
        stations: []
      },
    ]
  };

  var elements = {
    lines: null,
    stations: null,
  };

  var active = {
    line: null, 
    direction: null,
    station: null,
  };

  var stations = [];
  var REFRESH_TIME = 21 * 1000;
  var refreshTimeout;

  /**
   * Main init function which is registering everything and preparing the app fo use
   */
  var init = function() {

    moment.tz.setDefault('Europe/Paris');
    initTooltips();

    elements.lines = $('#form-select-lines');
    elements.bookmarks = $('#form-bookmarks');
    elements.bookmarksName = $('#modal-bookmark-name');
    elements.bookmarksIcon = $('#modal-bookmark-icon');
    elements.bookmarksConfirm = $('#modal-bookmark-confirm');
    elements.directionsToggle = $('#form-direction-toggle');
    elements.direction1 = $('#form-direction-1');
    elements.direction2 = $('#form-direction-2');
    elements.stations = $('#form-select-stations');
    elements.timetable = $('#form-table-timetable');
    elements.addStar = $('#form-star-add');
    elements.removeStar = $('#form-star-remove');
    elements.refresh = $('#form-refresh');

    Bookmarks.init();
    initLines();
    initBookmarks();

    actions();

    refreshTimeout = setTimeout(function() {
      refresh();
    }, REFRESH_TIME);
  };

  /**
   * Generate lines and fill the select box
   */
  var initLines = function() {
    for (var lineCounter = 0; lineCounter < data.lines.length; lineCounter++) {
      var currentLine = data.lines[lineCounter];

      elements.lines.append(HtmlGenerator.createLineOptionElement(currentLine, lineCounter));
    }

    active.line = data.lines[0];
    selectLine(active.line);
  };

  var initTooltips = function() {
    $('[data-toggle="tooltip"]').tooltip();

    if (Cookies.get('tooltip-form-star-add')) {
      $('#form-star-add').tooltip('destroy');
    }
    if (Cookies.get('tooltip-form-star-remove')) {
      $('#form-star-remove').tooltip('destroy');
    }
    if (Cookies.get('tooltip-form-direction-toggle')) {
      $('#form-direction-toggle').tooltip('destroy');
    }
    if (Cookies.get('tooltip-form-refresh')) {
      $('#form-refresh').tooltip('destroy');
    }
  };

  /**
   * Generate the options of the stations select box dpending on the direction
   */
  var generateStations = function() {
    elements.stations.html('');

    var currentStation, stationCounter;
    if (active.direction === 0) {
      for (stationCounter = 0; stationCounter < active.line.stations.length; stationCounter++) {
        currentStation = active.line.stations[stationCounter];
         elements.stations.append(HtmlGenerator.createStationOptionElement(currentStation, stationCounter));
      }
    }
    else if (active.direction === 1) {
      for (stationCounter = active.line.stations.length-1; stationCounter >= 0; stationCounter--) {
        currentStation = active.line.stations[stationCounter];
         elements.stations.append(HtmlGenerator.createStationOptionElement(currentStation, stationCounter));
      } 
    }
  };

  /**
   * Init and generate markup for the bookmarks bar
   */
  var initBookmarks = function() {
    var bookmarks = Bookmarks.getAll();
    bookmarks.forEach(function(bookmark) {
      if (bookmark !== null) {
        elements.bookmarks.append(HtmlGenerator.createBookmarkElement(bookmark));
      }
    });
  };

  /**
   * Activate all event listeners and actions
   */
  var actions = function() {

    // Change event of the select box should change the selected line
    // This means that we should fill the other field with data for the new line
    elements.lines.on('change', function(e) {
      var lineIndex = $(this).val();
      active.line = data.lines[lineIndex];
      selectLine(active.line);
    });

    // Change event of the select box should change the selected station
    elements.stations.on('change', function(e) {
      var stationIndex = $(this).val();
      active.station = active.line.stations[stationIndex];
      selectStation(active.station);
      scrollToElement(elements.directionsToggle.parent().prev()); // Scroll to the directions hr
    });

    // Click event of the directions togle button
    elements.directionsToggle.on('click', function(e) {
      swapDirections();
    });

    // Open modal to add a new bookmark
    elements.addStar.on('click', function() {
      elements.bookmarksName.val('');
      elements.bookmarksIcon.attr('data-icon', 'home');
      elements.bookmarksIcon.attr('class', 'fa fa-lg fa-home');
      $('.modal-add-bookmark').modal();
    });

    // Add new bookmark
    elements.bookmarksConfirm.on('click', function() {
      var bookmarkName = elements.bookmarksName.val();
      var bookmarkIcon = elements.bookmarksIcon.attr('data-icon');
      Bookmarks.set(active.line.key, active.station.key, bookmarkName, bookmarkIcon);

      elements.removeStar.removeClass('hidden');
      elements.addStar.addClass('hidden');

      var newElement = HtmlGenerator.createBookmarkElement({
        line: parseInt(active.line.key),
        station: parseInt(active.station.key),
        name: bookmarkName,
        type: bookmarkIcon
      });
      elements.bookmarks.append(newElement);

      $('.modal-add-bookmark').modal('hide');
      newElement.click(function() {
        var self = $(this);
        activateBookmark(self);  
      });
      
    });

    // Remove exisitng bookmark
    elements.removeStar.on('click', function() {
      Bookmarks.remove(active.line.key, active.station.key);

      elements.addStar.removeClass('hidden');
      elements.removeStar.addClass('hidden');

      elements.bookmarks.find('li[data-line="'+active.line.key+'"][data-station="'+active.station.key+'"]').remove();
    });

    // Go to bookmark
    elements.bookmarks.find('li').on('click', function() {
      var self = $(this);
      activateBookmark(self);
    });

    // // Select new type of icon
    $('.modal-option-icon').on('click', function() {
      var option = $(this).attr('data-icon');
      
      elements.bookmarksIcon.attr('data-icon', option);
      elements.bookmarksIcon.attr('class', 'fa fa-lg fa-'+option);
    });

    // Set a cookie when a spicific tooltip is show to prevent it from showing again
    $('[data-toggle="tooltip"]').on('hidden.bs.tooltip', function () {
      $(this).tooltip('destroy');
      var key = 'tooltip-' + $(this).attr('id');
      Cookies.set(key, true, { expires: 30 });
    });

    // Refresh the curret timetable
    elements.refresh.on('click', function() {
      refresh();
    });

  };

  /**
   * Select a new line and generate markup for it
   * @param  {Object} lineData
   */
  var selectLine = function(lineData) {

    resetForms();

    // Generate directions
    var direction1 = active.line.stations[0],
        direction2 = active.line.stations[active.line.stations.length-1];

    elements.direction1.html(direction1.name);
    elements.direction1.attr('data-direction', 0);

    elements.direction2.html(direction2.name);
    elements.direction2.attr('data-direction', 1);
    active.direction = 0;

    // Generate stations
    generateStations();

    // Select station
    active.station = active.line.stations[0];
    selectStation(active.station);
  };

  /**
   * Select a specific station and display its timetable
   * @param  {Object} stationData
   */
  var selectStation = function(stationData) {
    elements.timetable.html('');

    // Generate the timetable
    var timetable = stationData.directions[active.direction];
    for (var timeCounter = 0; timeCounter < timetable.length; timeCounter++) {
      var currentTime = timetable[timeCounter];
      elements.timetable.append(HtmlGenerator.createTableRowTimeElement(currentTime, timeCounter));
    }

    // Make some final checks
    if (elements.timetable.find('tr.hidden').size() === timetable.length) {
      elements.timetable.append('<tr class="warning"><td colspan="2"><h5 class="text-center">No more busses today!</h5></td></tr>');
      elements.timetable.append('<tr><td colspan="2"><p class="text-center">Load the <a class="form-load-full-timetable">full timetable</a>.</p></td></tr>');

      // Load the full timetable for the specific station
      $('.form-load-full-timetable').on('click tab', function() {
        elements.timetable.find('tr').removeClass('hidden');
        $(this).parent().parent().remove();
        scrollToElement(elements.timetable.prev());
      });
    }

    // Show/Hide Add/Remove Star
    var isBookmarked = Bookmarks.get(active.line.key, active.station.key);
    if (isBookmarked) {
      elements.addStar.addClass('hidden');
      elements.removeStar.removeClass('hidden');
    }
    else {
      elements.addStar.removeClass('hidden');
      elements.removeStar.addClass('hidden');
    }
    
  };

  /**
   * Swap the directions
   */
  var swapDirections = function() {

    var direction1Name = elements.direction1.html(),
        direction1Value = elements.direction1.attr('data-direction'),

        direction2Name = elements.direction2.html(),
        direction2Value = elements.direction2.attr('data-direction');

    active.direction = parseInt(direction2Value);

    elements.direction1.html(direction2Name);
    elements.direction1.attr('data-direction', direction2Value);

    elements.direction2.html(direction1Name);
    elements.direction2.attr('data-direction', direction1Value);

    generateStations();
    var stationIndex = elements.stations.find('option:contains("'+active.station.name+'")').val();
    elements.stations.val(stationIndex);
    selectStation(active.station);
  };

  /**
   * Activate specific bookmark, eg. select line and station
   * @param  {HtmlElement} bookmark 
   */
  var activateBookmark = function(bookmark) {
    var line = bookmark.attr('data-line'),
        station = bookmark.attr('data-station');

    elements.lines.val(line);    
    active.line = data.lines[line];
    selectLine(active.line);
    
    active.station = active.line.stations[station];
    elements.stations.val(station);
    selectStation(active.station);
  };

  /**
   * Refresh the current timetable
   */
  var refresh = function() {
    clearTimeout(refreshTimeout);
    selectStation(active.station);

    // Disable button
    elements.refresh.attr('disabled', 'disabled');
    elements.refresh.find('span').addClass('fa-spin');

    // Enable the button back
    setTimeout(function() {
      elements.refresh.removeAttr('disabled');
      elements.refresh.find('span').removeClass('fa-spin');
    }, 3000);
    
    refreshTimeout = setTimeout(function() {
      refresh();
    }, REFRESH_TIME);
  };

  /**
   * Reset the values in all forms
   */
  var resetForms = function() {

    elements.stations.html('');
    elements.timetable.html('');

  };

  var scrollToElement = function(element) {
    $('html, body').animate({
      scrollTop: element.offset().top
    }, 500);
  };

  return {
    init: init,
    data: data
  };

})();

$(document).ready(function() {

  App.init();

});