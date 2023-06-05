/* eslint-disable no-template-curly-in-string */
export const LIBRARIES: Library[] = [
  {
    name: 'redux',
    version: '4.2.0',
    url: 'https://redux.js.org/',
    use: 'Redux',
  },
  {
    name: 'lodash',
    version: '4.17.21',
    url: 'http://lodash.com',
    use: '_',
  },
  {
    name: 'axios',
    version: '0.21.4',
    url: 'https://github.com/axios/axios',
    use: 'axios',
  },
  {
    name: 'luxon',
    version: '1.28.0',
    url: 'https://moment.github.io/luxon/docs',
    use: 'luxon',
  },
  {
    name: 'date-fns',
    version: '2.29.3',
    url: 'https://date-fns.org/',
    use: 'dfn',
  },
];

export const CODE_SAMPLES: CodeSample[] = [
  {
    id: 1,
    name: 'Merkle',
    codeSample:
      `
      class MerkleTree {
        constructor(leaves, concat) {
            this.leaves = leaves;
            this.concat = concat;
        }
    
        // Get the root of the Merkle Tree
        getRoot() {
            let l = this.leaves;
            while (l.length > 1) {
                let r = [];
    
                for (let i = 0; i < l.length - 1; i += 2) {
                    r.push(this.concat(l[i], l[i + 1]));
                }
    
                if (l.length % 2 == 1)
                    r.push(l[l.length - 1]);
    
                l = r;
            }
            console.log(l[0]);
            return l[0];
        }
    
        // Get the proof for a specific leaf index
        getProof(index) {
            let proof = [];
            let l = this.leaves;
            while (l.length > 1) {
                let r = [];
    
                for (let i = 0; i < l.length - 1; i += 2) {
                    r.push(this.concat(l[i], l[i + 1]));
                }
    
                if (l.length % 2 == 1)
                    r.push(l[l.length - 1]);
    
                if (index != l.length - 1 || l.length % 2 == 0) {
                    if (index % 2 == 0) {
                        proof.push({ data: l[index + 1], left: false });
                    } else {
                        proof.push({ data: l[index - 1], left: true });
                    }
                }
                l = r;
                index = Math.floor(index / 2);
            }
            return proof;
        }
    }
    
    // Testing the MerkleTree class
    const leaves = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const concat = (a, b) => a + b;
    const merkle = new MerkleTree(leaves, concat);
    
    const root = merkle.getRoot();
    console.log('Merkle Root: ' + root);
    
    const leafIndex = 3;
    const proof = merkle.getProof(leafIndex);
    console.log('Proof for Leaf '+leafIndex + ': ');
    console.log(proof)
    
      `,
  },
  {
    id: 2,
    name: 'Axios',
    codeSample:
      '// axios example. Reference axios in the code as `axios`\n\nconst loadTVShowCast = async () => {\n\tconst tvShowId = 431; // FRIENDS TV Show\n\tconst url = `https://api.tvmaze.com/shows/${tvShowId}/cast`;\n\tconst { data } = await axios.get(url);\n\tconsole.log(data);\n}\n\nloadTVShowCast();',
  },
  {
    id: 3,
    name: 'lodash',
    codeSample:
      "// Lodash example. Reference lodash in the code as `_`\n\nconst  sample = _.chunk(['a', 'b', 'c', 'd'], 2);\nsample",
  },
  {
    id: 4,
    name: 'luxon',
    codeSample:
      "// Luxon code example. Reference Luxon in the code as `luxon` \n\nconst luxonDate = luxon.DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO();\nluxonDate",
  },
  {
    id: 5,
    name: 'date-fns',
    codeSample:
      '// date-fns code example. Reference date-fns in the code as `dfn` \n\nconst value = dfn.formatDistance(dfn.subDays(new Date(), 3), new Date(), { addSuffix: true });\nvalue;',
  },
];

export const EDITOR_THEMES: EditorTheme[] = [
  {
    id: 1,
    value: 'vs-dark',
    icon: 'moon',
  },
  {
    id: 2,
    value: 'vs-light',
    icon: 'sun',
  },
];
