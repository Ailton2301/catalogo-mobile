import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native"

export default function ProductCard({ product, onPress }) {
    const ImageUrl = product.thumbnail || product.images?.[0];

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{uri: ImageUrl}} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2}>
                {product.title}
            </Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>R${product.price}</Text>
        <Text style={styles.discount}>Desconto: {product.discountPercentage?.toFixed(2)}%</Text>
        </View>
    </TouchableOpacity>
    );
}
    const styles = StyleSheet.create({
        card: {
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 12,
            padding: 12,
            marginBottom: 12,
            elevation: 2,
        },
        image: {
            width: 90,
            height: 90,
            borderRadius: 8,
            marginRight: 12,
            backgroundColor: "#f2f2f2",
        },
        info: {
            flex: 1,
            marginLeft: 12,
        },
        title: {
            fontSize: 16,
            fontWeight: "700",
            marginBottom: 4,
        },
        category: {
            fontSize: 14,
            color: "#666",
            marginBottom: 4,
        },
        price: {
            fontSize: 18,
            fontWeight: "bold",
            color: "#000",
            marginBottom: 4,
        },
        discount: {
            fontSize: 14,
            color: "#00c853",
        },
    });