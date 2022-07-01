function UsingName()
{
    let auxTag = document.getElementById("inputTag").value;
    CallNode_Wname(document.body, auxTag);
}

function CallNode_Wname(node, element)
{
    let ArrayEleTags=[];
    let i = 0;
    for(; i < node.childNodes.length; i++)
    {
       let NodeChild = node.childNodes[i];

       if(NodeChild.childNodes.length > 0)
       {
            CallNode_Wname(NodeChild, element);
       }
       if (NodeChild.tagName == element)
       {
            ArrayEleTags.push(NodeChild);
       }
    }
}