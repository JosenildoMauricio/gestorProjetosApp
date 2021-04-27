
export function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                access_token: 'asdfajqiasdlkfjaoiuoiu987234kjhsedfnfklna',
                nome: 'Josenildo Mauricio',                
            });
        }, 200);
    });
}