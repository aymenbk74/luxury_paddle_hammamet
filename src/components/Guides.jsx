import './Guides.css';

export default function Guides() {
  const guides = [
    {
      id: 1,
      name: 'Ahmed Ben Ali',
      title: 'Senior Guide',
      experience: '12 years',
      specialty: 'Advanced Tours',
      avatar: '👨‍🦱',
      bio: 'Expert paddler and certified instructor with extensive knowledge of Hammamet\'s waters.',
      languages: ['Arabic', 'French', 'English']
    },
    {
      id: 2,
      name: 'Fatima Zahra',
      title: 'Lead Guide',
      experience: '8 years',
      specialty: 'Family Tours',
      avatar: '👩‍🦰',
      bio: 'Passionate about introducing families to the joy of paddleboarding safely.',
      languages: ['Arabic', 'French', 'English', 'Italian']
    },
    {
      id: 3,
      name: 'Karim Hassan',
      title: 'Guide',
      experience: '5 years',
      specialty: 'Sunset Tours',
      avatar: '👨‍🦲',
      bio: 'Creates magical experiences with stunning photography and storytelling.',
      languages: ['Arabic', 'French', 'English']
    },
    {
      id: 4,
      name: 'Leila Mohamed',
      title: 'Guide',
      experience: '6 years',
      specialty: 'Snorkeling Tours',
      avatar: '👩‍🦱',
      bio: 'Marine biologist and certified snorkeling instructor. Shares amazing marine life facts.',
      languages: ['Arabic', 'French', 'English', 'German']
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
              <div className="guide-avatar">{guide.avatar}</div>
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
