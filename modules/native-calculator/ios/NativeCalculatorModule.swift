import ExpoModulesCore
import Foundation

public class NativeCalculatorModule: Module {
    private var timer: Timer?
    private var counter = 0

    public func definition() -> ModuleDefinition {
        Name("NativeCalculator")

        Events("onCounterUpdated")

        Function("startCounter") {
            DispatchQueue.main.async {
                guard self.timer == nil else { return }

                self.counter = 0

                let timer = Timer(
                    timeInterval: 1.0,
                    repeats: true
                ) { [weak self] _ in
                    guard let self = self else { return }

                    self.counter += 1

                    self.sendEvent("onCounterUpdated", [
                        "count": self.counter
                    ])
                }

                self.timer = timer
                RunLoop.main.add(timer, forMode: .common)
            }
        }

        Function("stopCounter") {
            DispatchQueue.main.async {
                self.stopTimer()
            }
        }

        OnStopObserving {
            DispatchQueue.main.async {
                self.stopTimer()
            }
        }

        OnDestroy {
            DispatchQueue.main.async {
                self.stopTimer()
            }
        }
    }

    private func stopTimer() {
        timer?.invalidate()
        timer = nil
    }
}
