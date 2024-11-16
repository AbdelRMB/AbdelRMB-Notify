# AbdelRMB Notifications Library

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Author](https://img.shields.io/badge/author-AbdelRMB-green)

## 🚀 Introduction
The **AbdelRMB Notifications Library** is a custom library for managing notifications on your FiveM server. This library allows you to create sleek and customizable notifications to enhance the user experience on your server.

## 📦 Installation

1. **Download** the library.
2. Place the folder into your server’s `resources` directory.
3. Add the following line to your `server.cfg` file:

    ```cfg
    ensure AbdelRMBNotifications
    ```

## 🛠️ Usage

### Initialization
Before using notifications, ensure you import the library in your client script:

```lua
local Notifications = exports['AbdelRMBNotifications']
