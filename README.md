# caesar-cipher-cli
Tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## usage CLI

- npm install

- node src/index.js [with options]

**CLI tool accepts 4 options (short alias and full name):**

1.  **-s, --shift**: a shift (required)
2.  **-i, --input**: an input file (put the file in the folder "src")
3.  **-o, --output**: an output file (put the file in the folder "src")
4.  **-a, --action**: an action encode/decode (required)

**Usage example:**

```bash
node src/index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
