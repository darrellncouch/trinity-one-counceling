import { PhoneUtility } from "../utilities/phone.utility";
import { Assets } from "./assets.config";

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
  },
  siteInfo: {
    practice: {
      header: "My Practice",
      content: [
        {
          id: 1,
          text: "Each of us has a certain perspective or predisposition as to how we handle the stress and anxiety of life. How we process the events and circumstances of our lives determines how mentally healthy we are. As we find ourselves affected negatively by circumstances, we may struggle to know how to manage and direct this part of ourselves so that it does not negatively impact our lives, but strengthens us. Life brings all sorts of situations our way that we may not know how to process in a healthy manner. This can lead to anger, anxiety, stress, or depression. Even trauma and loss are mostly out of our control but we need to process those things in a healthy way. Sometimes life can begin to feel unmanageable or maybe just uncomfortable and we may need help working through the stages in our life. It takes someone willing to connect with and listen and then help guide us through our own understanding and knowledge of mental health and healing. This is where I enjoy coming alongside my clients helping them to obtain the tools and wisdom to create simplicity and peace in their lives and to help heal their pain and suffering."
        }
      ]
    },
    treatment: {
      header: "Treatment Preferences",
      content: [
        {
          id: 1,
          text: "I work together with my clients to administer treatment by using counseling modalities such as Mindfulness-Based Cognitive Therapy (MBCT), Person-Centered Therapy, Strength-Based Therapy, Eye Movement Desensitization Reprocessing (EMDR) and The Three Principles-Based techniques. Resilience is our common response to difficult life issues such as stress, anxiety, depression, trauma and loss and through resilience we can create sustainable change. I desire to support my clients through these evidence-based techniques to obtain this sustaining change for complete mental health.",
        }
      ]
    },
    about: {
      header: "About Me",
      content: [
        {
          id: 1,
          text: "I am an Arizona native growing up in a family of eleven, eight siblings, me, and my mother and father. Raised in a Catholic community and grade school, this was the foundation that gave me a sense of love, belonging and the desire to be present for others. In my early teenage years my parents divorced and this affected me in ways I never knew until I was in my early 20s. At the time, I did not deal with my circumstances in a healthy way but instead tried to ignore the pain, only to have it surface later in much more painful ways to myself and others. This gave me the desire to learn more about human behaviors to help myself and others. I followed that desire by obtaining my Master’s Degree in Professional Counseling and further with a Post-Master’s Certificate in Trauma-Informed Care, both at Grand Canyon University. I have four years of experience in trauma-informed care and 20 years of experience managing a prominent mediation firm in Phoenix."
        },
        {
          id: 2,
          text: "Personally, I enjoy spending time with God and my adult children and grandchildren. I love hiking, bicycling and reading. I value my relationships because they have been key in showing me how to love myself and others. By putting “the other’s” interests ahead of our own we create a win-win experience which brings immense joy to each day. "
        }
      ]
    },
    professional: {
      header: "Professional History",
      content: [
        {
          id: 1,
          logo: Assets.images[Assets.images.map(x => x.id).indexOf(2)],
          titel: "Inpatient Therapist",
          company: "Calvery Healing Center",
          startDate: "Mar 2018",
          endDate: "Present"
        },
        {
          id: 2,
          logo: Assets.images[Assets.images.map(x => x.id).indexOf(1)],
          titel: "Licensed Associate Counselor",
          company: "Kino Counseling Center",
          startDate: "Apr 2023",
          endDate: "Present"
        }
      ]
    }
  }
}
