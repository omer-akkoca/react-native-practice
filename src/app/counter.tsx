import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { NativeCalculator } from "../../modules";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const subscription = NativeCalculator.addListener(
      "onCounterUpdated",
      (event) => {
        setCount(event.count);
      },
    );

    return () => {
      NativeCalculator.stopCounter();
      subscription.remove();
    };
  }, []);

  const startCounter = () => {
    setCount(0);
    NativeCalculator.startCounter();
    setIsRunning(true);
  };

  const stopCounter = () => {
    NativeCalculator.stopCounter();
    setIsRunning(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 24 }}>Native Counter</Text>

      <Text style={{ fontSize: 48, fontWeight: "bold" }}>{count}</Text>

      <Button
        title="Start Counter"
        onPress={startCounter}
        disabled={isRunning}
      />

      <Button
        title="Stop Counter"
        onPress={stopCounter}
        disabled={!isRunning}
      />
    </View>
  );
}
