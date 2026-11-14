import { registerWebModule, NativeModule } from 'expo';

class NativeCalculatorModule extends NativeModule<{}> {}

export default registerWebModule(NativeCalculatorModule, 'NativeCalculatorModule');
