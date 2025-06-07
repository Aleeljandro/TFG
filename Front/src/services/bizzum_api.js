
import BACKEND_URL from "./confi";

export const registerBizum = (bizum) => {
    return fetch(`${BACKEND_URL}/api/bizums`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bizum),
        }).then(response => response.json());
};
      
