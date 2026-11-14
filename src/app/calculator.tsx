import { useState } from "react";
import { Button, Text, View } from "react-native";
import { NativeCalculator } from "../../modules";

const Calculator = () => {
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const value = NativeCalculator.multiply(5, 10);
    setResult(value);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <Text>Calculator</Text>
      <Button title="Calculate" onPress={calculate} />
      <Text>Result: {result ?? "Not Calculated"}</Text>
    </View>
  );
};

export default Calculator;
