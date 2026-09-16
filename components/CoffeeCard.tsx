import { Text, View, StyleSheet } from "react-native";

type CoffeeCardProps = {
    name: string;
    description: string;
    price: string;
}

export default function CoffeeCard({ name, description, price }: CoffeeCardProps) {
    return (
        <View style={styles.menuCard}>
            <Text style={styles.menuTitleCard}>{name}</Text>
            <Text style={styles.menuSubtitleCard}>{description}</Text>
            <Text style={styles.menuPriceCard}>{price}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    menuCard: {
        width: "48%",
        padding: 16,
        backgroundColor: "#ffffffff",
        borderRadius: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        elevation: 3,
        marginBottom: 16
    },

    menuTitleCard: {
        fontSize: 16,
        fontWeight: '700',
        color: "#2f2d2c"
    },

    menuSubtitleCard: {
        fontSize: 12,
        color: "#9b9b9b",
        marginTop: 4
    },

    menuPriceCard: {
        fontSize: 16,
        fontWeight: '800',
        color: "#c67c4e",
        marginTop: 12
    },
})
