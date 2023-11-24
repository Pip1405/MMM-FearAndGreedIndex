Module.register("MMM-FearAndGreedIndex", {
    defaults: {
        updateInterval: 3600000, // Update every hour
        filename: "data.json" // Add a default filename here
    },

    start: function() {
        this.fearAndGreedIndex = {};
        this.cryptoFearAndGreedIndex = {};
        this.sendSocketNotification("CONFIG", this.config);
    },

    getDom: function() {
        var wrapper = document.createElement("div");

        // Create and append the header
        var header = document.createElement("header");
        header.innerHTML = "Fear and Greed Index";
        wrapper.appendChild(header);

        var createIndexDisplay = (index, title) => {
            var indexWrapper = document.createElement("div");
            indexWrapper.innerHTML = "<strong>" + title + "</strong>";
            
            if (index.value) {
                var valueElement = document.createElement("div");
                var indexValue = parseFloat(index.value).toFixed(2);
                // Check for 'description' or 'value_classification' depending on index type
                var indexCategory = index.description || index.value_classification || "Loading...";
                
                valueElement.innerHTML = indexValue + " (" + indexCategory + ")";
                valueElement.style.color = this.getColorForIndex(parseFloat(indexValue));
                indexWrapper.appendChild(valueElement);
            } else {
                indexWrapper.innerHTML += ": Loading...";
            }
            return indexWrapper;
        };
        
        
        

        // Append traditional index
        wrapper.appendChild(createIndexDisplay(this.fearAndGreedIndex, "Traditional"));

        // Append crypto index
        wrapper.appendChild(createIndexDisplay(this.cryptoFearAndGreedIndex, "Crypto"));

        return wrapper;
    },

// Helper function to interpolate color based on index value
getColorForIndex: function(value) {
    if (value <= 45) {
        return "rgb(0, 255, 0)"; // Green
    } else if (value <= 55) {
        return "rgb(255, 255, 0)"; // Yellow
    } else if (value <= 75) {
        return "rgb(255, 165, 0)"; // Orange
    } else {
        return "rgb(255, 0, 0)"; // Red
    }
},


    

    socketNotificationReceived: function(notification, payload) {
        if (notification === "INDEX_DATA") {
            console.log("Received INDEX_DATA:", payload); // Confirm that this data is received
            this.fearAndGreedIndex = payload;
            this.updateDom();
        } else if (notification === "CRYPTO_INDEX_DATA") {
            console.log("Received CRYPTO_INDEX_DATA:", payload); // Confirm that this data is received
            this.cryptoFearAndGreedIndex = payload;
            this.updateDom();
        }
    },
    
});
