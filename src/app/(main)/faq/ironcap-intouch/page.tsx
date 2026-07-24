"use client";

import Link from "next/link";
import { useState } from "react";
import { Title } from "@/components/faq/Title";
import { Bottom } from "@/components/resources/Bottom";

type SpanChild = {
  _key: string;
  _type: "span";
  marks?: string[];
  text: string;
};

type MarkDef = {
  _key: string;
  _type: "link";
  href: string;
};

type PortableBlock = {
  _key: string;
  _type: "block";
  children: SpanChild[];
  markDefs?: MarkDef[];
  style?: "normal" | "h4" | "h5";
  level?: number;
  listItem?: "bullet" | "number";
};

type Faq = {
  id: string;
  question: string;
  answer: PortableBlock[];
};

type FaqGroup = {
  category: string;
  faqs: Faq[];
};

const Trademark = () => <sup className="text-[0.55em]">™</sup>;
const brandPhrase = "IronCAP InTouch";

const faqGroups: FaqGroup[] = [
  {
    "category": "General Questions",
    "faqs": [
      {
        "id": "99dd6c5a74a9",
        "question": "What is IronCAP InTouch Remote Desktop?",
        "answer": [
          {
            "_key": "ec30a2ac51b2",
            "_type": "block",
            "children": [
              {
                "_key": "40b76e8abccf0",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch is a remote access solution that allows you to provide remote access to multiple computers with the ability to administer and manage them from a single web page. After signing up for the service at "
              },
              {
                "_key": "40b76e8abccf1",
                "_type": "span",
                "marks": [
                  "5085ab87ecb5"
                ],
                "text": "www.imintouch.com"
              },
              {
                "_key": "40b76e8abccf2",
                "_type": "span",
                "marks": [],
                "text": ", you can login to your Administrator page from "
              },
              {
                "_key": "40b76e8abccf3",
                "_type": "span",
                "marks": [
                  "f1648390660b"
                ],
                "text": "www.imintouch.com"
              },
              {
                "_key": "40b76e8abccf4",
                "_type": "span",
                "marks": [],
                "text": ", to activate computers, configure settings, and quickly access any of your computers. Try it out for free by signing up for a "
              },
              {
                "_key": "40b76e8abccf5",
                "_type": "span",
                "marks": [
                  "bc52c6c4a67f"
                ],
                "text": "free 30-day trial"
              },
              {
                "_key": "40b76e8abccf6",
                "_type": "span",
                "marks": [],
                "text": "."
              }
            ],
            "markDefs": [
              {
                "_key": "5085ab87ecb5",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop/"
              },
              {
                "_key": "f1648390660b",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop/login/"
              },
              {
                "_key": "bc52c6c4a67f",
                "_type": "link",
                "href": "https://locator.01com.com/ecommerce/?id=5&code=751336900000011030000000"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "fb9a34e0c9a8",
        "question": "How does IronCAP InTouch work?",
        "answer": [
          {
            "_key": "69e9212c636f",
            "_type": "block",
            "children": [
              {
                "_key": "3afa668b6d040",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch should be installed on the PC you wish to access remotely from anywhere. During installation, you will be required to select a ComputerName, login name and password. 01 Quantum's patented technology uses this ComputerName to find your PC on the Internet.\n"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "928caddada45",
            "_type": "block",
            "children": [
              {
                "_key": "24d8be9040c9",
                "_type": "span",
                "marks": [],
                "text": "Upon activation, you can access your computer from anywhere. Go to "
              },
              {
                "_key": "34ce96e4ae1f",
                "_type": "span",
                "marks": [
                  "6a35464aa6fa"
                ],
                "text": "www.imintouch.com"
              },
              {
                "_key": "63596a09853d",
                "_type": "span",
                "marks": [],
                "text": ", and login using your Computer Name, Login Name and Password. 01's technology establishes a connection between the device you are currently using, and your distant computer. Each connection is encrypted using Secure Socket Layer (SSL) 256 bit key encryption for complete data security - the same technology that is used for most online banking applications."
              }
            ],
            "markDefs": [
              {
                "_key": "6a35464aa6fa",
                "_type": "link",
                "href": "https://01com.com/imintouch-remote-pc-desktop/"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "842e863c36d2",
        "question": "What are the features of IronCAP InTouch Remote Desktop Software?",
        "answer": [
          {
            "_key": "e8e2f271b4d9",
            "_type": "block",
            "children": [
              {
                "_key": "188a63dd50690",
                "_type": "span",
                "marks": [],
                "text": "For the Administrator:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1a7a97409c12",
            "_type": "block",
            "children": [
              {
                "_key": "642c404afac10",
                "_type": "span",
                "marks": [],
                "text": "Group all your computers under a single account"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "238807500590",
            "_type": "block",
            "children": [
              {
                "_key": "f8023bdbb9db0",
                "_type": "span",
                "marks": [],
                "text": "List all your computers on a single page"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "59cef37bf70c",
            "_type": "block",
            "children": [
              {
                "_key": "bc56676dac350",
                "_type": "span",
                "marks": [],
                "text": "One-click access to any of your computers"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "25d1e4dfc8bc",
            "_type": "block",
            "children": [
              {
                "_key": "b19a11d99b120",
                "_type": "span",
                "marks": [],
                "text": "Create and assign users to groups"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "bb8e266fa1df",
            "_type": "block",
            "children": [
              {
                "_key": "9688ae91ad880",
                "_type": "span",
                "marks": [],
                "text": "Purchase, cancel, and suspend licenses"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ba7f285de1ff",
            "_type": "block",
            "children": [
              {
                "_key": "1ed827b8f4e60",
                "_type": "span",
                "marks": [],
                "text": "Access to a Dedicated Account Manager"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ef9a9a870038",
            "_type": "block",
            "children": [
              {
                "_key": "efc4e540c3440",
                "_type": "span",
                "marks": [],
                "text": "For the End-user:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "82f3e91127fc",
            "_type": "block",
            "children": [
              {
                "_key": "c3a75cbecf570",
                "_type": "span",
                "marks": [],
                "text": "Access your PC from any computer or wireless device with an Internet connection"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f7f44fe1c577",
            "_type": "block",
            "children": [
              {
                "_key": "3e557e5398590",
                "_type": "span",
                "marks": [],
                "text": "Run desktop programs from a PC or Pocket PC"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "110472cfff05",
            "_type": "block",
            "children": [
              {
                "_key": "837c5e9c60a70",
                "_type": "span",
                "marks": [],
                "text": "Access and view files"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "cb4ae84246b1",
            "_type": "block",
            "children": [
              {
                "_key": "2ce98fa3d7290",
                "_type": "span",
                "marks": [],
                "text": "Print remote documents to your local printer"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "10edf05c49ef",
            "_type": "block",
            "children": [
              {
                "_key": "b9bba37108d30",
                "_type": "span",
                "marks": [],
                "text": "Transfer files between PCs"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0beb8ae58158",
            "_type": "block",
            "children": [
              {
                "_key": "c524001578a00",
                "_type": "span",
                "marks": [],
                "text": "Listen to audio from your distant PC"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7cd6806b371c",
            "_type": "block",
            "children": [
              {
                "_key": "0c77cd9479de0",
                "_type": "span",
                "marks": [],
                "text": "Manage contact and calendar information"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ad5c83a9c683",
            "_type": "block",
            "children": [
              {
                "_key": "f1a2f52007ab0",
                "_type": "span",
                "marks": [],
                "text": "Manage Outlook email"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1d9b0af6e903",
            "_type": "block",
            "children": [
              {
                "_key": "29baf35062e70",
                "_type": "span",
                "marks": [],
                "text": "Invite guests to your computer to conduct online meetings and presentations"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "db22a2b2f0f7",
            "_type": "block",
            "children": [
              {
                "_key": "b735066648720",
                "_type": "span",
                "marks": [],
                "text": "Notifications on your cell phone of new emails received on your computer"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8b1ca721d37f",
            "_type": "block",
            "children": [
              {
                "_key": "db52374529c90",
                "_type": "span",
                "marks": [],
                "text": "Monitor your child's computer and Internet activities"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "d4a0d2c1e7d2",
        "question": "What are the system requirements for IronCAP InTouch?",
        "answer": [
          {
            "_key": "dd37bff10cc3",
            "_type": "block",
            "children": [
              {
                "_key": "5d494d6c8d440",
                "_type": "span",
                "marks": [],
                "text": "The system requirements for the computer that IronCAP InTouch will be installed on are:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "899cf56fe6c5",
            "_type": "block",
            "children": [
              {
                "_key": "0686786e395e0",
                "_type": "span",
                "marks": [],
                "text": "Windows 7, 8, 10, 11+"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "298ccbc0a21c",
            "_type": "block",
            "children": [
              {
                "_key": "cf034048466e0",
                "_type": "span",
                "marks": [],
                "text": "40MB free disk space"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "60b66ceced4e",
            "_type": "block",
            "children": [
              {
                "_key": "b5b0a73805230",
                "_type": "span",
                "marks": [],
                "text": "Latest versions of Internet Explorer, Mozilla Firefox and Google Chrome"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "55ec79ea1b47",
            "_type": "block",
            "children": [
              {
                "_key": "fe3c9f3ff5fb0",
                "_type": "span",
                "marks": [],
                "text": "Support for POP3 or Exchange Mail servers (IMAP not supported)"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1961c658fd04",
            "_type": "block",
            "children": [
              {
                "_key": "12ebf412ed8f0",
                "_type": "span",
                "marks": [],
                "text": "\"Always On\" Internet connection (e.g. cable modem, DSL, ISDN, T1, or LAN)"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b500e8f80425",
            "_type": "block",
            "children": [
              {
                "_key": "4702c3f5c4040",
                "_type": "span",
                "marks": [],
                "text": "Outlook 2010 or newer"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b4546285b812",
            "_type": "block",
            "children": [
              {
                "_key": "4d4d544316820",
                "_type": "span",
                "marks": [],
                "text": "For Remote Wake-Up"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "33932b6d6b81",
            "_type": "block",
            "children": [
              {
                "_key": "27c2bfe5998d0",
                "_type": "span",
                "marks": [],
                "text": "A minimum of 2 computers with IronCAP InTouch installed on the same wired network are required. One computer is the computer you wish to wake-up access and the other will act as the \"Wake-Up Proxy\" to send the wake-up signal to the host computer."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "889883bd8dfa",
            "_type": "block",
            "children": [
              {
                "_key": "977170035dec0",
                "_type": "span",
                "marks": [],
                "text": "The host computer's bios and network card must support Wake-Up on Lan (WOL), and it must be enabled in both."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "978659ce33b8",
            "_type": "block",
            "children": [
              {
                "_key": "59141630384c0",
                "_type": "span",
                "marks": [],
                "text": "The Wake-Up Proxy must already be powered on"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "228cb40f5571",
            "_type": "block",
            "children": [
              {
                "_key": "b2ddd2f2ae970",
                "_type": "span",
                "marks": [],
                "text": "For full details and instructions for using Remote Wake-Up, "
              },
              {
                "_key": "b2ddd2f2ae971",
                "_type": "span",
                "marks": [
                  "cbafe464426f"
                ],
                "text": "click here."
              }
            ],
            "markDefs": [
              {
                "_key": "cbafe464426f",
                "_type": "link",
                "href": "https://01com.com/imintouch-remote-pc-desktop/faqs#using-remote-wake-up"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "53bb4a70eab2",
        "question": "What are the devices I can use to remotely access my PC?",
        "answer": [
          {
            "_key": "16f3567f544c",
            "_type": "block",
            "children": [
              {
                "_key": "ff9f78264bdb0",
                "_type": "span",
                "marks": [],
                "text": "You can use any PC or wireless device that is connected to Internet."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "93724dea4d66",
            "_type": "block",
            "children": [
              {
                "_key": "11e9e8aacf950",
                "_type": "span",
                "marks": [],
                "text": "If you are using any iOS device (iPhone, iPad, iPod) or any Android device (tablet or smartphone), you need to download and install the Free IronCAP InTouch Go app from the Apple store or the Google Play store (Android market) respectively, to access your remote computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "c390a27741cd",
            "_type": "block",
            "children": [
              {
                "_key": "8354175ed62b0",
                "_type": "span",
                "marks": [],
                "text": "For any other devices, there is no software required on the remote device. It only requires a connection to the Internet and an Internet browser."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f1bc92d812d5",
            "_type": "block",
            "children": [
              {
                "_key": "ef4e2728f1330",
                "_type": "span",
                "marks": [],
                "text": "Specific browsers tested include:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "bff4f5c053fc",
            "_type": "block",
            "children": [
              {
                "_key": "e0e6663369da0",
                "_type": "span",
                "marks": [],
                "text": "Internet Explorer 7.0+"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "daf328b4c33f",
            "_type": "block",
            "children": [
              {
                "_key": "a135f88c7acc0",
                "_type": "span",
                "marks": [],
                "text": "Mozilla Firefox 5.0 or later"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "07a286708622",
            "_type": "block",
            "children": [
              {
                "_key": "366886d97ef10",
                "_type": "span",
                "marks": [],
                "text": "Microsoft Pocket PC Internet Explorer"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "63bbb3922a1d",
            "_type": "block",
            "children": [
              {
                "_key": "5362159c98a40",
                "_type": "span",
                "marks": [],
                "text": "Go.Web by GoAmerica"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "376b2a7f2637",
            "_type": "block",
            "children": [
              {
                "_key": "f315b61fb3e10",
                "_type": "span",
                "marks": [],
                "text": "Blazer"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0af26afa5bdc",
            "_type": "block",
            "children": [
              {
                "_key": "840d58a1c96b0",
                "_type": "span",
                "marks": [],
                "text": "Openwave Mobile Browser"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e9d28aa44c76",
            "_type": "block",
            "children": [
              {
                "_key": "7dac2cb981010",
                "_type": "span",
                "marks": [],
                "text": "Palm Web Pro 3 Browser Palm Browser"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "143d45dbabf4",
            "_type": "block",
            "children": [
              {
                "_key": "c419e12d4e2d0",
                "_type": "span",
                "marks": [],
                "text": "Palm Browser 2 and above"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "2d7272898b30",
            "_type": "block",
            "children": [
              {
                "_key": "84a062ac076c0",
                "_type": "span",
                "marks": [],
                "text": "BlackBerry Browser"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "700b690496f4",
            "_type": "block",
            "children": [
              {
                "_key": "4b5c95ce27320",
                "_type": "span",
                "marks": [],
                "text": "Opera Browser"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "243ef4d7a389",
        "question": " Do I need additional software installed on my remote device?",
        "answer": [
          {
            "_key": "ff2605c78fc2",
            "_type": "block",
            "children": [
              {
                "_key": "1ab426d5c6130",
                "_type": "span",
                "marks": [],
                "text": "If you are using any iOS device (iPhone, iPad, iPod) or any Android device (tablet or smartphone), you need to download and install the Free IronCAP InTouch Go app from the Apple store or the Google Play store (Android market) respectively, to access your remote computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "12eb6122871f",
            "_type": "block",
            "children": [
              {
                "_key": "54e96f67c3b00",
                "_type": "span",
                "marks": [],
                "text": "For any other devices, there is no software required on the remote device. It only requires a connection to the Internet and an Internet browser."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "60fa56bea4a5",
        "question": "Does my PC need to be turned on at all times?",
        "answer": [
          {
            "_key": "9b8cccdcea17",
            "_type": "block",
            "children": [
              {
                "_key": "ba6ebe6fb8610",
                "_type": "span",
                "marks": [],
                "text": "No. IronCAP InTouch \"Remote Wake-Up\" feature allows you to access your PC even if it is shut down by remotely powering it on. See the "
              },
              {
                "_key": "ba6ebe6fb8611",
                "_type": "span",
                "marks": [
                  "e14e66b85360"
                ],
                "text": "Remote Wake-Up section"
              },
              {
                "_key": "ba6ebe6fb8612",
                "_type": "span",
                "marks": [],
                "text": " for additional information."
              }
            ],
            "markDefs": [
              {
                "_key": "e14e66b85360",
                "_type": "link",
                "href": "https://01com.com/imintouch-remote-pc-desktop/faqs#using-remote-wake-up"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "5a4a42e8c176",
        "question": "Do I require a static IP address on my IronCAP InTouch PC?",
        "answer": [
          {
            "_key": "5ab566ce6e8d",
            "_type": "block",
            "children": [
              {
                "_key": "04dd82db94d60",
                "_type": "span",
                "marks": [],
                "text": "No, IronCAP InTouch can find your PC on the Internet, even if your PC uses Dynamic IP addresses."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "100517cb48b2",
        "question": "What languages does IronCAP InTouch support?",
        "answer": [
          {
            "_key": "d6e9ccaf3982",
            "_type": "block",
            "children": [
              {
                "_key": "6d3b118015290",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch supports the following languages"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b2b07918cb24",
            "_type": "block",
            "children": [
              {
                "_key": "b01d2dd24b5a0",
                "_type": "span",
                "marks": [],
                "text": "English"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8d2bfd081bf9",
            "_type": "block",
            "children": [
              {
                "_key": "636e0854f2bc0",
                "_type": "span",
                "marks": [],
                "text": "French"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "5492df46b031",
            "_type": "block",
            "children": [
              {
                "_key": "fc85dc7c6ee20",
                "_type": "span",
                "marks": [],
                "text": "Chinese (Traditional)"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "77314207d5a9",
            "_type": "block",
            "children": [
              {
                "_key": "7ab59585d34f0",
                "_type": "span",
                "marks": [],
                "text": "Chinese (Simplified)"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7760977fd497",
            "_type": "block",
            "children": [
              {
                "_key": "dadcd43a44460",
                "_type": "span",
                "marks": [],
                "text": "German"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "d1cc7d39c2e1",
            "_type": "block",
            "children": [
              {
                "_key": "eff8c7cf50760",
                "_type": "span",
                "marks": [],
                "text": "Spanish"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "81b1aa5590b8",
            "_type": "block",
            "children": [
              {
                "_key": "98b85de0dd7b0",
                "_type": "span",
                "marks": [],
                "text": "Portuguese (Brazil)"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "bac36197faaa",
        "question": "How many monitors does IronCAP InTouch support?",
        "answer": [
          {
            "_key": "c2728bf978fe",
            "_type": "block",
            "children": [
              {
                "_key": "56e8c12257440",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch supports an unlimited number of monitors on the Host computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "27ca5b1368c9",
        "question": "How do I update my IronCAP InTouch Remote Desktop Software?",
        "answer": [
          {
            "_key": "cf9014fdb8c6",
            "_type": "block",
            "children": [
              {
                "_key": "1c1ce1ce497c0",
                "_type": "span",
                "marks": [],
                "text": "To upgrade to the latest version of IronCAP InTouch, select “Run Update Now” by right-clicking the green satellite icon in your Windows system tray or from the Start menu in the IronCAP InTouch folder. Additionally, IronCAP InTouch will automatically check for updates every time IronCAP InTouch is started on your computer. If you are not currently an IronCAP InTouch subscriber, "
              },
              {
                "_key": "1c1ce1ce497c1",
                "_type": "span",
                "marks": [
                  "68e6ff9ea5d6"
                ],
                "text": "click here"
              },
              {
                "_key": "1c1ce1ce497c2",
                "_type": "span",
                "marks": [],
                "text": " to try it free for 30 days."
              }
            ],
            "markDefs": [
              {
                "_key": "68e6ff9ea5d6",
                "_type": "link",
                "href": "http://www.01com.com/free-trials/imintouch_download_trial_choose.php"
              }
            ],
            "style": "normal"
          }
        ]
      }
    ]
  },
  {
    "category": "Security",
    "faqs": [
      {
        "id": "7e8ace2a1166",
        "question": "What are the SecurePC / SecureKEY for?",
        "answer": [
          {
            "_key": "a265162114a1",
            "_type": "block",
            "children": [
              {
                "_key": "e28b0bd2555b0",
                "_type": "span",
                "marks": [],
                "text": "To enhance security of your IronCAP InTouch program."
              }
            ],
            "markDefs": [],
            "style": "h4"
          },
          {
            "_key": "35b8b12e38eb",
            "_type": "block",
            "children": [
              {
                "_key": "34304c45efdc0",
                "_type": "span",
                "marks": [],
                "text": "The combination of the SecurePC, SecureKEY, and IronCAP InTouch remote access software offer many security advantages over laptops and other remote access software programs."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "20b9ed4e8a94",
            "_type": "block",
            "children": [
              {
                "_key": "a2da339966470",
                "_type": "span",
                "marks": [],
                "text": "Data Loss Prevention"
              }
            ],
            "markDefs": [],
            "style": "h4"
          },
          {
            "_key": "36cb957f8aad",
            "_type": "block",
            "children": [
              {
                "_key": "40a4277efdf00",
                "_type": "span",
                "marks": [],
                "text": "Imagine if one of your employees lost a company laptop containing information on all your customers, including their credit card numbers; how would your business recover from the public relations nightmare and ensuing financial costs? How much business would you lose as customers move to a company that they can trust?"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8667b90648c1",
            "_type": "block",
            "children": [
              {
                "_key": "dd21f72df8e70",
                "_type": "span",
                "marks": [],
                "text": "This very situation is happening to businesses all over the world but you do not have to worry if you use the SecurePC. Provide your employees with the SecurePC remote access terminals instead of laptops. All company data stays safely on workstations or servers in the office when employees access them from the SecurePC. None of the mobile freedom of a laptop is compromised and your business is protected from data loss, even if the SecurePC is lost or stolen while travelling."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0b84aa69fdb7",
            "_type": "block",
            "children": [
              {
                "_key": "75fea20fe3300",
                "_type": "span",
                "marks": [],
                "text": "Stop Unauthorized Access"
              }
            ],
            "markDefs": [],
            "style": "h4"
          },
          {
            "_key": "332491fec23d",
            "_type": "block",
            "children": [
              {
                "_key": "65431ce51fd80",
                "_type": "span",
                "marks": [],
                "text": "The biggest concern when providing remote access to your PC is what if someone gains access to your login information and he/she takes control of your computer. The SecurePC & SecureKEY allow IronCAP InTouch users to add an extra measure of protection against unauthorized access through Physical Authentication."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "862867849cf8",
            "_type": "block",
            "children": [
              {
                "_key": "773a1e19f35a0",
                "_type": "span",
                "marks": [],
                "text": "With Physical Authentication, users can configure such that their SecurePC and/or their SecureKEY have to be used during the remote access session. Even if someone knows your login information, he/she cannot access your computer since he/she will not have the \"keys\" to your PC - your SecurePC and SecureKEY."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8f869859da07",
            "_type": "block",
            "children": [
              {
                "_key": "62a6618f27a40",
                "_type": "span",
                "marks": [],
                "text": "Keep Unwanted Software Off Company Computers"
              }
            ],
            "markDefs": [],
            "style": "h4"
          },
          {
            "_key": "01ef6f8c7205",
            "_type": "block",
            "children": [
              {
                "_key": "fcce60b34d6b0",
                "_type": "span",
                "marks": [],
                "text": "When employees install personal software on company laptops, the result can be security breaches, software conflicts, and a host of other problems. The SecurePC does not allow any new software or program to be installed, or even downloaded, resulting in increased security. Fewer laptops will be returned to your IT department because of virus infection from a new download or installation."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8383a1ef69c4",
            "_type": "block",
            "children": [
              {
                "_key": "b439d2a7414c0",
                "_type": "span",
                "marks": [],
                "text": "To learn more about SecurePC / SecureKEY go to "
              },
              {
                "_key": "d7895c2298c7",
                "_type": "span",
                "marks": [
                  "4e73ded7aea7"
                ],
                "text": "https://www.01com.com/imintouch-remote-pc-desktop/secure-key/"
              }
            ],
            "markDefs": [
              {
                "_key": "4e73ded7aea7",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop/secure-key/"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "fbc0fa1518e8",
        "question": "What are IronCAP InTouch Remote Desktop security features?",
        "answer": [
          {
            "_key": "7be90956a5ae",
            "_type": "block",
            "children": [
              {
                "_key": "a364139dd4660",
                "_type": "span",
                "marks": [],
                "text": "System Architecture Security Features"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8d4f4077ee24",
            "_type": "block",
            "children": [
              {
                "_key": "9bd686a6a45d0",
                "_type": "span",
                "marks": [],
                "text": "SSL 256-bit end-to-end data encryption"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "03d0e7e01355",
            "_type": "block",
            "children": [
              {
                "_key": "0deeeaacbb6e0",
                "_type": "span",
                "marks": [],
                "text": "passwords stored only at user's PC"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "d8658a93bacf",
            "_type": "block",
            "children": [
              {
                "_key": "e4376927b0e70",
                "_type": "span",
                "marks": [],
                "text": "end to end authentication, dual passwords required for login"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7382e3c6e02a",
            "_type": "block",
            "children": [
              {
                "_key": "cbda2f1e332f0",
                "_type": "span",
                "marks": [],
                "text": "retains OS-level access controls already in place on PC"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "2b219028564c",
            "_type": "block",
            "children": [
              {
                "_key": "1d8b13f4dc220",
                "_type": "span",
                "marks": [],
                "text": "multiple failed log-in attempts will result in lock-out"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "758609e61a49",
            "_type": "block",
            "children": [
              {
                "_key": "22892562f2f00",
                "_type": "span",
                "marks": [],
                "text": "session time-out after defined period of inactivity"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "20c509507ea8",
            "_type": "block",
            "children": [
              {
                "_key": "bcac5506f77c0",
                "_type": "span",
                "marks": [],
                "text": "no remote session data stored on IronCAP InTouch servers"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "913194f8fb65",
            "_type": "block",
            "children": [
              {
                "_key": "35f7e78cc2870",
                "_type": "span",
                "marks": [],
                "text": "standard firewall ports 80 & 443 used only, eliminating need to open ports on firewalls"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "fa4607ff483f",
        "question": "Where are my IronCAP InTouch passwords stored?",
        "answer": [
          {
            "_key": "75c99c287dff",
            "_type": "block",
            "children": [
              {
                "_key": "df4448c9c8c40",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch passwords are stored on your PC running IronCAP InTouch ONLY."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "dfe741b7efeb",
        "question": "How can I change my IronCAP InTouch passwords?",
        "answer": [
          {
            "_key": "90e43339c59e",
            "_type": "block",
            "children": [
              {
                "_key": "37c43be1b7bc0",
                "_type": "span",
                "marks": [],
                "text": "To change passwords when you are at the PC running IronCAP InTouch, double click the green satellite in your taskbar, and open the IronCAP InTouch program window. Navigate to the User Information screen. In this screen, type in your new Login Name and Password, then click Apply. To change your My Desktop password, click Access Rights on this screen, change the password, and click Apply."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1f0ba5453acb",
            "_type": "block",
            "children": [
              {
                "_key": "b8cc520e66dc0",
                "_type": "span",
                "marks": [],
                "text": "To change passwords when away from the PC running IronCAP InTouch, log in to your remote PC and select \"Configuration\" feature from the Home Page. Choose the Password Management option, change your password, and then select the Submit button."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "6b42ac21bf7b",
        "question": "Has any 3rd party audited IronCAP InTouch's security?",
        "answer": [
          {
            "_key": "77b0b0024c0b",
            "_type": "block",
            "children": [
              {
                "_key": "b2e7069ab73b0",
                "_type": "span",
                "marks": [],
                "text": "Yes, Peregrine Technology Inc. conducted an independent security audit. Read their report by clicking "
              },
              {
                "_key": "b2e7069ab73b1",
                "_type": "span",
                "marks": [
                  "2b5b954ab0a0"
                ],
                "text": "here"
              },
              {
                "_key": "b2e7069ab73b2",
                "_type": "span",
                "marks": [],
                "text": " (link to Peregrine Technology audit PDF)."
              }
            ],
            "markDefs": [
              {
                "_key": "2b5b954ab0a0",
                "_type": "link",
                "href": "https://www.01com.com/pdf/Peregrine_testimony.pdf"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "5b667f5d522b",
        "question": "How can I activate/re-activate my SecureKEY USB remote access?",
        "answer": [
          {
            "_key": "25c94d9d5def",
            "_type": "block",
            "children": [
              {
                "_key": "dcbdd35b69a30",
                "_type": "span",
                "marks": [],
                "text": "Double click on the green satellite located at your system tray to open the IronCAP InTouch configuration interface."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3bceafbdb604",
            "_type": "block",
            "children": [
              {
                "_key": "2064a00029a90",
                "_type": "span",
                "marks": [],
                "text": "From the left hand side of the configuration screen, click on User Information."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3c0d3c2e7421",
            "_type": "block",
            "children": [
              {
                "_key": "4fbf84a735da0",
                "_type": "span",
                "marks": [],
                "text": "Click on the SecureKEY button to open the SecureKEY Activation dialog box."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "14e11d9db80a",
            "_type": "block",
            "children": [
              {
                "_key": "2c6d94eb50f10",
                "_type": "span",
                "marks": [],
                "text": "Insert the SecureKEY into the USB slot on your computer to enable the SecureKEY Activation dialog box."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7d85b7a1f8af",
            "_type": "block",
            "children": [
              {
                "_key": "5b767f2483210",
                "_type": "span",
                "marks": [],
                "text": "Make sure \"Enable Auto-Login\" is checked."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e4177f39e158",
            "_type": "block",
            "children": [
              {
                "_key": "ea27744dcddd0",
                "_type": "span",
                "marks": [],
                "text": "Set your login field(s) that you would like to have pre-filled during auto-login and then press the Start button. Hint: As a good security practice, we recommend that you "
              },
              {
                "_key": "ea27744dcddd1",
                "_type": "span",
                "marks": [
                  "underline"
                ],
                "text": "do not"
              },
              {
                "_key": "ea27744dcddd2",
                "_type": "span",
                "marks": [],
                "text": " check the \"2nd password (remote control session)\" to avoid unauthorized access if you ever lose your SecureKEY."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "2d878e802180",
            "_type": "block",
            "children": [
              {
                "_key": "3866be72e02f0",
                "_type": "span",
                "marks": [],
                "text": "When the activation is finished, close the SecureKEY Activation dialog box."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b6c58694747a",
            "_type": "block",
            "children": [
              {
                "_key": "6d161bed46be0",
                "_type": "span",
                "marks": [],
                "text": "Your SecureKey is now activated/re-activated."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "a1cab959c5ce",
            "_type": "block",
            "children": [
              {
                "_key": "0e3059a0bfa00",
                "_type": "span",
                "marks": [
                  "strong",
                  "underline"
                ],
                "text": "Note:"
              },
              {
                "_key": "6d49677b2c15",
                "_type": "span",
                "marks": [],
                "text": " If you change your login information (login name or password(s)), you must re-activate your SecureKEY."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "5088a7dfec49",
            "_type": "block",
            "children": [
              {
                "_key": "b8630b5eea2b0",
                "_type": "span",
                "marks": [],
                "text": "If you want to enable physical authentication for your SecureKEY, see \"How can I enable Physical authentication to enhance security of my IronCAP InTouch?\"."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "3cc4341d1d46",
        "question": "What is Physical Authentication?",
        "answer": [
          {
            "_key": "5b49a5c3146a",
            "_type": "block",
            "children": [
              {
                "_key": "183e44b531f40",
                "_type": "span",
                "marks": [],
                "text": "It is a mechanism that combines hardware and software to enhance security when accessing your remote computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "c137b6638af6",
            "_type": "block",
            "children": [
              {
                "_key": "a492fb415d4b0",
                "_type": "span",
                "marks": [],
                "text": "By using IronCAP InTouch in combination with the SecurePC and/or SecureKEY will help you to:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "64798dce8e6d",
            "_type": "block",
            "children": [
              {
                "_key": "95c6e8bc11400",
                "_type": "span",
                "marks": [],
                "text": "Prevent data loss"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "c404b2aa160c",
            "_type": "block",
            "children": [
              {
                "_key": "5fc3cd50eeac0",
                "_type": "span",
                "marks": [],
                "text": "Stop unauthorized access"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "92118e7ef514",
            "_type": "block",
            "children": [
              {
                "_key": "5fce92cb39020",
                "_type": "span",
                "marks": [],
                "text": "Keep unwanted software off company computers"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0c609e6fdb1a",
            "_type": "block",
            "children": [
              {
                "_key": "94e4bfcf3b1e0",
                "_type": "span",
                "marks": [],
                "text": "Learn more about the IronCAP InTouch SecurePC / SecureKEY at "
              },
              {
                "_key": "e9d8dad26d84",
                "_type": "span",
                "marks": [
                  "e20d0ab38fcb"
                ],
                "text": "https://www.01com.com/imintouch-remote-pc-desktop/secure-key"
              }
            ],
            "markDefs": [
              {
                "_key": "e20d0ab38fcb",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop/secure-key"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "f1adda619c67",
        "question": "How can I enable Physical Authentication?",
        "answer": [
          {
            "_key": "054809518ece",
            "_type": "block",
            "children": [
              {
                "_key": "61cf923541930",
                "_type": "span",
                "marks": [],
                "text": "To enable the physical authentication for either your SecurePC or SecureKEY:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "36f31ffc6a36",
            "_type": "block",
            "children": [
              {
                "_key": "07d0d7dc38240",
                "_type": "span",
                "marks": [],
                "text": "Login to your IronCAP InTouch \"List of Computers\" page"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "4d16e8e85c17",
            "_type": "block",
            "children": [
              {
                "_key": "c4c23db9e1370",
                "_type": "span",
                "marks": [],
                "text": "Select the computer(s) you want to enable physical authentication by clicking on the box next to its Nickname"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "65b2611b9606",
            "_type": "block",
            "children": [
              {
                "_key": "1be9bf0ec9310",
                "_type": "span",
                "marks": [],
                "text": "Click on the \"Physical Authention\" link"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b8fef8dbd21a",
            "_type": "block",
            "children": [
              {
                "_key": "bb1e56ab989b0",
                "_type": "span",
                "marks": [],
                "text": "You can enable the physical authentication for your SecurePC and/or SecureKEY by changing the content of the dropdown boxes to your preferred secure status."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1c12d738abad",
            "_type": "block",
            "children": [
              {
                "_key": "e513f02556ee0",
                "_type": "span",
                "marks": [],
                "text": "Click Save to finish."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "47658d33ecc5",
            "_type": "block",
            "children": [
              {
                "_key": "1f724e127b670",
                "_type": "span",
                "marks": [],
                "text": "You will now see a lock icon on your List of Computers screen next to the computers with Physical Authentication enabled."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "2399c3363bf4",
            "_type": "block",
            "children": [
              {
                "_key": "7e155c95ca7f",
                "_type": "span",
                "marks": [
                  "strong",
                  "underline"
                ],
                "text": "Note:"
              },
              {
                "_key": "159215ebb3eb",
                "_type": "span",
                "marks": [],
                "text": " You can use both SecurePC and SecureKEY together for maximum security."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "77a3b92bf6be",
            "_type": "block",
            "children": [
              {
                "_key": "dbe625b54d300",
                "_type": "span",
                "marks": [],
                "text": "Learn more about the IronCAP InTouch SecurePC / SecureKEY at "
              },
              {
                "_key": "17a85695159d",
                "_type": "span",
                "marks": [
                  "c49eb9ba2551"
                ],
                "text": "https://www.01com.com/imintouch-remote-pc-desktop/secure-key"
              }
            ],
            "markDefs": [
              {
                "_key": "c49eb9ba2551",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop/secure-key"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "01cf0651e24f",
        "question": "What are the Physical Authentication statuses?",
        "answer": [
          {
            "_key": "cdee2b4e5ed2",
            "_type": "block",
            "children": [
              {
                "_key": "37b4d52954180",
                "_type": "span",
                "marks": [],
                "text": "SecurePC"
              }
            ],
            "markDefs": [],
            "style": "h4"
          },
          {
            "_key": "71635155b514",
            "_type": "block",
            "children": [
              {
                "_key": "fad74508f1c50",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Required -"
              },
              {
                "_key": "fad74508f1c51",
                "_type": "span",
                "marks": [],
                "text": " You must use your SecurePC to access your IronCAP InTouch remote computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0be19329eb56",
            "_type": "block",
            "children": [
              {
                "_key": "eec36844de8b0",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Not Required -"
              },
              {
                "_key": "eec36844de8b1",
                "_type": "span",
                "marks": [],
                "text": " You can use your SecurePC for accessing your remote computer but it is not required."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9ccf70ad2020",
            "_type": "block",
            "children": [
              {
                "_key": "a2fd51740a7c0",
                "_type": "span",
                "marks": [],
                "text": "SecureKEY"
              }
            ],
            "markDefs": [],
            "style": "h4"
          },
          {
            "_key": "d0ce66b5db78",
            "_type": "block",
            "children": [
              {
                "_key": "fd655898e5260",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Required -"
              },
              {
                "_key": "fd655898e5261",
                "_type": "span",
                "marks": [],
                "text": " You must use your SecureKey to access your IronCAP InTouch remote computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "579090e7d671",
            "_type": "block",
            "children": [
              {
                "_key": "6cf3d2516bc50",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Not Required + Block my old SecureKEYs –"
              },
              {
                "_key": "6cf3d2516bc51",
                "_type": "span",
                "marks": [],
                "text": " You can use your latest activated SecureKey for accessing your remote computer but it is not required. Any previous activated SecureKey will be rejected."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "547229302d7e",
            "_type": "block",
            "children": [
              {
                "_key": "1da04bfee5e30",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Not Required (auto-login purposes only) –"
              },
              {
                "_key": "1da04bfee5e31",
                "_type": "span",
                "marks": [],
                "text": " You can use your SecureKey for accessing your remote computer but it is not required."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ea57056d8b4a",
            "_type": "block",
            "children": [
              {
                "_key": "7786764be12b0",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Block access from all SecureKEYs -"
              },
              {
                "_key": "7786764be12b1",
                "_type": "span",
                "marks": [],
                "text": " Any access to your remote computer from your SecureKEY(s) will be rejected."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "203f5f109f61",
            "_type": "block",
            "children": [
              {
                "_key": "83ab56af516f",
                "_type": "span",
                "marks": [
                  "strong",
                  "underline"
                ],
                "text": "Note:"
              },
              {
                "_key": "821a4eb0903e",
                "_type": "span",
                "marks": [],
                "text": " You can use both SecurePC and SecureKEY together for maximum security."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      }
    ]
  },
  {
    "category": "Administrator Functions",
    "faqs": [
      {
        "id": "9f0530481c74",
        "question": "What are the advantages of using the \"List of Computers\" page?",
        "answer": [
          {
            "_key": "32d65d171900",
            "_type": "block",
            "children": [
              {
                "_key": "abfcc7430b050",
                "_type": "span",
                "marks": [],
                "text": "The List of Computers page provides a central location to view all your IronCAP InTouch computers, the ability to quickly access any of them with a single click. By clicking on a computer's Nickname, you will be taken directly to that computer's My Desktop password prompt. This negates the need to remember the Computer Name, User Name, and password for each computer. You also have access to the billing and settings pages."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "f0924e7b143a",
        "question": "Can I provide non-Administrator users with remote access to their own \"List of Computers\" page?",
        "answer": [
          {
            "_key": "c275bc434909",
            "_type": "block",
            "children": [
              {
                "_key": "b75e202c0e290",
                "_type": "span",
                "marks": [],
                "text": "Yes, by assigning the same Login ID to all the computers you want the user to see next time he/she logs in."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "736a333bc691",
        "question": "How do I assign multiple computers to a specific end-user?",
        "answer": [
          {
            "_key": "8daead596e56",
            "_type": "block",
            "children": [
              {
                "_key": "121c90a25cbc0",
                "_type": "span",
                "marks": [],
                "text": "To assign multiple computers to an end user:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "fd114770858e",
            "_type": "block",
            "children": [
              {
                "_key": "aa1ffa6b2f3a0",
                "_type": "span",
                "marks": [],
                "text": "Login to your account as Administrator."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "46d8ac4a23fd",
            "_type": "block",
            "children": [
              {
                "_key": "1432039526ac0",
                "_type": "span",
                "marks": [],
                "text": "Click on the check box next to the Nickname of each computer you want the user to see on his/her list."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "cfcc260975e3",
            "_type": "block",
            "children": [
              {
                "_key": "ad139a89bf180",
                "_type": "span",
                "marks": [],
                "text": "Click on the Settings/Activate link."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "4243d9d960bc",
            "_type": "block",
            "children": [
              {
                "_key": "7cfc5bfe8ca60",
                "_type": "span",
                "marks": [],
                "text": "For each computer displayed on the screen, enter the user’s email address in the Login ID email address field and a password."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "74dda7492fcc",
            "_type": "block",
            "children": [
              {
                "_key": "a4c395381c480",
                "_type": "span",
                "marks": [],
                "text": "When you finish, click Save to save the entered information and go back to the List of Computers."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "d00922b00f54",
            "_type": "block",
            "children": [
              {
                "_key": "5a528344dafe0",
                "_type": "span",
                "marks": [],
                "text": "Log out."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7a727251c0b3",
            "_type": "block",
            "children": [
              {
                "_key": "d1bb78bb7a940",
                "_type": "span",
                "marks": [],
                "text": "Next time the user logs in by using this Login ID and Password, he/she will only see the computers you assigned to them (the ones whose Login ID matches the user’s)."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "c7d2d93bec69",
        "question": "What is the difference between the Login ID email address and Activation email address on the \"List of Computers\" page?",
        "answer": [
          {
            "_key": "e0c30b591216",
            "_type": "block",
            "children": [
              {
                "_key": "fe9d72c8a0b90",
                "_type": "span",
                "marks": [],
                "text": "The Activation Email address is the address where the instructions for installing and activating IronCAP InTouch will be sent to. This email also contains the link to download the IronCAP InTouch client software."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "79e795004132",
            "_type": "block",
            "children": [
              {
                "_key": "de1d091c180f0",
                "_type": "span",
                "marks": [],
                "text": "The Login ID Email address is used by the end-user to login to his/her IronCAP InTouch account. It is also used to assign computers you want a user to see next time he/she logs in."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "fd3fe1a1cafd",
        "question": "When I access the My Account tab, I am sent to the main IronCAP InTouch Remote Desktop website. How do I fix this?",
        "answer": [
          {
            "_key": "5832a805f11b",
            "_type": "block",
            "children": [
              {
                "_key": "592b1b97b2430",
                "_type": "span",
                "marks": [],
                "text": "In your browser, ensure the Override automatic cookie handling setting is enabled. This setting can be found in: Internet Option->Privacy-> Advanced, at the Windows' Control Panel."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "cb3821e721bc",
        "question": "How can I group my computers?",
        "answer": [
          {
            "_key": "19c43224db1d",
            "_type": "block",
            "children": [
              {
                "_key": "ab6fab8dd2320",
                "_type": "span",
                "marks": [],
                "text": "To create a group and to group computers, simply:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "da7901c1a90d",
            "_type": "block",
            "children": [
              {
                "_key": "a9ee3bd905360",
                "_type": "span",
                "marks": [],
                "text": "Login to your account as Administrator."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "afd852fb85b8",
            "_type": "block",
            "children": [
              {
                "_key": "c6d1b96ead950",
                "_type": "span",
                "marks": [],
                "text": "Click on the Add/Edit link (beside the Group combo box)."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ace6401654a4",
            "_type": "block",
            "children": [
              {
                "_key": "37024d9a54530",
                "_type": "span",
                "marks": [],
                "text": "Click on the New button to create a group."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "a22e25c81250",
            "_type": "block",
            "children": [
              {
                "_key": "def8af1237e40",
                "_type": "span",
                "marks": [],
                "text": "Enter the Group name in the text box shown and then click on Save. Repeat steps 3 and 4 if you want to create more Groups."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "d35a1bde9b26",
            "_type": "block",
            "children": [
              {
                "_key": "81abac4461f40",
                "_type": "span",
                "marks": [],
                "text": "Click on the group you want to assign computers to."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "faeb24692cba",
            "_type": "block",
            "children": [
              {
                "_key": "0f27e955e5a30",
                "_type": "span",
                "marks": [],
                "text": "From the Computers list, click on the computer you want to assign to the selected Group and then click the << button. Repeat steps 5 and 6 if you want to assign more computers to the Group."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e12354207c62",
            "_type": "block",
            "children": [
              {
                "_key": "9a1e5162555c0",
                "_type": "span",
                "marks": [],
                "text": "Click the Close button when you finish. You will return to your List of Computers page."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3a8b4ffb90d6",
            "_type": "block",
            "children": [
              {
                "_key": "a8a415b8ca7e0",
                "_type": "span",
                "marks": [],
                "text": "Click on the Group combo box and select any of the created groups, the List of Computers will only display the computers assigned to the selected group."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "c7f256ebac50",
            "_type": "block",
            "children": [
              {
                "_key": "d2bafeed429d0",
                "_type": "span",
                "marks": [
                  "strong",
                  "underline"
                ],
                "text": "Note:"
              },
              {
                "_key": "248b140ebf36",
                "_type": "span",
                "marks": [],
                "text": " You can set as Group Administrator one or more computers within the group. By doing so, the next time the Group Administrator logs in, his/her List of Computers will display all the computers assigned to the group where he was set as Administrator plus the computers whose Login ID matches the Group Administrator’s Login ID"
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "302f4eb0a77c",
        "question": "My IronCAP InTouch computer (host installed in Windows 8) is not shown as \"offline\" in the List of Computers after I shut it down. ",
        "answer": [
          {
            "_key": "3b36dda5b10b",
            "_type": "block",
            "children": [
              {
                "_key": "1cb15db2a16e0",
                "_type": "span",
                "marks": [],
                "text": "By default, Windows 8 is coming with a \"fast startup\" mechanism that must be disabled for the IronCAP InTouch computer to properly shutdown. To disable the \"Fast startup\" mechanism in Windows 8:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "461f32d8810d",
            "_type": "block",
            "children": [
              {
                "_key": "1bda2bb21edb0",
                "_type": "span",
                "marks": [],
                "text": "Open the Control Panel."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e9ed34801828",
            "_type": "block",
            "children": [
              {
                "_key": "9f609d28c5fd0",
                "_type": "span",
                "marks": [],
                "text": "Click on the \"Power Options\" icon to open it."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "99ab1a0ab133",
            "_type": "block",
            "children": [
              {
                "_key": "2be22fe872f40",
                "_type": "span",
                "marks": [],
                "text": "Click on the \"Choose what the power button does\" link."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "626c379689fa",
            "_type": "block",
            "children": [
              {
                "_key": "94da284d3d970",
                "_type": "span",
                "marks": [],
                "text": "Click on the \"Change settings that are currently unavailable\" link."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "fce88a820ee7",
            "_type": "block",
            "children": [
              {
                "_key": "1db5945175c30",
                "_type": "span",
                "marks": [],
                "text": "Uncheck the \"Turn on fast startup\"."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "878b40a9dcb8",
            "_type": "block",
            "children": [
              {
                "_key": "7c016ef1a7950",
                "_type": "span",
                "marks": [],
                "text": "Click on the \"Save changes\" button."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      }
    ]
  },
  {
    "category": "Using IronCAP InTouch",
    "faqs": [
      {
        "id": "c5e5cdedea54",
        "question": "How do I Login from a remote PC?",
        "answer": [
          {
            "_key": "3707eb8da5bb",
            "_type": "block",
            "children": [
              {
                "_key": "9455f9018db10",
                "_type": "span",
                "marks": [],
                "text": "From any PC with the Internet, go to "
              },
              {
                "_key": "8bc81c8924e5",
                "_type": "span",
                "marks": [
                  "bc7d5c737306"
                ],
                "text": "https://www.01com.com/imintouch-remote-pc-desktop"
              },
              {
                "_key": "2c97de3ad2f9",
                "_type": "span",
                "marks": [],
                "text": " then click \"Login\" and select \"Access My PC\".\n\nIf you want to access a specific computer: Enter the Computer Name you established during IronCAP InTouch installation and click \"Go\". Once your computer has been found, you will be prompted for your Login Name and Password to authenticate yourself. Finally, select the feature you wish to choose from the drop down box and click \"Login\". You are now connected to your remote computer using IronCAP InTouch.\n\nIf you want to access a computer from the List of Computers page (List of all the computers assigned to your account): Enter the Login ID and Password you used when requesting your IronCAP InTouch trial, and then click \"Go\". Click on the \"Nickname\" of the computer you wish to access and then enter the \"My Desktop\" password when prompted. You are now connected to your remote computer using IronCAP InTouch."
              }
            ],
            "markDefs": [
              {
                "_key": "bc7d5c737306",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "d6783631a309",
        "question": "How do I Login to my remote desktop PC from a wireless device?",
        "answer": [
          {
            "_key": "cb69bfc2baba",
            "_type": "block",
            "children": [
              {
                "_key": "6fe0a37b8d3a0",
                "_type": "span",
                "marks": [],
                "text": "If you are using any iOS device (iPhone, iPad, iPod) or any Android device (tablet or smartphone), you need to download and install the Free IronCAP InTouch Go app from the Apple store or the Google Play store (Android market) respectively, to access your remote computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f07d527f0e6b",
            "_type": "block",
            "children": [
              {
                "_key": "76834fd9ec920",
                "_type": "span",
                "marks": [],
                "text": "For any other devices, open the browser of your wireless device and go to  "
              },
              {
                "_key": "98f67e507a9b",
                "_type": "span",
                "marks": [
                  "26c3ab2a6f8e"
                ],
                "text": "https://www.01com.com/imintouch-remote-pc-desktop"
              },
              {
                "_key": "5b0c589afb13",
                "_type": "span",
                "marks": [],
                "text": "."
              }
            ],
            "markDefs": [
              {
                "_key": "26c3ab2a6f8e",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "2468bc6b89fb",
            "_type": "block",
            "children": [
              {
                "_key": "29fbe2d335d40",
                "_type": "span",
                "marks": [],
                "text": "If you want to access a specific computer: Enter the Computer Name you established during IronCAP InTouch installation and click \"Go\". Once your computer has been found, you will be prompted for your Login Name and Password to authenticate yourself. Finally, select the feature you wish to choose from the drop down box and click \"Login\". You are now connected to your remote computer using IronCAP InTouch."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "98a3896e0d34",
            "_type": "block",
            "children": [
              {
                "_key": "16af219d90ae0",
                "_type": "span",
                "marks": [],
                "text": "If you want to access a computer from the List of Computers page (List of all the computers assigned to your account): Enter the Login ID and Password you used when requesting your IronCAP InTouch trial, and then click \"Go\". Click on the \"Nickname\" of the computer you wish to access and then enter the \"My Desktop\" password when prompted. You are now connected to your remote computer using IronCAP InTouch."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "6aa471537fac",
            "_type": "block",
            "children": [
              {
                "_key": "caadeb56690b0",
                "_type": "span",
                "marks": [
                  "strong",
                  "underline"
                ],
                "text": "Tip:"
              },
              {
                "_key": "67d537eae23d",
                "_type": "span",
                "marks": [],
                "text": " On the Home Page, under Configuration, there is an option to Bookmark Login Page. When selected, this allows you to create an IronCAP InTouch login bookmark on your wireless device."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "7e0c53fa4004",
        "question": "Do I have to synchronize my wireless device with my PC?",
        "answer": [
          {
            "_key": "bdbd9c7dc712",
            "_type": "block",
            "children": [
              {
                "_key": "d10f9424bd110",
                "_type": "span",
                "marks": [],
                "text": "No, as any emails, calendar or contact information that you edit are reflected in real time on your computer running IronCAP InTouch."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "6772ee1ccc9f",
        "question": "Does IronCAP InTouch Remote Desktop Software support Outlook 2010 on Windows 64-bit computers?",
        "answer": [
          {
            "_key": "d7e6ff3afc07",
            "_type": "block",
            "children": [
              {
                "_key": "138391739f6d0",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch does not currently support Outlook 2010 on Windows 64-bit computers. This feature is currently under development."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "2c4118489156",
        "question": "I receive an error message in Internet Explorer 8 (or later) when trying to upload files using the My Files option, how can I resolve this?",
        "answer": [
          {
            "_key": "0e4958016bf8",
            "_type": "block",
            "children": [
              {
                "_key": "f792ea8033110",
                "_type": "span",
                "marks": [],
                "text": "To fix this problem:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f4a79c7c5c6f",
            "_type": "block",
            "children": [
              {
                "_key": "e5511931156a0",
                "_type": "span",
                "marks": [],
                "text": "In Internet Explorer, select Tools->Internet Options"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e3ced9d95089",
            "_type": "block",
            "children": [
              {
                "_key": "cd212964a2c10",
                "_type": "span",
                "marks": [],
                "text": "Click on the Security tab and then click the Custom level button"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f1a6847d58c9",
            "_type": "block",
            "children": [
              {
                "_key": "1caab705fb9c0",
                "_type": "span",
                "marks": [],
                "text": "Enable the setting \"Include local directory path when uploading files to a server\" under the \"Miscellaneous\" group"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "05912fdf83c6",
            "_type": "block",
            "children": [
              {
                "_key": "c4b825c626ce0",
                "_type": "span",
                "marks": [],
                "text": "Click Ok to close the window"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "847af5777f15",
        "question": "I cannot start the remote control viewer when using Internet Explorer 10, how can I resolve this?",
        "answer": [
          {
            "_key": "431eb7864076",
            "_type": "block",
            "children": [
              {
                "_key": "6651934c90ca0",
                "_type": "span",
                "marks": [],
                "text": "To fix this problem:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "d87d56a0e52e",
            "_type": "block",
            "children": [
              {
                "_key": "0ee9f79f01de0",
                "_type": "span",
                "marks": [],
                "text": "Open Internet Explorer 10"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b5b1f2a5518c",
            "_type": "block",
            "children": [
              {
                "_key": "1e8af8b6fe2f0",
                "_type": "span",
                "marks": [],
                "text": "Select the Tools menu (if you don’t see the Tools menu, press the Alt key on your keyboard)"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "95dc162ea241",
            "_type": "block",
            "children": [
              {
                "_key": "9a4d3c1dc9d70",
                "_type": "span",
                "marks": [],
                "text": "Select “Compatibility View\""
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      }
    ]
  },
  {
    "category": "Using Remote Wake-Up",
    "faqs": [
      {
        "id": "3b3a4de47258",
        "question": "How does the Remote Wake-Up feature work?",
        "answer": [
          {
            "_key": "391a3516f78c",
            "_type": "block",
            "children": [
              {
                "_key": "a66a2e0498a20",
                "_type": "span",
                "marks": [],
                "text": "This feature will remotely switch on your computer that is “shut down” so that it can be remotely accessed via IronCAP InTouch. Please note that this feature will not work for computers that are “in sleep mode”. It only works for “shutdown mode”. This is a very useful feature to save energy as well as for security enhancement."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "cd3ea097a437",
        "question": "What are the requirements for Remote Wake-Up?",
        "answer": [
          {
            "_key": "a6ef11045115",
            "_type": "block",
            "children": [
              {
                "_key": "b456cc0bad0f0",
                "_type": "span",
                "marks": [],
                "text": "For this feature to work, a minimum of 2 licenses on your IronCAP InTouch account are required with at least one of them always on. When you want to wake-up your host computer that is in “shutdown mode”, the IronCAP InTouch server will use one of the host computers in your IronCAP InTouch account that is “on” to “magically\" wake-up the host computer you want to switch on."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "908bcc882db9",
            "_type": "block",
            "children": [
              {
                "_key": "e71bc3af09780",
                "_type": "span",
                "marks": [],
                "text": "The computer you want to “switch on” must either support the “Wake-up-on-LAN” (WOL) or the Intel vPro feature. Most of the newer computers have built-in support of WOL but only more high-end business computers have the Intel vPro feature. If you are not sure, please check with your computer vendors. If your computer supports both WOL and Intel vPro, the IronCAP InTouch Remote Wake-Up feature will work with either one or both enabled."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "5a3cea4f3bea",
        "question": "If my computer supports WOL, how do I enable it?",
        "answer": [
          {
            "_key": "9ebb58876b74",
            "_type": "block",
            "children": [
              {
                "_key": "fc8f784927440",
                "_type": "span",
                "marks": [],
                "text": "Enabling WOL on a computer is not straight forward but it is a one-time setup. You need to enable this feature in both the BIOS setting as well as the Windows network card. Methods for enabling WOL on the computer BIOS vary depending on the manufacturer. General instructions are as follows:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "31aeae2376be",
            "_type": "block",
            "children": [
              {
                "_key": "2efbcefa64430",
                "_type": "span",
                "marks": [],
                "text": "To enable WOL in your motherboard's BIOS:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "022745a91091",
            "_type": "block",
            "children": [
              {
                "_key": "e295752540ee",
                "_type": "span",
                "marks": [],
                "text": "Restart your computer."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7eaa5dc41c03",
            "_type": "block",
            "children": [
              {
                "_key": "229557359e370",
                "_type": "span",
                "marks": [],
                "text": "When your computer first boots up, you will need to press a key to enter into the BIOS settings. Look for a message on screen telling you to press a key to enter Setup or BIOS, or refer to your computer/motherboard documentation for instructions. Common keys used are the DEL and F2, or ESC keys."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "fe54adaa99ba",
            "_type": "block",
            "children": [
              {
                "_key": "2c2c23895d810",
                "_type": "span",
                "marks": [],
                "text": "Once you are in the BIOS settings, the WOL settings will usually be under Power Management. Look for a setting similar to Wake-Up on Lan, WOL, or Remote Boot. Refer to your computer/motherboard documentation for specific instructions."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0f4463ffc61f",
            "_type": "block",
            "children": [
              {
                "_key": "75682cd5cee70",
                "_type": "span",
                "marks": [],
                "text": "Note: if the Wake-up setting of your BIOS shows S# (where # can be 0-5); select S5. If S5 is not available on the list, the IronCAP InTouch Wake-up feature will not work."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "fa8994a5a578",
            "_type": "block",
            "children": [
              {
                "_key": "a27e2b0b06420",
                "_type": "span",
                "marks": [],
                "text": "To enable WOL for your network card settings in Windows, the following steps are generic, terms used may be slightly different depending on your Windows version. The following example is for Windows 11: Windows “Start” → “Settings” → “Network & Devices” → “Advanced network settings” → Expand the “Network adapters” box → Click “Edit” on the “More adapter options” → “Configure”."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "04cdf3321af0",
            "_type": "block",
            "children": [
              {
                "_key": "5cc2cf1f9c7b",
                "_type": "span",
                "marks": [],
                "text": "  1.   On the “Power Management” tab, enable both the “All the computer to turn off this device to save power” and the “Allow this device to wake the computer” options."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1a86403a5ad5",
            "_type": "block",
            "children": [
              {
                "_key": "33001dce9734",
                "_type": "span",
                "marks": [],
                "text": "  2.   On the “Advanced” tab, enable both the “Shutdown Wake-On-Lan” and “Wake on Magic Packet” options."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "2351a9cc6abe",
            "_type": "block",
            "children": [
              {
                "_key": "325f3d7d2a40",
                "_type": "span",
                "marks": [],
                "text": "For specific instructions, please consult your computer manufacturer or "
              },
              {
                "_key": "2aee2d008bc1",
                "_type": "span",
                "marks": [
                  "7ebb7f85d833"
                ],
                "text": "contact our Tech Support Department."
              }
            ],
            "markDefs": [
              {
                "_key": "7ebb7f85d833",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop/support/"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "154dbb719d85",
        "question": "If my computer supports Intel vPro, how do I enable it?",
        "answer": [
          {
            "_key": "3ae9bf5f8e97",
            "_type": "block",
            "children": [
              {
                "_key": "6cb8ac61514f0",
                "_type": "span",
                "marks": [],
                "text": "Restart your computer."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "2e293bb435bc",
            "_type": "block",
            "children": [
              {
                "_key": "4f93971d700b0",
                "_type": "span",
                "marks": [],
                "text": "When your computer first boots up, you will need to press a key to enter into the BIOS settings. Look for a message on screen telling you to press a key to enter Setup or BIOS, or refer to your computer/motherboard documentation for instructions. Common keys used are the DEL and F2, or ESC keys."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "44796e7d5817",
            "_type": "block",
            "children": [
              {
                "_key": "cd493ce54029",
                "_type": "span",
                "marks": [],
                "text": "Clicking Ctrl-P will enter the Inter vPro Manageability Engine BIOS Extension (MEBx)."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "24f2f7444b7e",
            "_type": "block",
            "children": [
              {
                "_key": "921992932a850",
                "_type": "span",
                "marks": [],
                "text": "Once in the MEBx, use the default password \"admin\" (case-sensitive) to log in, thenchange it to a new password that meets Intel's strong password criteria: at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a specialcharacter (excluding quotes, apostrophes, commas, angle brackets, colons, ampersands, and spaces). Please make sure you setup the same password as the IronCAP InTouch password of the targeted host computer."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "805bc7a7efaa",
            "_type": "block",
            "children": [
              {
                "_key": "03e5988a49500",
                "_type": "span",
                "marks": [],
                "text": "After changing the password, you will be in the MEBx menu. Navigate to the "
              },
              {
                "_key": "e3c311ad8d56",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Intel AMT Configuration"
              },
              {
                "_key": "5933c6538089",
                "_type": "span",
                "marks": [],
                "text": " section."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "4b3e8c50dabc",
            "_type": "block",
            "children": [
              {
                "_key": "53fef213e1db0",
                "_type": "span",
                "marks": [],
                "text": "Select the Power Control item and navigate to enable the option of “Desktop: ON in S0, ME Wake in S3, S4-5”."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "d684724e0436",
            "_type": "block",
            "children": [
              {
                "_key": "7a996add54180",
                "_type": "span",
                "marks": [],
                "text": "Find the option for "
              },
              {
                "_key": "5ed5626f63b6",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "Activate Network Access"
              },
              {
                "_key": "228d91c93c2f",
                "_type": "span",
                "marks": [],
                "text": " and confirm by pressing Y."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3fbcf8bb5a2f",
            "_type": "block",
            "children": [
              {
                "_key": "1b8db5af2ba00",
                "_type": "span",
                "marks": [],
                "text": "Finally navigate to “Exit” the MEBx menu to complete the setup."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "ad0db2cd72d8",
        "question": "What is my Remote Wake-Up password?",
        "answer": [
          {
            "_key": "7162c94c3c9c",
            "_type": "block",
            "children": [
              {
                "_key": "9da46f7cca040",
                "_type": "span",
                "marks": [],
                "text": "By default, IronCAP InTouch uses the same password for your IronCAP InTouch account login password and the Remote Wake-Up password. Unless you have deliberately configured them to be different, the IronCAP InTouch account login password is the same as the remote login password of your IronCAP InTouch host computer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "9dabd7e9c239",
        "question": "How do I ensure Windows shuts down properly for remote Wake-Up to work properly?",
        "answer": [
          {
            "_key": "105476722238",
            "_type": "block",
            "children": [
              {
                "_key": "f1180f95366a0",
                "_type": "span",
                "marks": [],
                "text": "By default, Windows 8 and after all come with a \"fast startup\" mechanism that must be disabled in order for the IronCAP InTouch computer to shut-down properly. To disable the \"Fast startup\" mechanism:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "6a8e78916e7c",
            "_type": "block",
            "children": [
              {
                "_key": "4d7e18f0c8c20",
                "_type": "span",
                "marks": [],
                "text": "Open the Control Panel of Windows."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "42e2611fdcea",
            "_type": "block",
            "children": [
              {
                "_key": "5338e09114ef0",
                "_type": "span",
                "marks": [],
                "text": "Click on the \"Power Options\"."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f244b1ed9d00",
            "_type": "block",
            "children": [
              {
                "_key": "6cdce6f0e7570",
                "_type": "span",
                "marks": [],
                "text": "Click on the \"Choose what the power button does\" option."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "84fad47a3b1f",
            "_type": "block",
            "children": [
              {
                "_key": "81fae74965130",
                "_type": "span",
                "marks": [],
                "text": "Click on \"Change settings that are currently unavailable\"."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "fb74a02b5442",
            "_type": "block",
            "children": [
              {
                "_key": "fdb757311e7b0",
                "_type": "span",
                "marks": [],
                "text": "Uncheck the \"Turn on fast startup\"."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "862cb4643214",
            "_type": "block",
            "children": [
              {
                "_key": "3f30d4b8e1e70",
                "_type": "span",
                "marks": [],
                "text": "Click on the \"Save changes\" button."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      }
    ]
  },
  {
    "category": "Billing",
    "faqs": [
      {
        "id": "b66f52c055f0",
        "question": "How can I try the IronCAP InTouch Remote Desktop Software?",
        "answer": [
          {
            "_key": "f3b67684b91f",
            "_type": "block",
            "children": [
              {
                "_key": "f6efccbf4e910",
                "_type": "span",
                "marks": [],
                "text": "A FREE 30 day IronCAP InTouch trial is available with no-obligation - "
              },
              {
                "_key": "f6efccbf4e911",
                "_type": "span",
                "marks": [
                  "7ab44c7f4c25"
                ],
                "text": "download it here!"
              }
            ],
            "markDefs": [
              {
                "_key": "7ab44c7f4c25",
                "_type": "link",
                "href": "https://locator.01com.com/ecommerce/?id=5&code=751336900000011030000000"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "4afbc4a86850",
        "question": "What are the IronCAP InTouch Remote Desktop’s fees?",
        "answer": [
          {
            "_key": "c34c6046832f",
            "_type": "block",
            "children": [
              {
                "_key": "fb9093422182",
                "_type": "span",
                "marks": [],
                "text": "Please see our "
              },
              {
                "_key": "6465421c9cd0",
                "_type": "span",
                "marks": [
                  "46eb2f3268ba"
                ],
                "text": "pricing page"
              },
              {
                "_key": "57323aacecaa",
                "_type": "span",
                "marks": [],
                "text": " for full details."
              }
            ],
            "markDefs": [
              {
                "_key": "46eb2f3268ba",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop/pricing-comparison/"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "4bbde66ed1c1",
            "_type": "block",
            "children": [
              {
                "_key": "82445e464186",
                "_type": "span",
                "marks": [],
                "text": "Our price includes:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e58a8f3476e5",
            "_type": "block",
            "children": [
              {
                "_key": "dc93b88e9159",
                "_type": "span",
                "marks": [],
                "text": "Unlimited use of the IronCAP InTouch"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "25c2e6d4ab34",
            "_type": "block",
            "children": [
              {
                "_key": "d880dd7ec110",
                "_type": "span",
                "marks": [],
                "text": "Free support and version upgrades"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "34ab637221ea",
            "_type": "block",
            "children": [
              {
                "_key": "d3fa63b930b4",
                "_type": "span",
                "marks": [],
                "text": "Dedicated Account Manager"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f184f79b24f3",
            "_type": "block",
            "children": [
              {
                "_key": "c1bf39773015",
                "_type": "span",
                "marks": [],
                "text": "Pricing is per computer"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8aa17cf2661c",
            "_type": "block",
            "children": [
              {
                "_key": "889ef545a6ae",
                "_type": "span",
                "marks": [],
                "text": "Prices are subject to change"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e1114b158bd6",
            "_type": "block",
            "children": [
              {
                "_key": "722ee0e24d4f",
                "_type": "span",
                "marks": [],
                "text": "Charges billed to your credit card"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "64a34e4437d7",
        "question": "How can I subscribe to IronCAP InTouch during my trial period?",
        "answer": [
          {
            "_key": "e145bcc59951",
            "_type": "block",
            "children": [
              {
                "_key": "ca4cf86d5c8e0",
                "_type": "span",
                "marks": [],
                "text": "Simply follow these steps to subscribe online and create a billing account:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b21d1eceeebb",
            "_type": "block",
            "children": [
              {
                "_key": "f3e17f7920ea0",
                "_type": "span",
                "marks": [],
                "text": "Login to your online account "
              },
              {
                "_key": "8a826e9a9adc",
                "_type": "span",
                "marks": [
                  "f1c9fc29af77"
                ],
                "text": "here"
              },
              {
                "_key": "aaf0cfbed5d5",
                "_type": "span",
                "marks": [],
                "text": "."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [
              {
                "_key": "f1c9fc29af77",
                "_type": "link",
                "href": "https://locator.01com.com/"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "7886d9f61501",
            "_type": "block",
            "children": [
              {
                "_key": "ff6f86c763560",
                "_type": "span",
                "marks": [],
                "text": "Click on the “Subscribe Now!” link and you will be redirected to the Billing page."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8130cd0bca1b",
            "_type": "block",
            "children": [
              {
                "_key": "13ada17ee22d0",
                "_type": "span",
                "marks": [],
                "text": "If you want to keep the same amount of licenses you used during the trial, simply enter your credit card information, press I Accept to proceed with the purchase. Otherwise, click on the Licenses tab to change the amount of licenses to purchase and then click on Continue."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "551e1684f399",
            "_type": "block",
            "children": [
              {
                "_key": "536c0aff04140",
                "_type": "span",
                "marks": [],
                "text": "Follow the instructions shown on the screen to complete the transaction."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "6c051afd8841",
        "question": "Can I re-use an IronCAP InTouch Serial Number on more than one PC?",
        "answer": [
          {
            "_key": "0c048812183d",
            "_type": "block",
            "children": [
              {
                "_key": "0ac2291bad370",
                "_type": "span",
                "marks": [],
                "text": "No. Each IronCAP InTouch Serial Number is unique, and assigned to a single IronCAP InTouch computer only."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "752815f36ac7",
        "question": "Why should I provide a credit card when signing up for a IronCAP InTouch trial?",
        "answer": [
          {
            "_key": "9ab6e0e05221",
            "_type": "block",
            "children": [
              {
                "_key": "cc6a434384b30",
                "_type": "span",
                "marks": [],
                "text": "By providing a credit card when you sign up you will ensure that your service is never interrupted when your free trial expires since you will be automatically subscribed when it finishes. There is no risk to you since If you decide you do not want to subscribe, "
              },
              {
                "_key": "cc6a434384b31",
                "_type": "span",
                "marks": [
                  "strong"
                ],
                "text": "you can cancel at any point during the trial."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "afe0b3b6cd99",
        "question": "How can I subscribe to IronCAP InTouch Remote Desktop once my trial is over?",
        "answer": [
          {
            "_key": "898c297c02aa",
            "_type": "block",
            "children": [
              {
                "_key": "1d8212881cfb0",
                "_type": "span",
                "marks": [],
                "text": "Simply follow these steps to subscribe online and create a billing account:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "a1ff59b1be24",
            "_type": "block",
            "children": [
              {
                "_key": "349ebe4e185a0",
                "_type": "span",
                "marks": [],
                "text": "Login to your online account "
              },
              {
                "_key": "255d2157e7c8",
                "_type": "span",
                "marks": [
                  "ef63b680311b"
                ],
                "text": "here"
              },
              {
                "_key": "fab442deb298",
                "_type": "span",
                "marks": [],
                "text": "."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [
              {
                "_key": "ef63b680311b",
                "_type": "link",
                "href": "https://locator.01com.com/"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "a7e537567fca",
            "_type": "block",
            "children": [
              {
                "_key": "49be69d982d20",
                "_type": "span",
                "marks": [],
                "text": "Click on the “Subscribe Now!” link and you will be redirected to the Billing page."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e6ed9cd68755",
            "_type": "block",
            "children": [
              {
                "_key": "2cb9d527fb370",
                "_type": "span",
                "marks": [],
                "text": "If you want to keep the same amount of licenses you used during the trial, simply enter your credit card information, press I Accept to proceed with the purchase. Otherwise, click on the Licenses tab to change the amount of licenses to purchase and then click on Continue."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "71b0978e43ae",
            "_type": "block",
            "children": [
              {
                "_key": "f5ee22d9ef100",
                "_type": "span",
                "marks": [],
                "text": "Follow the instructions shown on the screen to complete the transaction."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "dd362f3a33b7",
        "question": "How am I billed for IronCAP InTouch?",
        "answer": [
          {
            "_key": "f7aba8fdd006",
            "_type": "block",
            "children": [
              {
                "_key": "bb6563b2c2f20",
                "_type": "span",
                "marks": [],
                "text": "Service fees are billed to your credit card."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "1e2246dc0535",
            "_type": "block",
            "children": [
              {
                "_key": "19ce40157d050",
                "_type": "span",
                "marks": [],
                "text": "Login to your online account "
              },
              {
                "_key": "9f1c39063c0b",
                "_type": "span",
                "marks": [
                  "2841a39e98a9"
                ],
                "text": "here"
              },
              {
                "_key": "df2e7438f6ac",
                "_type": "span",
                "marks": [],
                "text": "."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [
              {
                "_key": "2841a39e98a9",
                "_type": "link",
                "href": "https://locator.01com.com/"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "a70c8eae3caa",
            "_type": "block",
            "children": [
              {
                "_key": "c7a85f11e4790",
                "_type": "span",
                "marks": [],
                "text": "Then click on the “Subscribe Now!” link and enter your credit card information."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3d84b8e6b3a3",
            "_type": "block",
            "children": [
              {
                "_key": "5aae366b0cc70",
                "_type": "span",
                "marks": [],
                "text": "Your subscription will be automatically renewed either monthly or yearly depending on the plan you selected."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "2ed207ee6820",
        "question": "How can I add more user licenses?",
        "answer": [
          {
            "_key": "966e88b23b67",
            "_type": "block",
            "children": [
              {
                "_key": "adb4bf5849ad0",
                "_type": "span",
                "marks": [],
                "text": "Login to your online account "
              },
              {
                "_key": "850d0633de6c",
                "_type": "span",
                "marks": [
                  "1dadd858596d"
                ],
                "text": "here"
              },
              {
                "_key": "d18f8920e239",
                "_type": "span",
                "marks": [],
                "text": "."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [
              {
                "_key": "1dadd858596d",
                "_type": "link",
                "href": "https://locator.01com.com/"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "f42d86d157a3",
            "_type": "block",
            "children": [
              {
                "_key": "36d9478192070",
                "_type": "span",
                "marks": [],
                "text": "Click on the My Account tab."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "72a96506529e",
            "_type": "block",
            "children": [
              {
                "_key": "dca7dc7b1b0b0",
                "_type": "span",
                "marks": [],
                "text": "Click on the Licenses tab"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "a17f4723535b",
            "_type": "block",
            "children": [
              {
                "_key": "0f9bf07147250",
                "_type": "span",
                "marks": [],
                "text": "The system will show the current number of licenses you have along with the subscription term. Enter the new total number of licenses you want. i.e. if the system shows 4 licenses and you enter 6, 2 more licenses will be added to your account."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8303061aaf69",
            "_type": "block",
            "children": [
              {
                "_key": "4739d39e5e1f0",
                "_type": "span",
                "marks": [],
                "text": "Click Continue to proceed with the purchase."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "580a959b466a",
        "question": "Can I alter my billing from monthly to annual or vice versa?",
        "answer": [
          {
            "_key": "34eda8182a7e",
            "_type": "block",
            "children": [
              {
                "_key": "2050ec9d4bcb0",
                "_type": "span",
                "marks": [],
                "text": "Yes, login to your online account "
              },
              {
                "_key": "7117920e31af",
                "_type": "span",
                "marks": [
                  "2e83a9a4ee49"
                ],
                "text": "here"
              },
              {
                "_key": "079c43b4a592",
                "_type": "span",
                "marks": [],
                "text": " and click on the My Account tab. Use the Licenses tab to convert your subscription to monthly or annual. This conversion will take effect during your next billing cycle and you cannot mix annual and monthly subscriptions."
              }
            ],
            "markDefs": [
              {
                "_key": "2e83a9a4ee49",
                "_type": "link",
                "href": "https://locator.01com.com/"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "5cea05ad08d2",
        "question": "How do I cancel my IronCAP InTouch Remote Desktop service?",
        "answer": [
          {
            "_key": "1669f545a577",
            "_type": "block",
            "children": [
              {
                "_key": "657eb0e23d8c0",
                "_type": "span",
                "marks": [],
                "text": "You can cancel your service by contacting 01 Quantum."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "12a89c155605",
        "question": "What is 01 Quantum's policy on the IronCAP InTouch Remote Desktop Software upgrades?  ",
        "answer": [
          {
            "_key": "dc057ee8c646",
            "_type": "block",
            "children": [
              {
                "_key": "05d61b643f5e0",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch version upgrades are provided at no charge as part of IronCAP InTouch service. An automatic notification will appear when a new version of IronCAP InTouch is available."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      }
    ]
  },
  {
    "category": "Remote Access",
    "faqs": [
      {
        "id": "c952a4d00e99",
        "question": " I can't access the IronCAP InTouch login page, how can I remotely access my computer?",
        "answer": [
          {
            "_key": "7dad15858193",
            "_type": "block",
            "children": [
              {
                "_key": "d0007e2b9a5b0",
                "_type": "span",
                "marks": [],
                "text": "Periodically, "
              },
              {
                "_key": "67e8c92bb77e",
                "_type": "span",
                "marks": [
                  "2652b31cc92e"
                ],
                "text": "https://www.01com.com/imintouch-remote-pc-desktop"
              },
              {
                "_key": "6c8fe000f01b",
                "_type": "span",
                "marks": [],
                "text": " will be unavailable due to maintenance. If you cannot access it, please try using our backup login page at "
              },
              {
                "_key": "d0007e2b9a5b3",
                "_type": "span",
                "marks": [
                  "2d78c3a3ed8f"
                ],
                "text": "http://locator.01com.com"
              }
            ],
            "markDefs": [
              {
                "_key": "2d78c3a3ed8f",
                "_type": "link",
                "href": "http://locator.01com.com/"
              },
              {
                "_key": "2652b31cc92e",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "ce0a10a962b3",
        "question": "How do I use the IronCAP InTouch Remote Control Software as an Internet parental control tool?",
        "answer": [
          {
            "_key": "736641293777",
            "_type": "block",
            "children": [
              {
                "_key": "e9bcbe6c656f0",
                "_type": "span",
                "marks": [],
                "text": "Install IronCAP InTouch in stealth mode to use it as an Internet parental control tool."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "982a97c0d422",
            "_type": "block",
            "children": [
              {
                "_key": "7ca61a6dfa590",
                "_type": "span",
                "marks": [],
                "text": "During installation, select the \"Stealth Mode\" option."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "2c3c2d05e04e",
            "_type": "block",
            "children": [
              {
                "_key": "07c83d32ca430",
                "_type": "span",
                "marks": [],
                "text": "For more information, visit IronCAP InTouch "
              },
              {
                "_key": "07c83d32ca431",
                "_type": "span",
                "marks": [
                  "9a78e0901c9b"
                ],
                "text": "Internet parental control"
              },
              {
                "_key": "07c83d32ca432",
                "_type": "span",
                "marks": [],
                "text": " page."
              }
            ],
            "markDefs": [
              {
                "_key": "9a78e0901c9b",
                "_type": "link",
                "href": "https://www.01com.com/imintouch-remote-pc-desktop/features"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "503ddf853105",
        "question": "How can I setup the Remote Printing feature?",
        "answer": [
          {
            "_key": "687c42689309",
            "_type": "block",
            "children": [
              {
                "_key": "e4301e6b10990",
                "_type": "span",
                "marks": [],
                "text": "You do not need to setup your Remote Printer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "3d404b5b92ee",
            "_type": "block",
            "children": [
              {
                "_key": "c52bc651b85e0",
                "_type": "span",
                "marks": [],
                "text": "When you install IronCAP InTouch on your host computer, it will automatically install the \"IronCAP InTouch Remote Printer\" that will allow you print locally any document located at the host machine."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "339f4e96bbea",
        "question": "How can I use the Remote Printing feature?",
        "answer": [
          {
            "_key": "09eb21fad8ae",
            "_type": "block",
            "children": [
              {
                "_key": "ce2b5091908e0",
                "_type": "span",
                "marks": [],
                "text": "Start an IronCAP InTouch remote control session with your host machine."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "c8d07e8ac104",
            "_type": "block",
            "children": [
              {
                "_key": "98b56f8d6e030",
                "_type": "span",
                "marks": [],
                "text": "Open the document you would like to print."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "885a086c1b62",
            "_type": "block",
            "children": [
              {
                "_key": "47ca84abdc990",
                "_type": "span",
                "marks": [],
                "text": "Click on the Print button and from the list of available printers, select \"IronCAP InTouch Remote Printer\"."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b226dab210f4",
            "_type": "block",
            "children": [
              {
                "_key": "552157beeccd0",
                "_type": "span",
                "marks": [],
                "text": "At your local computer (the one you are using to access your IronCAP InTouch computer), you will be asked to select the one printer you want the document to be sent to."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "190d430cb44a",
            "_type": "block",
            "children": [
              {
                "_key": "830109ab1c320",
                "_type": "span",
                "marks": [],
                "text": "Select the printer and click Ok."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "94dd48de3061",
        "question": "How do I configure my Internet Security Software to work with the IronCAP InTouch Remote Desktop Software?",
        "answer": [
          {
            "_key": "0fe6be1bfe7b",
            "_type": "block",
            "children": [
              {
                "_key": "633cd93af5d60",
                "_type": "span",
                "marks": [],
                "text": "A remote access session, which delivers data from your PC to the remote location, is flagged by firewalls or security software as suspicious. Therefore, it is necessary to configure your firewall to trust IronCAP InTouch. Below are the configuration guidelines for different firewall manufacturers:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ae17ab964835",
            "_type": "block",
            "children": [
              {
                "_key": "4e8653bcf1f50",
                "_type": "span",
                "marks": [
                  "bdacc899af7a"
                ],
                "text": "Norton Internet Security 2010"
              },
              {
                "_key": "4e8653bcf1f51",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f52",
                "_type": "span",
                "marks": [
                  "7c54b910c8eb"
                ],
                "text": "Norton Internet Security 2008"
              },
              {
                "_key": "4e8653bcf1f53",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f54",
                "_type": "span",
                "marks": [
                  "04c6d806ed34"
                ],
                "text": "Trend Micro Internet Security 2010"
              },
              {
                "_key": "4e8653bcf1f55",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f56",
                "_type": "span",
                "marks": [
                  "5db6d9fd1e4d"
                ],
                "text": "McAfee Internet Security 2007 Configuration Guidelines"
              },
              {
                "_key": "4e8653bcf1f57",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f58",
                "_type": "span",
                "marks": [
                  "ba1242a40249"
                ],
                "text": "McAfee Internet Security Configuration Guidelines"
              },
              {
                "_key": "4e8653bcf1f59",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f510",
                "_type": "span",
                "marks": [
                  "539591b54fbf"
                ],
                "text": "NOD32 Security Configuration Guidelines"
              },
              {
                "_key": "4e8653bcf1f511",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f512",
                "_type": "span",
                "marks": [
                  "a6ec4f421af8"
                ],
                "text": "F-Secure Internet Security 2010 Configuration Guidelines"
              },
              {
                "_key": "4e8653bcf1f513",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f514",
                "_type": "span",
                "marks": [
                  "a2ec34b76044"
                ],
                "text": "Zone Alarm Pro PC Firewall"
              },
              {
                "_key": "4e8653bcf1f515",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f516",
                "_type": "span",
                "marks": [
                  "0e1af325aa73"
                ],
                "text": "System Mechanic Professional 4 Configuration Guidelines"
              },
              {
                "_key": "4e8653bcf1f517",
                "_type": "span",
                "marks": [],
                "text": "\n"
              },
              {
                "_key": "4e8653bcf1f518",
                "_type": "span",
                "marks": [
                  "c5fc73cbf5b8"
                ],
                "text": "Windows Live OneCare Configuration Guidelines"
              }
            ],
            "markDefs": [
              {
                "_key": "bdacc899af7a",
                "_type": "link",
                "href": "https://www.01com.com/pdf/Norton_2010.pdf"
              },
              {
                "_key": "7c54b910c8eb",
                "_type": "link",
                "href": "https://www.01com.com/pdf/Norton_2008.pdf"
              },
              {
                "_key": "04c6d806ed34",
                "_type": "link",
                "href": "https://www.01com.com/pdf/Trend_2010.pdf"
              },
              {
                "_key": "5db6d9fd1e4d",
                "_type": "link",
                "href": "https://www.01com.com/pdf/McAfee_2007.pdf"
              },
              {
                "_key": "ba1242a40249",
                "_type": "link",
                "href": "https://www.01com.com/pdf/McAfee.pdf"
              },
              {
                "_key": "539591b54fbf",
                "_type": "link",
                "href": "https://www.01com.com/pdf/NOD32.pdf"
              },
              {
                "_key": "a6ec4f421af8",
                "_type": "link",
                "href": "https://www.01com.com/pdf/Fsecureinternetsecurity2010.pdf"
              },
              {
                "_key": "a2ec34b76044",
                "_type": "link",
                "href": "https://www.01com.com/pdf/zonealarm.pdf"
              },
              {
                "_key": "0e1af325aa73",
                "_type": "link",
                "href": "https://www.01com.com/pdf/SystemMechanicProsetup.pdf"
              },
              {
                "_key": "c5fc73cbf5b8",
                "_type": "link",
                "href": "https://www.01com.com/pdf/Windows_Live_OneCare.pdf"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "8deba1c74b43",
        "question": "How to configure Direct connection?",
        "answer": [
          {
            "_key": "ae802f7e9450",
            "_type": "block",
            "children": [
              {
                "_key": "34ce91c802f60",
                "_type": "span",
                "marks": [],
                "text": "You connect and interact with your computer remotely using one of the two possible configurations, via Central Communication Server or via Direct Connection. The default setting is via Central Communications Server."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "59757f094bab",
            "_type": "block",
            "children": [
              {
                "_key": "9cfb84856deb0",
                "_type": "span",
                "marks": [],
                "text": "To change your configuration for remote access, simply:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0682cf5cb271",
            "_type": "block",
            "children": [
              {
                "_key": "554b451ec0940",
                "_type": "span",
                "marks": [],
                "text": "Double click on the green satellite to open the IronCAP InTouch Configuration screen."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "4189fd3c72b0",
            "_type": "block",
            "children": [
              {
                "_key": "3d0a84bd47920",
                "_type": "span",
                "marks": [],
                "text": "On the right hand side of the screen, click on Advance Configuration."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8f244b579f4d",
            "_type": "block",
            "children": [
              {
                "_key": "6ec915a5b13a0",
                "_type": "span",
                "marks": [],
                "text": "Uncheck the \"Via Central Communication Server\"."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "ad114c7e1d76",
            "_type": "block",
            "children": [
              {
                "_key": "4508d4dea38e0",
                "_type": "span",
                "marks": [],
                "text": "Click on the Apply button to save the changes. Now, your IronCAP InTouch is set to use Via Direct Connection when you access this computer remotely."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "daac112c171f",
            "_type": "block",
            "children": [
              {
                "_key": "03c702ec1f8e0",
                "_type": "span",
                "marks": [
                  "strong",
                  "underline"
                ],
                "text": "Note:"
              },
              {
                "_key": "ef2bcf68b4d5",
                "_type": "span",
                "marks": [],
                "text": " Please note that the Direct configuration may require network firewall or router changes - more info can be found by clicking on the \"Read First\" link on the screen."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9577fc9bede8",
            "_type": "block",
            "children": [
              {
                "_key": "85dcc010c38c0",
                "_type": "span",
                "marks": [],
                "text": "The Via Central Communication Server eliminates the need for you to re-configure any firewalls or routers that may exist in your network. The Central Communication Server acts as a broker to direct communications between your remote device and the desktop computer you are accessing. All data transfer through the server to your desktop computer is encrypted, secure, and never stored."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "c1f138c832b3",
            "_type": "block",
            "children": [
              {
                "_key": "df0ce931b6590",
                "_type": "span",
                "marks": [],
                "text": "The Direct connection allows you to interact directly (peer-to-peer) between your remote device and the desktop computer you are accessing. If a firewall or router exists in your network, you must re-configure these devices to allow IronCAP InTouch requests to pass through and reach your computer. This may involve what is commonly known as opening ports, port forwarding or establishing a virtual server. This configuration provides the best performance if you are an active user of the Webcam/Video feature."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "51880b56668d",
            "_type": "block",
            "children": [
              {
                "_key": "4c4a2db280070",
                "_type": "span",
                "marks": [],
                "text": "LAN users (when using Direct Connection)"
              }
            ],
            "markDefs": [],
            "style": "h5"
          },
          {
            "_key": "01493e30e897",
            "_type": "block",
            "children": [
              {
                "_key": "30275bddfce10",
                "_type": "span",
                "marks": [],
                "text": "If your computer is part of a Local Area Network behind a Proxy Server, enter the Proxy Directory name established by your IS administrator. More information is available at "
              },
              {
                "_key": "30275bddfce11",
                "_type": "span",
                "marks": [
                  "1482faf3ef79"
                ],
                "text": "http://www.01com.com/pdf/faqs/proxy_document.pdf"
              },
              {
                "_key": "30275bddfce12",
                "_type": "span",
                "marks": [],
                "text": " when your computer is connected behind a MicroSoft Proxy Server."
              }
            ],
            "markDefs": [
              {
                "_key": "1482faf3ef79",
                "_type": "link",
                "href": "http://www.01com.com/pdf/faqs/proxy_document.pdf"
              }
            ],
            "style": "normal"
          },
          {
            "_key": "82b457717a90",
            "_type": "block",
            "children": [
              {
                "_key": "869435f53cb30",
                "_type": "span",
                "marks": [],
                "text": "Redirection Port Number (when using Direct Connection)"
              }
            ],
            "markDefs": [],
            "style": "h5"
          },
          {
            "_key": "ada564794968",
            "_type": "block",
            "children": [
              {
                "_key": "1ae74ef8995f0",
                "_type": "span",
                "marks": [],
                "text": "Select the port number used for redirection to your PC running IronCAP InTouch. Default value for HTTP requests is 80 and for HTTPS requests is 443. If you wish to have IronCAP InTouch run on a port number other than 80, or you are using a firewall with port forwarding, you may want to use another port number."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f7b0455ddadb",
            "_type": "block",
            "children": [
              {
                "_key": "f62553c49f600",
                "_type": "span",
                "marks": [],
                "text": "If you have a firewall, ensure it is configured to support HTTP requests through port 80 and configured to support computers operating as a web server behind the firewall. Most firewall manufacturers' web site technical FAQs explain how to configure the firewall when computers behind it are running as a web server."
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9b344129cd5b",
            "_type": "block",
            "children": [
              {
                "_key": "f01aa418e5f30",
                "_type": "span",
                "marks": [],
                "text": "IP Address to register (when using Direct Connection)"
              }
            ],
            "markDefs": [],
            "style": "h5"
          },
          {
            "_key": "90d3599188c8",
            "_type": "block",
            "children": [
              {
                "_key": "35143d4eb8f90",
                "_type": "span",
                "marks": [],
                "text": "Specify the IP address used to connect to your computer from a remote location. Usually this can be determined automatically. However, in some situations there may be multiple proxy servers that handle the incoming connections. These proxy servers have different IP addresses that cannot be determined automatically. If this is the case then the IP address must be specified. It may be necessary to contact your network administrator to find out the values to enter."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "3d8df35c603a",
        "question": "How do I stop anti-virus alerts on my IronCAP InTouch PC when my incoming e-mail is detected to contain viruses?",
        "answer": [
          {
            "_key": "c822d06c06af",
            "_type": "block",
            "children": [
              {
                "_key": "4df2750f5c270",
                "_type": "span",
                "marks": [],
                "text": "Norton Anti-Virus 2004 may detect a virus while downloading emails onto your host PC. When this happens, a virus detection message window appears asking the user to respond. This message window halts delivery of all inbound emails until a response is provided. To ensure that this Message Window does not interfere with a remote access session, please "
              },
              {
                "_key": "4df2750f5c271",
                "_type": "span",
                "marks": [
                  "25f6fb374750"
                ],
                "text": "configure"
              },
              {
                "_key": "4df2750f5c272",
                "_type": "span",
                "marks": [],
                "text": " your Norton Anti-Virus 2004 settings."
              }
            ],
            "markDefs": [
              {
                "_key": "25f6fb374750",
                "_type": "link",
                "href": "https://www.01com.com/pdf/products_iit/NortonAntiVirus_email.pdf"
              }
            ],
            "style": "normal"
          }
        ]
      },
      {
        "id": "dc3f39e379d4",
        "question": "How do I enable the CTRL-ALT-DEL feature in IronCAP InTouch for Windows 7, 8, 10, and 11+?",
        "answer": [
          {
            "_key": "ac79b77ae3a2",
            "_type": "block",
            "children": [
              {
                "_key": "52211cfd912a0",
                "_type": "span",
                "marks": [],
                "text": "Windows 7, 8, 10 and 11+:"
              }
            ],
            "markDefs": [],
            "style": "h5"
          },
          {
            "_key": "e084d18a2faf",
            "_type": "block",
            "children": [
              {
                "_key": "131676b6ce150",
                "_type": "span",
                "marks": [],
                "text": "On your host computer, click on the Start icon."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "e7a6cd645435",
            "_type": "block",
            "children": [
              {
                "_key": "8d1bca90621d0",
                "_type": "span",
                "marks": [],
                "text": "On the Start Search box, type gpedit.msc to open the Group Policy Object Editor."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "4736ca73e47b",
            "_type": "block",
            "children": [
              {
                "_key": "0811329b79220",
                "_type": "span",
                "marks": [],
                "text": "From the left side of the pane, go to Computer Configuration --> Administrative Templates --> Windows Components --> Windows Logon Options."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7a656e662ead",
            "_type": "block",
            "children": [
              {
                "_key": "5bb8b88cc4eb0",
                "_type": "span",
                "marks": [],
                "text": "Right-click on \"Disable or enable software Secure Attention Sequence\" and then select Properties."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "0e4dfb552c3d",
            "_type": "block",
            "children": [
              {
                "_key": "9842b2a056760",
                "_type": "span",
                "marks": [],
                "text": "Select \"Enabled\"."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "781e84b547b5",
            "_type": "block",
            "children": [
              {
                "_key": "51e7a8e43b130",
                "_type": "span",
                "marks": [],
                "text": "From the drop-down list select \"Services and Ease of Access applications\"."
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "b52ce9740ca4",
            "_type": "block",
            "children": [
              {
                "_key": "3909ff8ad07d0",
                "_type": "span",
                "marks": [],
                "text": "Click on the OK button to save the changes"
              }
            ],
            "level": 1,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "78b480910ee8",
            "_type": "block",
            "children": [
              {
                "_key": "9a2c01de32b20",
                "_type": "span",
                "marks": [],
                "text": "At this point the CTR-ALT-DEL feature should start working when accessing remotely by using IronCAP InTouch."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "fb461bb2962e",
        "question": "How do I stop an end-user from gaining remote computer access to their computer?",
        "answer": [
          {
            "_key": "02cf77fce7b9",
            "_type": "block",
            "children": [
              {
                "_key": "9d7a430dcef60",
                "_type": "span",
                "marks": [],
                "text": "At the Host machine that you want to stop the remote access, right click on its green satellite and select \"Disable IronCAP InTouch\"."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      }
    ]
  },
  {
    "category": "Remote Audio",
    "faqs": [
      {
        "id": "868decf950df",
        "question": "What are the requirements to listen to remote audio?",
        "answer": [
          {
            "_key": "cdb3a44fa5dd",
            "_type": "block",
            "children": [
              {
                "_key": "89bd369081290",
                "_type": "span",
                "marks": [],
                "text": "Remote audio is supported from Windows XP, Vista or 7 host computers. To listen to remote audio, the remote computer must have Windows XP or later installed. Remote audio is not supported from Pocket PCs or from the Java applet viewer."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "6a7ccad186ff",
        "question": " I cannot hear any audio on my remote computer from my host computer, what should I do?",
        "answer": [
          {
            "_key": "3d06bcc172ca",
            "_type": "block",
            "children": [
              {
                "_key": "b02e09b3c0e30",
                "_type": "span",
                "marks": [],
                "text": "If you cannot hear any sound from the host computer, please ensure the following:"
              }
            ],
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "66f2fc2bda59",
            "_type": "block",
            "children": [
              {
                "_key": "f0c475abc0290",
                "_type": "span",
                "marks": [],
                "text": "You are using version 6.1 or higher of IronCAP InTouch - right click on the IronCAP InTouch green satellite icon in the system tray of the computer you installed IronCAP InTouch on and select About IronCAP InTouch. Make sure the version number is at least V6.1. You can hear sound from the client computer (the computer you are currently at)."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "7a2d139669d5",
            "_type": "block",
            "children": [
              {
                "_key": "1b36149f9d900",
                "_type": "span",
                "marks": [],
                "text": "During the remote control session, click on the audio icon on the far right of the IronCAP InTouch toolbar and ensure Mute is not checked."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "8d415254ba96",
            "_type": "block",
            "children": [
              {
                "_key": "c5781caaa23d0",
                "_type": "span",
                "marks": [],
                "text": "You have the latest drivers installed for your sound card."
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "f7ced3b60d13",
            "_type": "block",
            "children": [
              {
                "_key": "dfd179b548d80",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch automatically mutes sound on the host computer when remote audio is enabled. In rare cases, this may cause the audio to be muted on the remote computer as well. To fix this:"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "d6fcd5a86c7d",
            "_type": "block",
            "children": [
              {
                "_key": "079e0aafe79b0",
                "_type": "span",
                "marks": [],
                "text": "Double-click the green satellite in the system tray of the host computer."
              }
            ],
            "level": 2,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "eb4440ae92cd",
            "_type": "block",
            "children": [
              {
                "_key": "efa0cf464abb0",
                "_type": "span",
                "marks": [],
                "text": "Click the User Information tab on the left, click the Access Rights button, and click Settings."
              }
            ],
            "level": 2,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9ffdbc14254a",
            "_type": "block",
            "children": [
              {
                "_key": "d2b574e261150",
                "_type": "span",
                "marks": [],
                "text": "Uncheck the box next to \"Mute the host computer speakers during the remote session\" and click OK"
              }
            ],
            "level": 2,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "dd9de105cfef",
            "_type": "block",
            "children": [
              {
                "_key": "a38fa1e4e3020",
                "_type": "span",
                "marks": [],
                "text": "IronCAP InTouch may not have automatically detected the correct input device. To set it manually:"
              }
            ],
            "level": 1,
            "listItem": "bullet",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "dc98cbee9185",
            "_type": "block",
            "children": [
              {
                "_key": "7585412ec8e50",
                "_type": "span",
                "marks": [],
                "text": "Double-click the green satellite in the system tray of the host computer."
              }
            ],
            "level": 2,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "9dfa080f36af",
            "_type": "block",
            "children": [
              {
                "_key": "56ba5891bc850",
                "_type": "span",
                "marks": [],
                "text": "Click the User Information tab on the left, click the Access Rights button, and click Settings."
              }
            ],
            "level": 2,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          },
          {
            "_key": "94b71d8d0639",
            "_type": "block",
            "children": [
              {
                "_key": "79cd0dc843580",
                "_type": "span",
                "marks": [],
                "text": "Ensure the correct sound input device is selected from the list and click OK. The name of the input device will vary based on your system's sound card."
              }
            ],
            "level": 2,
            "listItem": "number",
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "6572a39d9ac9",
        "question": "Does remote audio work when multiple IronCAP InTouch users login to the same computer?",
        "answer": [
          {
            "_key": "c08a78f2e7e8",
            "_type": "block",
            "children": [
              {
                "_key": "5bc142a6f69e0",
                "_type": "span",
                "marks": [],
                "text": "Currently, remote audio only works for the first user to login."
              }
            ],
            "markDefs": [],
            "style": "normal"
          }
        ]
      },
      {
        "id": "511f8d2fdd9b",
        "question": "I get an error message saying this computer is unable to playback remote audio when my remote control session starts.",
        "answer": [
          {
            "_key": "cfa802038942",
            "_type": "block",
            "children": [
              {
                "_key": "6036c4d6d3d10",
                "_type": "span",
                "marks": [],
                "text": "This error message is a result of the client computer (the computer you are at) not having the correct codec installed to playback the remote audio. To fix this, upgrade the Windows Media Player on the client computer to version 7 or higher which will install the needed codecs on your system. Updated versions of Windows Media Player are available "
              },
              {
                "_key": "6036c4d6d3d11",
                "_type": "span",
                "marks": [
                  "b79e8667dd8a"
                ],
                "text": "here"
              },
              {
                "_key": "6036c4d6d3d12",
                "_type": "span",
                "marks": [],
                "text": "."
              }
            ],
            "markDefs": [
              {
                "_key": "b79e8667dd8a",
                "_type": "link",
                "href": "http://www.microsoft.com/windows/windowsmedia/default.mspx"
              }
            ],
            "style": "normal"
          }
        ]
      }
    ]
  }
];

function GreenDots() {
  return (
    <span aria-hidden className="inline-flex shrink-0 items-center gap-0.75">
      <span className="block size-1.25 rounded-full bg-quantum-green" />
      <span className="block size-1.25 rounded-full bg-quantum-green" />
      <span className="block size-1.25 rounded-full bg-quantum-green" />
    </span>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function renderBrandText(text: string) {
  const parts = text.split(brandPhrase);

  if (parts.length === 1) {
    return text;
  }

  return parts.flatMap((part, index) => {
    const nodes: React.ReactNode[] = [];
    if (part) {
      nodes.push(part);
    }
    if (index < parts.length - 1) {
      nodes.push(
        <span key={`brand-${index}`}>
          IronCAP
          <Trademark /> InTouch
        </span>,
      );
    }
    return nodes;
  });
}

function renderChild(child: SpanChild, markDefs: MarkDef[] = []) {
  const marks = child.marks ?? [];
  return marks.reduce<React.ReactNode>((node, mark) => {
    if (mark === "strong") {
      return <strong className="font-semibold text-steel-gray">{node}</strong>;
    }

    if (mark === "underline") {
      return <span className="underline">{node}</span>;
    }

    const link = markDefs.find((definition) => definition._key === mark);
    if (link) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-quantum-blue hover:underline"
        >
          {node}
        </a>
      );
    }

    return node;
  }, renderBrandText(child.text));
}

function renderInline(block: PortableBlock) {
  return block.children.map((child) => (
    <span key={child._key}>{renderChild(child, block.markDefs)}</span>
  ));
}

function renderParagraph(block: PortableBlock) {
  if (block.style === "h4" || block.style === "h5") {
    return (
      <h4 key={block._key} className="mt-4 text-[18px] font-medium text-steel-gray first:mt-0">
        {renderInline(block)}
      </h4>
    );
  }

  return (
    <p key={block._key} className="mb-3 last:mb-0">
      {renderInline(block)}
    </p>
  );
}

function renderList(blocks: PortableBlock[], key: string) {
  const listType = blocks[0]?.listItem;
  const level = blocks[0]?.level ?? 1;
  const ListTag = listType === "number" ? "ol" : "ul";
  const listStyle = listType === "number" ? "list-decimal" : "list-disc";

  return (
    <ListTag key={key} className={`mb-3 ${listStyle} ${level > 1 ? "pl-10" : "pl-6"}`}>
      {blocks.map((block) => (
        <li key={block._key} className="mb-1 last:mb-0">
          {renderInline(block)}
        </li>
      ))}
    </ListTag>
  );
}

function PortableAnswer({ blocks }: { blocks: PortableBlock[] }) {
  const rendered: React.ReactNode[] = [];
  let listBuffer: PortableBlock[] = [];
  let listKey = "";

  const flushList = () => {
    if (listBuffer.length === 0) return;
    rendered.push(renderList(listBuffer, listKey));
    listBuffer = [];
    listKey = "";
  };

  blocks.forEach((block) => {
    if (block.listItem) {
      const currentKey = `${block.listItem}-${block.level ?? 1}`;
      if (listBuffer.length > 0 && currentKey !== listKey) {
        flushList();
      }
      listBuffer.push(block);
      listKey = currentKey;
      return;
    }

    flushList();
    rendered.push(renderParagraph(block));
  });

  flushList();

  return <>{rendered}</>;
}

function FaqList({
  items,
  openId,
  onToggle,
}: {
  items: Faq[];
  openId: string | null;
  onToggle: (id: string) => void;
}) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((faq) => {
        const open = openId === faq.id;
        return (
          <li key={faq.id}>
            <button
              type="button"
              onClick={() => onToggle(faq.id)}
              aria-expanded={open}
              aria-controls={`${faq.id}-panel`}
              className="flex w-full cursor-pointer items-center justify-between gap-6 rounded-[9px] bg-linear-to-r from-[#f2f6f7] via-white to-[#f2f6f7] px-5 py-3 text-left transition-shadow hover:shadow-sm sm:px-7"
            >
              <span className="text-quantum-green text-[19px] font-normal leading-7 sm:text-[21px] sm:leading-7.5">
                {renderBrandText(faq.question)}
              </span>
              <span
                aria-hidden
                className={`flex shrink-0 items-center gap-0.75 transition-transform ${
                  open ? "rotate-90" : ""
                }`}
              >
                <span className="block size-1.25 rounded-full bg-quantum-green" />
                <span className="block size-1.25 rounded-full bg-quantum-green" />
                <span className="block size-1.25 rounded-full bg-quantum-green" />
              </span>
            </button>

            {open && (
              <div
                id={`${faq.id}-panel`}
                className="mt-2 rounded-[9px] bg-white px-5 py-5 text-[15px] leading-6 text-steel-gray shadow-sm sm:px-7"
              >
                <PortableAnswer blocks={faq.answer} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function FaqIronCapInTouchPage() {
  const [selectedCategory, setSelectedCategory] = useState(faqGroups[0].category);
  const [openId, setOpenId] = useState<string | null>(null);
  const selectedGroup =
    faqGroups.find((group) => group.category === selectedCategory) ?? faqGroups[0];

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setOpenId(null);
  };

  const handleToggle = (id: string) => {
    setOpenId((previous) => (previous === id ? null : id));
  };

  return (
    <div className="bg-white font-urbanist">
      <Title />

      <div className="grid grid-cols-1 lg:grid-cols-[405px_1fr]">
        <aside className="bg-black px-6 py-12 text-white sm:px-12 lg:min-h-197.5 lg:py-16">
          <h2 className="text-[20px] font-medium leading-8.5 text-white">
            Categories
          </h2>

          <ul className="mt-6 space-y-1.5">
            {faqGroups.map((group) => {
              const active = selectedGroup.category === group.category;
              return (
                <li key={group.category} className="flex items-center gap-3">
                  <GreenDots />
                  <button
                    type="button"
                    onClick={() => handleSelectCategory(group.category)}
                    aria-current={active ? "true" : undefined}
                    className={`cursor-pointer text-left text-[15px] font-medium uppercase leading-8.5 text-quantum-green transition-colors hover:text-white hover:underline ${
                      active ? "underline decoration-quantum-green decoration-2 underline-offset-6" : ""
                    }`}
                  >
                    {renderBrandText(group.category)}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-16">
            <p className="text-quantum-green text-[20px] font-medium leading-8.5">
              Still have questions?
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-3 rounded-full border border-quantum-green px-5 py-2 text-[12px] font-medium uppercase text-quantum-green transition-colors hover:bg-quantum-green hover:text-black"
            >
              <span>Contact Us</span>
              <GreenDots />
            </Link>
          </div>
        </aside>

        <section className="px-6 py-16 lg:px-13">
          <h2
            id={slugify(selectedGroup.category)}
            className="text-quantum-blue text-[30px] font-medium leading-11.5"
          >
            {renderBrandText(selectedGroup.category)}
          </h2>
          <div className="mt-2 h-px w-full max-w-156.75 bg-lite-gray/40" />

          <div className="mt-8">
            <FaqList
              items={selectedGroup.faqs}
              openId={openId}
              onToggle={handleToggle}
            />
          </div>

          <section className="flex justify-center bg-white py-16">
            <Bottom />
          </section>
        </section>
      </div>
    </div>
  );
}
