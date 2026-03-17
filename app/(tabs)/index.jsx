import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
    const [studentList, setStudentList] = useState([
        { id: 1, name: "Patrick", course: "CpE", year: "4th Year", enrolled: true },
        { id: 2, name: "Chiz", course: "IT", year: "3rd Year", enrolled: false },
        { id: 3, name: "Gran", course: "CS", year: "2nd Year", enrolled: true },
        { id: 4, name: "Marr", course: "ICT", year: "3rd Year", enrolled: false },
    ]);

    function goToDetail(id, name, course, year, enrolled) {
        const concatenatedParams = `${id},${name},${course},${year},${enrolled}`;
        router.push(`/detail?data=${concatenatedParams}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.subtitle}>Welcome to the app!</Text>

            <View style={styles.btnContainer}>
                {studentList.map(student => (
                    <TouchableOpacity key={student.id} style={styles.button} onPress={() => goToDetail(student.id, student.name, student.course, student.year, student.enrolled)}>
                        <Text style={styles.btnText}>{student.name}</Text>
                    </TouchableOpacity>
                ))}
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
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
    },
    button: { 
        backgroundColor: '#0EA5E9',
        paddingVertical: 14, 
        paddingHorizontal: 32, 
        borderRadius: 10 
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
    },
    btnText: { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
});