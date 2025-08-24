import UiTooltip from "@/components/UiTooltip";

const FooterContact = () => {
  return (
    <div className="footer-contact lg:flex flex-1 justify-center text-center py-4 bg-cyan-50 text-gray-800">
      <div className="flex-1">
        Hello! It's a free opensource app that was developed by{" "}
        <a
          href="https://github.com/randomhero177"
          target="_blank"
          className="text-cyan-700 underline"
        >
          randomhero177
        </a>{" "}
        with&nbsp;❤️ and&nbsp;<span className="text-2xl">🍺</span>
      </div>
      <div className="flex footer-contact__icons pe-4 text-center justify-center mt-2 lg:mt-0">
        <UiTooltip text="Have something to say? Leeve some feedback">
          <a
            href="https://forms.gle/vSBNHNh5M4HdL83D8"
            target="_blank"
            className="text-3xl"
            rel="noopener noreferrer"
          >
            ✉️
          </a>
        </UiTooltip>
        <UiTooltip text="Like the app? Feel free to buy me a beer">
          <a
            href="https://paypal.me/randomhero177"
            target="_blank"
            className="ml-2 text-3xl"
            rel="noopener noreferrer"
          >
            🫰
          </a>
        </UiTooltip>
        <UiTooltip text="Check out some of my music">
          <a
            href="https://open.spotify.com/artist/4rRIYs9j2BA6UgIpP8l35u"
            target="_blank"
            className="ml-2 text-3xl"
            rel="noopener noreferrer"
          >
            🎧
          </a>
        </UiTooltip>
      </div>
    </div>
  );
};

export default FooterContact;
