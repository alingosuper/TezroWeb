import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";
import { generateSecureToken } from "../security/FinalSecurityShield";

export const registerUser = async (userData) => {
    const db = getDatabase(app);
    const securityToken = generateSecureToken();
    
    // موبائل نمبر کو بطور یونیک ID استعمال کرنا بہتر ہے
    const newUserRef = ref(db, 'registrations/' + userData.phone);
    
    await set(newUserRef, {
        ...userData,
        token: securityToken,
        status: "pending", // ایڈمن کے لیے پینڈنگ اسٹیٹس
        registeredAt: new Date().toISOString()
    });
    
    console.log("🛡️ Tezro: Encrypted data sent to Admin.");
};
