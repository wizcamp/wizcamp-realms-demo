#!/bin/bash

# Usage: ./generate-pdf.sh SESSION-01 [BODY_FONT] [CODE_FONT]
# Examples:
#   ./generate-pdf.sh SESSION-01
#   ./generate-pdf.sh SESSION-01 "Inter" "JetBrains Mono"
#   ./generate-pdf.sh SESSION-01 "Roboto" "Fira Code"

SESSION_NAME=$1
BODY_FONT=${2:-"Inter"}
CODE_FONT=${3:-"JetBrains Mono"}

if [ -z "$SESSION_NAME" ]; then
    echo "Usage: ./generate-pdf.sh SESSION-NAME [BODY_FONT] [CODE_FONT]"
    echo "Available fonts: Inter, Roboto, Open Sans, Lato, Source Sans Pro"
    echo "Available code fonts: JetBrains Mono, Fira Code, Source Code Pro, Roboto Mono"
    exit 1
fi

echo "Generating PDF for $SESSION_NAME..."
echo "Installing fonts locally..."

# Install fonts locally if not already installed
if ! fc-list | grep -q "$BODY_FONT"; then
    echo "Installing $BODY_FONT font..."
    case "$BODY_FONT" in
        "Inter")
            wget -q https://github.com/rsms/inter/releases/download/v3.19/Inter-3.19.zip -O /tmp/inter.zip
            sudo unzip -q /tmp/inter.zip "Inter Desktop/*.ttf" -d /tmp/
            sudo cp /tmp/Inter\ Desktop/*.ttf /usr/share/fonts/truetype/
            ;;
        "Roboto")
            sudo apt-get install -qq fonts-roboto
            ;;
        "Open Sans")
            sudo apt-get install -qq fonts-open-sans
            ;;
    esac
    sudo fc-cache -f
fi

if ! fc-list | grep -q "$CODE_FONT"; then
    echo "Installing $CODE_FONT font..."
    case "$CODE_FONT" in
        "JetBrains Mono")
            wget -q https://github.com/JetBrains/JetBrainsMono/releases/download/v2.304/JetBrainsMono-2.304.zip -O /tmp/jetbrains.zip
            sudo unzip -q /tmp/jetbrains.zip "fonts/ttf/*.ttf" -d /tmp/
            sudo cp /tmp/fonts/ttf/*.ttf /usr/share/fonts/truetype/
            ;;
        "Fira Code")
            sudo apt-get install -qq fonts-firacode
            ;;
    esac
    sudo fc-cache -f
fi

# Step 1: Create CSS file
cat > ${SESSION_NAME}.css << EOF
/* Use locally installed fonts */

body {
  font-family: "$BODY_FONT", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #1f2328;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "$BODY_FONT", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 16px;
  margin-top: 24px;
}
h1 {
  font-size: 2em;
  border-bottom: 1px solid #d0d7de;
  padding-bottom: 0.3em;
}
h2 {
  font-size: 1.5em;
  border-bottom: 1px solid #d0d7de;
  padding-bottom: 0.3em;
}
h3 {
  font-size: 1.25em;
}
code {
  font-family: "$CODE_FONT", ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace !important;
  font-size: 13px !important;
  font-weight: 500 !important;
  background-color: #f1f3f4 !important;
  color: #c7254e !important;
  padding: 2px 4px !important;
  border-radius: 3px !important;
  border: 1px solid #d1d5da !important;
  white-space: nowrap;
  word-break: break-word;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

pre {
  font-family: "$CODE_FONT", ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace !important;
  background-color: #f8f9fa !important;
  border: 1px solid #e1e4e8 !important;
  border-radius: 6px !important;
  padding: 16px !important;
  overflow-x: auto;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

pre code {
  background-color: transparent !important;
  border: none !important;
  padding: 0 !important;
  color: #24292f !important;
}
ul, ol {
  padding-left: 2em;
  margin-bottom: 16px;
}
p {
  margin-bottom: 16px;
}
a {
  color: #0969da;
  text-decoration: none;
}
strong {
  font-weight: 600;
}
EOF

# Step 2: Convert markdown to HTML with embedded CSS
pandoc ${SESSION_NAME}.md -o ${SESSION_NAME}.html \
    --standalone \
    --self-contained \
    --metadata pagetitle="$SESSION_NAME - Wizcamp Session Guide" \
    --css=${SESSION_NAME}.css

# Step 3: Generate PDF with Chrome (force color preservation)
google-chrome-stable --headless --disable-gpu \
    --print-to-pdf=${SESSION_NAME}.pdf \
    --no-pdf-header-footer \
    --disable-pdf-tagging \
    --virtual-time-budget=5000 \
    --run-all-compositor-stages-before-draw \
    --disable-web-security \
    --force-color-profile=srgb \
    --disable-background-timer-throttling \
    ${SESSION_NAME}.html

echo "PDF generated: ${SESSION_NAME}.pdf"
echo "Fonts used: Body='$BODY_FONT', Code='$CODE_FONT'"

# Clean up temporary files
rm ${SESSION_NAME}.css
# rm ${SESSION_NAME}.html
