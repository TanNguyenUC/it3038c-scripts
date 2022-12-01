### Introduction
This final project is about network analysis using python. The input will be the data.csv file exported from a pcap file from Wireshark and then analyze with python using Pandas. Also, any suspected IPs will be identified with country.

### Uniqueness
This project identifies the suspect using data with IP has most connections and transfer the most data in the network.

### Requirements
```bash
pip install -r requirements.txt
```
#### Installing Jupyter notebook in Visual Studio code
If you do not have Jupyter notebook in Visual Studio, please follow the instruction of this link to install the extension.

https://towardsdatascience.com/installing-jupyter-notebook-support-in-visual-studio-code-91887d644c5d#:~:text=First%2C%20launch%20your%20VS%20Code,Notebook%20on%20your%20VS%20Code.

### How to run
Run a python file and we get statistical data, suspect identification, and geolocation of the suspect.
```bash
python network.py
```


### Draw graph with suspect
If there is a suspected IPs from the output of network.py, we can draw graph with matplotlib and networkx to visualize the connections to the suspected IPs easier. Open the project in Jupyter in Visual Studio, open file suspect-graph.ipynb, and simply run by hitting the run button in Jupyter.

![image](https://user-images.githubusercontent.com/112114250/204973919-aade2341-2f3b-47da-9854-471506395ed7.png)

The graph with the color-coded suspected IPs will show.

![image](https://user-images.githubusercontent.com/112114250/204976660-1c1da853-086a-41f8-8399-566d1d9523b6.png)




### References
https://blog.networktocode.com/post/introduction-to-pandas-for-network-development/ -> Pandas basic functions
https://stackoverflow.com/questions/18062135/combining-two-series-into-a-dataframe-in-pandas -> Combining series pandas
https://medium.com/cyberdefendersprogram/python-for-cybersecurity-lesson-4-network-traffic-analysis-with-python-6321f4c9d3f7 -> Geolocation of IP
https://python.plainenglish.io/network-traffic-analysis-with-python-f95ed4e76c28 -> Draw graph
