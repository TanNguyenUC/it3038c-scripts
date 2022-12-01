import pandas as pd
import matplotlib.pyplot as plt
import networkx as nx 
import geoip2.database
"""
References:
https://blog.networktocode.com/post/introduction-to-pandas-for-network-development/ -> Pandas basic functions
https://stackoverflow.com/questions/18062135/combining-two-series-into-a-dataframe-in-pandas -> Combining series pandas
https://medium.com/cyberdefendersprogram/python-for-cybersecurity-lesson-4-network-traffic-analysis-with-python-6321f4c9d3f7 -> Geolocation of IP
https://python.plainenglish.io/network-traffic-analysis-with-python-f95ed4e76c28 -> Draw graph
"""
wireshark_url = "data.csv"
wireshark_data = pd.read_csv(wireshark_url)
sources = wireshark_data["Source"].value_counts()
destination = wireshark_data["Destination"].value_counts()
src_count = pd.Series(sources, name = "Sources count")
dst_count = pd.Series(destination, name = "Destination count")
src_transfer = wireshark_data.groupby("Source").sum()["Length"]
dst_transfer = wireshark_data.groupby("Destination").sum()["Length"]
total_transfer = pd.Series(src_transfer + dst_transfer, name = "TotalBytes")

def statistics(data):
    result = pd.concat([src_count,dst_count,total_transfer], axis=1)
    result.index.name = "IP"
    return result


def IdentifySuspect(Series):
    suspect = []
    for x,y in Series.items():
            if y > 500:
                # print('IP: ', x, 'Transfer: ', y, 'MB')
                suspect.append(x)
    return suspect

def TransferSuspect(Series):
    suspect = []
    for x,y in Series.items():
            if y > 1:
                # print('IP: ', x, 'Transfer: ', y, 'MB')
                suspect.append(x)
    return suspect

def SuspectGeo(suspect):
    try:
        reader = geoip2.database.Reader("GeoLite2-Country.mmdb")
        response = reader.country(suspect)
        print(suspect + " is from " + response.country.name)
    except:
        print(suspect + " not found in the databse")

def main():
    suspect = []
    test = statistics(wireshark_data)
    print("\n" + "Statistical data of the file (including the IP, Sources Count, Destination Count, And Total transfer bytes:" + "\n")
    print(test)
    src_suspect = IdentifySuspect(src_count)
    dst_suspect = IdentifySuspect(dst_count)
    suspect = src_suspect + dst_suspect
    suspect = set(suspect)
    print("\n" + "The suspect IP with 500 sources or destination count, or transfer total bytes larger than 1MB are:")
    print(*suspect, sep=", ")
    print("\n" + "Country location of the suspect IPs:")
    for IP in suspect:
        SuspectGeo(IP)
    
if __name__ == "__main__":
    main()

# network = nx.from_pandas_edgelist(wireshark_data, source='Source' , target='Destination', edge_key='protocol')
# # suspect = "10.12.19.101"
# pos = nx.spring_layout(network)
# nx.draw(network, pos, node_color= "green",
#     node_size = 300, with_labels = True)
# options = {"node_size": 1000, "node_color":"r"}
# nx.draw_networkx_nodes(network, pos, nodelist=[suspect], **options)

# plt.show()

# nx.draw_circular(network, with_labels = True)

# wireshark_data.loc[wireshark_data['Source'] == suspect]
