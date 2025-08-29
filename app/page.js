'use client';

import { useState } from 'react';

export default function DataRefineryLab() {
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const navigation = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'mission', label: 'Mission' },
        { id: 'team', label: 'Team' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            {/* Navigation */}
            <nav className={`nav ${isDarkMode ? 'dark' : ''}`}>
                <div className="nav-container">
                    <button
                        onClick={() => setActiveSection('home')}
                        className="nav-logo"
                    >
                        DATA REFINERY LAB
                    </button>

                    {/* Desktop Navigation */}
                    <div className="nav-menu">
                        {navigation.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="nav-mobile">
                    <div className="nav-mobile-menu">
                        {navigation.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`nav-mobile-item ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle-mobile"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main">
                <div className="container">
                    {activeSection === 'home' && (
                        <div className="space-y-16">
                            {/* Hero Section */}
                            <section className="text-center space-y-8">
                                <div className="space-y-6">
                                    <h1 className="heading-hero">Data Refinery Lab</h1>
                                    <div className="divider"></div>
                                    <p className="text-large" style={{maxWidth: '48rem', margin: '0 auto'}}>
                                        A cross-departmental hub for design, research, and innovation at TU Delft&apos;s Faculty of Architecture and the Built Environment
                                    </p>
                                </div>
                                <div className="flex-center" style={{paddingTop: '1.5rem'}}>
                                    <button
                                        onClick={() => setActiveSection('about')}
                                        className="btn btn-primary"
                                    >
                                        EXPLORE →
                                    </button>
                                    <button
                                        onClick={() => setActiveSection('contact')}
                                        className="btn btn-secondary"
                                    >
                                        CONNECT
                                    </button>
                                </div>
                            </section>

                            {/* Abstract Grid Pattern */}
                            <section style={{padding: '4rem 0'}}>
                                <div className="grid-pattern">
                                    {[...Array(32)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="grid-cell"
                                            style={{
                                                backgroundColor: [5, 7, 13, 18, 21, 26].includes(i)
                                                    ? (isDarkMode ? '#e2e8f0' : '#111827')
                                                    : i % 3 === 0
                                                        ? (isDarkMode ? '#475569' : '#d1d5db')
                                                        : (isDarkMode ? '#334155' : '#f3f4f6')
                                            }}
                                        />
                                    ))}
                                </div>
                            </section>

                            {/* Key Focus Areas */}
                            <section className="grid-3">
                                <div className="space-y-4">
                                    <div className="icon-box">
                                        <div style={{
                                            width: '1.5rem',
                                            height: '1.5rem',
                                            border: `1px solid ${isDarkMode ? '#e2e8f0' : '#111827'}`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <div style={{
                                                width: '0.75rem',
                                                height: '0.75rem',
                                                backgroundColor: isDarkMode ? '#e2e8f0' : '#111827'
                                            }}></div>
                                        </div>
                                    </div>
                                    <h3 className="heading-3">Data as Design Material</h3>
                                    <p className="text-body">We see data not just as a resource but as a design material that must be carefully selected, filtered, and shaped for architecture.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="icon-box">
                                        <div style={{width: '1.5rem', height: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px'}}>
                                            <div style={{backgroundColor: isDarkMode ? '#e2e8f0' : '#111827'}}></div>
                                            <div style={{backgroundColor: isDarkMode ? '#475569' : '#d1d5db'}}></div>
                                            <div style={{backgroundColor: isDarkMode ? '#475569' : '#d1d5db'}}></div>
                                            <div style={{backgroundColor: isDarkMode ? '#e2e8f0' : '#111827'}}></div>
                                        </div>
                                    </div>
                                    <h3 className="heading-3">Collaborative Platform</h3>
                                    <p className="text-body">All BK researchers, educators, and students are invited to participate in data structuring, processing, and ethical considerations.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="icon-box">
                                        <div style={{width: '1.5rem', height: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2px'}}>
                                            <div style={{height: '4px', backgroundColor: isDarkMode ? '#e2e8f0' : '#111827'}}></div>
                                            <div style={{height: '4px', backgroundColor: isDarkMode ? '#475569' : '#d1d5db'}}></div>
                                            <div style={{height: '4px', backgroundColor: isDarkMode ? '#e2e8f0' : '#111827'}}></div>
                                        </div>
                                    </div>
                                    <h3 className="heading-3">Data Refinement</h3>
                                    <p className="text-body">Turning vast, messy datasets into clean, meaningful material for design—treating data refinement as a contemporary craft.</p>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeSection === 'about' && (
                        <div className="space-y-12">
                            <div className="text-center space-y-8">
                                <h1 className="heading-1">About the Lab</h1>
                                <div className="divider"></div>
                                <p className="text-large" style={{maxWidth: '64rem', margin: '0 auto'}}>
                                    The Data Refinery Lab is dedicated to rethinking the role of data in architecture, planning, and heritage. We offer a platform where data, design, and responsibility converge.
                                </p>
                            </div>

                            <div className="grid-2" style={{alignItems: 'start'}}>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h2 className="heading-2">Our Vision</h2>
                                        <div className="divider-small"></div>
                                        <p className="text-body">
                                            In an age where artificial intelligence and data are inseparable, we see data not just as a resource
                                            but as a design material that must be carefully selected, filtered, and shaped. From building codes
                                            to climate models, from user behaviour to historical archives—the built environment is increasingly
                                            governed by data.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="heading-2">Data Refinement</h2>
                                        <div className="divider-small"></div>
                                        <p className="text-body">
                                            But more data doesn&apos;t mean better outcomes. That&apos;s why our lab focuses on refinement: turning vast,
                                            messy datasets into clean, meaningful material for design. Inspired by historical practices of
                                            architectural knowledge-making, we treat data refinement as a contemporary craft.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="heading-2">Research Process</h2>
                                        <div className="divider-small"></div>
                                        <p className="text-body">
                                            The data refining process consists of four key steps: First, data is acquired and securely stored in compliance
                                            with legal standards. Next, it is cleaned and structured for analysis. Then, advanced tools are used to extract
                                            insights. Finally, refined data is shared with researchers across the faculty, fostering collaboration and innovation.
                                        </p>
                                    </div>
                                </div>

                                <div className="card space-y-6">
                                    <div className="mini-grid mini-grid-2" style={{marginBottom: '1.5rem'}}>
                                        {[...Array(12)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="mini-cell"
                                                style={{
                                                    backgroundColor: [0, 3, 5, 8, 10].includes(i)
                                                        ? (isDarkMode ? '#e2e8f0' : '#111827')
                                                        : (isDarkMode ? '#475569' : '#d1d5db')
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <h3 className="heading-3" style={{fontSize: '0.875rem', letterSpacing: '0.1em'}}>Lab Specifications</h3>
                                    <div className="space-y-3">
                                        <div className="spec-row">
                                            <span className="spec-label">Location</span>
                                            <span className="spec-value">01.Oost.410</span>
                                        </div>
                                        <div className="spec-row">
                                            <span className="spec-label">Schedule</span>
                                            <span className="spec-value">Mon-Fri 9:00-17:00</span>
                                        </div>
                                        <div className="spec-row">
                                            <span className="spec-label">Access</span>
                                            <span className="spec-value">BK Community</span>
                                        </div>
                                        <div className="spec-row" style={{borderBottom: 'none', marginBottom: '0'}}>
                                            <span className="spec-label">Equipment</span>
                                            <span className="spec-value">Interactive Displays</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'mission' && (
                        <div className="space-y-12">
                            <div className="text-center space-y-8">
                                <h1 className="heading-1">Our Mission</h1>
                                <div className="divider"></div>
                                <p className="text-large" style={{maxWidth: '48rem', margin: '0 auto'}}>
                                    Our mission is threefold, focusing on education, collaboration, and responsible data practices
                                </p>
                            </div>

                            <div className="grid-3">
                                <div className="space-y-6">
                                    <div className="flex items-center" style={{gap: '1rem'}}>
                                        <div className="numbered-box">01</div>
                                        <div className="divider-line"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="heading-3">Data Literacy</h3>
                                        <p className="text-body">
                                            To equip a new generation of architects, planners, and researchers with the data literacy needed to navigate tomorrow&apos;s data economy and tackle today&apos;s environmental and societal urgencies.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center" style={{gap: '1rem'}}>
                                        <div className="numbered-box">02</div>
                                        <div className="divider-line"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="heading-3">Open Collaboration</h3>
                                        <p className="text-body">
                                            To foster open, collaborative research that connects education with industry and practice—minimising the digital footprint of the built environment while maximising its social and ecological value.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center" style={{gap: '1rem'}}>
                                        <div className="numbered-box">03</div>
                                        <div className="divider-line"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="heading-3">Data Ethics</h3>
                                        <p className="text-body">
                                            To promote data ethics and critical awareness—ensuring that architectural data is used responsibly, transparently, and with care for privacy, inclusion, and long-term impact.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card space-y-6" style={{marginTop: '4rem'}}>
                                <div className="mini-grid mini-grid-6" style={{marginBottom: '1.5rem'}}>
                                    {[...Array(18)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="mini-cell-small"
                                            style={{
                                                backgroundColor: [2, 4, 7, 11, 15].includes(i)
                                                    ? (isDarkMode ? '#e2e8f0' : '#111827')
                                                    : (isDarkMode ? '#475569' : '#d1d5db')
                                            }}
                                        />
                                    ))}
                                </div>
                                <h3 className="heading-3" style={{fontSize: '0.875rem', letterSpacing: '0.1em'}}>Development Status</h3>
                                <div className="space-y-2">
                                    <div className="spec-row">
                                        <span className="spec-label">Phase</span>
                                        <span className="spec-value">Onboarding</span>
                                    </div>
                                    <div className="spec-row" style={{borderBottom: 'none', marginBottom: '0'}}>
                                        <span className="spec-label">Research Projects</span>
                                        <span className="spec-value">Development Mode</span>
                                    </div>
                                </div>
                                <p className="text-body">
                                    Please note that Data Refinery Lab is currently in the onboarding phase. At this time,
                                    we are not yet able to support long-term research projects. Please stay tuned for more
                                    information regarding research proposals. Thank you for your understanding and interest!
                                </p>
                            </div>
                        </div>
                    )}

                    {activeSection === 'team' && (
                        <div className="space-y-12">
                            <div className="text-center space-y-8">
                                <h1 className="heading-1">Team</h1>
                                <div className="divider"></div>
                                <p className="text-large" style={{maxWidth: '48rem', margin: '0 auto'}}>
                                    A collaborative community of researchers, educators, and students
                                </p>
                            </div>

                            <div className="grid-3" style={{marginBottom: '4rem'}}>
                                {/* Team Member 1 */}
                                <div className="card space-y-6">
                                    <div className="mini-grid mini-grid-3" style={{marginBottom: '1.5rem'}}>
                                        {[...Array(9)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="mini-cell"
                                                style={{
                                                    backgroundColor: [1, 3, 5, 7].includes(i)
                                                        ? (isDarkMode ? '#e2e8f0' : '#111827')
                                                        : (isDarkMode ? '#475569' : '#d1d5db')
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="heading-3">Team Member</h3>
                                            <div className="divider-small" style={{width: '2rem'}}></div>
                                        </div>
                                        <p className="text-small" style={{textTransform: 'uppercase', letterSpacing: '0.05em'}}>T1</p>
                                    </div>
                                </div>

                                {/* Team Member 2 */}
                                <div className="card space-y-6">
                                    <div className="mini-grid mini-grid-3" style={{marginBottom: '1.5rem'}}>
                                        {[...Array(9)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="mini-cell"
                                                style={{
                                                    backgroundColor: [0, 2, 4, 6, 8].includes(i)
                                                        ? (isDarkMode ? '#e2e8f0' : '#111827')
                                                        : (isDarkMode ? '#475569' : '#d1d5db')
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="heading-3">Team Member</h3>
                                            <div className="divider-small" style={{width: '2rem'}}></div>
                                        </div>
                                        <p className="text-small" style={{textTransform: 'uppercase', letterSpacing: '0.05em'}}>T2</p>
                                    </div>
                                </div>

                                {/* Team Member 3 */}
                                <div className="card space-y-6">
                                    <div className="mini-grid mini-grid-3" style={{marginBottom: '1.5rem'}}>
                                        {[...Array(9)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="mini-cell"
                                                style={{
                                                    backgroundColor: [1, 2, 5, 6].includes(i)
                                                        ? (isDarkMode ? '#e2e8f0' : '#111827')
                                                        : (isDarkMode ? '#475569' : '#d1d5db')
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <h3 className="heading-3">Team Member</h3>
                                            <div className="divider-small" style={{width: '2rem'}}></div>
                                        </div>
                                        <p className="text-small" style={{textTransform: 'uppercase', letterSpacing: '0.05em'}}>T3</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card text-center space-y-8" style={{padding: '3rem 2rem'}}>
                                <div className="mini-grid mini-grid-4" style={{maxWidth: '16rem', margin: '0 auto 2rem'}}>
                                    {[...Array(16)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="mini-cell-large"
                                            style={{
                                                backgroundColor: [1, 4, 6, 9, 11, 14].includes(i)
                                                    ? (isDarkMode ? '#e2e8f0' : '#111827')
                                                    : (isDarkMode ? '#475569' : '#d1d5db')
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="space-y-6">
                                    <h3 className="heading-2" style={{textAlign: 'center'}}>Join Our Community</h3>
                                    <div style={{maxWidth: '32rem', margin: '0 auto', space: '1rem'}}>
                                        <p className="text-body">
                                            All BK researchers, educators, and students of any academic level are invited to participate.
                                            Topics might include practical concerns, such as data structuring, annotation, and processing;
                                            but foundational issues like data sharing, ownership, and ethics are also welcome. On top of that,
                                            the lab offers support or advice when organizing seminars, workshops, and debates centred on data.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setActiveSection('contact')}
                                        className="btn btn-primary"
                                    >
                                        GET INVOLVED
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeSection === 'contact' && (
                        <div className="space-y-12">
                            <div className="text-center space-y-8">
                                <h1 className="heading-1">Contact</h1>
                                <div className="divider"></div>
                                <p className="text-large" style={{maxWidth: '48rem', margin: '0 auto'}}>
                                    Get in touch for educational activities, workshops, or general inquiries
                                </p>
                            </div>

                            {/* Single Column Layout */}
                            <div className="space-y-12" style={{maxWidth: '48rem', margin: '0 auto'}}>
                                <div className="space-y-6">
                                    <div className="flex items-center" style={{gap: '1rem'}}>
                                        <div className="numbered-box">01</div>
                                        <h3 className="heading-3" style={{fontSize: '0.875rem', letterSpacing: '0.1em'}}>Physical Location</h3>
                                    </div>
                                    <div style={{paddingLeft: '3rem'}} className="space-y-3">
                                        <div className="spec-row">
                                            <span className="spec-label">Room</span>
                                            <span className="spec-value">01.Oost.410</span>
                                        </div>
                                        <div className="spec-row">
                                            <span className="spec-label">Faculty</span>
                                            <span className="spec-value">Architecture & Built Environment</span>
                                        </div>
                                        <div className="spec-row">
                                            <span className="spec-label">Institution</span>
                                            <span className="spec-value">TU Delft</span>
                                        </div>
                                        <div className="spec-row" style={{borderBottom: 'none', marginBottom: '0'}}>
                                            <span className="spec-label">Schedule</span>
                                            <span className="spec-value">Mon-Fri 9:00-17:00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center" style={{gap: '1rem'}}>
                                        <div className="numbered-box">02</div>
                                        <h3 className="heading-3" style={{fontSize: '0.875rem', letterSpacing: '0.1em'}}>Educational Activities</h3>
                                    </div>
                                    <div style={{paddingLeft: '3rem'}} className="space-y-4">
                                        <p className="text-body">
                                            If you have requests regarding the use of room for educational activities, feel free to get in touch via email.
                                            Proposed activities should align with the Data Refinery Lab&apos;s core themes and make creative use of its unique spatial
                                            and technical infrastructure, including the touchscreen, horizontal displays, and sound.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        {[...Array(16)].map((_, i) => (
                            <div
                                key={i}
                                className="footer-cell"
                                style={{
                                    backgroundColor: [0, 5, 7, 10, 15].includes(i)
                                        ? (isDarkMode ? '#e2e8f0' : '#111827')
                                        : (isDarkMode ? '#475569' : '#d1d5db')
                                }}
                            />
                        ))}
                    </div>
                    <div className="text-center space-y-4">
                        <div className="space-y-2">
                            <p className="text-small" style={{textTransform: 'uppercase', letterSpacing: '0.1em', color: isDarkMode ? '#e2e8f0' : '#111827'}}>Data Refinery Lab</p>
                            <div className="divider-small" style={{width: '3rem', margin: '6px auto'}}></div>
                        </div>
                        <p className="text-small" style={{letterSpacing: '0.05em', color: isDarkMode ? '#94a3b8' : '#6b7280'}}>
                            Faculty of Architecture and the Built Environment, TU Delft
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
