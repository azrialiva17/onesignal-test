import { useEffect } from "react";

export default OneSignalScript = () => {
    useEffect(() => {
        OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
            OneSignal.init({
                appId: "12ba84af-3f1e-4805-ae2c-6a454a2ee412",
            });
        });
    });
}
