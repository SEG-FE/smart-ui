// 提取script
function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

// 提取style
function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function addDep(md, content) {
  const RE = /^<(script|style)(?=(\s|>|$))/i
  const contents = `<script>${stripScript(content)}</script>`
  const contentStyle = `<style>${stripStyle(content)}</style>`
  const hoistedTags = md.$data.hoistedTags || (md.$data.hoistedTags = [])
  if (RE.test(contents.trim())) {
    hoistedTags.push(contents)
  }
  if (RE.test(contentStyle.trim())) {
    hoistedTags.push(contentStyle)
  }
}

module.exports = {
  stripScript,
  stripStyle,
  stripTemplate,
  addDep
};