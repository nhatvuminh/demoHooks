import React, { useCallback } from "react";
import { SafeAreaView, VirtualizedList } from "react-native";
import { styles } from "./Home.styles";
import ListItem from "./list_item/ListItem";

const DATA = [
  {
    userName: "Nhat",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzcbB-ErB0qjR15xBUWk2HEwbSIVC9EEEvA&usqp=CAU",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKAD0Yi0Kg7UoWaqA-Bt9DjUKOrGoRXedXg&usqp=CAU",
  },
  {
    userName: "Chi Chi",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL0jvtGsgrxh0Y-A6vpAO6n1eEwA8snstGQ&usqp=CAU",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagMeTcYUHWl7ARmHruHTNCYdN2soSRe1QFQ&usqp=CAU",
  },
  {
    userName: "Layla Dang",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6xQP4PPKdco62CR7cJJvNPCJ66y1g2RhVg&usqp=CAU",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21E45o4V2Mzfbvt0pbp5e_eU50CSD2vRGTg&usqp=CAU",
  },
  {
    userName: "Thai Ngan",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXh3izKG-85iOjhM5qBg9fR0u1DAU_2yZMTw&usqp=CAU",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTd9jJFiJTWD5qEpSZ2YBD1qhS9LmKRl9UCg&usqp=CAU",
  },
  {
    userName: "Thanh Luan",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlo6fDJAyXFaptacvl1l1Y2TPNbXrRBG8RA&usqp=CAU",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzx_xnfugPTqkkuSRH9gx8ize-8JVOPzi1g&usqp=CAU",
  },
  {
    userName: "Koka",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKweKCBorNKvZQbwWFxL1d7edmNMaTHsPnlg&usqp=CAU",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH9iecvgfbR59YW18UBO6lG4bQgn09zvCJmg&usqp=CAU",
  },
];

export default function HomeScreen() {
  

  console.log("render Home");

  return (
    <SafeAreaView style={styles.container}>
      <ListItem data={DATA} />
    </SafeAreaView>
  );
}
