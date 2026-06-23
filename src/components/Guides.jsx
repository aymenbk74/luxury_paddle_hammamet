import './Guides.css';
import minouImg from '../assets/minou.png';
import justinImg from '../assets/justin.png';

export default function Guides() {
  const guides = [
    {
      id: 1,
      name: 'Amine Lakhdhar',
      title: 'Senior Guide',
      experience: '12 years',
      specialty: 'Advanced Tours',
      avatar: minouImg,
      bio: 'i take pride in my work and strive to provide the best experience for all my clients.',
      languages: ['Arabic', 'French', 'English'],
      phone: '21626063374' // 1. Added international phone number (Example: Tunisia code 216)
    },
    {
      id: 2,
      name: 'Abdelkader Attia',
      title: 'Lead Guide',
      experience: '8 years',
      specialty: 'Family Tours',
      avatar: justinImg,
      bio: 'No one knows the beaches of Hammamet better than Abdelkader.',
      languages: ['Arabic', 'French', 'English'],
      phone: '21628223239' // 1. Added international phone number
    }
  ];

  return (
    <section id="guides" className="guides">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Expert Guides</h2>
          <p className="section-subtitle">Meet the passionate professionals who will make your adventure unforgettable</p>
        </div>

        <div className="guides-grid">
          {guides.map((guide) => {
            // 2. Create the pre-filled custom message
            const message = `Hello ${guide.name}, I would like to book a tour with you!`;
            const whatsappUrl = `https://wa.me/${guide.phone}?text=${encodeURIComponent(message)}`;

            return (
              <div key={guide.id} className="guide-card">
                <img src={guide.avatar} alt={guide.name} className="guide-avatar" />
                <h3 className="guide-name">{guide.name}</h3>
                <p className="guide-title">{guide.title}</p>
                <div className="guide-badge">{guide.experience} experience</div>
                <p className="guide-specialty">Specialty: {guide.specialty}</p>
                <p className="guide-bio">{guide.bio}</p>
                <div className="guide-languages">
                  <span className="languages-label">Languages:</span>
                  <div className="language-tags">
                    {guide.languages.map((lang, idx) => (
                      <span key={idx} className="language-tag">{lang}</span>
                    ))}
                  </div>
                </div>
                
                {/* 3. Changed button to an anchor tag styled with your button class */}
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="guide-btn"
                  style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
                >
                  Book with {guide.name.split(' ')[0]}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}