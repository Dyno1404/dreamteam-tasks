import Results from '@/components/Results';

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const res = await fetch(

);
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
