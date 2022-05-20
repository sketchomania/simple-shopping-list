import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    { id: Math.random().toString(), text: "Milk" },
    { id: Math.random().toString(), text: "Eggs" },
    { id: Math.random().toString(), text: "Bread" },
    { id: Math.random().toString(), text: "Butter" },
    { id: Math.random().toString(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      // Alert.alert("Error", "Please enter an item", { text: "OK" });
      return;
    } else {
      setItems((prevItems) => {
        return [{ id: Math.random().toString(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="🛒 Shopping List..." />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: 'lightyellow',
  },
});

export default App;
