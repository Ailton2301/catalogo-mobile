import { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useDispatch } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loader";
import ProductCard from "../components/ProductCard";
import api from "../services/api";
import { logoutSuccess } from "../store/authSlice";
import { femaleCategories } from "../utils/categories";

export default function FemaleProductsScreen({ navigation }) {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError("");

      const responses = await Promise.all(
        femaleCategories.map((category) =>
          api.get(`/products/category/${category}`)
        )
      );

      const mergedProducts = responses.flatMap(
        (response) => response.data.products
      );

      setProducts(mergedProducts);
    } catch (err) {
      setError("Não foi possível carregar os produtos femininos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleLogout() {
    dispatch(logoutSuccess());
  }

  if (loading) {
    return <Loading text="Carregando produtos femininos..." />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <ErrorMessage message={error} />

        <FlatList
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() =>
                navigation.navigate("ProductDetails", { id: item.id })
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  logoutButton: {
    alignSelf: "flex-end",
    marginTop: 12,
    marginRight: 16,
    backgroundColor: "#dc2626",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});