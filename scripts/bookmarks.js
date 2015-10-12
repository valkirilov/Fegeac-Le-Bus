
var Bookmarks = (function() {

  var bookmarks = null;

  var init = function() {
    bookmarks = Cookies.get('bookmarks') === undefined  ? [] : JSON.parse(Cookies.get('bookmarks'));
    console.log(bookmarks);
  };

  var get = function(line, station) {
    var key = generateKey(line, station);
    return bookmarks[key] ? true : false;
  };

  var getAll = function() {
    return bookmarks;
  };

  var set = function(line, station) {
    var newBookmark = {
      key: generateKey(line, station),
      line: line,
      station: station,
      type: 'home',
      name: ''
    };

    bookmarks[newBookmark.key] = newBookmark;

    save();
  };

  var remove = function(line, station) {
    var key = generateKey(line, station);
    delete bookmarks[key];
    save();
  };

  var generateKey = function(line, station) {
    return 1 + '' + line + '' + station;
  };

  var save = function() {
    Cookies.set('bookmarks', bookmarks, { expires: 365 });
  };

  return {
    init: init,
    get: get,
    getAll: getAll,
    set: set,
    remove: remove,
  };

})();