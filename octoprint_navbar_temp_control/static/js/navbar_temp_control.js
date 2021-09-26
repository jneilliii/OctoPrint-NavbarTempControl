/*
 * View model for Navbar Temp Control
 *
 * Author: jneilliii
 * License: AGPLv3
 */
$(function() {
    function Navbar_temp_controlViewModel(parameters) {
        var self = this;
        self.settingsViewModel = parameters[0];

        self.onAllBound = function() {
            $(self.settingsViewModel.settings.plugins.navbar_temp_control.src_selector()).appendTo(self.settingsViewModel.settings.plugins.navbar_temp_control.dst_selector());
        };
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: Navbar_temp_controlViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ "settingsViewModel", "temperatureViewModel" ],
        // Elements to bind to, e.g. #settings_plugin_navbar_temp_control, #tab_plugin_navbar_temp_control, ...
        elements: [ "#navbar_plugin_navbar_temp_control" ]
    });
});
