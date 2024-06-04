export const byteArrayToBase64 = (byteArray: any) => {
    const binaryString = byteArray.reduce(
      (acc: string, byte: number) => acc + String.fromCharCode(byte),
      ""
    );
    return window.btoa(binaryString);
  };

 export const getImageFromBuffer = (skill: any) => {
    const base64String = byteArrayToBase64(skill.logo.data.data);
    const imageUrl = `data:${skill.logo.contentType};base64,${base64String}`;
    return imageUrl;
  };