export function FooterLinks() {
  const links = {
    Platform: ['Create Token', 'Presales', 'Airdrops', 'Documentation'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Terms', 'Privacy', 'Cookies']
  };

  return (
    <div className="grid grid-cols-3 gap-8">
      {Object.entries(links).map(([category, items]) => (
        <div key={category}>
          <h3 className="font-semibold mb-4">{category}</h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item}>
                <a href="#" className="text-green-400/70 hover:text-green-400 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}