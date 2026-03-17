import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailScreen() {
    const { data } = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detail Screen</Text>
            <Text style={styles.body}>
                You are viewing student:
            </Text>
            <View style={styles.listContainer}>
                <Text>ID: {data.split(',')[0]}</Text>
                <Text>Name: {data.split(',')[1]}</Text>
                <Text>Course: {data.split(',')[2]}</Text>
                <Text>Year: {data.split(',')[3]}</Text>
                <Text>Enrolled: {data.split(',')[4] === 'true' ? 'Yes' : 'No'}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    body: {
        fontSize: 18,
        color: '#555',
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        marginTop: 16,
    }
});