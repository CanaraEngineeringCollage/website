export default function MissionVision() {
    return (
      <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-white to-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow p-8 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
  
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <img src="/icons/book.svg" alt="Book Icon" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Ethical & Industry-Ready Learning</h3>
                  <p className="text-gray-600">
                    Provide the right environment to develop quality education for all, irrespective of caste, creed or religion to produce future leaders.
                  </p>
                </div>
              </div>
  
              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <img src="/icons/idea.svg" alt="Idea Icon" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Innovation Excellence</h3>
                  <p className="text-gray-600">
                    Create opportunities for pursuit of knowledge and all round development.
                  </p>
                </div>
              </div>
  
              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <img src="/icons/values.svg" alt="Values Icon" className="w-8 h-8 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Instilling Core Values</h3>
                  <p className="text-gray-600">
                    Impart value education to students to build sense of integrity, honesty and ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center justify-center text-center space-y-6">
            <img src="/icons/eye.svg" alt="Vision Eye Icon" className="w-36 h-36" />
            <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            <p className="text-gray-600 max-w-sm">
              To be an Engineering Institute of highest repute and produce world-class engineers catering to the needs of mankind.
            </p>
          </div>
        </div>
      </section>
    );
  }
  