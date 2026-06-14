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
      languages: ['Arabic', 'French', 'English']
    },
    {
      id: 2,
      name: 'Abdelkader Attia',
      title: 'Lead Guide',
      experience: '8 years',
      specialty: 'Family Tours',
      avatar: justinImg,
      bio: 'No one knows the beaches of Hammamet better than Abdelkader.',
      languages: ['Arabic', 'French', 'English', 'Portuguese']
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
          {guides.map((guide) => (
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
              <button className="guide-btn">Book with {guide.name.split(' ')[0]}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
