
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { AbstractCalculatorModel } from './abstractCalculatorModel';

export class StandardCalculatorModel extends AbstractCalculatorModel implements ICalculatorModel {

  private static _theInstance: StandardCalculatorModel;

  private constructor() {
    super();
  }

  public static theInstance(): StandardCalculatorModel {
    if (!StandardCalculatorModel._theInstance) {
      StandardCalculatorModel._theInstance = new StandardCalculatorModel();
    }
    return StandardCalculatorModel._theInstance;
  }

  public display(): string {
    return this._buffer;
  }
}
