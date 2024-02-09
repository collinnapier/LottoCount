import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Counter from "./components/Counter";
import ClearButton from "./components/ClearButton";

export default function App() {
  const defaultCounts = {
    pick3: 0,
    pick4: 0,
    cash5: 0,
    mega: 0,
    power: 0,
    pop: 0,
    paper: 0,
  };
  const [counts, setCount] = useState({ ...defaultCounts });

  const handleSetCount = (id, value) => {
    var newCounts = { ...counts };
    newCounts[id] += value;
    setCount(newCounts);
  };

  const handleResetState = () => {
    setCount({ ...defaultCounts });
  };

  return (
    <View style={styles.container}>
      <View style={styles.counters}>
        <ClearButton onReset={handleResetState} />
        <Counter
          title='Pick 3'
          id='pick3'
          count={counts.pick3}
          onCountChange={handleSetCount}
        />
        <Counter
          title='Pick 4'
          id='pick4'
          count={counts.pick4}
          onCountChange={handleSetCount}
        />
        <Counter
          title='Cash 5'
          id='cash5'
          count={counts.cash5}
          onCountChange={handleSetCount}
        />
        <Counter
          title='Mega Mill'
          id='mega'
          count={counts.mega}
          onCountChange={handleSetCount}
        />
        <Counter
          title='Powerball'
          id='power'
          count={counts.power}
          onCountChange={handleSetCount}
        />
        <Counter
          title='Cash Pop'
          id='pop'
          count={counts.pop}
          onCountChange={handleSetCount}
        />
        <Counter
          title='Paper'
          id='paper'
          count={counts.paper}
          onCountChange={handleSetCount}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#0f121a",
    color: "#fff",
  },
  counters: {
    flexDirection: "column",
    gap: 10,
  },
  counterTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
