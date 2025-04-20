
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-automind-purple" />,
      title: "Address",
      detail: "Akure, Ondo State, Nigeria",
      link: "#"
    },
    {
      icon: <Phone className="h-6 w-6 text-automind-purple" />,
      title: "Phone",
      detail: "+234 816 121 9685",
      link: "tel:+2348161219685"
    },
    {
      icon: <Mail className="h-6 w-6 text-automind-purple" />,
      title: "Email",
      detail: "info@automind.com",
      link: "mailto:info@automind.com"
    },
    {
      icon: <Instagram className="h-6 w-6 text-automind-purple" />,
      title: "Instagram",
      detail: "@officialautomind",
      link: "https://instagram.com/officialautomind"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-automind-dark dark:to-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have a question or want to work with us? Reach out using the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-automind-dark/50 p-6 md:p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-medium">{info.title}</h3>
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-automind-purple transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.detail}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Business Hours */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-lg bg-gradient-to-r from-automind-purple/10 to-automind-blue/10">
                <p className="text-center font-medium">
                  After submitting your inquiry, expect to receive a response within 4 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
