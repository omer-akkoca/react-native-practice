import { PropsWithChildren, useState } from "react";
import { Button, Text, View } from "react-native";
import { NativeCalculator } from "../../modules";

const Calculator = () => {
  const [result, setResult] = useState<number | null>(null);
  const [deviceName, setDeviceName] = useState<string | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const calculate = () => {
    const value = NativeCalculator.multiply(5, 10);
    setResult(value);
  };

  const getDeviceName = () => {
    const name = NativeCalculator.getDeviceName();
    setDeviceName(name);
  };

  const getDeviceInfo = async () => {
    setLoading(true);
    try {
      const info = await NativeCalculator.getDeviceInfo();
      setDeviceInfo(info);
    } catch (error) {
      console.error("Error fetching device info:", error);
    } finally {
      setLoading(false);
    }
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
      <HStack>
        <Button title="Calculate" onPress={calculate} />
        <Text>Result: {result ?? "Not Calculated"}</Text>
      </HStack>
      <HStack>
        <Button title="Get Device Name" onPress={getDeviceName} />
        <Text>Device Name: {deviceName ?? "Not Available"}</Text>
      </HStack>
      <HStack>
        <Button title="Get Device Info" onPress={getDeviceInfo} />
        {loading && <Text>Loading...</Text>}
        {deviceInfo && <Text>{deviceInfo}</Text>}
      </HStack>
      <Button
        title="Light Haptic"
        onPress={() => NativeCalculator.triggerHaptic("light")}
      />
    </View>
  );
};

const HStack: React.FC<PropsWithChildren> = ({ children }) => (
  <View
    style={{
      flexDirection: "row",
      gap: 16,
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    {children}
  </View>
);

export default Calculator;
