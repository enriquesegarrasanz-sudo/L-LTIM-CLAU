import json
import re
import sys
from pathlib import Path

import pdfplumber


def extract(path: Path, running_header: re.Pattern[str]) -> list[str]:
    with pdfplumber.open(path) as pdf:
        if len(pdf.pages) != 6:
            raise RuntimeError(f"Expected 6 pages in {path.name}, found {len(pdf.pages)}")
        pages = []
        for index, page in enumerate(pdf.pages):
            text = page.extract_text(x_tolerance=2, y_tolerance=3) or ""
            lines = [line.rstrip() for line in text.splitlines()]
            if index > 0 and lines and running_header.match(lines[0]):
                lines = lines[1:]
            cleaned = "\n".join(lines).strip()
            if not cleaned:
                raise RuntimeError(f"No text extracted from page {index + 1} of {path.name}")
            pages.append(cleaned)
        return pages


def main() -> None:
    root = Path(sys.argv[1]).resolve()
    cat_pdf = root.parent / "L_ultim_clau_Guio_Catala.pdf"
    es_pdf = root.parent / "L_ultim_clau_Guion_Castellano (1).pdf"
    cat = extract(cat_pdf, re.compile(r"^L'ÚLTIM CLAU - GUIÓ LITERARI"))
    es = extract(es_pdf, re.compile(r"^L'ÚLTIM CLAU - GUION LITERARIO"))
    output = root / "app" / "screenplay-data.ts"
    payload = (
        "// Generated from the two authoritative screenplay PDFs.\n"
        f"export const screenplayCat = {json.dumps(cat, ensure_ascii=False, indent=2)} as const;\n\n"
        f"export const screenplayEs = {json.dumps(es, ensure_ascii=False, indent=2)} as const;\n"
    )
    output.write_text(payload, encoding="utf-8", newline="\n")
    print(f"Wrote {len(cat)} Catalan pages and {len(es)} Spanish pages to {output}")


if __name__ == "__main__":
    main()
