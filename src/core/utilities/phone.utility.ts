export class PhoneUtility {

  public static displayFormat(phone: string) {
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  }
}
