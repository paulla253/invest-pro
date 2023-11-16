import { EnumUtil } from '../../common/util/enum.util';
import { EIndexer } from '../enum/indexer.enum';

export class Index {
  constructor(private readonly index: string) {
    this.validate(index);
  }

  public get value(): string {
    return this.index;
  }

  private validate(index: string) {
    const result = EnumUtil.checkValue(EIndexer, index);

    if (result) {
      throw new Error('index is invalid');
    }
  }
}
