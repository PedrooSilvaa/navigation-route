import { Button, Text, View } from "react-native";

export default function DetailScreen({navigation}){
    return (
        <View>
            <Text>Details Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}