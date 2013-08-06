nine = {
  maps : {
    test_map_0 : {
      generate : function() {
        var map = {
          name : 'test_map_0',
          size : {
            x : 5,
            y : 5,
            z : [0, 4] // floor, ceiling
          }

        };
        return Maps.insert(map);
      }
    }
  }
};
