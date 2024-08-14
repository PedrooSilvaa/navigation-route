import { View, Text, Button} from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />

            <Button 
                title="Go to Profile"
                onPress={() => navigation.navigate("Profile")}
            />
        </View>
    )
}