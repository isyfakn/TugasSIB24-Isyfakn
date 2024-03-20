// ProductAPI.js
const addProduct = async (productNama, productJumlah, productHarga) => {
    try {
        const response = await fetch('https://crudcrud.com/api/116ac5a243ad4d44b931df7826c5b3a0', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama: productNama,
                jumlah: productJumlah,
                harga: productHarga
            })
        });
        if (!response.ok) {
            throw new Error('Failed to add product');
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};
