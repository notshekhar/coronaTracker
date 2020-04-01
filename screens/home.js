import React from "react"
import * as Permissions from "expo-permissions"
import * as Location from "expo-location"

import Map from "../components/map"
import { View, Text, AsyncStorage } from "react-native"

import ajax from "../basics/fetch"
import apis from "../basics/apis"

const Home = () => {
    const [location, changeLocation] = React.useState(null)
    //getting location
    const getLocation = func => {
        Permissions.askAsync(Permissions.LOCATION).then(e => {
            if (e.status != "granted") {
                func({
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421
                })
            } else {
                Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation
                }).then(location => {
                    func({
                        ...location.coords,
                        latitudeDelta: 0.0421,
                        longitudeDelta: 0.0421
                    })
                })
            }
        })
    }
    const sendLocationToDatabaseAsync = location => {
        AsyncStorage.getItem("_id").then(id => {
            ajax(apis.sendLocation, { location, device_id: id }).then(e => {
                if (e) console.log("done")
                else console.log("failed")
            })
        })
    }
    React.useEffect(() => {
        getLocation(l => {
            // console.log(l)
            changeLocation(l)
            sendLocationToDatabaseAsync(l)
        })
    }, [])
    if (location) return <Map location={location}></Map>
    else return <View></View>
}

export default React.memo(Home)





//  select device_id, latitude, longitude,(((28.745275 - latitude)*(28.745275 - latitude))+((77.9183525 - longitude)*(77.9183525 - longitude)))*(111.01576464628795*111.01576464628795) AS distance from deviceLocations group by device_id HAVING distance<9;
