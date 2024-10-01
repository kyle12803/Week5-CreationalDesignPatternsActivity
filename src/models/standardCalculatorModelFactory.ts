import { ICalculatorModel } from "../interfaces/calculator-model.interface";
import { AbstractCalculatorModelFactory } from "./abstractCalculatorModelFactory";
import { StandardCalculatorModel } from "./calculator.model";

export class StandardCalculatorModelFactory extends AbstractCalculatorModelFactory {
    public makeCalculator() {
        return StandardCalculatorModel.theInstance();
    }
}