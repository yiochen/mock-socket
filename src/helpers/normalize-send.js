export default function normalizeSendData(data) {
  if (
    Object.prototype.toString.call(data) !== '[object Blob]' &&
    !(data instanceof ArrayBuffer) &&
    !ArrayBuffer.isView(data)
  ) {
    data = String(data);
  }

  return data;
}
