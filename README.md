# MMM-FearAndGreedIndex

The `MMM-FearAndGreedIndex` is a module for MagicMirror² that displays the Fear and Greed Index for both traditional markets and cryptocurrency markets. This index is a measure of market sentiment, with lower values indicating fear and higher values indicating greed.

<img width="575" alt="Bildschirmfoto 2023-12-02 um 13 18 37" src="https://github.com/Pip1405/MMM-FearAndGreedIndex/assets/131299882/460b8133-aeeb-452f-bb89-2db95908060a">


## Installation

Navigate to your MagicMirror's `modules` folder and execute the following commands:

```bash
cd ~/MagicMirror/modules
git clone https://github.com/YourGithubUsername/MMM-FearAndGreedIndex.git


## Configuration
To configure the module, you need to add the following configuration block to the modules array in the config/config.js file:

{
    module: "MMM-FearAndGreedIndex",
    position: "top_left", // This can be any of the regions, adjust to your liking.
    config: {
        updateInterval: 3600000, // Update every hour, adjust as needed.
        filename: "data.json" // The filename where the index data is stored.
    }
},



## Usage
The module will display two indices:

Traditional Fear and Greed Index: Represents the sentiment in traditional markets.
Crypto Fear and Greed Index: Represents the sentiment in cryptocurrency markets.
The index values are color-coded:

Green: Indicates fear (value <= 45)
Yellow: Neutral territory (value <= 55)
Orange: Greed is increasing (value <= 75)
Red: High greed (value > 75)




## Troubleshooting
If you encounter any issues with the module, first check the logs for any error messages:
pm2 logs mm
If you cannot resolve the issue, please open an issue on the GitHub repository with a detailed description of the problem and any relevant logs.

## Contributing
If you have suggestions for improvements or enhancements, feel free to fork the repository and submit a pull request with your changes.

License
The MMM-FearAndGreedIndex module is released under the MIT License. For more details, please see the LICENSE file in the repository.
https://github.com/Pip1405/MMM-FearAndGreedIndex/tree/main
This `README.md` provides a comprehensive guide for users to get started with your module, including how to install, configure, and use it, along with update and troubleshooting instructions.






