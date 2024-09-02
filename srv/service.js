const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    const { Employees } = this.entities;

    this.on('READ', Employees, async (req) => {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch('https://c2207a5btrial.it-cpitrial05-rt.cfapps.us10-001.hana.ondemand.com/http/getdata', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic c2ItYTc1M2Q0NDYtYTY4MS00OWZkLTg2YjMtMTVkZDk3YzhjYmU5IWIzMjQwNjh8aXQtcnQtYzIyMDdhNWJ0cmlhbCFiMjY2NTU6NjUxOWMwZTAtYzNkNy00OWEwLWIwZjQtMTBiNGI5ODAwYThmJHVTM3BZLWljNXdoa01RNm5CcEpfa1BrVVVIYzRGaDJJOWdFakpybTlHRFk9',  // Replace with actual token
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        return data.map(employee => ({
            id: employee.id,
            firstName: employee.firstName,
            lastName: employee.lastName,
            displayName: employee.displayName,
            jobTitle: employee.jobTitle,
            workEmail: employee.workEmail,
            location: employee.location,
            mobilePhone: employee.mobilePhone,
            workPhone: employee.workPhone,
            workPhoneExtension: employee.workPhoneExtension,
            photoUrl: employee.photoUrl,
            department: employee.department,
            supervisor: employee.supervisor,
            twitterFeed: employee.twitterFeed,
            facebook: employee.facebook,
            pinterest: employee.pinterest,
            linkedIn: employee.linkedIn,
            instagram: employee.instagram,
            canUploadPhoto: !!employee.canUploadPhoto,  // Convert to Boolean
            division: employee.division,
            photoUploaded: !!employee.photoUploaded  // Convert to Boolean
        }));
    });
});
