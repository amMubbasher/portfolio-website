import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import RazorPayButton from "@/components/common/razor-pay-button";

const PaymentMainSection = () => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id="payment"
    >
      <ConstrainedBox classNames="px-4 py-8 z-20 items-center justify-center">
        <p className="text-center text-2xl lg:text-3xl font-semibold mt-4 max-w-screen-md">
          Thank you for trusting me with your project — I’m excited to help bring
          your ideas to life.
        </p>
        <p className="text-center text-base mt-4 mb-8 max-w-screen-md">
          Securely complete your payment for web development, full-stack
          applications, or digital solutions. I deliver reliable, scalable, and
          high-quality systems tailored to your business goals.
        </p>

        <RazorPayButton />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default PaymentMainSection;
