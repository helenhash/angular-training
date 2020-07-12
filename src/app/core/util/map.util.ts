export class MapConstant {
  static mapRolesDesc(key: number): string {
    const mapRolesDesc = new Map<number, string>();
    mapRolesDesc.set(1, 'Super User');
    mapRolesDesc.set(2, 'Store Accounting User');
    mapRolesDesc.set(3, 'Regular User');
    return mapRolesDesc.get(key);
  }
}

