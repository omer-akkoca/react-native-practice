import { NativeModule, requireNativeModule } from "expo-modules-core";

type NativeCalculatorModuleType = {
  triggerHaptic(style: "light" | "medium" | "heavy"): void;
};

declare class NativeCalculatorModule extends NativeModule<NativeCalculatorModuleType> {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
  isEven(number: number): boolean;
  getDeviceName(): string;
  getDeviceInfo(): Promise<string>;
  startCounter(): void;
  stopCounter(): void;
  triggerHaptic(style: "light" | "medium" | "heavy"): void;
}

export default requireNativeModule<NativeCalculatorModule>("NativeCalculator");
