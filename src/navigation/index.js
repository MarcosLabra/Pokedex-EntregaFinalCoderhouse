import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../navigation/tab/TabNavigator";
import AuthNavigator from "../navigation/AuthNavigator";

export default () => {
    const [user, setUser] = useState(null)

    return (
        <NavigationContainer>
            {
                user
                    ? <TabNavigator />
                    : <AuthNavigator />
            }
        </NavigationContainer>
    )
}
