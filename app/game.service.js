System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GameService;
    return {
        setters:[],
        execute: function() {
            GameService = (function () {
                function GameService() {
                }
                GameService.prototype.getGames = function () {
                    return ["Game1", "Game2", "Game3"];
                };
                return GameService;
            }());
            exports_1("GameService", GameService);
        }
    }
});
//# sourceMappingURL=game.service.js.map