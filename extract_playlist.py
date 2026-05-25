#!/usr/bin/env python3
"""
Extrae IDs de videos de una playlist de YouTube
Requiere: pip install yt-dlp
"""

import subprocess
import json
import sys

PLAYLIST_URL = "https://www.youtube.com/playlist?list=PLQIrOuyIGApU58_OJfsbzpw_JFNL9C-zl"

def extract_video_ids(playlist_url):
    """Extrae IDs de videos de una playlist usando yt-dlp"""
    try:
        # Usar yt-dlp para extraer información de la playlist
        result = subprocess.run(
            [
                'yt-dlp',
                '--dump-json',
                '--flat-playlist',
                playlist_url
            ],
            capture_output=True,
            text=True
        )

        if result.returncode != 0:
            print("Error: No se pudo acceder a la playlist")
            print("Asegúrate de tener yt-dlp instalado: pip install yt-dlp")
            return None

        # Parsear JSON
        lines = result.stdout.strip().split('\n')
        video_ids = []

        for line in lines:
            try:
                data = json.loads(line)
                if 'id' in data:
                    video_ids.append(data['id'])
            except json.JSONDecodeError:
                continue

        return video_ids

    except FileNotFoundError:
        print("Error: yt-dlp no está instalado")
        print("Instala con: pip install yt-dlp")
        return None

def generate_js_code(video_ids):
    """Genera el código JavaScript con los IDs de video"""
    if not video_ids:
        print("No se encontraron videos")
        return None

    ids_str = ", ".join(f"'{vid}'" for vid in video_ids)
    js_code = f"""// YouTube Playlist IDs - Extraídos automáticamente
const videoIds = [
  {ids_str}
];
"""
    return js_code

def main():
    print("🎥 Extrayendo IDs de la playlist...")
    print(f"URL: {PLAYLIST_URL}\n")

    video_ids = extract_video_ids(PLAYLIST_URL)

    if video_ids:
        print(f"✅ Se encontraron {len(video_ids)} videos\n")

        # Generar código JavaScript
        js_code = generate_js_code(video_ids)

        if js_code:
            # Mostrar en consola
            print("Código a pegar en js/playlist-loader.js:\n")
            print("=" * 60)
            print(js_code)
            print("=" * 60)

            # Guardar en archivo
            output_file = "js/playlist-loader.js"
            try:
                # Leer el archivo actual y reemplazar la sección de videoIds
                with open(output_file, 'r') as f:
                    content = f.read()

                # Reemplazar el array videoIds
                import re
                new_content = re.sub(
                    r'const videoIds = \[[\s\S]*?\];',
                    f'const videoIds = [\n  {", ".join(f"{vid!r}" for vid in video_ids)}\n];',
                    content
                )

                with open(output_file, 'w') as f:
                    f.write(new_content)

                print(f"\n✅ Archivo actualizado: {output_file}")
            except Exception as e:
                print(f"\n⚠️ No se pudo actualizar el archivo: {e}")
                print(f"Actualiza manualmente {output_file} con el código anterior")
    else:
        print("❌ No se pudieron extraer los videos")
        return 1

    return 0

if __name__ == "__main__":
    sys.exit(main())
