function Para(elem)
  -- Replace [ ] checkbox syntax with empty box character
  if elem.content and #elem.content > 0 then
    local first = elem.content[1]
    if first.t == "Str" and first.text:match("^%[%s%]%s") then
      first.text = first.text:gsub("^%[%s%]%s", "☐ ")
    end
  end
  return elem
end

function Plain(elem)
  -- Replace [ ] checkbox syntax with empty box character
  if elem.content and #elem.content > 0 then
    local first = elem.content[1]
    if first.t == "Str" and first.text:match("^%[%s%]%s") then
      first.text = first.text:gsub("^%[%s%]%s", "☐ ")
    end
  end
  return elem
end
