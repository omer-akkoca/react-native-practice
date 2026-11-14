import { requireNativeModule } from "expo-modules-core";

type NativeCalculatorModuleType = {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
  isEven(number: number): boolean;
};

export default requireNativeModule<NativeCalculatorModuleType>(
  "NativeCalculator",
);
