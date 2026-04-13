export const redirectToRegistration = (role = 'user') => {
    // TezroWeb کا یو آر ایل (مثلاً Vercel لنک)
    const webRepoUrl = "https://tezroweb.vercel.app/register";
    const callbackUrl = window.location.origin; // واپسی کا راستہ
    
    // ویب ریپو کو بتانا کہ کون سا یوزر آ رہا ہے اور واپسی کہاں کرنی ہے
    window.location.href = `${webRepoUrl}?role=${role}&returnTo=${callbackUrl}`;
};
