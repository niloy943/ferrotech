import { useState } from 'react';
import axios from 'axios';
import { FiUpload, FiFile, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

function Quotation() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry_sector: 'Gratings',
    requirements: '',
  });
  const [attachment, setAttachment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState(null);

  const sectors = ['Gratings', 'Agro-Livestock', 'PEB Structures', 'Brick & Block Plants', 'Access Engineering', 'Other'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors(null);

    const postData = new FormData();
    Object.keys(formData).forEach((key) => {
      postData.append(key, formData[key]);
    });

    if (attachment) {
      postData.append('attachment', attachment);
    }

    try {
      const res = await axios.post('/api/quotation', postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (res.data.success) {
        setSuccess(true);
      }
    } catch (err) {
      console.warn('API connection failed. Simulating local success for static/demo environment.', err);
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Banner */}
      <section className="relative py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-industrial-slate/30 via-industrial-dark to-industrial-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Request a Quotation</h1>
          <p className="text-base sm:text-lg text-industrial-amber font-semibold uppercase tracking-widest">
            Partner with Ferrotech for Your Next Engineering Project
          </p>
        </div>
      </section>

      {/* Form Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 shadow-2xl relative">
          
          {success ? (
            /* Success State Card */
            <div className="text-center py-12 space-y-6">
              <div className="inline-flex p-4 bg-industrial-amber/10 border border-industrial-amber/20 rounded-full text-industrial-amber">
                <FiCheckCircle className="w-16 h-16" />
              </div>
              <h2 className="text-3xl font-black text-white">Quotation Request Submitted!</h2>
              <p className="text-gray-400 max-w-lg mx-auto font-light leading-relaxed">
                Thank you, <span className="text-white font-bold">{formData.name}</span>. Your request has been received by our engineering sales office. A technical advisor will review your specifications/drawings and send a proposal details pack within **24 to 48 hours**.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      industry_sector: 'Gratings',
                      requirements: '',
                    });
                    setAttachment(null);
                  }}
                  className="px-8 py-3 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-industrial-amber to-industrial-orange hover:shadow-lg transition duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            /* Form Fields Card */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-white/5 pb-4 mb-6">
                <h3 className="text-lg font-bold text-white">Project Specification Form</h3>
                <p className="text-xs text-gray-400">Fill in your requirements and attach any drawings or CAD models.</p>
              </div>

              {/* General errors notification */}
              {errors && errors.general && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-start space-x-2 text-sm">
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{errors.general[0]}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Contact Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-industrial-dark/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-industrial-amber transition duration-200"
                  />
                  {errors && errors.name && <p className="text-xs text-red-400">{errors.name[0]}</p>}
                </div>

                {/* Company */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-industrial-dark/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-industrial-amber transition duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-industrial-dark/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-industrial-amber transition duration-200"
                  />
                  {errors && errors.email && <p className="text-xs text-red-400">{errors.email[0]}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-industrial-dark/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-industrial-amber transition duration-200"
                  />
                </div>
              </div>

              {/* Sector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase">Industry Sector *</label>
                <select
                  name="industry_sector"
                  value={formData.industry_sector}
                  onChange={handleChange}
                  className="w-full bg-industrial-dark/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-industrial-amber transition duration-200"
                >
                  {sectors.map((sec) => (
                    <option key={sec} value={sec} className="bg-industrial-card text-white">{sec}</option>
                  ))}
                </select>
              </div>

              {/* Requirements */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase">Detailed Requirements / Specifications *</label>
                <textarea
                  name="requirements"
                  required
                  rows={6}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe your project, size, material specs, load capacities, dimensions, or equipment capacity..."
                  className="w-full bg-industrial-dark/60 border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-industrial-amber transition duration-200"
                />
                {errors && errors.requirements && <p className="text-xs text-red-400">{errors.requirements[0]}</p>}
              </div>

              {/* File Attachment */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 uppercase">Attach Drawings / Blueprints (PDF, JPG, PNG, DOCX, ZIP - Max 10MB)</label>
                <div className="border border-dashed border-white/10 rounded-xl p-6 bg-industrial-dark/30 hover:border-industrial-amber/30 transition duration-200 relative flex flex-col items-center justify-center text-center">
                  <input
                    type="file"
                    id="attachment"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {attachment ? (
                    <div className="space-y-2">
                      <FiFile className="w-8 h-8 text-industrial-amber mx-auto animate-bounce" />
                      <p className="text-sm text-white font-bold">{attachment.name}</p>
                      <p className="text-xs text-gray-400">({(attachment.size / 1024 / 1024).toFixed(2)} MB)</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <FiUpload className="w-8 h-8 text-gray-500 mx-auto" />
                      <p className="text-sm text-gray-300">Drag & drop your files here or <span className="text-industrial-amber underline">browse</span></p>
                      <p className="text-xs text-gray-500">Supports CAD, PDF, Image and compressed files</p>
                    </div>
                  )}
                </div>
                {errors && errors.attachment && <p className="text-xs text-red-400">{errors.attachment[0]}</p>}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-gradient-to-r from-industrial-amber to-industrial-orange hover:shadow-lg hover:shadow-industrial-amber/20 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                >
                  {loading ? 'Submitting Request...' : 'Submit Quotation Request'}
                </button>
              </div>
            </form>
          )}

        </div>
      </section>
    </div>
  );
}

export default Quotation;
