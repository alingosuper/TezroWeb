import Tesseract from 'tesseract.js';

export const extractTezroData = async (imageFile, onProgress) => {
  try {
    const result = await Tesseract.recognize(imageFile, 'eng', {
      logger: m => {
        if (m.status === 'recognizing' && onProgress) {
          onProgress(parseInt(m.progress * 100));
        }
      }
    });

    const fullText = result.data.text;
    console.log("Raw OCR Text:", fullText);

    // CNIC Pattern (xxxxx-xxxxxxx-x)
    const cnicPattern = /[0-9]{5}-[0-9]{7}-[0-9]{1}/;
    const cnicMatch = fullText.match(cnicPattern);

    return {
      success: true,
      cnic: cnicMatch ? cnicMatch[0] : "پہچان نہیں ہوسکی",
      raw: fullText
    };
  } catch (error) {
    console.error("OCR Error:", error);
    return { success: false, error: error.message };
  }
};
