import type { FunctionComponent, JSX } from "react";
import type { WorkType as WorkItemProps } from "./types";
import PrimaryButton from "../primary-button/primary-button";

const WorkItem: FunctionComponent<WorkItemProps> = ({
  title,
  description,
  summaryContents,
  agreementUrl,
  invoiceUrl,
}: WorkItemProps): JSX.Element => {
  return (
    <div className="bg-[radial-gradient(circle_farthest-corner_at_50%_0%,#1e2230_8%,#0e0e0f_54%,#090909_103%)] border border-gray-800 rounded-3xl p-5 sm:p-10 cursor-default hover:scale-102 transition-transform flex flex-col gap-8 h-full">
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-white font-bold text-base sm:text-xl md:text-2xl 2xl:text-[28px]">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-primary-gray text-sm sm:text-base 2xl:text-[18.5px]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-primary-blue font-semibold text-base sm:text-lg md:text-xl 2xl:text-2xl">
            Project Summary:
          </h4>
        </div>
        <ul className="flex flex-col gap-4">{summaryContents}</ul>
      </div>
      <div className="sm:flex justify-center items-end grow">
        <div>
          <PrimaryButton
            href={agreementUrl}
            targetBlank={true}
            border="border-6"
            px="px-2.5"
            py="py-1"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={22}
                height={22}
                className="w-[20px] h-[20px] 2xl:w-[22px] 2xl:h-[22px] mt-0.5 fill-white"
              >
                <path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM216 128C202.7 128 192 138.7 192 152C192 165.3 202.7 176 216 176L264 176C277.3 176 288 165.3 288 152C288 138.7 277.3 128 264 128L216 128zM216 224C202.7 224 192 234.7 192 248C192 261.3 202.7 272 216 272L264 272C277.3 272 288 261.3 288 248C288 234.7 277.3 224 264 224L216 224zM286.3 384C275 384 264.4 389.1 257.4 397.9L197.3 473C189 483.3 190.7 498.5 201 506.7C211.3 514.9 226.5 513.3 234.7 502.9L281.8 444.1L297 494.8C300 505 309.4 511.9 320 511.9L424 511.9C437.3 511.9 448 501.2 448 487.9C448 474.6 437.3 463.9 424 463.9L337.9 463.9L321.8 410.3C317.1 394.6 302.7 383.9 286.3 383.9z" />
              </svg>
            }
            label="View Agreement"
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <PrimaryButton
            href={invoiceUrl}
            targetBlank={true}
            border="border-6"
            px="px-2.5"
            py="py-1"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                width={22}
                height={22}
                className="w-[20px] h-[20px] 2xl:w-[22px] 2xl:h-[22px] mt-0.5 fill-white"
              >
                <path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 152C192 165.3 202.7 176 216 176L264 176C277.3 176 288 165.3 288 152C288 138.7 277.3 128 264 128L216 128C202.7 128 192 138.7 192 152zM192 248C192 261.3 202.7 272 216 272L264 272C277.3 272 288 261.3 288 248C288 234.7 277.3 224 264 224L216 224C202.7 224 192 234.7 192 248zM304 324L304 328C275.2 328.3 252 351.7 252 380.5C252 406.2 270.5 428.1 295.9 432.3L337.6 439.3C343.6 440.3 348 445.5 348 451.6C348 458.5 342.4 464.1 335.5 464.1L280 464C269 464 260 473 260 484C260 495 269 504 280 504L304 504L304 508C304 519 313 528 324 528C335 528 344 519 344 508L344 503.3C369 499.2 388 477.6 388 451.5C388 425.8 369.5 403.9 344.1 399.7L302.4 392.7C296.4 391.7 292 386.5 292 380.4C292 373.5 297.6 367.9 304.5 367.9L352 367.9C363 367.9 372 358.9 372 347.9C372 336.9 363 327.9 352 327.9L344 327.9L344 323.9C344 312.9 335 303.9 324 303.9C313 303.9 304 312.9 304 323.9z" />
              </svg>
            }
            label="View Invoice"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
