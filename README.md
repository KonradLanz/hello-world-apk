# Hello World APK

Meine erste eigene App — bearbeitet am Handy, automatisch gebaut in der Cloud.

## So funktioniert es

1. Du änderst Text in `www/index.html` (z.B. die Begrüßung)
2. Du speicherst und sendest die Änderung (3 Befehle, siehe unten)
3. GitHub baut automatisch eine neue APK-Datei
4. Fertige APK erscheint unter **[Releases](https://github.com/KonradLanz/hello-world-apk/releases)** zum Herunterladen

Kein Android-Studio, kein SDK auf dem Handy nötig — alles passiert in der Cloud.

## Die 3 Befehle (immer gleich, immer in dieser Reihenfolge)

```sh
git add -A
git commit -m "was ich geaendert habe"
git push
```

Oder als ein Befehl (Alias aus dem Android-Bootstrap):

```sh
gcp "was ich geaendert habe"
```

## Wichtig: Nur `main`, kein Branching

Dieses Projekt nutzt bewusst **nur einen einzigen Zweig** (`main`). Kein Branchen, kein Mergen — das kommt später, wenn mehr Erfahrung da ist. Jede Änderung geht direkt auf `main`.

## Anleitung fuer den Einstieg

Siehe [`android/HELLO-WORLD-QUICKSTART.md`](android/HELLO-WORLD-QUICKSTART.md) in [bootstrap-foundation](https://github.com/KonradLanz/bootstrap-foundation).

## Build-Status

Jeder Push auf `main` startet automatisch einen Build. Fortschritt hier sichtbar: [Actions-Tab](https://github.com/KonradLanz/hello-world-apk/actions)
