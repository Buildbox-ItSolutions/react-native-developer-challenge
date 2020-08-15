import * as Linking from 'expo-linking';

export default function sendWhatsapp() {
  Linking.openURL(
    `whatsapp://send?phone=+55 (61) 9938-0031&text=oi`,
  );
}