import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerTitle}>Cafe do Codigo</Text>
                <Text style={styles.headerSubtitle}>Seu cafe, uma linha por vez</Text>
            </View>

            <View style={styles.avatarPlaceholder}>
                <Ionicons name="person" size={20} color="#2f2d2c" ></Ionicons>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        padding: 60,
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 23,
        fontWeight: "800",
        color: "#2f2d2c"
    },

    headerSubtitle: {
        fontSize: 14,
        color: "#9b9b9b",
        marginTop: 4,
    },

    avatarPlaceholder: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
    },
});