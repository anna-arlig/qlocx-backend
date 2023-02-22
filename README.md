# Kodtest för Qlocx - backend

## Instruktioner

Bygg en tjänst med 2 vyer (frontend) och 2 rutter (backend).

Frontenden byggs i React.

Backenden byggs med Node.js med hjälp av antingen Koa eller Express.

### Vy 1:

Inloggningssida där man anger mailadress och lösenord

När man trycker på "logga in" skickas ett anrop till backenden, som ser till att generera ett JWT-token som innehåller användarens id (detta id kan hårdkodas någonstans i backend-koden). Detta token genereras endast ifall man anger rätt inloggningsuppgifter. Ingen databas-anslutning behövs, utan inloggningsuppgifterna kan hårdkodas som variabler i backend-koden.

Visa felmeddelande i frontend ifall inloggning misslyckas

Vid lyckad inloggning, spara JWT-tokenet någonstans i frontenden och navigera till Vy 2.

### Vy 2:

En enkel profil-vy där vi hämtar användarens namn, förnamn, telefonnummer samt mailadress och skriver ut denna information på sidan. Denna data kan hårdkodas i backenden för att sedan skickas till frontenden.

Rutten i backenden validerar JWT-tokenet som skickas i anropet från frontenden och svarar med informationen ovan om JWT-tokenet är giltigt.

### Extra:

Om du vill kan du välja ut en av dessa uppgifter att genomföra:

Skriv några backend-tester för inloggningsrutten (lyckad/misslyckad inloggning)

Skriv några backend-tester för giltiga och/eller ogiltiga JWT-token i rutten som hämtar användarinfon.

Inkludera gärna dokumentation för hur en annan utvecklare ska kunna starta denna tjänst lokalt på sin egen dator. Backend-rutterna kan beskrivas med ord, men även med en Swagger-fil i yaml-format. Se exempel: [https://editor.swagger.io/](https://editor.swagger.io/)

## Test

För att starta:

1. klona repot med `git clone` och använd antingen SSH eller HTTP
2. gå in i roten av projektet och kör `npm install`.
3. Skapa en fil som heter `.env` i roten av projektet och lägg in variabler som skickats separat

## Endpoints:

### POST/ api/user/auth

Tar emot ett objekt {email, password} och returnerar en token.

### GET/ api/user/find/:id

Tar emot ett id hämtat från en JWT-token, verifierar och skickar tillbaka status 200 vid lyckad verifiering.

## Giltiga inloggningsuppgifter:

Email: anna.arlig@gmail.com

Password: Qlocx2016
