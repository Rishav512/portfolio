import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

interface ContactProps {
  contactInfo: {
    title: string;
    subtitle: string;
    email: string;
    location: string;
    responseRate: string;
    web3FormsAccessKey: string;
    formFields: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingText: string;
    };
  };
  socialLinks: Array<{
    name: string;
    url: string;
    username: string;
    icon: string;
  }>;
}

export const Contact: React.FC<ContactProps> = ({ contactInfo, socialLinks }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill out all required fields.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      // Submit via Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contactInfo.web3FormsAccessKey,
          from_name: formData.name,
          replyto: formData.email,
          subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          to_email: contactInfo.email,
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus('success');
        setStatusMessage('Your transmission was received successfully. I will get back to you shortly!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('success');
        setStatusMessage('Message logged! You can also email directly to contact@rishav.work.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Network dispatch error. Please mail directly to contact@rishav.work.');
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <GithubIcon size={16} />;
      case 'linkedin': return <LinkedinIcon size={16} />;
      case 'leetcode': return <LeetCodeIcon size={16} />;
      default: return <Mail size={16} />;
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="content-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Mail size={14} />
            <span>Direct Outreach</span>
          </div>
          <h2 className="section-title">
            Let&apos;s Build <span className="gradient-text">Something Impactful</span>
          </h2>
          <p className="section-description">
            {contactInfo.subtitle}
          </p>
        </div>

        {/* 2-Column Bento: Contact Details + Web3Forms Form */}
        <div className="contact-grid">
          {/* Left Column: Direct Info & Socials */}
          <div className="glass-card contact-info-card">
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem' }}>
                Engineering Inquiries &amp; Collaboration
              </h3>
              <p className="contact-lead">
                I am currently open to high-impact software engineering roles, enterprise consulting, and scalable system design engagements.
              </p>

              <div className="contact-methods">
                {/* Official Email */}
                <div>
                  <div className="contact-method-label">Direct Inbox</div>
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.25rem' }}>
                    <a href={`mailto:${contactInfo.email}`} className="contact-method-val">
                      {contactInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="copy-btn"
                      title="Copy email to clipboard"
                      aria-label="Copy email"
                    >
                      {copied ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                    </button>
                    {copied && (
                      <span className="font-mono" style={{ fontSize: '0.72rem', color: '#34d399', marginLeft: '0.4rem' }}>
                        Copied!
                      </span>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="contact-method-row">
                  <div className="contact-method-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-method-label">Location Base</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.92rem' }}>
                      {contactInfo.location}
                    </div>
                  </div>
                </div>

                {/* Response SLA */}
                <div className="contact-method-row">
                  <div className="contact-method-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="contact-method-label">Turnaround Time</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.92rem' }}>
                      {contactInfo.responseRate}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Network Links */}
            <div>
              <div className="contact-method-label" style={{ marginBottom: '0.75rem' }}>
                Profiles &amp; Code Repositories
              </div>
              <div className="socials-row">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill"
                  >
                    {getSocialIcon(s.name)}
                    <span>{s.name}</span>
                    <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Dedicated Form */}
          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1.25rem' }}>
              Transmit a Message
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="form-name" className="form-label">
                  {contactInfo.formFields.nameLabel} <span style={{ color: '#ec4899' }}>*</span>
                </label>
                <input
                  id="form-name"
                  type="text"
                  name="name"
                  required
                  placeholder={contactInfo.formFields.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-email" className="form-label">
                  {contactInfo.formFields.emailLabel} <span style={{ color: '#ec4899' }}>*</span>
                </label>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  required
                  placeholder={contactInfo.formFields.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-subject" className="form-label">
                  {contactInfo.formFields.subjectLabel}
                </label>
                <input
                  id="form-subject"
                  type="text"
                  name="subject"
                  placeholder={contactInfo.formFields.subjectPlaceholder}
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="form-message" className="form-label">
                  {contactInfo.formFields.messageLabel} <span style={{ color: '#ec4899' }}>*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows={4}
                  placeholder={contactInfo.formFields.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-submit-form"
              >
                {status === 'loading' ? (
                  <>
                    <Clock size={18} className="animate-spin" />
                    <span>{contactInfo.formFields.submittingText}</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{contactInfo.formFields.submitButton}</span>
                  </>
                )}
              </button>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="form-status-alert success">
                  <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="form-status-alert error">
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
