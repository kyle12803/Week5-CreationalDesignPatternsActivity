import { AbstractCalculatorModelFactory } from "./abstractCalculatorModelFactory";
import { RoundingCalculator } from "./roundingCalculator";

export class RoundingCalculatorModelFactory extends AbstractCalculatorModelFactory {
    public makeCalculator() {
        return new RoundingCalculator(4);
    }
}