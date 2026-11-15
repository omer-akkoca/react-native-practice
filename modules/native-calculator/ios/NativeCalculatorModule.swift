import ExpoModulesCore
import UIKit

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

    Function("getDeviceName") { () -> String in
      return "\(UIDevice.current.name) - \(UIDevice.current.model)"
    }

    AsyncFunction("getDeviceInfo") { () async throws -> String in
      var deviceInfo = ""
      try await Task.sleep(for: .seconds(2))
      deviceInfo += "Device Name: \(UIDevice.current.name)\n"
      deviceInfo += "Device Model: \(UIDevice.current.model)\n"
      deviceInfo += "System Version: \(UIDevice.current.systemVersion)\n"
      return deviceInfo
    }


  }
}
