service ExternalService {
    entity Employees {
        key id: String;
        firstName: String;
        lastName: String;
        displayName: String;
        jobTitle: String;
        workEmail: String;
        location: String;
        mobilePhone: String;
        workPhone: String;
        workPhoneExtension: String;
        photoUrl: String;
        department: String;
        supervisor: String;
        twitterFeed: String;
        facebook: String;
        pinterest: String;
        linkedIn: String;
        instagram: String;
        canUploadPhoto: Boolean;
        division: String;
        photoUploaded: Boolean;
    }
}
