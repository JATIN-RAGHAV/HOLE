import ReactMarkdown from 'react-markdown'

export default function MarkdownRenderer({markdown}:{markdown:string}) {

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}
