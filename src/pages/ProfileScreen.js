import { Button, Text, View } from "react-native";

export default function ProfileScreen( {navigation} ){
    return (
        <View>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
}