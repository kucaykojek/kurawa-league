import Header from '@/components/common/header';
import InsightPlayer from '@/components/insight/player';
import InsightSummary from '@/components/insight/summary';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="bg-background rounded-xl p-4">
          <div>
            <InsightSummary />
          </div>
          <div className="mt-4">
            <InsightPlayer />
          </div>
        </div>
        {Array.from(Array(5)).map((_, index) => (
          <div
            key={`placeholder-${index}`}
            className="mt-4 bg-background rounded-xl p-4"
          >
            <p>
              Lorem ipsum dolor sit amet, ex quis dolor velit officia dolor
              laboris consequat anim consectetur. Eiusmod sit in eiusmod anim
              aute id sint commodo excepteur id labore sit ipsum occaecat aliqua
              adipisicing proident minim. Pariatur est sunt laboris officia in
              proident officia aliquip fugiat ut sint laboris aliquip sunt
              nostrud.
            </p>
          </div>
        ))}
      </main>
    </div>
  );
}
