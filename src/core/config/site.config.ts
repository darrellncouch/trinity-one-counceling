import { PhoneUtility } from "../utilities/phone.utility";

export const siteConfig = {
  companyName: "Trinity-One Counseling",
  contactInfo: {
    name: "Debra Legge",
    phone: "6024037393",
    email: "debra@trinityonecounseling.com",
    title: "MPC, LAC Associate Counselor",
    phoneDisplay: () => PhoneUtility.displayFormat(siteConfig.contactInfo.phone),
    address: "1110 E. Missouri Avenue, Suite 640, Phoenix, AZ 85014"
  },
  supervisorInfo: {
    name: "Kim Kino",
    title: "LPC",
    email: "kimkino@kniocounseling.com",
    phone: "4806508883",
    phoneDisplay: () => PhoneUtility.displayFormat(siteConfig.supervisorInfo.phone)
  }


}
