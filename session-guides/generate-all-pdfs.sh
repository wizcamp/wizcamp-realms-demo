#!/bin/bash

# Generate PDFs for all SESSION-*.md files
# Usage: ./generate-all-pdfs.sh [BODY_FONT] [CODE_FONT]

BODY_FONT=${1:-"Inter"}
CODE_FONT=${2:-"JetBrains Mono"}

echo "Generating PDFs for all session guides..."
echo "Using fonts: Body='$BODY_FONT', Code='$CODE_FONT'"
echo

# Find all SESSION-*.md files and generate PDFs
for file in SESSION-*.md; do
    if [ -f "$file" ]; then
        # Extract session name without extension
        session_name="${file%.md}"
        echo "Processing $session_name..."
        ./generate-pdf.sh "$session_name" "$BODY_FONT" "$CODE_FONT"
        echo
    fi
done

echo "All PDFs generated successfully!"