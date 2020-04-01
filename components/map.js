import React from "react"
import { View } from "react-native"
import MapView, { Marker, Circle } from "react-native-maps"

const Map = ({ location }) => {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}
        >
            <MapView
                style={{ height: "100%", width: "100%" }}
                initialRegion={location}
                // showsUserLocation={true}
                // onRegionChange={e => onRegionChange(e)}
                // showsTraffic
            >
                <Marker
                    coordinate={location}
                    title="You are here"
                    // description="notihng"  
                    pinColor="rgb(21, 21, 20)"
                />
                <Circle
                    center={location}
                    radius={2100}
                    fillColor="rgba(255, 0, 0, 0.2)"
                ></Circle>
            </MapView>
        </View>
    )
}
export default React.memo(Map)
