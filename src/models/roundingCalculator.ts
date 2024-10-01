import { ICalculatorModel } from "../interfaces/calculator-model.interface";
import { AbstractCalculatorModel } from "./abstractCalculatorModel";

export class RoundingCalculator extends AbstractCalculatorModel implements ICalculatorModel {
    private nrDecimal: number;

    public constructor(nrDecimal: number) {
        super();
        this.nrDecimal = nrDecimal;
    }

    public display(): string {
        return parseFloat(this._buffer).toFixed(this.nrDecimal);
      }
}