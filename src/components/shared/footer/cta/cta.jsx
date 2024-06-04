import Button from 'components/shared/button';

const Cta = () => (
  <div className="relative container min-h-[430px]">
    <div className="decorative-circle -left-[340px] -bottom-[30px]" />
    <div className="decorative-circle -right-[340px] -bottom-[30px]" />

    <div className="flex flex-col items-center space-y-10">
      <div className="flex flex-col space-y-5 items-center max-w-[868px] text-center">
        <h2 className="text-5xl leading-tight text-gradient bg-gradient-secondary">
          Ready to elevate your DevOps strategy?
        </h2>
        <p className="description max-w-[716px]">
          Join the multitude of companies benefiting from optimized DevOps practices. Contact us to
          discover how DevOptima can help your business.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-[18px]">
        <Button size="base" theme="primary-blue-filled">
          Contact us
        </Button>

        <Button size="base" theme="primary-blue-outline">
          Try for free
        </Button>
      </div>
    </div>
  </div>
);

export default Cta;
