/* Legal pages, ported verbatim from the original elbrit.org (WordPress, 2019). */

export type LegalBlock =
  | { t: "h"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] };

export type LegalDoc = { title: string; summary: string; blocks: LegalBlock[] };

export const LEGAL_DOCS = {
  "privacy-policy": {
    "title": "Privacy Policy",
    "summary": "How we collect, use and protect personal information shared with us through this website.",
    "blocks": [
      {
        "t": "p",
        "text": "We, at Elbrit Life Sciences endeavour to ensure and maintain the privacy and security of all personal information collected or retrieved by your use, as a visitor of our website. The term “personal data” as used in this Policy refers to information such as your name, birth date, e-mail address or mailing address, etc. Elbrit Life Sciences Private Limited (Elbrit) pledges to comply with internationally recognized standards of privacy protection."
      },
      {
        "t": "h",
        "text": "Intended use of personal data"
      },
      {
        "t": "p",
        "text": "Most of the sections of our website do not require any form of registration and/or creation of account. However, if some sections of our website require registration, such registration shall be at your discretion and you may choose to not to register with us, however in such event you will not be able to access such section. In the event you choose to register, you may need to fill in certain fields to gain full access to such section of the site by choosing a user name and password and/or for us to respond to your query."
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences may collect and use personal data to provide information to you about us, to market products and services, to process orders or applications submitted by you, to create products or services to meet your needs, to seek your feedback or to contact you in relation to those services offered on our websites, to provide you educative Information to help resolve your problem and/or to help build your knowledge as also to allow you to subscribe to our newsletters."
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences keeps your data and all information received only for as long as is reasonably necessary for such above mentioned purposes and in compliance with applicable laws in India, in relation to legal or ethical reporting or documentation retention requirements."
      },
      {
        "t": "p",
        "text": "This website is not intended nor aimed for the use or access by children below 18 years of age."
      },
      {
        "t": "h",
        "text": "Non-disclosure of information"
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences will not sell, share, or otherwise distribute your personal data to third parties without your prior consent, and if required to provide the same to a third party, for further processing or connection to its business, it will in accordance with applicable law for the purpose for which the data were originally collected. Elbrit Life Sciences will, wherever possible, endeavour to ensure that the disclosure and intended use of the data are clearly indicated and that such third parties provide the same level of protection as Elbrit Life Sciences."
      },
      {
        "t": "h",
        "text": "Right of access"
      },
      {
        "t": "p",
        "text": "If we have collected your personal data, you have the right to update your personal data. If you wish to review or change the details you have supplied to us, please contact the Webmaster, however such review will be available only in accordance with our data retention policy. We are not obliged to store your data for a period which is beyond the intended purpose for which such data was collected or submitted."
      },
      {
        "t": "h",
        "text": "Security and confidentiality"
      },
      {
        "t": "p",
        "text": "To ensure the security and confidentiality of personal data that Elbrit Life Sciences collects on-line, Elbrit Life Sciences uses data networks protected, inter alia, by industry standard firewall and password protection. Access to personal data is restricted to only those employees on a need to know basis for the sole purpose of preserving the data and who are otherwise authorized and trained to handle such data properly. Staff compliance with our policies and procedures is regularly reviewed. While we cannot guarantee against any loss, misuse or alteration to data, we strive to prevent any such unfortunate occurrences."
      },
      {
        "t": "h",
        "text": "Data transfer abroad"
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences is a global enterprise and may have databases in different jurisdictions. Elbrit Life Sciences, if required, may transfer your data to one of its databases outside your country of domicile. In such event if the level of privacy protection in such country of database does not comply with recognized international standards, we will ensure that data transfers to such databases in that country are adequately protected and that the transfer of data to third parties in such countries will not occur unless Elbrit Life Sciences implements the standards it generally follows to maintain the personal data."
      },
      {
        "t": "h",
        "text": "Anonymous data and “Cookies”"
      },
      {
        "t": "p",
        "text": "Most of the information that Elbrit Life Sciences collects from its website(s) is anonymous information, such as the pages you visit and the searches you perform. Anonymous information is processed by Elbrit Life Sciences to help improve the contents of the site and to compile aggregate statistics about individuals using our site for internal, market research purposes. In so doing, Elbrit Life Sciences may install “cookies” that collect the first level domain name of the user (e.g., “testmail.com” from an e-mail address of “test@testmail.com”) and the date and time of access. “Cookies” by themselves cannot be used to discover the identity of the user. A “cookie” is a small piece of information, which is sent to your browser and stored on your computer’s hard drive. Cookies do not damage your computer. You can set your browser to notify you when you receive a “cookie”, this will enable you to decide if you want to accept it or not."
      },
      {
        "t": "h",
        "text": "Spamming"
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences does not condone “spamming”. Spamming is defined as sending unsolicited e-mails, usually of a commercial nature, in large numbers and repeatedly to individuals with whom the sender has had no previous contact or who have declined to receive such communications. In contrast, Elbrit Life Sciences may inform all its visitors of its products, health, or other related information by e-mail, whilst giving you the choice of opting out of such service."
      },
      {
        "t": "h",
        "text": "Links to other sites"
      },
      {
        "t": "p",
        "text": "This Privacy Policy applies only to Elbrit Life Sciences’s websites. Elbrit Life Sciences may provide links to other websites, which we believe, may be of interest to our visitors. We try to ensure that such websites are of the highest standard. However, Elbrit Life Sciences does not guarantee the standards of every website link it provides or be responsible for the contents of non-Elbrit Life Sciences sites. The risk of accessing such websites is solely yours."
      },
      {
        "t": "h",
        "text": "No paid services offered"
      },
      {
        "t": "p",
        "text": "Unless otherwise stated, this website does not offer you to access any content on payment basis. The access to the content of the website is only on “read-only” basis."
      },
      {
        "t": "h",
        "text": "Refund & cancellation policy"
      },
      {
        "t": "p",
        "text": "At Elbrit Life Sciences, we strive to ensure customer satisfaction with our products and services. However, if you are not entirely satisfied with your purchase, we are here to help."
      },
      {
        "t": "h",
        "text": "Refund"
      },
      {
        "t": "p",
        "text": "Eligibility: To be eligible for a refund, you must return the product within 30 days of the purchase date. The product must be unused, in the same condition that you received it, and in the original packaging."
      },
      {
        "t": "p",
        "text": "Process: To initiate a refund, please contact our customer service team with your order details. Once we receive your request, we will provide instructions on how to return the product."
      },
      {
        "t": "p",
        "text": "Inspection: Upon receiving the returned product, we will inspect it and notify you of the status of your refund. If your return is approved, we will initiate a refund to your original method of payment."
      },
      {
        "t": "p",
        "text": "Exceptions: Certain items are non-refundable, including perishable goods, custom products, and items on sale. Please check the product description for specific details."
      },
      {
        "t": "h",
        "text": "Cancellations"
      },
      {
        "t": "p",
        "text": "Order Cancellation: You can cancel your order within 24 hours of placing it. To cancel your order, please contact our customer service team with your order details."
      },
      {
        "t": "p",
        "text": "Process: If your order is eligible for cancellation, we will process your request and issue a full refund to your original method of payment."
      },
      {
        "t": "p",
        "text": "Exceptions: Orders that have already been shipped cannot be cancelled. In such cases, you may return the product following our refund policy."
      },
      {
        "t": "h",
        "text": "Contact"
      },
      {
        "t": "p",
        "text": "If you have any queries or complaints about our compliance with this Privacy Policy, please contact the Webmaster. This privacy policy is effective as of 1st April 2014. We aim to constantly improve the tools available to you to manage the data that you provide to us. Please refer to this page from time to time to review these and other new features or updates"
      }
    ]
  },
  "terms-of-use": {
    "title": "Terms of Use",
    "summary": "The terms and conditions that govern your use of the Elbrit Life Sciences website.",
    "blocks": [
      {
        "t": "p",
        "text": "This Website (‘Site’) belongs to Elbrit Life Sciences and is provided to the User on an ‘As Is Where is’ basis without any warranty express, implied, statutory or otherwise of merchantability, fitness for a particular purpose, accuracy, completeness or for non-infringement of third party rights or in any manner be construed as a representation or a recommendation of any particular product or service for the treatment, prevention or mitigation or cure of an ailment."
      },
      {
        "t": "h",
        "text": "Acceptance"
      },
      {
        "t": "p",
        "text": "By using the Site, the User acknowledges the Disclaimer given above and agrees to abide by and be bound by these Terms and Conditions of Use and any modification or amendment made thereto by Elbrit Life Sciences."
      },
      {
        "t": "h",
        "text": "Use of information"
      },
      {
        "t": "p",
        "text": "This Web Site for the User’s personal and non-commercial use. Elbrit Life Sciences has made a conscious effort to display and describe information about Elbrit Life Sciences, its products and services on the site accurately. All materials on this Site are for the User’s general and educational benefit only and should not be construed as medical advice. The User should always rely on the User’s health care professional for diagnosis and treatment. The User is not allowed to duplicate, modify, display, alter, perform, reproduce, publish, license, create, transfer, or sell any information, products or services obtained from this Site."
      },
      {
        "t": "h",
        "text": "Modification"
      },
      {
        "t": "p",
        "text": "Information on this Site may contain technical inaccuracies or typographical errors. Elbrit Life Sciences reserves the right to update, change, modify, delete any of the Terms, in whole or part at any time, and or may suspend the operation of this Site for support or maintenance work, without notice. Any changes or updates will be effective immediately upon posting the revised Terms on the Site. The User is expected to review this statement periodically. The User’s continued use of this Site constitutes an acceptance of any and all revised Terms."
      },
      {
        "t": "h",
        "text": "User information"
      },
      {
        "t": "p",
        "text": "All information or material posted by the User whether by way of questions, comments, etc. is and will be treated as non-confidential information and shall be deemed the property of Elbrit Life Sciences. The User is forbidden from posting information or material containing vulgar, obscene, threatening or otherwise using unlawful language."
      },
      {
        "t": "h",
        "text": "Intellectual property"
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences’s names and logos including but not restricted to text and graphic referenced on the Site are trademarks and copyrights of Elbrit Life Sciences or its affiliates. Elbrit Life Sciences’s Trademarks may not be used in connection with any product or service that is not a Elbrit Life Sciences product or service or in any manner that disparages or discredits Elbrit Life Sciences. No reproduction of any part of this site may be made nor is any part allowed to be modified or incorporated in any other work. Elbrit Life Sciences reserves all rights pertaining to this site as also the right to refuse access to any section of the Site in its discretion, including, without limitation, if Elbrit Life Sciences believes that user’s conduct violates applicable law or is harmful to the interests of Elbrit Life Sciences. Elbrit Life Sciences reserves the right, in its sole discretion, to terminate the User’s access to all or part of this site, with or without notice."
      },
      {
        "t": "h",
        "text": "Third party links references"
      },
      {
        "t": "p",
        "text": "It is quite likely that the site may contain links or reference to third party websites and may be provided for convenience. However, inclusion of any link to the site is not be considered as belonging to Elbrit Life Sciences. Access by the User of these links is solely to the risk of the User."
      },
      {
        "t": "h",
        "text": "Indemnity"
      },
      {
        "t": "p",
        "text": "The User agree to indemnify and hold harmless Elbrit Life Sciences, from any and all claim, cost, expense, judgment or other loss on account of the User prohibited, unlawful and unauthorized use of this Web Site in violation of the terms and conditions and against any applicable law."
      },
      {
        "t": "h",
        "text": "Limitation of liability"
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences will not be liable to the User for any damages of any kind whatsoever, including but not limited to direct, indirect, incidental, consequential or punitive damages arising from or connected with the user’s access, use or inability to use this Site."
      },
      {
        "t": "h",
        "text": "Severability"
      },
      {
        "t": "p",
        "text": "If any term or conditions herein is held to be either illegal or unenforceable, in whole or in part, under any enactment or rule of law, such a term or condition may be severed, and such a decision shall not be construed as affecting the other terms and conditions, which shall remain fully enforceable"
      },
      {
        "t": "h",
        "text": "Applicable law and jurisdiction"
      },
      {
        "t": "p",
        "text": "This site is made and controlled by Elbrit Life Sciences in India, as such all the terms and conditions expressed herein are governed by and to be interpreted in accordance with the laws of India, without regard to the choice or conflict of law provisions of any jurisdiction and all disputes arising in relation to these terms whether in contract or tort or otherwise, is to be submitted to the jurisdiction of the courts located in Mumbai, India. Access to this Site by the User from territories where the content is illegal, is strictly prohibited. The User is not allowed to use this Site in violation of any applicable export laws and regulations and the User shall be solely responsible for compliance with all such laws."
      }
    ]
  },
  "about-cookies": {
    "title": "About Cookies",
    "summary": "What cookies are and how we use them on our websites.",
    "blocks": [
      {
        "t": "p",
        "text": "Elbrit Life Sciences uses cookies to improve the experience for visitors to our websites, including websites that can be accessed through our mobile applications, and has published this Cookie Policy. It explains what cookies are and how we use them on our websites. If you don’t want to receive cookies while browsing our website, you can modify your browser and/or mobile device settings so that it notifies you when receiving cookies or you can choose to restrict or block cookies."
      },
      {
        "t": "p",
        "text": "Cookies are tiny files, composed of a string of letters and numbers, placed on your computer by web page servers. They enable the website owner to distinguish you from other users of the website. Cookies cannot be executed as code or used to deliver viruses and they cannot enable us to access your hard drive. We cannot read any information on your hard drive even if we store cookies there."
      },
      {
        "t": "p",
        "text": "The data generated through cookies on Elbrit Life Sciences websites can be used for various purposes including the following:"
      },
      {
        "t": "h",
        "text": "Strictly necessary"
      },
      {
        "t": "p",
        "text": "These cookies are essential in order to enable you to move around the website and use its features, such as accessing secure areas of the website and saving items to a shopping basket."
      },
      {
        "t": "h",
        "text": "Performance"
      },
      {
        "t": "p",
        "text": "These cookies collect information about how visitors use a website, for instance which pages visitors go to most often and if they receive error messages. They are used to improve how a website works in future versions."
      },
      {
        "t": "h",
        "text": "Functionality"
      },
      {
        "t": "p",
        "text": "These cookies allow the website to remember choices you make such as user name, language or region you are in and provide a more enhanced personal experience."
      },
      {
        "t": "h",
        "text": "Targeting or advertising"
      },
      {
        "t": "p",
        "text": "These cookies are used to deliver content more relevant to you and your interests."
      },
      {
        "t": "p",
        "text": "We don’t permit any third parties to advertise on our website but we cannot control advertisers that are allowed by internet service providers to advertise whilst you are browsing on the internet."
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences is required by law to obtain your consent for all types of cookies that we place other than those that are “strictly necessary”."
      },
      {
        "t": "p",
        "text": "You can learn more about how to manage your cookies by visiting the Help function of your browser, the settings of your mobile device or you can visit www.aboutcookies.org which provides detailed information on managing cookies on popular browsers. Please be aware that parts of our websites may not function correctly if you disable cookies."
      }
    ]
  },
  "social-media-terms-of-use": {
    "title": "Social Media Terms of Use",
    "summary": "The rules that apply when you engage with Elbrit Life Sciences on social media.",
    "blocks": [
      {
        "t": "p",
        "text": "Your use of the Elbrit Life Science Laboratories (“Elbrit Life Science”) social media channels is subject to these Terms of Use and the terms of use of the social platform from which you accessed these Terms of Use."
      },
      {
        "t": "p",
        "text": "Elbrit Life Sciences’ Facebook pages, Twitter accounts, Instagram account, YouTube channel, and Google+ accounts (collectively, “social media channels”) are social media locations for community members to connect to and learn about Elbrit Life Science through information, pictures and video concerning initiatives and programs. Our goal is to provide useful and interesting content about our company and foster an open and respectful dialogue relating to the specific issues and topics covered in our posts and tweets and other multi-media."
      },
      {
        "t": "p",
        "text": "Elbrit Life Science reserves all rights relating to the company’s social media channels, including but not limited to: (i) adding, removing, or modifying any content, (ii) blocking disruptive users; and (iii) discontinuing any of our social media channels at any time. Discussion of medical and health topics should never be construed as medical advice. You are advised to contact a health care professional in your area if you need medical advice. Elbrit Life Science does not represent that the information on Elbrit Life Science’s social media channels is accurate, complete, reliable, useful, timely or current. You read all content at your own risk. Do not rely on the information or advice in any of these postings."
      },
      {
        "t": "p",
        "text": "Elbrit Life Science may, in its sole discretion, delete irresponsible content or content that is otherwise inconsistent with the purpose of the Elbrit Life Science social media channels; namely, dissemination and sharing of on-topic, appropriate content. To the extent applicable, Elbrit Life Science reserves the right to block any user that fails to follow these Terms of Use."
      },
      {
        "t": "p",
        "text": "Examples of inappropriate or off-topic messages include, but are not limited to, the following:"
      },
      {
        "t": "ul",
        "items": [
          "Defamatory, malicious, obscene, intimidating, discriminatory, harassing or threatening comments or hate propaganda;",
          "Calls to violence of any kind;",
          "Activity that violates any law or regulation.",
          "Attempts to target Elbrit Life Science or Elbrit Life Science Followers to offer goods or services, of either a commercial or private nature;",
          "Spam directed at Elbrit Life Science or any of Elbrit Life Science’s Followers, including any form of automatically generated content or repeatedly posting the same content.",
          "Content that includes medical advice that may be unsolicited and/or unverified;",
          "Content deemed to constitute an unapproved use of any of our products or is otherwise false or misleading;",
          "Any potential infringement upon any intellectual property rights, including but not limited to, brand names, trade names, logos, copyrights or trade secrets of any person, business or place.",
          "Other content deemed to be off-topic or to disrupt the purposes of the channel, its Followers, and its sense of community and acceptance; and Content posted by fake or anonymous users."
        ]
      },
      {
        "t": "p",
        "text": "Our social media channels are not the appropriate place to resolve issues, complaints or suggestions about individual sales and service experiences or our products. This does not mean we do not want to hear about such issues, but these types of concerns are best handled by trained representatives. If you’re interested in sharing comments or feedback outside the scope of these channels, you can send a message through the “Contact Us” tab on elbrit.org. Comments may be forwarded to other Elbrit Life Science departments and personnel to ensure appropriate follow-up."
      },
      {
        "t": "p",
        "text": "Please keep in mind that Elbrit Life Science does not create, control, represent, or endorse any opinions or statements expressed by others within its social media channels, including those that Follow/Like Elbrit Life Science and those Followed/Liked by Elbrit Life Science and that any content posted by anyone other than Elbrit Life Science is the responsibility of the submitter and not Elbrit Life Science. Links which take you out of our social media channels, websites, and digital assets are not under the control of Elbrit Life Science, and Elbrit Life Science is not responsible for the terms and conditions, privacy policy, or content of any such site or any further links from such site. Elbrit Life Science is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement of the linked site by Elbrit Life Science. Also, please keep in mind that if Elbrit Life Science follows another user’s account, “likes” another page, re-tweets, “favorites,” shares, or otherwise re-posts another user’s content, such an action does not constitute an endorsement."
      },
      {
        "t": "p",
        "text": "You should understand that content you submit to our social media channels is public and will not place Elbrit Life Science under any obligation to you. This means Elbrit Life Science is free to disclose and use the ideas contained in content on a non-confidential basis to anyone without any liability to you. You should also not use Elbrit Life Science’s social media channels to submit unsolicited ideas. Generally we don’t accept these, and if you submit any – for example by posting them – you need to understand that you don’t have ownership rights in such ideas, that we won’t compensate or reward you, and that we don’t waive any rights to use similar or related ideas previously known to us, developed by our employees, or obtained from other sources. You agree that by posting content on our social media channels, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit and display and distribute such content in any and all media or distribution methods now known or later developed. Further, by submitting content you represent and warrant to Elbrit Life Science that you are the sole owner of the content and that Elbrit Life Science’s use of the content will not violate the rights of any third party, including, but not limited to copyright rights; and that you will defend and hold Elbrit Life Science harmless from any and all claims arising therefrom. By submitting content you waive any right to inspect or approve of such uses and agree to hold harmless Elbrit Life Science and all others identified above from any and all claims you, your heirs, executors or assigns may at any time have against Elbrit Life Science on account of the granting of the license or arising out of Elbrit Life Science’s use of the content."
      },
      {
        "t": "p",
        "text": "This page is intended for a global audience. All Terms and Conditions of Facebook, Instagram, Twitter, and YouTube, and Google+ apply, respectively."
      }
    ]
  }
} satisfies Record<string, LegalDoc>;

export type LegalSlug = keyof typeof LEGAL_DOCS;
