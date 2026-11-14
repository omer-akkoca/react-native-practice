import ExpoModulesCore

public class NativeCalculatorModule: Module {
  public func definition() -> ModuleDefinition {
    Name("NativeCalculator")

    Function("add") { (a: Int, b: Int) -> Int in
      return a + b
    }

    Function("multiply") { (a: Int, b: Int) -> Int in
      return a * b
    }

    Function("isEven") { (number: Int) -> Bool in
      return number % 2 == 0
    }
  }
}
