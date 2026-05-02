# Firebase Setup Instructions

## Database Rules Configuration

To make games visible to all visitors, you need to configure your Firebase Realtime Database rules to allow public read access.

### Steps:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **cubiclensweb**
3. Navigate to **Realtime Database** in the left sidebar
4. Click on the **Rules** tab
5. Update the rules to:

```json
{
  "rules": {
    "games": {
      ".read": true,
      ".write": "auth != null"
    }
  }
}
```

### What these rules do:
- `.read: true` - Anyone can read games (makes games visible to all visitors)
- `.write: "auth != null"` - Only authenticated users can write (you'll need to set up Firebase Authentication for admin write access)

### For Development/Testing (Less Secure):

If you want to allow anyone to write as well (for testing only):

```json
{
  "rules": {
    "games": {
      ".read": true,
      ".write": true
    }
  }
}
```

⚠️ **Warning**: The open write rules above are not secure and should only be used for testing. For production, set up proper Firebase Authentication.

## Firebase Authentication (Optional but Recommended)

To secure admin access:

1. Go to **Authentication** in Firebase Console
2. Enable **Email/Password** sign-in method
3. Create an admin user account
4. Update `admin.html` to use Firebase Authentication

## Testing

After configuring the rules:
1. Add a game through the admin panel
2. Open `games.html` in a different browser or incognito window
3. The game should be visible
