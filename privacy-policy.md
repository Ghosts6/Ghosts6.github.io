# Privacy Policy for TubeForge

**Effective Date:** April 25, 2026

## Overview
TubeForge ("the Extension") is committed to protecting your privacy. This Privacy Policy explains how the Extension handles data when you use it on YouTube. We believe in transparency and a "privacy-by-design" approach, meaning all processing occurs locally on your device.

## Data We Process
TubeForge processes the following types of data:
1.  **User Preferences:** Settings such as distraction control (hiding Shorts, Focus Mode), playback preferences (default speed, video quality), and custom keyboard shortcuts.
2.  **User-Generated Content:** Notes you create for specific YouTube videos, including timestamps and text.
3.  **Playback Data:** Temporary information needed for features like A-B looping, speed management, and statistics overlay.
4.  **Screenshots:** If you use the screenshot feature, images are generated locally and saved directly to your device.

## How Data is Handled
*   **Local Processing:** Most data processing is performed 100% locally within your browser. 
*   **External API Calls:** To provide the "Return YouTube Dislikes" feature, the Extension makes a request to `https://returnyoutubedislikeapi.com/votes?videoId=[VIDEO_ID]`. This request only transmits the ID of the video you are currently watching to retrieve its dislike count. No personal information, user identity, or browsing history is sent with this request.
*   **Storage:** We use the `browser.storage.sync` API to save your preferences and notes. This allows your settings to sync across your own devices where you are logged into your browser, but the data remains within the browser's secure storage ecosystem.
*   **No Data Transmission:** Except for the specific video ID sent to the Return YouTube Dislike API (as described above), we do not collect, store, or transmit your personal data, browsing history, or video notes to any external servers or third parties.
*   **No Tracking:** TubeForge does not include any tracking scripts, analytics, or telemetry.

## Data Sharing and Selling
We **do not** sell, trade, or transfer your data to outside parties. Your data belongs to you.

## Permissions Usage
To provide its features, TubeForge requires the following permissions:
*   `storage`: To save your preferences, notes, and custom shortcuts.
*   `tabs` / `activeTab`: To interact with YouTube pages and apply enhancements like Focus Mode or Dimmer.
*   `scripting`: To inject the necessary logic to improve your YouTube experience.
*   Host permissions (e.g., `*://*.youtube.com/*`): To allow the extension to function specifically on YouTube.

## Remote Code
TubeForge does not use any remote code, such as external scripts or `eval()` functions. All logic is bundled within the extension package to ensure security and performance.

## Security
We follow the principle of least privilege, requesting only the permissions necessary for the Extension to function. Since no data leaves your browser, the risk of data breaches is minimized.

## Children's Privacy
TubeForge does not collect any personal information and is safe for use by individuals of all ages.

## Changes to This Policy
We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.

## Contact Information
If you have any questions about this Privacy Policy, please contact us:
*   **Developer:** Kiarash Bashokian
*   **Email:** [kiarash@kiarashbashokian.com](mailto:kiarash@kiarashbashokian.com)
*   **Website:** [https://kiarashbashokian.com/](https://kiarashbashokian.com/)
