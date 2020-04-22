window.store = {
    get: function(name, defaultValue) {
        if (this.supportLocalStorage()) {
            if (localStorage.getItem(name) != null) {
                return localStorage.getItem(name);
            } else {
                return defaultValue;
            }
        } else {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return defaultValue;
        }
    },
    remove: function(name) {
        if (this.supportLocalStorage()) {
            localStorage.removeItem(name);
        } else {
            this.set(name, "", -1);
        }
    },
    set: function(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else {
            var expires = "";
        }
        if (this.supportLocalStorage()) {
            localStorage.setItem(name, value);
        } else {
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    },
    supportLocalStorage: function() {
        try {
            if (typeof(Storage) !== "undefined") {
                localStorage.setItem("testitem", true);
                localStorage.removeItem("testitem");
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
}