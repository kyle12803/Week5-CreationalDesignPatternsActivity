import { ActionKeys } from "../enums/action-keys.enum";
import { NumericKeys } from "../enums/numeric-keys.enum";
import { OperatorKeys } from "../enums/operator-keys.enum";
import { ICalculatorModel } from "../interfaces/calculator-model.interface"

export abstract class AbstractCalculatorModelFactory {
    public abstract makeCalculator(): ICalculatorModel;
}