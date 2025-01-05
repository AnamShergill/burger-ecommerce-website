import React from "react";

export default function Progressor() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-lg w-full mt-10 mb-10 mx-4 sm:mx-8 lg:mx-48">
        {/* Progressor Steps */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          {/* Step 1 */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <div className="flex items-center w-full">
              <div className="w-8 h-8 shrink-0 bg-amber-300 p-2 flex items-center justify-center rounded-full">
                <span className="text-base text-black font-bold">1</span>
              </div>
              <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-bold text-amber-500">
                Step 1: Choose Your Dish
              </h6>
              <p className="text-xs text-white">
                Explore our delicious menu and select your favourite meal.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <div className="flex items-center w-full">
              <div className="w-8 h-8 shrink-0 bg-amber-300 p-2 flex items-center justify-center rounded-full">
                <span className="text-base text-black font-bold">2</span>
              </div>
              <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-bold text-amber-500">
                Step 2: Customize Your Order
              </h6>
              <p className="text-xs text-white">
                Tailor your meal to your taste!
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="w-full sm:w-1/3">
            <div className="flex items-center w-full">
              <div className="w-8 h-8 shrink-0 bg-amber-300 p-2 flex items-center justify-center rounded-full">
                <span className="text-base text-black font-bold">3</span>
              </div>
              <div className="w-full h-1 mx-4 rounded-lg bg-blue-500"></div>
            </div>
            <div className="mt-2">
              <h6 className="text-base font-bold text-amber-500">
                Step 3: Place Your Order
              </h6>
              <p className="text-xs text-white">
                Ready to eat? Proceed and complete your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
