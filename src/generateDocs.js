import R from 'ramda';
import $ from 'shelljs';
import toc from 'markdown-toc';
import p from 'path';

const extractComments = str => {
  const lines = str.split('\n');

  const commentLines = lines.reduce(
    ([lines, inComment], line) => {
      if (inComment && line.trim() === '* @private')
        return [lines, false];
      if (inComment && line.trim() === '*/')
        return [[...lines, '', ''], false];
      if (!inComment && line.trim() === '/**')
        return [lines, true];
      if (inComment)
        return [[...lines, line.slice(2).trim()], true];
      return [lines, false];
    },
    [[], false]
  )[0];

  return commentLines.join('\n');
};

const read = relativePath => {
  const absolutePath = p.resolve(
    process.cwd(),
    relativePath
  );
  const str = $.cat(absolutePath);
  return str;
};

const generateDocs = ({ paths, output }) => {
  const comments = R.pipe(
    R.always(paths),
    R.map(
      R.ifElse(
        R.test(/\.md$/),
        read,
        R.compose(extractComments, read)
      )
    ),
    R.join('\n\n'),
    toc.insert
  )();
  $.echo(comments).to(p.resolve(process.cwd(), output));
};

export default generateDocs;
