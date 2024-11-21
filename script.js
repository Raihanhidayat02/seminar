function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (!name || !email) {
      alert('Harap isi semua kolom.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Masukkan alamat email yang valid.');
      return;
    }
  
    alert(`Terima kasih, ${name}! Pendaftaran Anda berhasil.`);
  }
  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  