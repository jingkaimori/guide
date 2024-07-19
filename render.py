import hashlib
import re
import os
import tempfile
import subprocess


def get_hash(input_string: str):
    sha1 = hashlib.sha1(input_string.encode()).digest()
    return sha1[:10].hex()


def get_files_md(rawname):
    res = ""
    for i in range(10):
        filename = rawname.replace("{n}", str(i + 1))
        if os.path.isfile(filename):
            filename = filename.replace("docs/", "")
            res += f"\n![]({filename})"
    return res


def process_file(filename: str):
    def fun(m: re.Match):
        block = m[0]
        code = m[1]
        print(f"=== Compiling:\n{code}")
        # create a temporary file then use typst to compile it
        outfilename = f"docs/generated/{get_hash(code)}_{{n}}.png"
        # if exists then skip
        if os.path.isfile(outfilename.replace("{n}", "1")):
            print("=== Skipped")
            return block + get_files_md(outfilename)
        with tempfile.NamedTemporaryFile("w", encoding="utf-8") as f:
            f.write("""#set page(height: 4cm, width: 6cm)
#set text(font: ("Times New Roman", "Simsun"))
""")
            f.write(code)
            f.flush()
            result = subprocess.run(
                ["typst", "compile", f.name, outfilename, "--font-path", "fonts"],
                capture_output=True,
                text=True,
                encoding="utf-8",
            )
            stderr = result.stderr
            if stderr:
                print(stderr)
        return block + get_files_md(outfilename)

    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    pattern = re.compile(r"```typst\n(.*?)\n```", re.DOTALL)
    content = pattern.sub(fun, content)
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)


if __name__ == "__main__":
    os.makedirs("docs/generated", exist_ok=True)
    for root, dirs, files in os.walk("docs"):
        for file in files:
            if file.endswith(".md"):
                fullpath = os.path.join(root, file)
                print(f"Processing {fullpath}")
                process_file(fullpath)