export const byteArrayToBase64 = (byteArray: any) => {
  const binaryString = byteArray.reduce(
    (acc: string, byte: number) => acc + String.fromCharCode(byte),
    ""
  );
  return window.btoa(binaryString);
};

export const getImageFromBuffer = (image: any) => {
  const base64String = byteArrayToBase64(image.data.data);
  const imageUrl = `data:${image.contentType};base64,${base64String}`;
  return imageUrl;
};
