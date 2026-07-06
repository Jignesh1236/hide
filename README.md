<link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<div align="center" style="background-image: url('imgs/bg.png'); background-size: cover; background-position: center; padding: 60px 20px; border-radius: 20px; margin: 20px 0; font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

# 🎯 BingeBlocker

**Transform your YouTube experience into a productive learning environment**

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-green?style=for-the-badge&logo=google-chrome)](https://chrome.google.com/webstore)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.2-orange?style=for-the-badge)](manifest.json)
[![Stars](https://img.shields.io/github/stars/Jignesh1236/focus-mode?style=for-the-badge&logo=github)](https://github.com/Jignesh1236/focus-mode)

</div>

---

<div style="background-image: url('imgs/notes-bg.jpg'); background-size: cover; background-position: center; padding: 40px 20px; border-radius: 20px; margin: 20px 0; font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

## ✨ Features

- 🚫 **Hide Distractions** - Remove related videos, comments, shorts, notifications, and homepage grid
- 📝 **Built-in Notes Panel** - Take timestamped notes while watching videos
- 💾 **Import/Export Notes** - Save and share your notes as JSON files
- 📊 **Session Tracking** - Monitor your watch time and video count
- ⏱️ **Session Timer** - Track total time spent with double-click reset
- 🎨 **Glassmorphism UI** - Beautiful frosted glass design
- 📋 **Channel Whitelist** - Allow specific channels to show all content
- 🔧 **Resizable Panels** - Customize drawer widths to your preference
- 🎬 **Video Markers** - Visual markers on progress bar for your notes

</div>

---

## 📸 Preview

### Main Popup
<div align="center">
  <img src="imgs/bg.png" alt="Extension Popup" width="400" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
</div>

- Session timer with real-time tracking
- Video counter
- Quick toggle for focus mode
- Access to whitelist settings

### Notes Panel


- Timestamped note-taking
- Import/Export functionality
- Beautiful glassmorphism design
- Video markers on progress bar

---

<div style="font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

## 🚀 Installation

### For Developers

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jignesh1236/focus-mode.git
   cd focus-mode
   ```

2. **Open Chrome Extensions**
   - Navigate to `chrome://extensions/`
   - Enable **Developer Mode** (top right corner)

3. **Load the Extension**
   - Click **Load Unpacked**
   - Select the project folder
   - Extension is now active!

4. **Reload after changes**
   - Click the reload button on the extension card after making changes

### For End Users

Coming soon to Chrome Web Store!

</div>

---

<div style="font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

## 📖 Usage

### Toggle Focus Mode
- Click the extension icon to open the popup
- Click **Hide** to enable focus mode
- Click **Show** to disable focus mode

### Taking Notes
1. Enable focus mode
2. Click the **Notes** button on the right side of YouTube
3. Type your note and click **Add Note**
4. Notes are automatically timestamped
5. Click on a note to jump to that timestamp

### Managing Notes
- **Import Notes** - Click the import icon to load notes from a JSON file
- **Export Notes** - Click the export icon to save your notes
- **Clear All** - Click Clear to remove all notes for current video

### Session Tracking
- **Session Time** - Shows total time spent watching (double-click to reset)
- **Videos Watched** - Counts unique videos viewed (double-click to reset)

### Channel Whitelist
1. Click **Whitelist** in the popup
2. Add channels you want to allow full access
3. Whitelisted channels show all content even in focus mode

</div>

---

<div style="font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

## 🛠️ Tech Stack

- **HTML5** - Structure
- **CSS3** - Styling with glassmorphism effects
- **JavaScript (ES6+)** - Functionality
- **Chrome Extension API** - Storage and content scripts
- **Font Awesome** - Icons
- **Varela Round** - Typography

</div>

---

<div style="background-image: url('imgs/bg.png'); background-size: cover; background-position: center; padding: 40px 20px; border-radius: 20px; margin: 20px 0; font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

## 📂 Project Structure

```
hide/
├── 📄 manifest.json          # Extension configuration
├── 🎨 popup.html            # Extension popup UI
├── ⚡ popup.js              # Popup functionality
├── 🎬 content.js            # Content script for YouTube
├── 🔧 background.js         # Background service worker
├── 📋 whitelist.html        # Whitelist management UI
├── 📝 whitelist.js          # Whitelist functionality
├── 🖼️ imgs/                 # Images and assets
│   ├── bg.png
│   ├── notes-bg.jpg
│   └── wa.svg
└── 🌐 landing/              # Landing page assets
```

</div>

---

<div style="font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

</div>

---

<div style="font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

## 👨‍💻 Author

**Jignesh**

- [GitHub](https://github.com/jignesh1236)
- [Project Repository](https://github.com/Jignesh1236/focus-mode)

</div>

---

<div style="font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

</div>

---

<div align="center" style="font-family: 'Varela Round', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">

**Made with ❤️ for productive learning**

[⬆ Back to Top](#-yt-focus-mode)

</div>
