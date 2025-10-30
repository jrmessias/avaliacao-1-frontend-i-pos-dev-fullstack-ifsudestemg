import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {enableScreens} from 'react-native-screens';
import PropertyListScreen from "./src/screens/PropertyListScreen";
import PropertyDetailScreen from "./src/screens/PropertyDetailScreen";
import PropertyAddScreen from "./src/screens/PropertyAddScreen";

enableScreens(false);

const Stack = createStackNavigator();

const forFade = ({current}) => ({
    cardStyle: {
        opacity: current.progress,
    },
});

export default function App() {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#b9cbda'},
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="PropertyList" component={PropertyListScreen}
                          options={{cardStyleInterpolator: forFade, title: "Lista de imóveis",}}/>
            <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen}
                          options={{cardStyleInterpolator: forFade, title: "Detalhes do imóvel",}}/>
            <Stack.Screen name="PropertyAdd" component={PropertyAddScreen}
                          options={{cardStyleInterpolator: forFade, title: "Adicionar imóvel"}}/>
        </Stack.Navigator>
    </NavigationContainer>
}
