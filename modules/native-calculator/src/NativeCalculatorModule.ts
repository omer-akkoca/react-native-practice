import { NativeModule, requireNativeModule } from "expo-modules-core";

type NativeCalculatorModuleType = {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
  isEven(number: number): boolean;
  getDeviceName(): string;
  getDeviceInfo(): Promise<string>;
  onCounterUpdated: (event: { count: number }) => void;
};

declare class NativeCalculatorModule extends NativeModule<NativeCalculatorModuleType> {
  startCounter(): void;
  stopCounter(): void;
}

export default requireNativeModule<NativeCalculatorModule>("NativeCalculator");
