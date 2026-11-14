package expo.modules.nativecalculator

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class NativeCalculatorModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("NativeCalculator")
  }
}
