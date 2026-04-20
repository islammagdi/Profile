import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Linkedin, ExternalLink, Dribbble, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
// import emailjs from '@emailjs/browser'; // Uncomment when using EmailJS

// Custom Behance Icon Component (Optimized SVG)
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.037.34 1.688 0 .71-.13 1.31-.4 1.78-.27.48-.68.84-1.23 1.12.68.28 1.17.71 1.49 1.26.32.56.48 1.25.48 2.063 0 .71-.14 1.32-.42 1.84-.28.52-.67.94-1.17 1.28-.5.34-1.09.58-1.77.73-.68.15-1.42.23-2.21.23H0V4.51h6.938v-.007zM3.495 8.997h2.42c.62 0 1.11-.08 1.46-.25.35-.17.53-.49.53-.95 0-.3-.07-.54-.19-.73-.13-.19-.31-.34-.53-.44-.22-.1-.48-.16-.78-.19-.3-.03-.62-.04-.95-.04H3.495v2.55zm0 4.997h2.84c.38 0 .73-.04 1.06-.1.33-.07.62-.18.85-.33.23-.15.42-.36.55-.63.13-.27.2-.6.2-.98 0-.53-.17-.93-.53-1.21-.36-.28-.86-.42-1.5-.42H3.495v3.67zM22.168 8.818v1.428h-4.554c.07.51.27.9.6 1.17.33.27.75.4 1.27.4.35 0 .68-.06.98-.16.3-.1.55-.26.75-.47l1.264 1.204c-.47.58-1.06 1.02-1.77 1.29-.7.27-1.48.41-2.33.41-1.06 0-2.01-.17-2.86-.5-.85-.33-1.57-.79-2.17-1.38-.6-.59-1.06-1.29-1.38-2.1-.32-.81-.48-1.69-.48-2.64 0-.91.15-1.75.45-2.52.3-.77.72-1.43 1.27-1.99.55-.56 1.2-.99 1.96-1.3.76-.31 1.59-.46 2.48-.46.87 0 1.66.14 2.36.42.7.28 1.29.68 1.78 1.2.49.52.87 1.15 1.14 1.89.27.74.41 1.56.41 2.46l-.07.68zm-4.214-2.006c-.58 0-1.05.15-1.42.45-.37.3-.6.73-.7 1.29h4.24c-.1-.56-.33-.99-.7-1.29-.37-.3-.84-.45-1.42-.45z"/>
    <path d="M15.4 2.5h4.8v1.2h-4.8z"/>
  </svg>
);

export function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setSubmitStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email message with the specified format
      const emailSubject = formData.subject || 'New Contact Form Submission from Portfolio';
      const emailBody = 
        `Here is new message to you from ${formData.firstName} ${formData.lastName}\n` +
        `Message Subject ${formData.subject || 'No Subject'}\n` +
        `${formData.firstName} ${formData.lastName} message is:\n` +
        `${formData.message}\n` +
        `Thanks\n` +
        `${formData.firstName} ${formData.lastName}\n` +
        `${formData.email}`;
      
      // Encode the subject and body for URL
      const encodedSubject = encodeURIComponent(emailSubject);
      const encodedBody = encodeURIComponent(emailBody);
      
      // Create mailto URL
      const mailtoUrl = `mailto:imagdi.swe@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Open user's default email client
      window.location.href = mailtoUrl;
      
      // Simulate success after a short delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setStatusMessage('Your email client has been opened with the message. Please send the email to complete your submission.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });

        // Clear status message after 7 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 7000);
      }, 1000);

    } catch (error) {
      console.error('Email Error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setStatusMessage('Unable to open email client. Please contact me directly at imagdi.swe@gmail.com');
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }

    /* 
    // EMAILJS VERSION (Uncomment and configure when ready)
    // 
    // 1. Sign up at https://www.emailjs.com
    // 2. Create an email service (Gmail)
    // 3. Create an email template
    // 4. Get your credentials and replace the values below
    // 5. Remove the mailto code above and uncomment this section
    
    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Submission',
        message: formData.message,
        to_email: 'imagdi.swe@gmail.com',
      };

      const result = await emailjs.send(
        'YOUR_SERVICE_ID',    // e.g., 'service_abc123'
        'YOUR_TEMPLATE_ID',   // e.g., 'template_xyz789'
        templateParams,
        'YOUR_PUBLIC_KEY'     // e.g., 'user_def456'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.');
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact me directly at imagdi.swe@gmail.com');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
    */
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "imagdi.swe@gmail.com",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+201140187813",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Cairo, Egypt",
      gradient: "from-green-400 to-blue-400"
    }
  ];

  const socialLinks = [
    { 
      icon: <Dribbble className="w-6 h-6" />, 
      label: "Dribbble", 
      href: "https://dribbble.com/imagdi",
      color: "hover:text-pink-400"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/iamislammagdi",
      color: "hover:text-blue-400"
    },
    { 
      icon: <BehanceIcon className="w-6 h-6" />, 
      label: "Behance", 
      href: "https://www.behance.net/islammagdi",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" data-section="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to bring your next project to life? I'd love to hear about your vision and discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${info.gradient}`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 ${social.color || ""}`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-3xl text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-2">First Name *</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-2">Last Name *</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                    required
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/70 mb-2">Email *</label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-white/70 mb-2">Subject</label>
                <Input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-white/70 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  style={{ 
                    width: '100%',
                    maxWidth: '100%',
                    minWidth: '100%',
                    boxSizing: 'border-box',
                    wordWrap: 'break-word',
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    overflowY: 'auto',
                    resize: 'none',
                    fieldSizing: 'fixed'
                  }}
                  className="bg-white/5 border border-white/20 text-white placeholder:text-white/40 focus:border-purple-400 transition-colors min-h-[150px] max-h-[400px] rounded-md px-3 py-2 text-base outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                />
              </div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{statusMessage}</p>
                </motion.div>
              )}
              
              <motion.div whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 h-12 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-16 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/50">
            © 2025 Islam Magdi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}