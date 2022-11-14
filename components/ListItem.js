import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ListItem = ({ item, deleteItem }) => {
  return (
    <Pressable style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <FontAwesome
          name="remove"
          size={24}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "sandybrown",
    borderColor: "#eee",
    marginHorizontal: 14,
    marginVertical: 3,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 16,
    color: "darkred",
  },
});

export default ListItem;
