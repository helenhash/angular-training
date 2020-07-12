import * as _ from 'lodash';
import {ColumnConstant, StatusConstant} from '@app/core/util/common.constants';

export default class StringUtils {

  static trimValue(inputValue: string) {
    if (inputValue) {
      return inputValue.trim();
    } else {
      return inputValue;
    }
  }

  static format(str: string, ...args: string[]): string {
    return str.replace(/{(\d+)}/g, (match, number) => {
      return !_.isNil(args[number]) ? _.toString(args[number]) : match;
    });
  }

  static formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0 B';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  public static isBlank(value: any): boolean {
    return value === null || value === undefined || (value.length !== undefined && value.length === 0);
  }

}
