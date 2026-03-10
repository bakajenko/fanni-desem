importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAJ15HGC0AAPv5TD6CMse_nV4MaDVWzc3M",
  authDomain: "projectfanni-97274.firebaseapp.com",
  projectId: "projectfanni-97274",
  storageBucket: "projectfanni-97274.appspot.com",
  messagingSenderId: "270354212279",
  appId: "1:270354212279:web:a3079991dc6e8bb228f432",
  measurementId: "G-0YEFJ0Y8G5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});
