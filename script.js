function validateForm() {
    const form = document.getElementById('registrationForm');

    const email = form.email.value.trim();
    const phoneNo = form.phoneNo.value.trim();

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Phone validation
    if (phoneNo.length !== 10 || isNaN(phoneNo)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    // Collect data
    const formData = {
        Name: form.name.value,
        FatherName: form.fatherName.value,
        MotherName: form.motherName.value,
        DOB: form.dob.value,
        Address: form.address.value,
        PhoneNo: form.phoneNo.value,
        Email: form.email.value,
        Gender: form.gender.value
    };

   const newWin = window.open("", "_blank");
    newWin.document.write("<h2>Submitted User Details</h2><ul>");
    for (let key in formData) {
        newWin.document.write(`<li><strong>${key}:</strong> ${formData[key]}</li>`);
    }
    newWin.document.write("</ul>");
    newWin.document.close();

    return false;

}
